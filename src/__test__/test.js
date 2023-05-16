import Character from '../character.js';

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

test.each([
  ['Bowman', 25],
  ['Swordsman', 40],
  ['Magician', 10],
  ['Daemon', 10],
  ['Undead', 25],
  ['Zombie', 40],
])(
  ('test value of attack for %t type'),
  (type, expected) => {
    const character = new Character('first', type);
    expect(character.attack).toBe(expected);
  },
);

test.each([
  ['Bowman', 25],
  ['Swordsman', 10],
  ['Magician', 40],
  ['Daemon', 40],
  ['Undead', 25],
  ['Zombie', 10],
])(
  ('test value of defence for %t type'),
  (type, expected) => {
    const character = new Character('first', type);
    expect(character.defence).toBe(expected);
  },
);

test('test level up', () => {
  const character = new Character('first', 'Magician');
  character.levelUp();
  expect(character.level).toBe(2);
});

test('test level up defence', () => {
  const character = new Character('first', 'Magician');
  character.levelUp();
  expect(character.defence).toBe(48);
});

test('test level up attack', () => {
  const character = new Character('first', 'Magician');
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
  const character = new Character('first', 'Magician');
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
