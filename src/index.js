const tables = require('./tables');

const getRendomTables = (players) => {
    let array = {

    };
    for (let i = 0; i < players; i++) {
       

        array[i + 1] = tables[i+1];
    }
    return array
}



const randomTables2D = []
const randomTables = getRendomTables(51)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    , 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
    , 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50
] 

for (let i = 1; i <= 51; i++) {

    const newArr = [];
    while (randomTables[i + ""]?.length) newArr.push(randomTables[i + ""]?.splice(0, 5));
    randomTables2D.push(newArr);

}

module.exports = {
    random: randomTables2D,
    numbers: numbers
}
