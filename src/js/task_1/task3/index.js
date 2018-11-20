const getFib = num => {

    let result = 0;

    if (num < 2) {
        return num;
    } else {
        result = getFib(num - 1) + getFib(num - 2);
        return result;
    }
}

const getSumFib = num => {

    let temp = [];
    let result;
    let i = 2;

    while (temp.length < num) {

        let fibNum = getFib(i);

        if (fibNum % 2 === 0) {
            temp.push(fibNum);
        }

        i++;
    }

    result = temp.reduce((acc, cur) => acc + cur);

    return result;
}

module.exports = getSumFib;