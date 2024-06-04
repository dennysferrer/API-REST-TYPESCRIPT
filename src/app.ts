import "dotenv/config"
import express from "express";
import cors from "cors";
import { router } from "./routes/index";
import { dbConnection } from "./config/mongo";

const PORT = process.env.PORT || 3001;


const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
dbConnection().then(() => {
    console.log(`Conection to DB ok ...`);
})



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})