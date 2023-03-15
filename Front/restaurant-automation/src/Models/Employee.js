// name: string, pin: string
class Employee {
    constructor(name, pin, position) {
        this.name = name;
        this.pin = pin;
        this.position = position;
    }

    GetName = () => {
        return this.name;
    }

    GetPin = () => {
        return this.pin;
    }

    ViewTableStatus(table) {
        return table.GetStatus();
    }
}

export default Employee;