const age = prompt('Age');
const foodPrice = 5000;

if (age <= 10) {
  console.log('This food is free for the children')
} else if (age >= 70) {
  // 50% discount
  const discount = (foodPrice * 50) / 100;
  const pay = foodPrice - discount;
  console.log(
    'Total Price :',
    foodPrice,
    ' - ',
    'Discount Price :',
    discount,
    ' = ',
    pay
  );
} else if (age >= 50) {
  // 50% discount
  const discount = (foodPrice * 30) / 100;
  const pay = foodPrice - discount;
  console.log(
    'Total Price :',
    foodPrice,
    ' - ',
    'Discount Price :',
    discount,
    ' = ',
    pay
  );
} else {
  console.log(foodPrice);
}