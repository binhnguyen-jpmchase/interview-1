import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import Item from "./components/item";
import Header from "./components/header";

import "./styles.css";

const transactionsData = [
  { name: "Mortgage", amount: "-$1123" },
  { name: "New Macbook M1 Air", amount: "-$1500" },
  { name: "Audi Car Payments", amount: "-$500" },
  { name: "Salary", amount: "+$4000" }
];

function App() {
  const setCount = useState(0);

  const count = (value) => setCount(value);

  useEffect(() => {
    console.log("HELLO");
  }, []);

  const data = { key: "Welcome to JPMC!" };

  return (
    <div className="App">
      <Header />
      <h2>You clicked {count} times!</h2>
      <hr />
      <br />
      <h2>Transactions</h2>
      {/* transactions */}
      <hr />
      <br />
      {/* <Archived /> */}
      <br />
      <hr />
      <br />
      {/* <Item prop={data} /> */}
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
