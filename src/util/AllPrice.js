 function TotalCountPrice(orders) {
    let sum = 0;
    orders.map(( food) => {
      sum += (food.price * food.quantity);
    });
    return sum;
  }

export default TotalCountPrice