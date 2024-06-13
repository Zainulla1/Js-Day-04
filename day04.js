

//Exercise 1

// Given a year, report it is a leap Year.

const isLeapYear = (year) => year % 4 === 0;

console.log(isLeapYear(2014));
console.log(isLeapYear(2015));
console.log(isLeapYear(2016));
console.log(isLeapYear(2017));
console.log(isLeapYear(2018));
console.log(isLeapYear(2019));
console.log(isLeapYear(2020));
console.log(isLeapYear(2021));
console.log(isLeapYear(2022));
console.log(isLeapYear(2023));
console.log(isLeapYear(2024));
console.log(isLeapYear(2025));

//Exercise 2

//By using  Js  compare 2 objects to determine if
//the first one contains the same properties as the second one
//(which may have additional properties)

const objA = { a: 1, b: 2, c:1};
const objB = { a: 1, b: 1, c:1};
const objC = { a: 1, b: 1, c:1};

const objectsEqual = (a,b) => 
    Object.keys(a).every(key => b[key]);

console.log(objectsEqual(objA,objB));
console.log(objectsEqual(objA,objC));
console.log(objectsEqual(objB,objC));

//Exercise 3

// By using JS convert a comma-separate values (csv) string to
//a 2D array. A new line indicates a new row in the array.

//Example:

// abc,def,ghi
// jkl,mno,Pqr 
// stu,vwx,yza

const parseCSV = (csvString) => 
    csvString.split('\n').map(row => row.split(','));

const str = `abc,def,ghi
jkl,mno,pqr
stu,vwx,yza`

console.log(parseCSV(str));


//Exercise 4

//JS function that  returns true if the provided predicate
// function returns true for all elements in a collection, 
//false otherwise

const isEveryElem = (arr, fn) => {
    for(let i=0; i<arr.length; i+=1) {
        if (!fn(arr[i])) {
            return false;
        }
    }
    return true;
}

console.log(isEveryElem([1,2,3,4,5],(x) => x > 0));
console.log(isEveryElem([1,2,3,4,5],(x) => x > 3));