import express from "express";
import adminController from "../controllers/admin-controller.js";

const router = express.Router();

router.route('/users').get(adminController.getAllUsers);
router.route('/contacts').get(adminController.getAllContacts);

export default router;