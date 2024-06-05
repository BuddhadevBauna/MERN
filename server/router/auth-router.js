import express from "express";
import * as authControllers from "../controllers/auth-controller.js";
import {signupSchema, signinSchema} from "../validators/auth_validator.js"
import validate from "../middleware/validate-middleware.js";
import authMiddleware from "../middleware/auth-middleware.js";

const router = express.Router();

router.route("/register").post(validate(signupSchema), authControllers.register);
router.route("/login").post(validate(signinSchema), authControllers.login);
router.route('/user').get(authMiddleware, authControllers.user);

export default router;