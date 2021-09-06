export class User {
  id?: number
  name?: string
  token?: string

  constructor(id?: number, name?: string, token?: string) {
    if (id) { this.id = id };
    if (name) { this.name = name };
    if (token) { this.token = token };
  }
}
