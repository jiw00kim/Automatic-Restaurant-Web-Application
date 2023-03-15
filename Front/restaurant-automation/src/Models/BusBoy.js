import Employee from "./Employee";

class BusBoy extends Employee   {
    constructor(name, pin, position) {
        super(name, pin, position);
    }

    CleanTable(tables, tableNumber) {
        tables[tableNumber].MakeClean();
    }
}

export default BusBoy;