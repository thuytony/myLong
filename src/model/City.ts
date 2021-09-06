export class City {
  id?: number
  district?: string
  state?: string
  match?: number
  price?: string

  constructor(id?: number, district?: string, state?: string, match?: number, price?: string) {
    if (id) { this.id = id };
    if (district) { this.district = district };
    if (state) { this.state = state };
    if (match) { this.match = match };
    if (price) { this.price = price };
  }
}
