function capitalize(string) {
  return string.length
    ? string[0].toUpperCase() + string.slice(1).toLowerCase()
    : string;
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

const calculator = {
  add: (a, b) => {
    if (Number(a) + Number(b) || Number(a) + Number(b) === 0) {
      return Number(a) + Number(b);
    } else {
      throw new Error('Cannot add non-numbers.');
    }
  },
  subtract: (a, b) => {
    if (Number(a) - Number(b) || Number(a) - Number(b) === 0) {
      return Number(a) - Number(b);
    } else {
      throw new Error('Cannot subtract non-numbers.');
    }
  },
  multiply: (a, b) => {
    if (Number(a) * Number(b) || Number(a) * Number(b) === 0) {
      return Number(a) * Number(b);
    } else {
      throw new Error('Cannot multiply non-numbers.');
    }
  },
  divide: (a, b) => {
    if (Number(b) === 0) {
      return undefined;
    } else if (Number(a) / Number(b) || Number(a) / Number(b) === 0) {
      return Number(a) / Number(b);
    } else {
      throw new Error('Cannot divide non-numbers.');
    }
  },
};

function caesarCipher(string, shift) {
  if (typeof string !== 'string') throw new Error('Can only encrypt strings.');

  const alphabet = [...Array(26).keys()].map((number) =>
    String.fromCharCode(number + 65)
  );

  const rawEncrypted = string
    .split('')
    .map((character) =>
      alphabet.includes(character.toUpperCase())
        ? alphabet.indexOf(character.toUpperCase())
        : character
    ) // leaves non-letters untouched
    .map((number) =>
      typeof number === 'number' ? (number + shift) % 26 : number
    ) // leaves non-letters untouched
    .map((number) => (typeof number === 'number' ? alphabet[number] : number)) // leaves non-letters untouched
    .join('');

  let encryptedArray = [];

  // alphabet array only has capitals so go back and match case
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === string[i]) {
      encryptedArray.push(rawEncrypted[i].toLowerCase());
    } else {
      encryptedArray.push(rawEncrypted[i]);
    }
  }

  return encryptedArray.join('');
}

function analyze(array) {
  if (array.some((entry) => isNaN(Number(entry)))) {
    throw new Error('Can only analyze arrays of numbers.');
  }

  const average =
    array.length === 0
      ? undefined
      : array.map((entry) => Number(entry)).reduce((a, b) => a + b) /
        array.length;

  const min =
    array.length === 0
      ? undefined
      : Math.min(...array.map((entry) => Number(entry)));

  const max =
    array.length === 0
      ? undefined
      : Math.max(...array.map((entry) => Number(entry)));

  const length = array.length;

  return { average, min, max, length };
}

export { capitalize, reverseString, calculator, caesarCipher, analyze };
