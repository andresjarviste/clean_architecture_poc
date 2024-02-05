import { command, run, string, number, option } from "cmd-ts";
import ProductRepositoryFile from "../../repositories/ProductRepositoryFile";
import { getAllPurchases } from "../../usecases/product/purchase";
import { TransactiontInTerminal } from "./types";
import { presentTransactions } from "./views/present_transactions";

const app = command({
	name: "show_transactions",
	args: {},
	handler: () => {
		const fileRepo = new ProductRepositoryFile(__dirname);
		const transactions = getAllPurchases(fileRepo);
		presentTransactions(
            transactions.map( p => ({
				id: p.transactionId,
				productName: p.productName,
				accountName: p.accountName,
				amount: p.amount
            }))
        )
	},
});

run(app, process.argv.slice(2));
