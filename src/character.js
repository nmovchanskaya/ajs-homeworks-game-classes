export default class Character {
  constructor(name, type) {
    const typeArr = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('name has to be string with length 2 to 10 symbols');
    }
    if (typeArr.indexOf(type) === -1) {
      throw new Error('type has to be one from these values: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error("Level of dead hero can't be increased");
    }

    this.level += 1;
    this.health = 100;
    this.attack *= 1.2;
    this.defence *= 1.2;
  }

  damage(points) {
    if (this.health === 0) {
      throw new Error("Level of dead hero can't be changed");
    }

    this.health -= points * (1 - this.defence / 100);
  }
}
