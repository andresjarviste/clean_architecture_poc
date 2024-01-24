import Product from "../../entities/Product/Product";
import ProductRepositoryInterface from "../interfaces/ProductRepositoryInterface";

export default class ProductRepositoryMock implements ProductRepositoryInterface {
	products: Record<string, Product> = {}
	addProduct(product: Product): void {
		this.products[product.id] = product;
	}
	getProductById(id: string): Product | null {
		return this.products[id] ?? null;
	}
}
