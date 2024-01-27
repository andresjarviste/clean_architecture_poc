import ProductRepositoryInterface from '../interfaces/ProductRepositoryInterface';
import Product from '../../entities/Product/Product';
import Account from '../../entities/Account/Account';
import Transaction from '../../entities/Transaction/Transaction';

export type DTOProduct = {
	productId: string,
	accountId: string,
	amount: number
};

export const purchase = function <T extends ProductRepositoryInterface>(
	repository: T,
	purchase: DTOProduct
): Transaction | null {
	const product = repository.getProductById(purchase.productId);
	const account = repository.getAccountById(purchase.accountId);

	if (!product || !account) {
		return null;
	}

	product?.addToStock(purchase.amount);

	const transaction = new Transaction(
		null,
		new Date(),
		product,
		purchase.amount,
		account
	);

	return transaction	
}