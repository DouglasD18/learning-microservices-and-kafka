import express from "express";
import { router } from "./modules/create-client/routes";

const PORT = Number(process.env.PORT) || 3001;

const app = express();
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`Server of clients is running in port ${PORT}!`));
