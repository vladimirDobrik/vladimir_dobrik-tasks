module.exports = getAverageForNumbers = (arr = [1,2,3,4,5]) => {

    if(Array.isArray(arr)) {
        let arrLength = arr.length;
        let sum = arr.reduce((acc, cur) => acc + cur, 0);
        return sum / arrLength;
    } else 
        throw new Error(arr + " не является массивом");
        
}