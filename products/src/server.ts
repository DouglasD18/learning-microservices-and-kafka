import express from "express";

const PORT = Number(process.env.PORT) || 3003;

const app = express();
app.use(express.json());

app.listen(PORT, () => console.log(`Server of products is running in port ${PORT}!`));
