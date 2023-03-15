// id: int, status: {dirty, empty, waiting, eating}, orderIds: a list of int
class Table {
    constructor(id, status, orderIds) {
        this.id = id;
        this.status = status;
        this.orderIds = orderIds;
    }

    GetStatus = () => {
        return this.status;
    }

    MakeClean = () => {
        this.status = "empty";
    }
}

export default Table;