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
