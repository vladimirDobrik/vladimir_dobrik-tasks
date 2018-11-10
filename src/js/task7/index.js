module.exports = getSumFib = (num) => {

    let temp = [];
    let result;

    const getFib = (num) => {

        let result = 0;

        if (num < 2) {
            return num;
        } else {
            result = getFib(num - 1) + getFib(num - 2);
            return result;
        }
    };

    let i = 2;

    while (temp.length < num) {

        if (getFib(i) % 2 === 0) {
            temp.push( getFib(i) );
        }

        i++;
    }

    result = temp.reduce((acc, cur) => acc + cur);

    return result;
}