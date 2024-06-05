import express from "express";
import {status} from "../controllers/status-controller.js";

const router = express.Router();

router.route("/").get(status);

export default router;