import Contact from "../models/contact-model.js";
import User from "../models/user-model.js";

const getAllUsers = async (req, res) => {
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
const deleteUserById = async (req, res) => {
    try {
        const id = req.params.id;
        // console.log(id);
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found." });
        }
        return res.status(200).json({ message: "user deleted sucessfully" });
    } catch (error) {
        res.status(401)
            .json({ message: `delete user unsucessful ${error}` })
    }
}

const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find({});
        if (!contacts || contacts.length === 0) {
            return res.status(404).json({ message: "No contacts found." })
        }
        return res.status(200).json(contacts);
    } catch (error) {
        res.status(401)
            .json({ message: "fetch contacts unsucessful" })
    }
}

export default { getAllUsers, deleteUserById, getAllContacts };