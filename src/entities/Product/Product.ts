export type ProductData = {
	id: string;
	name: string;
	description: string;
	price: number;
	available: boolean;
	inStock: number;
};

export default class Product {
	constructor(
		public id: string,
		public name: string,
		public description: string,
		public price: number,
		public available: boolean,
		public inStock: number
	) {}

	canBePurchased(): boolean {
		return this.available && this.price > 0;
	}

	addToStock(toAdd: number): number {
		this.inStock += toAdd;
		if (this.inStock < 0) {
			this.inStock = 0;
		}
		return this.inStock;
	}
}

export function makeProduct(rec: ProductData): Product {
	return new Product(
		rec.id,
		rec.name,
		rec.description,
		rec.price,
		rec.available,
		rec.inStock
	);
}
