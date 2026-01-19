import { v4 as uuidv4 } from 'uuid';

// Generate Order ID
// This will generate a new order id
const generateOrderId = () => {
    return uuidv4();
};

export default generateOrderId;
