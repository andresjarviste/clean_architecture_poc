import Product from "../../entities/Product/Product";

export default interface ProductRepositoryInterface {
	addProduct(product: Product): void
	getProductById(id: string): Product| null
}
