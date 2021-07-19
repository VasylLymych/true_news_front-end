function countWords(str) {
    let arr = str.split(' ');
    return arr.length
}

function findLongestWord(str) {
   let arr = str.split(' ');
   let max=arr[0];
    for (let i = 0; i < arr.length-1; i++) {
        if(arr[i].length<arr[i+1].length)
            max=arr[i+1]
    }
    return max
}

console.log(findLongestWord('asdccvnnnnnnnn asdasdasd sd'));
