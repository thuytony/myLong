import { City } from "./City"
import { Nurse } from "./Nurse"

export class ListPopular {
  citiesPopular?: City[]
  nursePopular?: Nurse[]

  constructor(cities?: City[], nurses?: City[]) {
    if (cities) { this.citiesPopular = cities };
    if (nurses) { this.nursePopular = nurses };
  }
}
