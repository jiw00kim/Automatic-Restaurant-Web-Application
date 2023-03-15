import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import "./Orders.css";
import {
  Input,
  Stack,
  InputGroup,
  InputLeftAddon,
  Button,
} from "@chakra-ui/react";
import MenuItem from "../../Models/MenuItem";
import dbManager from "../../DB/DBManager";

export default function Orders() {
  const [rerender, setRerender] = useState(false);
  const [orderInfo, setOrderInfo] = useState({
    name: "",
    id: -1,
    options: "none",
  });
  const handleChange = (e) => {
    setOrderInfo({ ...orderInfo, [e.target.name]: e.target.value });
  };

  const [Orders, setOrders] = useState(dbManager.GetData("/OrderQueue"));

  const addOrder = () => {
    var prep = Math.floor(Math.random() * 22 + 3);
    var order = new MenuItem(
      orderInfo.name,
      8,
      prep,
      orderInfo.id,
      orderInfo.options
    );
    dbManager.PutData("/OrderQueue", order);
    setOrders(dbManager.GetData("/OrderQueue"));
    setRerender(!rerender);
  };
  return (
    <div>
      <Navbar />
      <div className="leftSide">
        <center>
          <h1>Add Order</h1>
          <Stack spacing={4}>
            <InputGroup>
              <InputLeftAddon children="Name:" />
              <Input
                placeholder="Menu Item Name"
                onChange={handleChange}
                name="name"
              />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children="ID:" />
              <Input
                type="number"
                placeholder="Menu Item ID"
                name="id"
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children="Options" />
              <Input
                placeholder="Subsistutions, Addons, etc..."
                name="options"
                onChange={handleChange}
              />
            </InputGroup>
            <Button onClick={addOrder} colorScheme={"blue"}>
              Add Order
            </Button>
          </Stack>
        </center>
      </div>
      <div className="rightSide">
        <center>
          <h1>Order Queue</h1>
          <ol>
            {Orders.map((order) => (
              <li key={order}>
                {order.GetName()} ready in {order.GetPrepTime()} min.
              </li>
            ))}
          </ol>
        </center>
      </div>
    </div>
  );
}
