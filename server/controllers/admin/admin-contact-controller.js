import Contact from "../../models/contact-model.js";

//get all contacts
export const getAllContacts = async (req, res) => {
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
export const deleteContactById = async (req, res) => {
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