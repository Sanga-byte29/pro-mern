import express from "express";
import { createProducts, deleteProducts, getProducts, updateProducts } from "../controllers/product.controller.js";

const router = express.Router();

//get

router.get("/",getProducts)

router.post("/",createProducts);

//update a product
router.put("/:id",  updateProducts);

router.delete("/:id", deleteProducts);

export default router;