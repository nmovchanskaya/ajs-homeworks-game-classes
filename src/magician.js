import Character from './character.js';

export default class Magician extends Character {
  constructor(name, type) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
  }
}
