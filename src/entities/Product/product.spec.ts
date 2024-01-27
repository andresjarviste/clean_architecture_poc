import Product from './Product';

describe('Product', () => {
	test('should create Product that can be purchased', () => {
		const product = new Product(
			"1",
			'apple',
			'common fruit',
			9.99,
			true,
			10
		);
		expect(product.canBePurchased()).toBeTruthy();
	});
	test('should create Product that can not be purchased', () => {
		const product = new Product(
			"1",
			'orange',
			'common fruit',
			2,
			false,
			0
		);
		expect(product.canBePurchased()).toBeFalsy();
	});
	test('remove from inventory', () => {
		const product = new Product(
			"1",
			'orange',
			'common fruit',
			2,
			true,
			5
		);
		expect(product.addToStock(-7)).toBe(0);
	});
});

