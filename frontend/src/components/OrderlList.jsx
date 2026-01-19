const OrdersList = ({ title, orders, actionLabel, onAction }) => {
  return (
    <div className="section-container">
      {title && <h3 className="text-lg mb-2">{title}</h3>}
      <div className="flex flex-col gap-3 overflow-y-auto max-h-[60vh] pr-2">
        {orders.length === 0 && <p className="text-gray-500 italic">No orders found</p>}
        {orders.map((o) => (
          <div key={o._id} className="card flex flex-col gap-1">
            <div className="flex justify-between items-start">
              <span className="font-semibold text-rose-300">{o.restaurantName}</span>
              <span className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-300">
                {o.deliveryDistance} km
              </span>
            </div>
            
            <div className="text-sm text-gray-400 flex justify-between">
               <span>{o.itemCount} Items</span>
               <span className={o.isPaid ? "text-green-400" : "text-yellow-400"}>
                 {o.isPaid ? "PAID" : "UNPAID"}
               </span>
            </div>

            {onAction && (
              <button 
                onClick={() => onAction(o._id)}
                className="mt-2 text-sm py-1"
              >
                {actionLabel || "Action"}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersList;
