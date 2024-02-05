import { command, run, string, number, option } from "cmd-ts";
import ProductRepositoryFile from "../../repositories/ProductRepositoryFile";
import { getProducts } from "../../usecases/product/getProducts";
import { ProductInTerminal } from './types' 
import {presentProducts} from './views/present_products'

const app = command({
	name: "show_products",
	args: {},
	handler: () => {
		const fileRepo = new ProductRepositoryFile(__dirname);
		const allProducts = getProducts(fileRepo);
		presentProducts(
            allProducts.map( p => ({
                name: p.name,
                amountInStock: p.inStock,
                sellingPrice: p.price
            }))
        )
	},
});

run(app, process.argv.slice(2));
