 
// //# 1A
// var ages= [ 3,9,23,64,2,8, 28,93];
// let first = ages [0];
// let last =ages[ages.length -1];

// subAges =(last - first);
// console.log(subAges);

// //#1B
// let newAgeNumber = ages.push(18);
// newAgeNumber = ages[ages.length-1];  
// console.log(newAgeNumber);     //checking if 18 is present in array

// let newLast = ages[7];
// subAges2 = (newLast-first-newAgeNumber);
// console.log(subAges2);

// //#1C
// let sum=0;  //sum of all #'s in array
// let elements= ages.length; //number of elements in array

// for (let i=0; i< ages.length; i++){
  
//    sum+= ages[i];
  
// }
// average = (sum/elements);
//    console.log(average);

//#2A

//  let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
// let lengthsOfEachString = names.map(function (x){
//    return x.length;

// });
// console.log(lengthsOfEachString);  //function adds all values in array

// let sums = lengthsOfEachString.reduce(function (accumulator, currentValue){


// return accumulator + currentValue;

// });
// console.log(sums);
// console.log(sums/names.length);

// // //#2B - concatenate elements together separated by space
// console.log(names.join('   ' ));


// //#5


// let nameLengths =[];
// let total =0; 
// for (let i=0; i <= names.length -1; i++){
   
//    total += ( names[i].length);
//    nameLengths.push = total;

// }

// console.log(total);
// console.log(nameLengths);

//#7
// let result =" ";
// function words (word, n){
   
//    for (let i=0; i<3; i++){
//       result += word;
//    }
//     console.log (result);
// }
// words ("Cheese", 3);



// // //#6
// let array2 = names.concat(nameLengths);
// total3= 0;

// for (let i= 0; i<= array2.length-1; i++){
//   total3+=(i);
  

// }

// console.log(total3);

// //#8
// function nameComplete(firstName, lastName){

//    return (firstName + ' ' + lastName);

// }
// var fullNames = nameComplete('Sandra', 'C');
// console.log(fullNames);


// //#9 used the reduce method to sum up the elements in an array

// let samArray = [4,7,6,3,29];
// let total4 = samArray.reduce(function (accumulator, x){
//   return accumulator+ x;
  

// });
//  console.log(total4 >100 ==true);

 //#10

//  let winzArray = [1,2,3,4];
//  let total5 = winzArray.reduce(function (accumulator, x){
//     return accumulator+ x;
//  });
//  console.log(total5 / winzArray.length);

// //#11  find the average of 2 arrays and compare both with < > 

// let arr1 = [2,4,6,8];
// let arr2 = [1,2,3,4];
// let avg2=0;
// let avg3=0;
// let total6 = arr1.reduce(function (accumulator, x){
//      return accumulator+ x;
//    });
//    avg2= (total6/ arr1.length);
//    console.log(avg2);
//    let total7 = arr2.reduce(function (accumulator, x){
//       return accumulator+ x;
//     });
//     avg3= (total7/ arr2.length);
//     console.log(avg3);

// function whoIsGreater (x,y){
//    if(x >y){
//       console.log(true); 
//    }
//    if (x<y){
//       console.log(false); 
//    }
// }

// whoIsGreater(avg3, avg2);


// // #12

// moneyInPocket= 0;
// function willBuyDrink (isHotOutside, moneyInPocket){

//    if (isHotOutside===true && moneyInPocket > 10.50);
//     console.log(true)

// }
// willBuyDrink( true , 5);

// // #13  I used the splice method on an array. The method removes, adds or modifies elements in an array.
// //        I used this example to remove certain kids from lists. Very helpful in school environments. 

// let studentList= ['Sam', 'Lisa', 'Charlie','Winston'];
// let removedKid = studentList.splice (1,3);
// console.log(removedKid);

