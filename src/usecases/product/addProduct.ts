import ProductRepositoryInterface from '../__interfaces__/ProductRepositoryInterface';
import Product from '../../entities/Product/Product';
import { v4 as uuid } from 'uuid';

export type DTONewProduct = {
    name:  string,
    price: number,
    inStock: number
}

export const addProduct = function<T extends ProductRepositoryInterface>(
    repository: T,
    productData: DTONewProduct,
): Product {
    const id: string = uuid();
    const product = new Product(
        id,
        productData.name,
        'Best ' + productData.name,
        productData.price,
        true,
        productData.inStock
    )

    repository.addProduct(product);
    return product;
}
