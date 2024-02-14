import ProductRepositoryMock from '../../mocks/ProductRepositoryMock';
import ProductPresenterMock from '../../mocks/ProductPresenterMock';
import {ProductOutput} from '../../__interfaces__/ProductPresentationInterface';
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

		const productsPresenterMock = new ProductPresenterMock();
		productsPresenterMock.renderProductList = (products: ProductOutput[]) => {
			//test that output of the use case is as expected
			expect(products.length).toBe(2);
		}

		getProducts(repo, productsPresenterMock);

	});
});
