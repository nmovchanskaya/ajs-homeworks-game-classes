import Character from './character.js';

export default class Swordsman extends Character {
  constructor(name, type) {
    super(name, 'Swordsman');
    this.attack = 40;
    this.defence = 10;
  }
}
