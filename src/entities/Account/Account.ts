
export default class Account {
  constructor(
    public id: number,
    public firsName: string,
    public lastName: string,
    public created: Date
  ) {}

  getFullName(): string {
    return this.firsName + ' ' + this.lastName;
  }
}
