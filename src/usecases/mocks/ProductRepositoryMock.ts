import Product from "../../entities/Product/Product";
import Account from "../../entities/Account/Account";
import Transaction from "../../entities/Transaction/Transaction";
import ProductRepositoryInterface from "../__interfaces__/ProductRepositoryInterface";

export default class ProductRepositoryMock
	implements ProductRepositoryInterface
{
	products: Record<string, Product> = {};
	accounts: Record<string, Account> = {};
	transactions: Transaction[] = [];

	addProduct(product: Product): void {
		this.products[product.id] = product;
	}
	updateProduct(product: Product): void {
		this.addProduct(product);
	}
	getAllProducts() {
		return Object.keys(this.products).map((key) => this.products[key]);
	}
	getProductById(id: string): Product | null {
		return this.products[id] ?? null;
	}
	addAccount(account: Account): void {
		this.accounts[account.id] = account;
	}
	getAccountById(id: string): Account | null {
		return this.accounts[id] ?? null;
	}
	addTransaction(transaction: Transaction): Transaction {
		const id = this.transactions.length;
		transaction.id = id;
		this.transactions.push(transaction);
		return transaction;
	}
	getTransactions(): Transaction[] {
		return this.transactions;
	}
}
