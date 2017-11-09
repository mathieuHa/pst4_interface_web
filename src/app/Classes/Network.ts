export class Network {
  name: string;
  equipments: number;
  type: string;

  constructor(name: string, equipments: number, type: string) {
    this.name = name;
    this.equipments = equipments;
    this.type = type;
  }
}
