import DBManager from "../DB/DBManager";

class RestaurantFloor {
    constructor() {
        this.tables = []
    }

    #privateSetStatusInDB = (data) => {
        DBManager.PutData("/tables", data);
    }

    #privateGetStatusInDB = () => {
        return DBManager.GetData("/tables");
    }

    GetStatus = (id) => {
        this.tables = this.#privateGetStatusInDB();
        return this.tables[id];
    }

    SetStatus = (table, id) => {
        this.tables[id] = table;
        this.#privateSetStatusInDB(table);
    }

    AddTable = (table) => {
        this.tables = this.#privateGetStatusInDB();
        table.id = this.tables.length;
        this.#privateSetStatusInDB(table);
    }

    GetTables = () => {
        return this.#privateGetStatusInDB();
    }
}

const restaurantFloor = new RestaurantFloor();

export default restaurantFloor;