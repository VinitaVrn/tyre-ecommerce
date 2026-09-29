import express from "express";
import cors from "cors";
import { user_auth_router } from "./routers/user-auth.router.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cors())
app.use(cookieParser())

app.use("/user",user_auth_router);

export default app;