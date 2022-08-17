const contacts = require('./data.json');

// the following exercises require the data from data.json.
// you can look in that file to see the data structure you
// will be working with. 

// For each exercise:
// 1. use array methods with the variable contacts to get the desired result, 
// 2. store the result with a variable
// 3. appropriately log the results to the console



//You can put your solutions after each comment below:

//1. an array that contains all of the contacts that work at INSECTUS

let newArray = contacts.filter(x => x.company == "INSECTUS")
console.log(newArray)

//2. an array all of the contacts, with only the name property

let names = contacts.map(c => c.name)
console.log(names)

//3. an array of all of the contacts over the age of 50

let theElderly = contacts.filter(x => x.age > 50)
console.log(theElderly)

//4. the first ten contacts when alphabetically ordered by name

let abcNames = contacts.sort((a, b) => {
    var textA = a.name.toUpperCase();
    var textB = b.name.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
})
let first10abcNames = abcNames.slice(0, 10)
console.log(first10abcNames)

//5. the oldest person's name

let theOldGuyOrWoman = contacts.sort((a, b) => b.age - a.age)[0]
console.log(theOldGuyOrWoman)

//6. the contact id with the name Isabella Burke

let findIsabellaBurke = contacts.find(x => x.name == "Isabella Burke") 
console.log(findIsabellaBurke)

//7. an array of all of the contacts, but with the name split up into a firstName
// and lastName properties

let firstNameLastName = contacts.map(x => {
    [x.firstName, x.lastName] = x.name.split(' ')
    return(x)
})
console.log(firstNameLastName)

//8. an array of all of the contacts where the friends property
// is an array with each contact that is their friend

let friends = contacts.map(x => {
    x.friendsArray = x.friends.map(y => contacts.find(z => z.id == y))
    return(x)
})
console.log(friends)

//9. the average age of the contacts

const average = array => array.reduce((a, b) => a + b) / array.length;
let averageAge = average(contacts.map(x => x.age))
console.log(averageAge)

//10. the median age of the contacts

function median(values){
    if(values.length ===0) throw new Error("No inputs");
  
    values.sort(function(a,b){
      return a-b;
    });
  
    var half = Math.floor(values.length / 2);
    
    if (values.length % 2)
      return values[half];
    
    return (values[half - 1] + values[half]) / 2.0;
  }

let ageMedian = median(contacts.map(x => x.age))

console.log(ageMedian)