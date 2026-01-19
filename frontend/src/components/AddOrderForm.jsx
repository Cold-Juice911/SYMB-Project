import { useState } from "react";

const AddOrderForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    restaurantName: "",
    itemCount: 1,
    deliveryDistance: 0,
    isPaid: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      ...form,
      itemCount: Number(form.itemCount),
      deliveryDistance: Number(form.deliveryDistance),
    });
    setForm({
        restaurantName: "",
        itemCount: 1,
        deliveryDistance: 0,
        isPaid: false,
    });
  };

  return (
    <div className="card w-full mt-auto border-2 border-dashed border-gray-600">
      <h3 className="mb-3 text-center">Create Order</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          placeholder="Restaurant Name"
          required
          value={form.restaurantName}
          onChange={(e) =>
            setForm({ ...form, restaurantName: e.target.value })
          }
          className="w-full"
        />

        <div className="grid grid-cols-2 gap-2">
            <input
            type="number"
            min="1"
            placeholder="Items"
            value={form.itemCount}
            onChange={(e) =>
                setForm({ ...form, itemCount: e.target.value })
            }
            />

            <input
            type="number"
            min="0"
            placeholder="Distance (km)"
            value={form.deliveryDistance}
            onChange={(e) =>
                setForm({ ...form, deliveryDistance: e.target.value })
            }
            />
        </div>

        <div className="flex items-center gap-2 justify-center my-1">
            <input
            type="checkbox"
            id="isPaid"
            className="w-4 h-4"
            checked={form.isPaid}
            onChange={(e) =>
                setForm({ ...form, isPaid: e.target.checked })
            }
            />
            <label htmlFor="isPaid" className="text-sm text-gray-300">Mark as Paid</label>
        </div>

        <button type="submit" className="w-full">Create Order</button>
      </form>
    </div>
  );
};

export default AddOrderForm;
