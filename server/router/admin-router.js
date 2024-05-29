import express from "express";
import adminController from "../controllers/admin-controller.js";
import authMiddleware from "../middleware/auth-middleware.js";
import adminMiddleware from "../middleware/admin-middleware.js";

const router = express.Router();

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
router
    .route('/contacts')
    .get(authMiddleware, adminMiddleware, adminController.getAllContacts);

export default router;