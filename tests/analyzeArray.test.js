import analyzeArray from '../functions/analyzeArray';

test('returns object', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toBeInstanceOf(Object);
});

test('returns object with average property with correct value', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty('average', 4);
});

test('returns object with average property with correct value', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty('min', 1);
});

test('returns object with average property with correct value', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty('max', 8);
});

test('returns object with average property with correct value', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty('length', 6);
});