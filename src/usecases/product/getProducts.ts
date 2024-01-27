import ProductRepositoryInterface from '../__interfaces__/ProductRepositoryInterface';
import Product from '../../entities/Product/Product';

export const getProducts = function<T extends ProductRepositoryInterface>(
    repository: T,
): Product[] {
    return repository.getAllProducts();
}
