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
