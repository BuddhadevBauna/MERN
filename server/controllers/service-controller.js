import Service from "../models/service-model.js";

const services = async (req, res) => {
    try {
        const response = await Service.find({});
        // console.log(response);
        if(!response) {
            res.status(404).json({msg: "No service found"});
        }
        res.status(200).json(response);
    } catch (error) {
        console.log(`services ${error}`);
    }
}

export default services;