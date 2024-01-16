import express from "express";

const PORT = Number(process.env.PORT) || 3002;

const app = express();
app.use(express.json());

app.listen(PORT, () => console.log(`Server of orders is running in port ${PORT}!`));
