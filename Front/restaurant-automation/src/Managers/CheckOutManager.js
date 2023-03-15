import DBManager from "../DB/DBManager";

class CheckOutManager {
    constructor(receipts) {
        this.receipts = receipts;
    }

    #privateDirtyTable = (id) => {
        const table = DBManager.GetStatus(id);
        table.status = "dirty"
        DBManager.SetStatus(table, id);
    }

    CheckOutTable = (id) => {
        this.#privateDirtyTable(id);
    }
}

const checkOutManager = new CheckOutManager();

export default checkOutManager;
