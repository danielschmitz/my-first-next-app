import { useState } from "react";

export default function Counter() {
  const [value, setValue] = useState(0);

  function incrementOne() {
    setValue(value + 1);
    console.log(value);
  }

  return (
    <div>
      Counter: {value} <br />
      <button onClick={incrementOne}>Increment One!</button>
    </div>
  );
}
