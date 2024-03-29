import Product from "../../../entities/Product/Product";
import Account from "../../../entities/Account/Account";
import ProductRepositoryMock from "../../mocks/ProductRepositoryMock";
import { purchase } from "../purchase";
import Transaction from "../../../entities/Transaction/Transaction";

const TEST_PRODUCT_ID = "FAKE_UUID_1";
const TEST_ACCOUNT_ID = "FAKE_UUID_2";

describe("Purchase Use Case", () => {
	test("successful purchase", () => {
		const product = new Product(
			TEST_PRODUCT_ID,
			"apple",
			"common fruit",
			9.99,
			true,
			10
		);
		const account = new Account(
			TEST_ACCOUNT_ID,
			"Nipi",
			"Tiri",
			new Date()
		);

		const repo = new ProductRepositoryMock();
		repo.addProduct(product);
		repo.addAccount(account);

		const result = purchase(repo, {
			productId: TEST_PRODUCT_ID,
			accountId: TEST_ACCOUNT_ID,
			amount: 2,
		});

		expect(result).toBeInstanceOf(Transaction);
		expect(product.inStock).toBe(8);
	});
});
