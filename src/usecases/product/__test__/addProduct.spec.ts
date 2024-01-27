import Product from '../../../entities/Product/Product';
import Account from '../../../entities/Account/Account';
import ProductRepositoryMock from '../../test/ProductRepositoryMock';
import { addProduct } from '../addProduct';

describe('Add Product Use Case', () => {
	test('Successfully added new product', () => {
		const repo = new ProductRepositoryMock();
		const createdProduct = addProduct(repo, {
			name: 'Orange',
			price: 1.5,
			inStock: 20
		});
        
        const loadedProduct = repo.getProductById(createdProduct.id);
        expect(loadedProduct).toBeTruthy();
	});
});
