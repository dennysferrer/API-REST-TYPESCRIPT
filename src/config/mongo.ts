import "dotenv/config";
import { connect } from "mongoose";



export async function dbConnection(): Promise<void> {
    const DB_URI = <string>process.env.MONGODB_URI;
    await connect(DB_URI);
}