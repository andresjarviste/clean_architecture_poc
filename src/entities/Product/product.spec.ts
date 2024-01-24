import Product from './Product';

describe('Product', () => {
	test('should create Product that can be purchased', () => {
		const product = new Product(
			1,
			'apple',
			'common fruit',
			9.99,
			true
		);
		expect(product.canBePurchased()).toBeTruthy();
	});
	test('should create Product that can not be purchased', () => {
		const product = new Product(
			1,
			'orange',
			'common fruit',
			2,
			false
		);
		expect(product.canBePurchased()).toBeFalsy();
	});
});

