import Character from '../character.js';
import Bowman from '../bowman.js';
import Magician from '../magician.js';
import Swordsman from '../swordsman.js';
import Daemon from '../daemon.js';
import Undead from '../undead.js';
import Zombie from '../zombie.js';

test('test too short name', () => {
  // const character = new Character('t', 'Magician');
  expect(() => {
    const character = new Character('t', 'Magician');
  }).toThrow('name has to be string with length 2 to 10 symbols');
});

test('test too long name', () => {
  // const character = new Character('tqeiujflkksfjsf', 'Magician');
  expect(() => {
    const character = new Character('tqeiujflkksfjsf', 'Magician');
  }).toThrow('name has to be string with length 2 to 10 symbols');
});

test('test wrong type', () => {
  // const character = new Character('first', 'Magiician');
  expect(() => {
    const character = new Character('first', 'Magiician');
  }).toThrow('type has to be one from these values: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});

test('test name', () => {
  const character = new Character('first', 'Magician');
  expect(character.name).toBe('first');
});

test('test type', () => {
  const character = new Character('first', 'Magician');
  expect(character.type).toBe('Magician');
});

test('test health', () => {
  const character = new Character('first', 'Magician');
  expect(character.health).toBe(100);
});

test('test level', () => {
  const character = new Character('first', 'Magician');
  expect(character.level).toBe(1);
});

test('test Bowman', () => {
  const hero = new Bowman('first');
  expect(hero.attack).toBe(25);
});

test('test Bowman', () => {
  const hero = new Bowman('first');
  expect(hero.defence).toBe(25);
});

test('test Swordsman', () => {
  const hero = new Swordsman('first');
  expect(hero.attack).toBe(40);
});

test('test Swordsman', () => {
  const hero = new Swordsman('first');
  expect(hero.defence).toBe(10);
});

test('test Magician', () => {
  const hero = new Magician('first');
  expect(hero.attack).toBe(10);
});

test('test Magician', () => {
  const hero = new Magician('first');
  expect(hero.defence).toBe(40);
});

test('test Daemon', () => {
  const hero = new Daemon('first');
  expect(hero.attack).toBe(10);
});

test('test Daemon', () => {
  const hero = new Daemon('first');
  expect(hero.defence).toBe(40);
});

test('test Undead', () => {
  const hero = new Undead('first');
  expect(hero.attack).toBe(25);
});

test('test Undead', () => {
  const hero = new Undead('first');
  expect(hero.defence).toBe(25);
});

test('test Zombie', () => {
  const hero = new Zombie('first');
  expect(hero.attack).toBe(40);
});

test('test Zombie', () => {
  const hero = new Zombie('first');
  expect(hero.defence).toBe(10);
});

test('test level up', () => {
  const character = new Bowman('first');
  character.levelUp();
  expect(character.level).toBe(2);
});

test('test level up defence', () => {
  const character = new Magician('first');
  character.levelUp();
  expect(character.defence).toBe(48);
});

test('test level up attack', () => {
  const character = new Magician('first');
  character.levelUp();
  expect(character.attack).toBe(12);
});

test('test level up health', () => {
  const character = new Character('first', 'Magician');
  character.health = 60;
  character.levelUp();
  expect(character.health).toBe(100);
});

test('test level up for dead', () => {
  const character = new Character('first', 'Magician');
  character.health = 0;
  expect(() => {
    character.levelUp();
  }).toThrow("Level of dead hero can't be increased");
});

test('test damage', () => {
  const character = new Magician('first');
  character.damage(20);
  expect(character.health).toBe(88);
});

test('test damage for dead', () => {
  const character = new Character('first', 'Magician');
  character.health = 0;
  expect(() => {
    character.damage(20);
  }).toThrow("Level of dead hero can't be changed");
});
