import Service from "../models/service-model.js";

//get all getServices
const getServices = async (req, res) => {
    try {
        const response = await Service.find({});
        // console.log(response);
        if(!response) {
            res.status(404).json({msg: "No service found"});
        }
        res.status(200).json(response);
    } catch (error) {
        console.error(`getServices ${error}`);
    }
}

export default getServices;