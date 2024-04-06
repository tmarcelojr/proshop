import express from "express";
const router = express.Router();
import asyncHandler from "../middlewares/asyncHandler.js";
import Product from "../models/Product.js";

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      return res.json(product);
    } else {
      res.status(400);
      throw new Error("Resource not found");
    }
  })
);

export default router;
