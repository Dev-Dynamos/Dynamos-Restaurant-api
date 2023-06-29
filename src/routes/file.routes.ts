import { Router } from "express";
import { multerConfig } from "../config/multer";
import { createFileController } from "../modules/file/controllers/CreateFile";


const fileRoutes = Router();

fileRoutes.post("/", multerConfig.single("file"), (request, response) => {
    return createFileController.handle(request, response);
});


export { fileRoutes }