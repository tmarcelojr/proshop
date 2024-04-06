import express from "express";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
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

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
