import Validator from '../app';

test('the name is correct', () => {
  const name = 'Diamond94-freeze_man';
  expect(new Validator().validateUsername(name)).toBeTruthy();
});

test('the name is incorrect (It should not end with numbers)', () => {
  const name = 'Diamond94-freeze_man1';

  expect(() => new Validator().validateUsername(name)).toThrowError(
    new Error(`Имя ${name} некорректно`),
  );
});

test('the name is incorrect (It should not end with a sign -)', () => {
  const name = 'Diamond94-freeze_man-';

  expect(() => new Validator().validateUsername(name)).toThrowError(
    new Error(`Имя ${name} некорректно`),
  );
});

test('the name is incorrect (It should not end with a sign _)', () => {
  const name = 'Diamond94-freeze_man_';

  expect(() => new Validator().validateUsername(name)).toThrowError(
    new Error(`Имя ${name} некорректно`),
  );
});

test('the name is incorrect (It should not start with numbers)', () => {
  const name = '1Diamond94-freeze_man';

  expect(() => new Validator().validateUsername(name)).toThrowError(
    new Error(`Имя ${name} некорректно`),
  );
});

test('the name is incorrect (It should not start with a sign -)', () => {
  const name = '-Diamond94-freeze_man';

  expect(() => new Validator().validateUsername(name)).toThrowError(
    new Error(`Имя ${name} некорректно`),
  );
});

test('the name is incorrect (It should not start with a sign _)', () => {
  const name = '_Diamond94-freeze_man';

  expect(() => new Validator().validateUsername(name)).toThrowError(
    new Error(`Имя ${name} некорректно`),
  );
});

test('the name is incorrect (It should be only in Latin)', () => {
  const name = 'Diamond94-Иван-freeze_man';

  expect(() => new Validator().validateUsername(name)).toThrowError(
    new Error(`Имя ${name} некорректно`),
  );
});