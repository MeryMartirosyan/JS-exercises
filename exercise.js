// if vowels are in string, count = count + 1
function vowelCounted(str) {
    let count = 0;
    let arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for(let i = 0; i < str.length; i++) {
       if(arr.includes(str[i])) {
           count++;
       }
    }
    return count
}

//sum of digits of the number
function sumOfDigits(number) {
    if(typeof number !== 'number') {
        return 'invalid answer, type number'
    }
    if(number < 0) {
        number = - number
    } 
    if(number === 0) {
        return number
    }
    let digits = 0, sum = 0;
    while(number > 0) {
        digits = number % 10;
        sum += digits;
        number = Math.floor(number / 10);
    }
    return sum
}
