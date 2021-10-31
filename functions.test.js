import { expect, test } from '@jest/globals';
import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyze,
} from './functions';

// capitalize(string)

test('capitalizes cat to Cat', () => {
  expect(capitalize('cat')).toBe('Cat');
});

test('returns same string if already capitalized', () => {
  expect(capitalize('Cat')).toBe('Cat');
});

test('returns same string if first character is number', () => {
  expect(capitalize('123')).toBe('123');
});

test('returns same string if first character is symbol', () => {
  expect(capitalize('&ampersand')).toBe('&ampersand');
});

test('returns same string if first character is space', () => {
  expect(capitalize(' string')).toBe(' string');
});

test('returns same string if empty', () => {
  expect(capitalize('')).toBe('');
});

// reverseString(string)

test('reverses cat to tac', () => {
  expect(reverseString('cat')).toBe('tac');
});

test('returns same string if empty', () => {
  expect(reverseString('')).toBe('');
});

test('returns same string if palindrome', () => {
  expect(reverseString('racecar')).toBe('racecar');
});

test('flips case too', () => {
  expect(reverseString('aPpLeS')).toBe('SeLpPa');
});

test('works with white space', () => {
  expect(reverseString('namdoog luas')).toBe('saul goodman');
});

// calculator.add

test('adds 4 + 3 to get 7', () => {
  expect(calculator.add(4, 3)).toEqual(7);
});

test('adds floating point numbers', () => {
  expect(calculator.add(2.345, 8.765)).toBeCloseTo(11.11);
});

test('adds string numbers as actual numbers', () => {
  expect(calculator.add('4', '3')).toEqual(7);
});

test('throws error if added string converts to NaN', () => {
  expect(() => {
    calculator.add(1, 'x');
  }).toThrow(new Error('Cannot add non-numbers.'));
});

// calculator.subtract

test('subtracts 3 from 4 to get 1', () => {
  expect(calculator.subtract(4, 3)).toEqual(1);
});

test('subtracts floating point numbers', () => {
  expect(calculator.subtract(8.765, 2.345)).toBeCloseTo(6.42);
});

test('subtracts string numbers as actual numbers', () => {
  expect(calculator.subtract('4', '3')).toEqual(1);
});

test('throws error if subtracted string converts to NaN', () => {
  expect(() => {
    calculator.subtract(1, 'x');
  }).toThrow(new Error('Cannot subtract non-numbers.'));
});

// calculator.multiply

test('multiplies 3 by 4 to get 12', () => {
  expect(calculator.multiply(3, 4)).toEqual(12);
});

test('multiplies floating point numbers', () => {
  expect(calculator.multiply(2.345, 8.765)).toBeCloseTo(20.55);
});

test('multiplies string numbers as actual numbers', () => {
  expect(calculator.multiply('3', '4')).toEqual(12);
});

test('throws error if multiplied string converts to NaN', () => {
  expect(() => {
    calculator.multiply(1, 'x');
  }).toThrow(new Error('Cannot multiply non-numbers.'));
});

// calculator.divide

test('divides 8 by 4 to get 2', () => {
  expect(calculator.divide(8, 4)).toEqual(2);
});

test('divides floating point numbers', () => {
  expect(calculator.divide(8.765, 2.345)).toBeCloseTo(3.74);
});

test('divides string numbers as actual numbers', () => {
  expect(calculator.divide('8', '4')).toEqual(2);
});

test('throws error if divided string converts to NaN', () => {
  expect(() => {
    calculator.divide(1, 'x');
  }).toThrow(new Error('Cannot divide non-numbers.'));
});

test('returns undefined if dividing by 0', () => {
  expect(calculator.divide(59302, 0)).toBe(undefined);
});

// caesarCipher

test('encrypts "abc" with shift of 3 to "def"', () => {
  expect(caesarCipher('abc', 3)).toBe('def');
});

test('allows negative shifts', () => {
  expect(caesarCipher('def', -3)).toBe('abc');
});

test('wraps z to a', () => {
  expect(caesarCipher('zap', 1)).toBe('abq');
});

test('preserves case', () => {
  expect(caesarCipher('qjJkOctm', -2)).toBe('ohHiMark');
});

test('preserves numbers', () => {
  expect(caesarCipher('1 ring', 2)).toBe('1 tkpi');
});

test('preserves punctuation and symbols', () => {
  expect(caesarCipher("can't you?", 1)).toBe("dbo'u zpv?");
});

test('throws error if input not string', () => {
  expect(() => {
    caesarCipher(123, 1);
  }).toThrow(new Error('Can only encrypt strings.'));
});

// analyze

test('averages 1, 2, and 6 to get 9', () => {
  expect(analyze([1, 2, 6]).average).toEqual(3);
});

test('returns minimum of 1, 2, and 6 as 1', () => {
  expect(analyze([1, 2, 6]).min).toEqual(1);
});

test('returns maximum of 1, 2, and 6 as 6', () => {
  expect(analyze([1, 2, 6]).max).toEqual(6);
});

test('returns length of 1, 2, and 6 as 3', () => {
  expect(analyze([1, 2, 6]).length).toEqual(3);
});

test('handles floating point averages', () => {
  expect(analyze([1, 2, 4]).average).toBeCloseTo(2.33);
});

test('handles string numbers', () => {
  expect(analyze(['1', '2', '6'])).toEqual({
    average: 3,
    min: 1,
    max: 6,
    length: 3,
  });
});

test('handles empty arrays', () => {
  expect(analyze([])).toEqual({
    average: undefined,
    min: undefined,
    max: undefined,
    length: 0,
  });
});

test('throws error if analyzed string converts to NaN', () => {
  expect(() => {
    analyze(['&', '!', '@']).toThrow(
      new Error('Can only analyze arrays of numbers.')
    );
  });
});
