import { useState } from "react";

export default function Lottery() {
  let [ticket, setticket] = useState(0);
  let [result, setresult] = useState("Try Your Luck!!");

  function change() {
    const newTicket = Math.floor(Math.random() * 900) + 100;
    setticket(newTicket);
    changeResult(newTicket); 
  }

  function changeResult(ticketNumber) {
    let sum = 0;
    let tempTicket = ticketNumber; 
    while (tempTicket !== 0) {
      let d = tempTicket % 10;
      sum += d;
      tempTicket = Math.floor(tempTicket / 10); 
    }
    if (sum === 15) {
      setresult("Congratulations, You Won!!!");
    } else {
      setresult("Keep Trying!!!");
    }
  }

  return (
    <>
      <h1>Lottery Game</h1>
      <p>Your Ticket Number : {ticket}</p>
      <button onClick={change}>Get new Ticket!</button>
      <h2>{result}</h2>
    </>
  );
}
