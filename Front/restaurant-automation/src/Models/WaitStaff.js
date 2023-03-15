import Employee from "./Employee";

class KitchenStaff extends Employee
{
    CreateOrder()
    {

        return true;
    }
    AddOrder()
    {
        if(this.CreateOrder() == true)
        {
            this.item.AddOrder()
        }

    }
    HelpGuestCheckOut()
    {
        if(this.CreateOrder() != true)
        {
            this.HelpGuestCheckOut.item();
        }

    }
}

export default KitchenStaff;