const perf = require('execution-time')();

function doublerAppend(nums){
    let new_nums = [];
    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }
}

function doublerInsert(nums){
    let new_nums = [];
    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }
}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

//TINY ARRAY
perf.start();
doublerAppend(tinyArray);
let tresultsAppend =perf.stop(); 
perf.start(); 
doublerInsert(tinyArray);
let tresultsInsert = perf.stop(); 
console.log('Results for the tiny array');
console.log("insert", tresultsInsert.preciseWords);
console.log("append", tresultsAppend.preciseWords);

//SMALL ARRAY
perf.start();
doublerAppend(smallArray);
let sresultsAppend =perf.stop(); 
perf.start(); 
doublerInsert(smallArray);
let sresultsInsert = perf.stop(); 
console.log('Results for the small array');
console.log("insert", sresultsInsert.preciseWords);
console.log("append", sresultsAppend.preciseWords);

//MEDIUM ARRAY
perf.start();
doublerAppend(mediumArray);
let mresultsAppend =perf.stop(); 
perf.start(); 
doublerInsert(mediumArray);
let mresultsInsert = perf.stop(); 
console.log('Results for the medium array');
console.log("insert", mresultsInsert.preciseWords);
console.log("append", mresultsAppend.preciseWords);

//LARGE ARRAY
perf.start();
doublerAppend(largeArray);
let lresultsAppend =perf.stop(); 
perf.start(); 
doublerInsert(largeArray);
let lresultsInsert = perf.stop(); 
console.log('Results for the large array');
console.log("insert", lresultsInsert.preciseWords);
console.log("append", lresultsAppend.preciseWords);

// EXTRA LARGE ARRAY
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();
console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);