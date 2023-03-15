// tip: int, menuItems: list of MenuItems
class Receipt {
    constructor(tip, menuItems) {
        this.tip = tip;
        this.menuItems = menuItems;
    }

    GetTotalSale = () => {
        let total = 0;
        for(let i = 0; i < this.menuItems.length; i++)
        {
            total = total + this.menuItems[i].GetPrice();
        }
        return total;
    }

    GetMenuItems = () => {
        return this.menuItems;
    }
}
export default Receipt;

