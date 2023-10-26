import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Database connected successfully");
  } catch (e) {
    console.log(e);
  }
}
