const arr=[20,33,44,22,84,54,67,98];
 //Using Filter Method
 //2/Division
const result=arr.filter((item)=>item %2===0);
console.log("2/divison:");
console.log(result);

const result1=arr.filter((item)=>item %5===0);
console.log("5/division:");
console.log(result1);

const result2=arr.filter((item)=>item %3===0);
console.log("3/division:");
console.log(result2);

const result3=arr.filter((item)=>item %7===0);
console.log("7/divison:");
console.log(result3);

const result4=arr.filter((item)=>item %9===0);
console.log("9/division:");
console.log(result4);

const result5=arr.filter((item)=>item >40);
console.log("//up to 40:");
console.log(result5);

//Total Array Value using Reduce method

const result6=arr.reduce((acc,curr)=>acc+curr);
console.log("//Reduce Method:");
console.log(result6);

//Using map method
//Addition 7

const result7=arr.map((item)=>item+5);
console.log("//Addition 5:");
console.log(result7);

const result8=arr.map((item)=>item+3);
console.log("//Addition 3:");
console.log(result8);

const result9=arr.map((item)=>item+9);
console.log("//Addition 9:");
console.log(result9);

//Multiplication 2

const result10=arr.map((item)=>item*2);
console.log("//Multiplication 2:");
console.log(result10);

const result11=arr.map((item)=>item*5);
console.log("Multiplication 5:")
console.log(result11);

const result12=arr.map((item)=>item**3);
console.log("Cubes:");
console.log(result12);
