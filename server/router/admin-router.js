import express from "express";
import adminController from "../controllers/admin-controller.js";
import authMiddleware from "../middleware/auth-middleware.js";

const router = express.Router();

router.route('/users').get(authMiddleware, adminController.getAllUsers);
router.route('/contacts').get(authMiddleware, adminController.getAllContacts);

export default router;