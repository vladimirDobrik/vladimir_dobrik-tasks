module.exports = getSumFib = (num) => {

    let temp = [];

    const getFib = (num) => {
        if (num < 2) return num;
        else return getFib(num - 1) + getFib(num - 2);
    };

    let i = 2;
    while (temp.length < num) {
        if (getFib(i) % 2 === 0) {
            temp.push(getFib(i));
        }

        i++;
    }

    return temp.reduce((acc, cur) => acc + cur);
}