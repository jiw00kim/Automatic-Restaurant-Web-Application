import Employee from "./Employee";
import DBManager from "../DB/DBManager";

class Host extends Employee {
    constructor(name, pin, position)  {
        super(name, pin, position);
        
        this.staffs = [];
    }
    
    #privateRegisterStaffInDB = (data) => {
        DBManager.PutData("/staffs", data);
    }

    #privateGetStaffsInDB = () => {
        return DBManager.GetData("/staffs");
    }


    RegisterStaff(name, pin)  {
        this.staffs.push(new Employee(name, pin));
        this.#privateRegisterStaffInDB(this.staff);
    }

    ModifyStaff(newName, newPin, employee)  {
        employee.name = newName;
        employee.pin = newPin;
    }
}
export default Host;