module.exports = getUniqueWords = (arr) => {
    
        const result = [];

        arr.forEach((elem) => {
            if(String(elem) && !(result.includes(elem))) {
                result.push(elem);
            }
        })

    return result;
}