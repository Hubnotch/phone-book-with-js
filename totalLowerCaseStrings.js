const str = 'huyihh'


const totalLowerCaseString = word => {
    let count = 0;
    for (let i = 0; i < word.length; i++) {

        if (word[i] == word[i].toLowerCase()) {
            count++;
        }
    }
    return count;
}
// 'dre'.toLowerCase()
console.log(totalLowerCaseString(str))

// console.log("hello".charAt(0))