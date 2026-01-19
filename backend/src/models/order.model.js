import mongoose from "mongoose";

// Order Schema
// This will define the structure of the order as given in assignment
const orderSchema = new mongoose.Schema(
    {
        orderId: {
            type: String,
            required: true,
            unique: true,
        },
        restaurantName: {
            type: String,
            required: true,
        },
        itemCount: {
            type: Number,
            required: true,
            min: 1,
        },
        isPaid: {
            type: Boolean,
            required: true,
        },
        deliveryDistance: {
            type: Number,
            required: true,
            min: 0,
        },
        isAssigned: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
