import React from "react";
import Navbar from "../../Components/Navbar";
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
  InputGroup,
  InputLeftAddon,
  Input,
} from "@chakra-ui/react";
import HRManager from "../../Managers/HRManager";
import Employee from "../../Models/Employee";

export default class StaffPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      staffInfo: { name: "", pin: "", position: "" },
    };

    this.handleChange = (e) => {
      this.setState({ staffInfo: {...this.state.staffInfo, [e.target.name]: e.target.value}});
    };
  }

  render() {
    return (
      <div>
        <Navbar /> <br />
        <br />
          <div>
            <InputGroup>
              <InputLeftAddon children="Name:" />
              <Input
                placeholder="Name"
                onChange={this.handleChange}
                name="name"
              />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children="PIN:" />
              <Input
                type="number"
                placeholder="PIN"
                name="pin"
                onChange={this.handleChange}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children="POSITION:" />
              <Input
                placeholder="Position"
                name="position"
                onChange={this.handleChange}
              />
            </InputGroup>
            <Button
              onClick={() => {
                if (!HRManager.ContainStaff(this.state.staffInfo.name))
                {
                    HRManager.AddStaff(new Employee(this.state.staffInfo.name, this.state.staffInfo.pin, this.state.staffInfo.position));
                }
                this.setState(this.state);
              }}
            >
              Insert new staff
            </Button>
            <TableContainer>
              <TTable variant="simple">
                <TableCaption>
                  Imperial to metric conversion factors
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>position</Th>
                    <Th>name</Th>
                    <Th>pin</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {HRManager.GetStaffs().map(function (object, i) {
                    return (
                      <Tr>
                        <Td>{object.position}</Td>
                        <Td>{object.name}</Td>
                        <Td>{object.pin}</Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </TTable>
            </TableContainer>
          </div>
      </div>
    );
  }
}
