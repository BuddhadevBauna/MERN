import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const useSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});

//secure the password with the bcrypt
useSchema.pre('save', async function () {
    // console.log("pre method", this);
    const User = this;

    if (!User.isModified("password")) {
        next();
    }

    try {
        // hash the password
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(User.password, saltRound);
        User.password = hash_password;
    } catch (error) {
        next(error);
    }
});

//Json Web Token(JWT)-- we store this in cookies or local storage
useSchema.methods.generateToken = async function () {
    try {
        // console.log(this);
        return jwt.sign(
            {
                //payload
                userId: this._id.toString(),
                email: this.email,
                isAdmin: this.isAdmin,
            },
            //signature
            process.env.JWT_SECRET_KEY,
            //expire
            {
                expiresIn: "15d",
            }
        )
    } catch (error) {
        console.error(error);
    }
}

useSchema.methods.comparePassword = async function(password) {
    try {
        // console.log(this);
        return bcrypt.compare(password, this.password);
    } catch (error) {
        console.error(error);
    }
}

//define model or collection name
const User = new mongoose.model("User", useSchema);

export default User;