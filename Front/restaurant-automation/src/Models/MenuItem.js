// name: string, price: int, prepTime: int
class MenuItem {
  constructor(name, price, prepTime, id, options) {
    this.name = name;
    this.price = price;
    this.prepTime = prepTime;
    this.id = id;
    this.options = options;
  }

  GetName = () => {
    return this.name;
  };

  GetPrice = () => {
    return this.price;
  };

  GetPrepTime = () => {
    return this.prepTime;
  };

  GetId = () => {
    return this.id;
  };

  GetOptions = () => {
    return this.options;
  };
}

export default MenuItem;
