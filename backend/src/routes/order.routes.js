import express from "express";
import { addOrder, getOrders, assignDelivery, markAsPaid } from "../controllers/order.controller.js";

const router = express.Router();

// Routes
// This will add a new order
// This will view all the orders
// This will assign the order for delivery
// This will mark the order as paid
router.post("/", addOrder);
router.get("/", getOrders);
router.post("/assign", assignDelivery);
router.patch("/:id/pay", markAsPaid);

export default router;
