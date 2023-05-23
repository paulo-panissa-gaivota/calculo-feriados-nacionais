import { format, parse } from 'date-fns';
import { subDays, addDays, addYears } from 'date-fns/esm';

export function easterDay(y) {
  const c = Math.floor(y / 100);
  const n = y - 19 * Math.floor(y / 19);
  const k = Math.floor((c - 17) / 25);
  let i = c - Math.floor(c / 4) - Math.floor((c - k) / 3) + 19 * n + 15;
  i = i - 30 * Math.floor(i / 30);
  i =
    i -
    Math.floor(i / 28) *
      (1 -
        Math.floor(i / 28) *
          Math.floor(29 / (i + 1)) *
          Math.floor((21 - n) / 11));
  let j = y + Math.floor(y / 4) + i + 2 - c + Math.floor(c / 4);
  j = j - 7 * Math.floor(j / 7);
  const l = i - j;
  const m = 3 + Math.floor((l + 40) / 44);
  const d = l + 28 - 31 * Math.floor(m / 4);
  return new Date(y, m - 1, d);
}

export function getHolidaysNational(y) {
  const anoNovo = new Date(y, 0, 1);
  const carnaval = subDays(easterDay(y), 47);
  const paixaoCristo = subDays(easterDay(y), 2);
  const pascoa = easterDay(y);
  const tiradentes = new Date(y, 3, 21);
  const diaTrabalho = new Date(y, 4, 1);
  const corpusChristi = addDays(easterDay(y), 60);
  const diaIndependencia = new Date(y, 8, 7);
  const nossaSenhora = new Date(y, 9, 12);
  const finados = new Date(y, 10, 2);
  const proclamaRepublica = new Date(y, 10, 15);
  const natal = new Date(y, 11, 25);
  return [
    { m: anoNovo, dia: 'Ano Novo', d: format(anoNovo, 'dd/MM/yyyy') },
    { m: carnaval, dia: 'Carnaval', d: format(carnaval, 'dd/MM/yyyy') },
    {
      m: paixaoCristo,
      dia: 'Paixão de Cristo',
      d: format(paixaoCristo, 'dd/MM/yyyy'),
    },
    { m: pascoa, dia: 'Páscoa', d: format(pascoa, 'dd/MM/yyyy') },
    { m: tiradentes, dia: 'Tiradentes', d: format(tiradentes, 'dd/MM/yyyy') },
    {
      m: diaTrabalho,
      dia: 'Dia do Trabalho',
      d: format(diaTrabalho, 'dd/MM/yyyy'),
    },
    {
      m: corpusChristi,
      dia: 'Corpus Christi',
      d: format(corpusChristi, 'dd/MM/yyyy'),
    },
    {
      m: diaIndependencia,
      dia: 'Dia da Independência do Brasil',
      d: format(diaIndependencia, 'dd/MM/yyyy'),
    },
    {
      m: nossaSenhora,
      dia: 'Nossa Senhora Aparecida',
      d: format(nossaSenhora, 'dd/MM/yyyy'),
    },
    { m: finados, dia: 'Finados', d: format(finados, 'dd/MM/yyyy') },
    {
      m: proclamaRepublica,
      dia: 'Proclamação da República',
      d: format(proclamaRepublica, 'dd/MM/yyyy'),
    },
    { m: natal, dia: 'Natal', d: format(natal, 'dd/MM/yyyy') },
  ];
}

export function getBetweenDates(date, dateTo) {
  const dateStart = parse(date, 'yyyy-MM-dd', new Date());
  const dateEnd = parse(dateTo, 'yyyy-MM-dd', new Date());
  const datesHoliday = [];

  let currentDate = dateStart;
  while (
    dateEnd > currentDate ||
    currentDate.getFullYear() === dateEnd.getFullYear()
  ) {
    const year = currentDate.getFullYear();
    const holidays = getHolidaysNational(year);
    datesHoliday.push(...holidays);
    currentDate = addYears(currentDate, 1);
  }

  return datesHoliday;
}
