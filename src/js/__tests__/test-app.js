import Bowerman from '../Bowman';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Undead from '../Undead';
import Zombie from '../Zombie';
import Daemon from '../Daemon';
import Character from '../Character';

test('create the character "Bowman"', () => {
  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Anatoly',
    type: 'Bowman',
  };

  const received = new Bowerman('Anatoly');

  expect(received).toEqual(expected);
});

test('create the character "Swordsman"', () => {
  const expected = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Anatoly',
    type: 'Swordsman',
  };

  const received = new Swordsman('Anatoly');

  expect(received).toEqual(expected);
});

test('create the character "Magician"', () => {
  const expected = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Anatoly',
    type: 'Magician',
  };

  const received = new Magician('Anatoly');

  expect(received).toEqual(expected);
});

test('create the character "Undead"', () => {
  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Anatoly',
    type: 'Undead',
  };

  const received = new Undead('Anatoly');

  expect(received).toEqual(expected);
});

test('create the character "Zombie"', () => {
  const expected = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Anatoly',
    type: 'Zombie',
  };

  const received = new Zombie('Anatoly');

  expect(received).toEqual(expected);
});

test('create the character "Daemon"', () => {
  const expected = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Anatoly',
    type: 'Daemon',
  };

  const received = new Daemon('Anatoly');

  expect(received).toEqual(expected);
});

test('uncorrect name character', () => {
  expect(() => new Daemon('A')).toThrowError(
    new Error('Длина имени должна быть не менее 2-ух и не более 10-ти символов'),
  );
});

test('uncorrect type character', () => {
  expect(() => new Character('Anatoly', 'Druid')).toThrowError(
    new Error('Некорректный тип персонажа'),
  );
});