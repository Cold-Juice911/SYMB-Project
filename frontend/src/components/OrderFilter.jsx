const OrderFilter = ({ onFilter }) => {
    return (
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl">All Orders</h2>
            <select 
                onChange={(e) => onFilter({ isPaid: e.target.value })}
                className="text-sm w-32"
            >
                <option value="">All Status</option>
                <option value="true">Paid</option>
                <option value="false">Unpaid</option>
            </select>
        </div>
    );
};

export default OrderFilter;
