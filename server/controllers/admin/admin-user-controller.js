import User from "../../models/user-model.js";

//get all user
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, { password: 0 });
        // console.log(users);
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No users found." });
        }
        return res.status(200).json(users);
    } catch (error) {
        res.status(401)
            .json({ message: "fetch users unsuccessful" })
    }
}

//get single user
export const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        // console.log(id);
        const user = await User.findOne({_id: id}, {password: 0});
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }
        return res.status(200).json(user);
    } catch (error) {
        res.status(401)
            .json({ message: `fetch user unsucessful ${error}` })
    }
}

//update single user
export const updateUserById = async (req, res) => {
    try {
        const id = req.params.id;
        // console.log(id);
        const updatedData = req.body;
        const updatedUser = await User.updateOne({_id: id}, {$set: updatedData});
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found." });
        }
        return res.status(200).json({ message: updatedUser });
    } catch (error) {
        res.status(401)
            .json({ message: `delete user unsucessful ${error}` })
    }
}

//delete single user
export const deleteUserById = async (req, res) => {
    try {
        const id = req.params.id;
        // console.log(id);
        const deletedUser = await User.findByIdAndDelete({_id: id});
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found." });
        }
        return res.status(200).json({ message: "user deleted sucessfully" });
    } catch (error) {
        res.status(401)
            .json({ message: `delete user unsucessful ${error}` })
    }
}