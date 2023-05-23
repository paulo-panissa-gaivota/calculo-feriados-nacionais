// Import stylesheets
import './style.css';
import { getHolidaysBr } from './holidays';
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const year = 2042;

console.log(`Pega os feriados ai CAIO:  ano: ${year}`, getHolidaysBr(year));
