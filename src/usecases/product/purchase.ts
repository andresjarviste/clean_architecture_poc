import ProductRepositoryInterface from "../__interfaces__/ProductRepositoryInterface";
import Transaction from "../../entities/Transaction/Transaction";

export type DTOTransaction = {
	productId: string;
	accountId: string;
	amount: number;
};

export type APIPurchase = {
	transactionId: string,
	productId: string;
	productName: string;
	accountId: string;
	accountName: string;
	amount: number;
	date: Date;
};

export const purchase = function <T extends ProductRepositoryInterface>(
	repository: T,
	purchase: DTOTransaction
): Transaction | null {
	const product = repository.getProductById(purchase.productId);
	const account = repository.getAccountById(purchase.accountId);

	if (!product || !account) {
		console.log("product or account not found");
		return null;
	}

	product.addToStock(purchase.amount * -1);
	repository.updateProduct(product);

	const transaction = new Transaction(
		null,
		new Date(),
		product,
		purchase.amount,
		account
	);

	repository.addTransaction(transaction);

	return transaction;
};

export const getAllPurchases = function <T extends ProductRepositoryInterface>(
	repository: T
): APIPurchase[] {
	let apiPurchases = <APIPurchase[]>[];

	const purchases = repository.getTransactions();
	if (!purchases) {
		return apiPurchases;
	}

	apiPurchases = purchases.map((transaction) => {
		const account = transaction.account;
		return {
			transactionId: (transaction.id ?? 'NA').toString(),
			productId: transaction.product.id,
			productName: transaction.product.name,
			accountId: account.id,
			accountName: `${account.firsName} ${account.lastName}`,
			amount: transaction.amount,
			date: transaction.date
		}
	});
	return apiPurchases;
};
