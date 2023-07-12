import calculator from '../functions/calculator.js';

test('add function with numbers 2 and 2 returns 4', () => {
  expect(calculator.add(2, 2)).toEqual(4);
});

test('subtract function with numbers 5 and 3 returns 2', () => {
  expect(calculator.subtract(5, 3)).toEqual(2);
});

test('multiply function with numbers 3 and 3 returns 9', () => {
  expect(calculator.multiply(3, 3)).toEqual(9);
});

test('divide function with numbers 15 and 3 returns 5', () => {
  expect(calculator.divide(15, 3)).toEqual(5);
});