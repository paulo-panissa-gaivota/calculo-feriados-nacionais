// Import stylesheets
import './style.css';
import { getHolidaysNational, getBetweenDates } from './holidays';
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const year = 2042;

console.log(`Pega os feriados do ano: ${year}`, getHolidaysNational(year));

console.log(
  'Pegar feriados entre datas: ',
  getBetweenDates('2020-01-01', '2024-01-01')
);
