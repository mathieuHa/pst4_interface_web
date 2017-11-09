export class Vulnerabilities {
  name: string;
  find: number;
  exploit: number;

  constructor(name: string, find: number, exploit: number) {
    this.name = name;
    this.find = find;
    this.exploit = exploit;
  }
}
