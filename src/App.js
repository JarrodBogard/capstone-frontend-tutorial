import { useState, useEffect } from "react";
import { List } from "./List";
import "./App.css";
import { CustomerItem } from "./CustomerItem";
import { CreateUserForm } from "./CreateUserForm";

function App() {
  const [customers, setCustomers] = useState([]);
  const [trades, setTrades] = useState([]);

  // useEffect(() => {
  //   fetch("https://capstone-backend.vercel.app/customers")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  useEffect(() => {
    const fetchCustomerData = async () => {
      const data = await fetch("https://capstone-backend.vercel.app/customers");

      const json = await data.json();

      setCustomers(json);
    };

    const fetchTradeData = async () => {
      const data = await fetch("https://capstone-backend.vercel.app/trades");

      const json = await data.json();

      setTrades(json);
    };

    fetchTradeData();
    fetchCustomerData();
  }, []);

  // useEffect(() => {
  //   const fetchTradeData = async () => {
  //     const data = await fetch("https://capstone-backend.vercel.app/trades");

  //     const json = await data.json();

  //     setTrades(json);
  //   };

  //   fetchTradeData();
  // }, []);

  useEffect(() => {
    console.log({ customers }, { trades });
    // console.log({ trades });
  }, [customers, trades]);

  return (
    <div className="App">
      <CreateUserForm />
      <List items={customers} component={CustomerItem} />
    </div>
  );
}

export default App;
