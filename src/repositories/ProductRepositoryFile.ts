import Product from '../entities/Product/Product';
import Account from '../entities/Account/Account';
import Transaction from '../entities/Transaction/Transaction';
import ProductRepositoryInterface from '../usecases/interfaces/ProductRepositoryInterface';

const products: Record<string, Product> = {};
const accounts: Record<string, Account> = {};
const transactions: Transaction[] = [];
import { readFile, writeFile } from 'fs/promises';

export default class ProductRepositoryMock implements ProductRepositoryInterface {
	constructor (private dataPath: string) {}

	writeProducts (): void {
		writeFile(`${this.dataPath}/products.json`, JSON.stringify(products)).catch((err) => {
			if (err) {
				console.error(err);
			}
		});
	}
	addProduct (product: Product): void {
		products[product.id] = product;
        this.writeProducts();
	}
	updateProduct (product: Product): void {
		this.addProduct(product);
        this.writeProducts();
	}
	getProductById (id: string): Product | null {
		return products[id] ?? null;
	}
	addAccount (account: Account): void {
		accounts[account.id] = account;
	}
	getAccountById (id: string): Account | null {
		return accounts[id] ?? null;
	}
	addTransaction (transaction: Transaction): Transaction {
		const id = transactions.length;
		transaction.id = id;
		transactions.push(transaction);
		return transaction;
	}
	getTransactions (): Transaction[] {
		return transactions;
	}
}
