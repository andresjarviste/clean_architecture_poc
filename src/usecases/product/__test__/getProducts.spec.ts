import ProductRepositoryMock from '../../mocks/ProductRepositoryMock';
import { getProducts } from '../getProducts';
import { addProduct } from '../addProduct';

describe('Get Product Use Case', () => {
	test('Get all products', () => {
		const repo = new ProductRepositoryMock();
        addProduct(repo, {
			name: 'Orange',
			price: 1.5,
			inStock: 20
		})
        addProduct(repo, {
			name: 'Lemon',
			price: 1.4,
			inStock: 20
		})
		const allProducts = getProducts(repo);
        
        expect(allProducts.length).toBe(2);
	});
});
