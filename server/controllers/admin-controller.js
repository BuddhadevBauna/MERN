import Contact from "../models/contact-model.js";
import User from "../models/user-model.js";

//get all user
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
//get single user
const getUserById = async (req, res) => {
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
const updateUserById = async (req, res) => {
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
const deleteUserById = async (req, res) => {
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

//get all contacts
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
//delete single contact
const deleteContactById = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteContact = await Contact.findByIdAndDelete({_id: id});
        if(!deleteContact) {
            return res.status(400).json({message: "contact not found"})
        }
        return res.status(200).json({message: "contact deleted sucessfully"});
    } catch (error) {
        return res.status(401).json({message: `delete contact unsucessful ${error}`})
    }
}

export default { getAllUsers, getUserById, updateUserById, deleteUserById, getAllContacts, deleteContactById};