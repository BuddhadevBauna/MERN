import express from "express";
import authControllers from "../controllers/auth-controller.js";
import {signupSchema, signinSchema} from "../validators/auth_validator.js"
import validate from "../middleware/validate-middleware.js";

const router = express.Router();

router.route("/").get(authControllers.home);
router.route("/register").post(validate(signupSchema), authControllers.register);
router.route("/login").post(validate(signinSchema), authControllers.login);


export default router;