import { getAllUsers, getUserById, updateUserById, deleteUserById } from "./admin-user-controller.js";
import { getAllContacts, deleteContactById } from "./admin-contact-controller.js";
import { postService, getSerViceById, updateServiceById, deleteServiceById } from "./admin-service-controller.js";


export default { 
    //user
    getAllUsers,
    getUserById, 
    updateUserById, 
    deleteUserById,
    //service
    postService,
    getSerViceById,
    updateServiceById,
    deleteServiceById,
    //contact
    getAllContacts,
    deleteContactById
};