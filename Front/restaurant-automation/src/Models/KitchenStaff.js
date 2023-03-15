import Employee from "./Employee";

class KitchenStaff extends Employee
{
    constructor(name, pin, position, item, check, ready)
    {
        super(name, pin, position);
        this.item = item;
        this.check = check;
        this.ready = ready;
    }

    GetItem = () => {
        return this.item;
      };

    GetCheck = () => {
        return this.check;
    };

    MarkOrderReadyWaitlist()
    {
        // FoodWaitList.OrderReady();
        if(this.item == this.check)
        {
            this.GetItem();
            this.ready = true;
        }
        else
        {
            this.ready = false;
        }
    }
}
export default KitchenStaff;