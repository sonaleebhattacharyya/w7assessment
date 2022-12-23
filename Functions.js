// 1) Sum Zero
const addToZero = (arr) => {
    for (let i=0; i< arr.length-1; i++) {
        for (let j=i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] == 0) {
                return true 
            } 
        } 
    } 
    return false
}
console.log(addToZero([]));
console.log(addToZero([1]));
console.log(addToZero([1, 2, 3]));
console.log(addToZero([1, 2, 3, -2]));

// 2) Unique Characters

const hasUniqueChars = (str) => {
str = str.toLowerCase()
let wordarray = [] 
    for (let i=0; i< str.length; i++) {
        if (wordarray.includes(str[i])) {
            return false; 
        }
        wordarray.push(str[i])
    }
    return true
}
console.log(hasUniqueChars("Monday"));
console.log(hasUniqueChars("Moonday"));

// 3) Pangram Sentence

const isPangram = (str) => {
    str = str.toLowerCase()
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const stringarray = str.split("")
    for (let i=0; i< alphabet.length; i++) {
        if (!stringarray.includes(alphabet[i])) 
        return false
    } return true
} 
console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isPangram("I like cats, but not mice"));

// 4) Longest Word 
const findLongestWord = (arr) => {
    let maxlength = arr[0].length;
    for (let i=1; i< arr.length; i++) {
        if (arr[i].length > maxlength) {
            maxlength = arr[i].length
        } 
    } return maxlength
}
console.log(findLongestWord(["hi", "hello"]));