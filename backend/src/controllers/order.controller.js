import Order from "../models/order.model.js";
import generateOrderId from "../utils/generateOrderId.js";

// Adding New Order
// This will add a new order
// This will add the order to the database model
export const addOrder = async (req, res) => {
    try {
        const { restaurantName, itemCount, isPaid, deliveryDistance } = req.body;

        if (
            !restaurantName ||
            typeof itemCount !== "number" ||
            itemCount <= 0 ||
            typeof deliveryDistance !== "number" ||
            deliveryDistance < 0 ||
            typeof isPaid !== "boolean"
        ) {
            return res.status(400).json({ message: "Invalid order data" });
        }

        const newOrder = await Order.create({
            orderId: generateOrderId(),
            restaurantName,
            itemCount,
            isPaid,
            deliveryDistance,
        });

        return res.status(201).json(newOrder);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// View / Filter Orders
// This will view all the orders
// This will filter the orders based on the isPaid and maxDistance
export const getOrders = async (req, res) => {
    try {
        const { isPaid, maxDistance } = req.query;
        const query = {};

        if (isPaid !== undefined) {
            query.isPaid = isPaid === "true";
        }

        if (maxDistance !== undefined) {
            const distance = Number(maxDistance);
            if (isNaN(distance)) {
                return res.status(400).json({ message: "Invalid maxDistance" });
            }
            query.deliveryDistance = { $lte: distance };
        }

        const orders = await Order.find(query);
        return res.status(200).json(orders);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


// Assign Delivery
// This will assign the order for delivery
export const assignDelivery = async (req, res) => {
    try {
        const { maxDistance } = req.body;

        if (typeof maxDistance !== "number" || maxDistance < 0) {
            return res.status(400).json({ message: "Invalid maxDistance" });
        }

        const assignedOrder = await Order.findOneAndUpdate(
            {
                isPaid: false,
                isAssigned: false,
                deliveryDistance: { $lte: maxDistance },
            },
            { $set: { isAssigned: true } },
            { new: true, sort: { deliveryDistance: 1 } }
        );

        if (!assignedOrder) {
            return res.status(200).json({ message: "No order available" });
        }

        return res.status(200).json(assignedOrder);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


// Mark Order as Paid after assigning
// This will update the order status to paid
export const markAsPaid = async (req, res) => {
    try {
        const { id } = req.params;

        const order = await Order.findById(id);

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        if (!order.isAssigned) {
            return res.status(400).json({ message: "Order must be assigned before payment" });
        }

        order.isPaid = true;
        await order.save();

        return res.status(200).json({ message: "Order marked as paid", order });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
