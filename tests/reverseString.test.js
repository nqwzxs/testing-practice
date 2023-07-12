import reverseString from '../functions/reverseString';

test('returns reversed word', () => {
  expect(reverseString('house')).toBe('esuoh');
});

test('returns reversed sentence', () => {
  expect(reverseString('Hello world!')).toBe('!dlrow olleH');
});