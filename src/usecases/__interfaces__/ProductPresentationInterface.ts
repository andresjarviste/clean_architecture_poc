
export type ProductOutput = {
	id: string;
	name: string;
	description: string;
	price: number;
}

export default interface ProductPresenterInterface {
    renderProductList(transactions: ProductOutput[]): void;
}
