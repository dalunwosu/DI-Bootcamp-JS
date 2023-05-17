let b = 3,
  d = b,
  u = b;

const tree = ++d * d * b * b++ + +--d + +(+b--) + +(+d) * b + +u;

console.log(tree);

//Exercise 1

function Age(myAge) {
  let mumAge = 2 * myAge;
  let dadAge = Math.round(1.2 * mumAge);

  console.log(
    `I am ${myAge} years old, my mum is ${mumAge} years old and my dad is ${dadAge} years old`
  );
}

Age(17);

//Exercise 2

function age(myAge) {
  let mumAge = 2 * myAge;
  let statement = `I am ${myAge} years old, my mum is twice my age so she is ${mumAge} years old`;
  return statement;
}

console.log(age(17));
