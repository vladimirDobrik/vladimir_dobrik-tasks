module.exports = getLastTenDigits = (num) => {
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum += Math.pow(i, i);   
    }
    
    return Number(String(sum).substring(String(sum).length - 10));
};
