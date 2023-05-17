// Exercise 1
const people = ["Greg", "Mary", "Devon", "James"];
people.shift();
people[2] = "Jason";
console.log(people);
people.push("Dalu");
console.log(people);
console.log(`${people.indexOf("Mary")}`);
const copy = people.slice(1,3);
console.log(copy);
console.log(`${people.indexOf("Foo")}`); // "Foo" gives an index of -1 because it is not in the array
const last = copy.slice(-1)
console.log(last)

for(let i=0; i<people.length; i++){
    console.log(people[i])
}
for(let i=0; i<people.length; i++){
    if (i>2)
    break
    console.log(people[i])
}

// Exercise 2
const colors = ["red", "black","blue","grey","white"]

for(let shade=0; shade<colors.length; shade++){
    console.log(`My #${shade+1} choice is ${colors[shade]}`)
}

// Exercise 3 
let number = prompt("Enter a number")
console.log(`${typeof(number)}`)
while(number<10){
    number= prompt("Enter another number")
}

// Exercise 4 
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

 console.log(building.numberOfFloors)
 console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor)
 console.log(`${building.nameOfTenants[1]} has ${building.numberOfRoomsAndRent.dan[0]} rooms in his apartment`)

 let sarahRent= building.numberOfRoomsAndRent.sarah[1]
 let danRent= building.numberOfRoomsAndRent.dan[1]
 let davidRent= building.numberOfRoomsAndRent.david[1]

 if(sarahRent + davidRent> danRent){
    building.numberOfRoomsAndRent.dan[1]= 1200
 }
 console.log(building.numberOfRoomsAndRent.dan[1])

//  Exercise 5
const family = {
    Father: "Chucks",
    Mother: "Dupe"  ,
    Son: "Dalu",
    Brother: "Zara"
};
for (let title in family){
    console.log(title)
    console.log(family[title])
}

// Exercise 6
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

  let sentence = ""
  for(let key in details){
    sentence= sentence +" "+ key + " " + details[key]
  }
  console.log(sentence)

// Exercise 7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let group = names.sort()
console.log(group)
let abbreviation = ""
for(n=0; n < names.length; n++){
abbreviation = abbreviation + `${group[n][0]}`
}
console.log(abbreviation)