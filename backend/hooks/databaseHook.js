import mongoose from "mongoose";

export const useDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URL, {})
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
};
