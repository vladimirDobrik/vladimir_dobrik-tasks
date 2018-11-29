import getSum from './sub';

function getAvg(a, b) {
    var result = getSum(a, b);

    result = result / 2;
    console.log('some.js');

    return result;
}

export default getAvg;