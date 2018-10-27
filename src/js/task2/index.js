module.exports = getMaxNumberInArray = (arr = [1,2,3,4,5]) => {

    if(Array.isArray(arr)) {
        let max = arr[0];
        arr.forEach((elem) => {
            if(elem > max) max = elem;
        })
    
        return max;
    } else 
        throw new Error(arr + " не является массивом");  
}

