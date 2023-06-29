import { Router } from "express";
import { authenticationController } from "../modules/authentication/controllers/Authentication";


const authenticationRoutes = Router();

authenticationRoutes.post("/", (req, res) => {
    return authenticationController.handle(req, res);
});

export { authenticationRoutes }