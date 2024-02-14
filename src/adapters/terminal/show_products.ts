import { command, run, string, number, option } from "cmd-ts";
import ProductRepositoryFile from "../../repositories/ProductRepositoryFile";
import { getProducts } from "../../usecases/product/getProducts";
import ProductsPresenterTerminal from "./presenters/ProductsPresenterTerminal";

const app = command({
	name: "show_products",
	args: {},
	handler: () => {
		const fileRepo = new ProductRepositoryFile(__dirname);
		getProducts(fileRepo, new ProductsPresenterTerminal());
	},
});

run(app, process.argv.slice(2));

