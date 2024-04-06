import express from "express";
import dotenv from "dotenv";
dotenv.config();
// database
import connect from "./config/database.js";
connect();
const port = process.env.PORT || 8080;
const app = express();
// routes
import productRoutes from "./routes/products.js";

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
