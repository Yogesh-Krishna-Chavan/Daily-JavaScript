function getTotalPrice(groceries) {
  let total = 0;

  for (let item of groceries) {
    console.log(item);
    const itemPrice = item.quantity * item.price;
    total += itemPrice;
  }
  return total;
}

console.log(
  getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.5 },
    { product: "Eggs", quantity: 10, price: 1 },
  ])
);
