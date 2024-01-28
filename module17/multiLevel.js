// Multi Level If-Else If-Else Condition

const price = 3100;

if (price >= 5000) {
  // 20% discount
  const discount = price * 20 / 100;
  const payAmount = price - discount;
  console.log(payAmount);
} else if (price > 3000) {
  const discount = price * 5 / 100;
  const payAmount = price - discount;
  console.log(payAmount);
} else {
  console.log(price);
}