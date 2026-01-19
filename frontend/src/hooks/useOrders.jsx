import { useEffect, useState } from "react";
import {
  addOrder,
  getOrders,
  assignDelivery,
  markAsPaid,
} from "../api/orders.api";

export const useOrders = () => {
  const [orders, setOrders] = useState([]);
  const [assignedResult, setAssignedResult] = useState(null);
  const [error, setError] = useState(null);

  const fetchOrders = async (filters = {}) => {
    try {
      const res = await getOrders(filters);
      setOrders(res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch orders");
    }
  };

  const createOrder = async (data) => {
    await addOrder(data);
    fetchOrders();
  };

  const assignOrder = async (maxDistance) => {
    const res = await assignDelivery(maxDistance);
    setAssignedResult(res.data);
    fetchOrders();
  };

  const payOrder = async (id) => {
    await markAsPaid(id);
    fetchOrders();
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return {
    orders,
    assignedResult,
    error,
    fetchOrders,
    createOrder,
    assignOrder,
    payOrder,
  };
};
