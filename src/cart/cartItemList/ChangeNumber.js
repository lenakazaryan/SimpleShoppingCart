import React, { useState, useEffect } from "react";

function ChangeNumber(props) {
  const [number, setNumber] = useState(props.count);

  useEffect(() => {
      props.changeQuantity(number);
  }, [number]);

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div className="buttonsContainer">
      <button onClick={() => setNumber(number - 1)}>-</button>
      <input className="changeCount" type="number" value={number} onChange={handleChange} />
      <button onClick={() => setNumber(number + 1)}>+</button>
    </div>
  );
}

export default ChangeNumber;
