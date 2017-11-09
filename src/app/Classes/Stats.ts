export class Stats {
  networks: number;
  equipments: number;
  vulnerabilities: number;

  constructor(networks: number, equipments: number, vulnerabilities: number) {
    this.networks = networks;
    this.equipments = equipments;
    this.vulnerabilities = vulnerabilities;
  }
}
