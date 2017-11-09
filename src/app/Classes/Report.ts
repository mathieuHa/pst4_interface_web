
import {Times} from './Times';
import {Equipments} from './Equipments';
import {Network} from './Network';
import {Stats} from './Stats';
import {Vulnerabilities} from './Vulnerabilities';

export class Report {
  version: number;
  equipments: Equipments[];
  networks: Network[];
  stats: Stats;
  vulnerabilities: Vulnerabilities;
  time: Times;
  constructor(version: number, equipments: Equipments[], networks: Network[], stats: Stats, vulnerabilities: Vulnerabilities, time: Times) {
    this.version = version;
    this.equipments = equipments;
    this.networks = networks;
    this.stats = stats;
    this.vulnerabilities = vulnerabilities;
    this.time = time;
  }
}
