import express from "express";
import { getOrders, createOrder } from '../controllers/orderControllers.js'

const router = express.Router();

router.post("/", createOrder)
router.get("/", getOrders);

export default router;
