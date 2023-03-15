import React from "react";
import Navbar from "../../Components/Navbar";
import { useState } from "react";
import {
  Table as TTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Center,
  Popover,
  PopoverTrigger,
  Input,
  InputGroup,
  Portal,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverBody,
  InputLeftAddon,
  Select,
  useForceUpdate,
} from "@chakra-ui/react";
import RestaurantFloor from "../../Managers/RestaurantFloor";
import Table from "../../Models/Table";

export default function TablePage() {
  const [status, setStatus] = useState("");
  const [showTable, setShowTable] = useState(false);
  const [orderId, setOrderId] = useState([]);
  const [rerender, setRerender] = useState(false);
  const handleSubmit = () => {
    RestaurantFloor.AddTable(new Table(-1, status, orderId));
    setRerender(!rerender);
  };

  return (
    <div>
      <Navbar /> <br />
      <br />
      <center>
        <Button
          onClick={() => {
            setShowTable(true);
          }}
        >
          Show Tables
        </Button>
      </center>
      {showTable ? (
        <div>
          <Popover>
            <PopoverTrigger>
              <Button>Insert new table</Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <Select
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                    placeholder="Select Table Status"
                  >
                    <option value="waiting">Waiting</option>
                    <option value="dirty">Dirty</option>
                    <option value="eating">Eating</option>
                  </Select>
                  <InputGroup>
                    <InputLeftAddon children="Order ids:" />
                    <Input
                      onChange={(e) => {
                        setOrderId([e.target.value]);
                      }}
                      name="orderid"
                    />
                  </InputGroup>
                  <Button onClick={handleSubmit}>Submit</Button>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
          <TableContainer>
            <TTable variant="simple">
              <TableCaption>
                Table status should be verified by staff.
              </TableCaption>
              <Thead>
                <Tr>
                  <Th>id</Th>
                  <Th>status</Th>
                  <Th>order ids</Th>
                </Tr>
              </Thead>
              <Tbody>
                {RestaurantFloor.GetTables().map(function (object, i) {
                  return (
                    <Tr>
                      <Td>{object.id}</Td>
                      <Td>{object.status}</Td>
                      <Td>
                        {object.orderIds.map(function (orderId, i) {
                          return (
                            orderId +
                            (i !== object.orderIds.length - 1 ? ", " : "")
                          );
                        })}
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </TTable>
          </TableContainer>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
