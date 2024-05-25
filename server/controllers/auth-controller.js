import User from "../models/user-model.js";
// import bcrypt from "bcryptjs";

const home = async (req, res) => {
    try {
        res
            .status(200)
            .send("Learning mern series from thapa technical...");
    } catch (error) {
        console.error(error);
    }
}

//User register logic
const register = async (req, res) => {
    try {
        // console.log(req.body);

        //get the registration data
        const { username, email, phone, password } = req.body;

        //check the email is exist or not
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ msg: "email already exist." });
        }

        // hash the password
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound);
        // const userCreated = await User.create({username, email, phone, password: hash_password});

        const userCreated = await User.create({ username, email, phone, password });
        res.status(201)
            .json({
                msg: "registration successful",
                token: await userCreated.generateToken(),
                userId: userCreated._id.toString(),
                //In most cases converting _id to a string is a good practice because it ensures 
                //consistency and compatibility across different web libaries and systems.It also aligns 
                //with the expections this claims in a JWT are represented as string.
            });
    } catch (error) {
        res.status(500)
            .send({ msg: "Internal Server error" });
    }
}

//user login logic
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });
        // console.log(userExist);
        if (!userExist) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        //compare password
        // const isPasswordValid = await bcrypt.compare(password, userExist.password);
        const isPasswordValid = await userExist.comparePassword(password);
        if (isPasswordValid) {
            res.status(200)
                .json({
                    msg: "login successful",
                    token: await userExist.generateToken(),
                    userId: userExist._id.toString(),
                });
        } else {
            res.status(401)
                .json({ message: "Invalid email or password" })
        }
    } catch (error) {
        res.status(500).json({ msg: "Internal server error" });
    }
}

//to send user data logic
const user = async (req, res) => {
    try {
        const userData = req.user;
        // console.log(userData);
        // console.log(req.token);
        res.status(200).
            json({ userData });
    } catch (error) {
        console.log(`error from user route ${error}`);
    }
}


export default { home, register, login, user };