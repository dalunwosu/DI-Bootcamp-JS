//Exercise 1

function isDivisible() {
  let sum = 0;
  for (let i = 0; i <= 500; i++) {
    if (i % 23 == 0) {
      console.log(`${i}`);
      sum += i;
    }
    console.log(`sum = ${sum}`);
  }
}

isDivisible();

//Bonus
function isDivisible(divisor) {
  let sum = 0;
  for (let i = 0; i <= 500; i++) {
    if (i % divisor == 0) {
      console.log(`${i}`);
      sum += i;
    }
    console.log(`sum = ${sum}`);
  }
}

isDivisible(3);
isDivisible(45);

//Exercise 2

const stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

const prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};

let shoppingList = ["banana", "orange", "apple"];

function myBill() {
  let total = 0;
  for (let f = 0; f < shoppingList.length; f++) {
    let item = shoppingList[f];
    if (item in stock) {
      --stock[item];
    }
    if (item in stock && stock[item] > 0) {
      console.log(`Item: ${item} price: $${prices[item]}`);
      total += prices[item];
    } else {
      console.log(`${item} is out stock`);
    }
  }
  console.log(`Total Bill: $${total}`);
}

myBill();

// Exercise 3
function changeEnough(itemPrice, amountOfChange) {
  let totalChange =
    amountOfChange[0] * 0.25 +
    amountOfChange[1] * 0.1 +
    amountOfChange[2] * 0.05 +
    amountOfChange[3] * 0.01;
  if (totalChange > itemPrice) {
    return true;
  } else {
    return false;
  }
}

console.log(changeEnough(4.25, [25, 20, 5, 0]));
console.log(changeEnough(14.11, [2, 100, 0, 0]));
console.log(changeEnough(0.75, [0, 0, 20, 5]));

// Exercise 4

function hotelCost() {
  let hotel = prompt("How many nights are you staying in the hotel?");
  while (isNaN(hotel) || hotel === null) {
    prompt("Please enter a valid number of nights");
  }
  let totalPrice = 140 * hotel;
  console.log(`Your total is $${totalPrice} for ${hotel} nights`);
  return totalPrice;
}

function planeRideCost() {
  let flightPrice = 0;
  let location = prompt("What is your destination?").toLowerCase;
  while (typeof location !== "string" || null) {
    prompt("Please enter a valid destination").toLowerCase;
  }
  if (location === "london") {
    flightPrice = 183;
    console.log(`The price of your flight is $${flightPrice}`);
    return flightPrice;
  } else if (location === "paris") {
    flightPrice = 220;
    console.log(`The price of your flight is $${flightPrice}`);
    return flightPrice;
  } else {
    flightPrice = 300;
    console.log(`The price of your flight is $${flightPrice}`);
    return flightPrice;
  }
}

function rentalCarCost() {
  let car = prompt("How many days would you like to rent a car?");
  while (isNaN(car) || car === null)
    car = prompt("Please enter a valid number of days");
  let cost = car * 40;
  if (car > 10) {
    cost = cost - cost * 0.05;
  }
  console.log(`The cost of your car for ${car} days is $${cost}`);
  return cost;
}

function totalVacationCost() {
  let hotel = hotelCost();
  let plane = planeRideCost();
  let car = rentalCarCost();
  let total = hotel + plane + car;
  console.log(
    `The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`
  );
  console.log(`Your total is $${total}`);
  return total;
}
totalVacationCost();
