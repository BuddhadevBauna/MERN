import Service from "../../models/service-model.js";

//create servive
export const postService = async (req, res) => {
    try {
        const { service, description, price, provider } = req.body;
        await Service.create({ service, description, price, provider});
        return res.status(201).json({msg: "service created"});
    } catch (error) {
        return res.status(500).json({msg: "Internal server error", error});
    }
}

//Get single service
export const getSerViceById = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await Service.findOne({_id: id});
        if(!response) {
            res.status(404).json({msg: "service not found"});
        }
        return res.status(200).json(response);
    } catch (error) {
        console.error("Service get unsucessful", error);
    }
}

//update service
export const updateServiceById = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedService = req.body;
        const response = await Service.updateOne({_id: id}, {$set: updatedService});
        if(!response) {
            res.status(404).json({msg: "service not found"});
        }
        return res.status(200).json(response);
    } catch (error) {
        console.error("Service update unsuccessful", error);
    }
}

//delete service
export const deleteServiceById = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await Service.deleteOne({_id: id});
        if(!response) {
            res.status(404).json({msg: "service not found"});
        }
        return res.status(200).json(response);
    } catch (error) {
        console.error("Service delete unsuccessful", error);
    }
}