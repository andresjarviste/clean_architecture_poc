import Product from '../entities/Product/Product';
import Account from '../entities/Account/Account';
import Transaction from '../entities/Transaction/Transaction';
import ProductRepositoryInterface from '../usecases/__interfaces__/ProductRepositoryInterface';

let products: Record<string, Product> = {};
let accounts: Record<string, Account> = {};
let transactions: Transaction[] = [];
import { readFileSync, writeFileSync } from 'fs';

export default class ProductRepositoryFile implements ProductRepositoryInterface {
	private productsPath: string;
	private accountsPath: string;
	private transactionsPath: string;
	constructor (private dataPath: string) {
		this.productsPath = `${this.dataPath}/products.json`;
		this.accountsPath = `${this.dataPath}/accounts.json`;
		this.transactionsPath = `${this.dataPath}/transactions.json`;
		products = this.readProducts();
		accounts = this.readAccounts();
		//transactions = this.readTransactions();
	}

	writeProducts(): void {
		writeFileSync(this.productsPath, JSON.stringify(products));
	}
	
	writeAccounts(): void {
		writeFileSync(this.accountsPath, JSON.stringify(accounts));
	}
	
	writeTransactions(): void {
		writeFileSync(this.transactionsPath, JSON.stringify(transactions));
	}

	readProducts(): Record<string, Product> {
		let products = {};
		try {
			let productString = readFileSync(this.productsPath, 'utf-8');
			products = JSON.parse(productString);
		} catch(err) {
			console.log(err);
		}
		return products;
	}
	readAccounts(): Record<string, Account> {
		let accounts = {};
		try {
			let accountsString = readFileSync(this.accountsPath, 'utf-8');
			accounts = JSON.parse(accountsString);
		} catch(err) {
			console.log(err);
		}
		return accounts;
	}
	readTransactions(): Transaction[] {
		let transactions = [];
		try {
			let transactionString = readFileSync(this.transactionsPath, 'utf-8');
			transactions = JSON.parse(transactionString);
		} catch(err) {
			console.log(err);
		}
		return transactions;
	}


	addProduct (product: Product): void {
		products[product.id] = product;
        this.writeProducts();
	}
	updateProduct (product: Product): void {
		this.addProduct(product);
        this.writeProducts();
	}
	getAllProducts() {
		return Object.keys(products).map((key) => products[key]);
	}
	getProductById (id: string): Product | null {
		return products[id] ?? null;
	}
	addAccount (account: Account): void {
		accounts[account.id] = account;
		this.writeAccounts();
	}
	getAccountById (id: string): Account | null {
		return accounts[id] ?? null;
	}
	addTransaction (transaction: Transaction): Transaction {
		const id = transactions.length;
		transaction.id = id;
		transactions.push(transaction);
		this.writeTransactions();
		return transaction;
	}
	getTransactions (): Transaction[] {
		return transactions;
	}
}
