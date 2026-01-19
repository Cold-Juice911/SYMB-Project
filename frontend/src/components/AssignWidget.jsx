import { useState } from "react";

const AssignWidget = ({ onAssign }) => {
  const [dist, setDist] = useState("");

  return (
    <div className="card mb-4">
      <h3 className="mb-2 text-center">Assign Orders</h3>
      <div className="flex flex-col gap-2">
        <input
            type="number"
            placeholder="Max Distance (km)"
            value={dist}
            onChange={(e) => setDist(e.target.value)}
        />
        <button 
            onClick={() => onAssign(Number(dist))}
            className="w-full"
        >
            To Assign
        </button>
      </div>
    </div>
  );
};

export default AssignWidget;
