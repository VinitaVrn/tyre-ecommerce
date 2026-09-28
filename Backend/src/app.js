import express from "express";
import cors from "cors";
import { user_auth_router } from "./routers/user-auth.router.js";

const app = express();

app.use(express.json());
app.use(cors())



export default app;