import getAvg from './assets/js/some';
import './app.scss';

var elem = document.createElement('div');
var param = [4, 2];

elem.innerText = '(4 + 2) / 2 = ' + getAvg(...param);

document.body.appendChild(elem);

console.log('app.js');
