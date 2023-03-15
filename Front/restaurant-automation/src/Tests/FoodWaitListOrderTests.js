import Order from "../Models/Order";
import MenuItem from "../Models/MenuItem";

function OrderTest() {
  var item1 = new MenuItem("Fried Chicken", 15, 4.21, 2, "none");
  var item2 = new MenuItem("Sandwhich", 12, 2, 3, "Add bacon");
  var items = [item1, item2];
  var order = new Order(1, items, 6.21);
  var testPassed = true;
  if (order.GetId != 1) {
    testPassed = false;
  }
  if (order.menuItems != items) {
    testPassed = false;
  }
  if (order.GetPrepTime != 6.21) {
    testPassed = false;
  }
  return testPassed;
}
