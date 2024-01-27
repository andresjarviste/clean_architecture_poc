import Product from "../Product/Product";
import Account from "../Account/Account";

export default class Transaction {
  constructor(
    public id: number | null,
    public date: Date,
    public product: Product,
    public amount: number,
    public account: Account
  ) {}
}
