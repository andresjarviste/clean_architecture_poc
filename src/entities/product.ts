export default class Product {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public price: number,
    public available: boolean
  ) {}

  canBePurchased(): boolean {
    return this.available && this.price > 0;
  }
}

