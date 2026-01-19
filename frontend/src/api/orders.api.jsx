import axios from "axios";
import { API_BASE_URL } from "../config";

const api = axios.create({
  baseURL: `${API_BASE_URL}/api/orders`,
});

// Add order
export const addOrder = (data) => api.post("/", data);

// Get orders with optional filters
export const getOrders = (params = {}) => api.get("/", { params });

// Assign delivery
export const assignDelivery = (maxDistance) =>
  api.post("/assign", { maxDistance });

// Mark as paid
export const markAsPaid = (id) =>
  api.patch(`/${id}/pay`);
