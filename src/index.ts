import express from "express"
import { errorHandler } from "./middlewares/errorHandler";
import { router } from "./routes";
import cors from "cors"


const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use(errorHandler);

export {app};