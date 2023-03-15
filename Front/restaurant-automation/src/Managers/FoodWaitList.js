// OrderQueue: queue of orders, ReadyFoodQueue: queue of ready orders

import Order from "../Models/Order";

class FoodWaitList extends Order {
    constructor(id, OrderQueue, ReadyFoodQueue){
        super(id);
        this.OrderQueue = [];
        this.ReadyFoodQueue = [];
    }

    AddOrder ()  {
        this.OrderQueue.push(Order);
    }

    CancelOrder(id){
        for(var i = 0; i < this.OrderQueue.length; i++)
        {
            if(this.OrderQueue[i].id == id)
            {
                this.OrderQueue.splice(i, 1);
            }
        }  
    }

    MakeOrderReady(id)
    {
        this.CancelOrder(id);
        this.ReadyFoodQueue.push(id);
    }

    CheckReadyOrder(){
        return this.ReadyFoodQueue[0];
    }
}

export default FoodWaitList