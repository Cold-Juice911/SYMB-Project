import AddOrderForm from "../components/AddOrderForm";
import OrdersList from "../components/OrderlList";
import OrderFilter from "../components/OrderFilter";
import AssignWidget from "../components/AssignWidget";
import { useOrders } from "../hooks/useOrders";

const Home = () => {
  const {
    orders,
    createOrder,
    fetchOrders,
    assignOrder,
    payOrder,
  } = useOrders();

  const paidOrders = orders.filter(o => o.isPaid);
  const assignedOrders = orders.filter(o => o.isAssigned && !o.isPaid);
  // Main list shows all orders, backend handles basic filtering via fetchOrders api call used in OrderFilter

  return (
    <div className="h-screen w-screen p-4 bg-gray-950 text-gray-200">
      <div className="grid grid-cols-[1.25fr_1.5fr_1.25fr] gap-4 h-full max-w-7xl mx-auto">
        
        {/* LEFT COLUMN: Paid Lists & Assign Widget */}
        <div className="flex flex-col gap-4 border-r border-gray-700 pr-4">
            <div className="flex-1 overflow-hidden">
                <OrdersList 
                    title="Paid Orders" 
                    orders={paidOrders} 
                />
            </div>
            
            <div className="mt-auto">
                <AssignWidget onAssign={assignOrder} />
            </div>
        </div>

        {/* MIDDLE COLUMN: All Orders & Create Form */}
        <div className="flex flex-col gap-4 px-2">
            <OrderFilter onFilter={fetchOrders} />
            
            <div className="flex-1 overflow-hidden">
                <OrdersList orders={orders} />
            </div>

            <AddOrderForm onAdd={createOrder} />
        </div>

        {/* RIGHT COLUMN: Assigned Orders */}
        <div className="flex flex-col gap-4 border-l border-gray-700 pl-4 h-full">
            <h2 className="text-xl text-center">Assigned</h2>
            <div className="flex-1 overflow-hidden">
                <OrdersList 
                    orders={assignedOrders} 
                    actionLabel="Mark Paid"
                    onAction={payOrder}
                />
            </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
