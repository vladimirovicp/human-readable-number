module.exports = function toReadable(number) {
  if (number === 0) {
    return 'zero';
  }
  let rezult = '';
  const units = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const dozens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  const largnumbers = [
    '',
    ' thousand',
    ' million',
    ' billion',
    ' trillion',
    ' quadrillion',
    ' quintillion',
  ];

  let strNumber = number.toString();
  const masNumber = [];
  let i = 0;

  while (strNumber.length > 3) {
    masNumber[i] = strNumber.slice(-3);
    i += 1;
    strNumber = strNumber.slice(0, -3);
  }
  masNumber[i] = strNumber;
  for (let j = masNumber.length - 1; j >= 0; j -= 1) {
    if (masNumber[j][0] === '0') {
      masNumber[j] = masNumber[j].slice(1);
    }

    if (masNumber[j] >= 100) {
      rezult = `${rezult} ${units[masNumber[j].slice(0, 1)]} hundred`;
      masNumber[j] = masNumber[j].slice(1);
      if (masNumber[j][0] === '0') {
        masNumber[j] = masNumber[j].slice(1);
      }
    }
    if (masNumber[j] < 100) {
      if (masNumber[j] < 20) {
        if (masNumber[j] > 0) {
          rezult = `${rezult} ${units[masNumber[j]]}`;
        }
      } else {
        rezult = `${rezult} ${dozens[masNumber[j][0]]} ${units[masNumber[j][1]]}`;
      }
    }
    rezult += largnumbers[j];
  }
  return rezult.trim();
};
