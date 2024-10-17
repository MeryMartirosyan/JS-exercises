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

//
function printMatrix(rowCount, colCount) {
    let result = "";
    for (let j = 0; j <= rowCount; j++) {
        let row = '';
        for (let i = 0; i <= colCount; i++) {
            if(i === 0 || i === colCount || j === 0 || j === rowCount) {
            row += " * ";
         } else {
                row += "   ";
         }
        }
        result += row;
        result += '\n'
    }
    console.log(result)
}

function strCount(str, count) {
    let result = '';
    for(let i = 0; i < str.length; i++) {
        result += '';
        for(let j = 0; j < count; j++) {
            result += str[i];
        }
    }
    return result
}

function number(str) {
    let result = '';
    for(let i = 0; i < str.length; i++) {
        let Nan = +str[i];
       if(Nan !== NaN) {
           result += str[i];
       }
    }
    return result
}

// check if str contains in string, if we know that str has 2 index (0 and 1)
function isContain(string, str) {
    for(let i = 0; i < string.length; i++) {
        if(string[i] === str[i] && string[i + 1] === str[i + 1]) {
            return true
        }
    }
    return false
}
