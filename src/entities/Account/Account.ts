
export default class Account {
  constructor(
    public id: string,
    public firsName: string,
    public lastName: string,
    public created: Date
  ) {}

  getFullName(): string {
    return this.firsName + ' ' + this.lastName;
  }
}
