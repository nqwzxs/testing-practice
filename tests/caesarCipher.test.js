import caesarCipher from '../functions/caesarCipher';

test('returns string shifted forward by 1', () => {
  expect(caesarCipher('hello', 1)).toBe('ifmmp');
});

test('returns string shifted forward wrapping from z to a', () => {
  expect(caesarCipher('zzz', 1)).toBe('aaa');
});

test('returns string shifted forward by 5 keeping the same case', () => {
  expect(caesarCipher('Hello', 5)).toBe('Mjqqt');
});

test('returns sentence shifted forward by 5 without shifting punctuations', () => {
  expect(caesarCipher('hello, world!', 5)).toBe('mjqqt, btwqi!');
});

test('returns sentence shifted forward by 5 without shifting punctuations', () => {
  expect(caesarCipher('hello, world!', 5)).toBe('mjqqt, btwqi!');
});

test('returns sentence shifted forward by 5 without shifting punctuations', () => {
  expect(caesarCipher('hello, world!', 5)).toBe('mjqqt, btwqi!');
});