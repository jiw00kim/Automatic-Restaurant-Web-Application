import DBManager from "../DB/DBManager";

class HRManager {
    constructor() {
        this.currentUserName = "";
    }

    GetStaffs = () => {
        return DBManager.GetData("/staffs");
    }

    SetStaff = (data) => {
        DBManager.PutData("/staffs", data);
    }

    AddStaff = (staff) => {
        staff.id = this.GetStaffs().length;
        DBManager.PutData("/staffs", staff);
    }

    ContainStaff = (name) => {
        const staffs = this.GetStaffs();
        for (let i = 0; i < staffs.length; i++)
        {
            if (staffs[i].name === name)
            {
                return true;
            }
        }

        return false;
    }
}

const hrManager = new HRManager();

export default hrManager;