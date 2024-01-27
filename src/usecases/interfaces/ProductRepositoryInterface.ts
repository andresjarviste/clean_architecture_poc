import Product from "../../entities/Product/Product";
import Account from "../../entities/Account/Account";
import Transaction from "../../entities/Transaction/Transaction";

export default interface ProductRepositoryInterface {
	addProduct(product: Product): void;
	updateProduct(product: Product): void;

	getProductById(id: string): Product | null;

	addAccount(account: Account): void;
	getAccountById(id: string): Account | null;

	addTransaction(transaction: Transaction): Transaction;
	getTransactions(): Transaction[];
}
