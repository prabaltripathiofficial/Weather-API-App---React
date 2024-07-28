import { useState } from "react";

export default function Random() {
  let [num, setnum] = useState(0);

  function change() {
    setnum(Math.floor(Math.random() * 900) + 100);
  }

  return (
    <>
      <p>{num}</p>
      <button onClick={change}>Generate!!</button>
    </>
  );
}
