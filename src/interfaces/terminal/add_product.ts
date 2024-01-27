import { command, run, string, number, option } from "cmd-ts";
import ProductRepositoryFile from "../../repositories/ProductRepositoryFile";
import { addProduct } from "../../usecases/product/addProduct";

const app = command({
	name: "add_product",
	args: {
		name: option({
			type: string,
			env: "APP_NAME",
			long: "name",
			short: "n",
		}),
		price: option({
			type: number,
			env: "APP_PRICE",
			long: "price",
			short: "p",
		}),
		amountInStock: option({
			type: number,
			env: "APP_INSTOCK",
			long: "amount",
			short: "a",
		}),
	},
	handler: ({ name, price, amountInStock }) => {
		const fileRepo = new ProductRepositoryFile(__dirname);
		const product = addProduct(fileRepo, {
			name,
			price,
			inStock: amountInStock,
		});
		console.log('Added product');
		console.log(product);
	},
});

run(app, process.argv.slice(2));
