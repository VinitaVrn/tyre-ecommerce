import {Router} from "express";
import { feildsValidation } from "../middleware/validation.middleware.js";
import { loginUser, registorUser } from "../controllers/user-auth.controller.js";
import { createUserSchema, loginUserSchema } from "../validations/user-auth.validation.js";

export  const user_auth_router= Router();

user_auth_router.post("/signup",feildsValidation(createUserSchema), registorUser);
user_auth_router.post("/login",feildsValidation(loginUserSchema),loginUser)
