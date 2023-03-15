import Employee from "../Models/Employee";
import Table from "../Models/Table";

// Mock DBManager
class DBManager {
  constructor() {
    this.tables = [
      new Table(0, "dirty", [0, 1], 0),
      new Table(1, "waiting", [2], 600),
      new Table(2, "eating", [3], 0),
    ];

    this.orders = [];

    this.staffs = [
      new Employee("admin", "1234" , "Host"),
      new Employee("user", "1234", "BusBoy"),
    ];

    this.mockDBGet = {
      "/tables": this.tables,
      "/OrderQueue": this.orders,
      "/staffs": this.staffs,
    };

    this.mockDBPut = {
      "/tables": this.putTable,
      "/OrderQueue": this.AddOrder,
      "/staffs": this.putStaff,
    };
  }

  GetData = (endPoint) => {
    return this.mockDBGet[endPoint];
  };

  PutData = (endPoint, data) => {
    this.mockDBPut[endPoint](data);
  };

  putTable = (table) => {
    for (let i = 0; i < this.tables.length; i++) {
      // Update
      if (this.tables.id === table.id) {
        this.tables[table.id] = table.id;
        return;
      }
    }
    // Add
    this.tables.push(table);
  };

  AddOrder = (order) => {
    this.orders.push(order);
  };

  putStaff = (staff) =>
  {
    for (let i = 0; i < this.staffs.length; i++) {
      // Update
      if (this.staffs[i].name === staff.name) {
        this.staffs[i] = staff.name;
        return;
      }
    }
    // Add
    this.staffs.push(staff);
  };
}

const dbManager = new DBManager();

export default dbManager;
