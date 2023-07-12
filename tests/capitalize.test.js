import capitalize from '../functions/capitalize';

test('returns word with the first character capitalized', () => {
  expect(capitalize('java')).toBe('Java');
});

test('returns sentence with the first character capitalized', () => {
  expect(capitalize('hello world!')).toBe('Hello world!');
});

test('returns empty string when empty string is provided', () => {
  expect(capitalize('')).toBe('');
});