import React, { useState } from "react";

function ChangeNumber(props) {
  const [number, setNumber] = useState(1);

  const handleChange = (e) => {
    changeCount(Number(e.target.value));
  };

  const changeCount = (val) => {
        props.count(val);
        // setNumber(val);
  }

  return (
    <div>
      <button onClick={() => changeCount(number - 1)}>-</button>
      <button onClick={() => changeCount(number + 1)}>+</button>
      <input type="number" value={number} onChange={handleChange} />
    </div>
  );
}

export default ChangeNumber;
