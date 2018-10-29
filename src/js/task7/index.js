module.exports = getSumFib = (num) => {
    
    let sum = 0;

    const getFib = (num) => {
        if(num < 2) return num;
        else return getFib(num - 1) + getFib(num - 2);
    };

    for (let i = 0; i <= num; i++) {
        sum += getFib(i);     
    };

    return sum;
}