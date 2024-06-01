import express from "express";
import adminController from "../controllers/admin/admin-controller.js";
import authMiddleware from "../middleware/auth-middleware.js";
import adminMiddleware from "../middleware/admin-middleware.js";

const router = express.Router();

//user
router
    .route('/users')
    .get(authMiddleware, adminMiddleware, adminController.getAllUsers);
router
    .route('/users/:id')
    .get(authMiddleware, adminMiddleware, adminController.getUserById);
router
    .route('/users/update/:id')
    .patch(authMiddleware, adminMiddleware, adminController.updateUserById);
router
    .route('/users/delete/:id')
    .delete(authMiddleware, adminMiddleware, adminController.deleteUserById);

//service
router
    .route('/service')
    .post(authMiddleware, adminMiddleware, adminController.postService);
router
    .route('/services/:id')
    .get(authMiddleware, adminMiddleware, adminController.getSerViceById);
router
    .route('/services/update/:id')
    .patch(authMiddleware, adminMiddleware, adminController.updateServiceById);
router
    .route('/services/delete/:id')
    .delete(authMiddleware, adminMiddleware, adminController.deleteServiceById);

//contact
router
    .route('/contacts')
    .get(authMiddleware, adminMiddleware, adminController.getAllContacts);
router
    .route('/contacts/delete/:id')
    .delete(authMiddleware, adminMiddleware, adminController.deleteContactById);

export default router;