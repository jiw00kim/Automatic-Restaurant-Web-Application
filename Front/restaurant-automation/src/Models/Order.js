// id: int 0, menuItems: list of menuItems, waitTime: int 0

import MenuItem from "./MenuItem";

class Order extends MenuItem{
    constructor(id, menuItems,waitTime){
        super(id);
        this.menuItems = [];
        this.waitTime = waitTime;
    }

    GetWaitTime = () => {
        return this.waitTime;
    }

    GetItems = () => {
        return this.menuItems
    }
}

export default Order