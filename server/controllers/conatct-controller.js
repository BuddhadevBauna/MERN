import Contact from "../models/contact-model.js";

const contactForm = async (req, res) => {
    try {
        const contactData = req.body;
        // console.log(contactData);
        await Contact.create(contactData);
        return res.status(200).json({message: "message send successfully"});
    } catch (error) {
        return res.status(500).json({message: "message not delivered"});
    }
}

export default contactForm;