import { command, run, string, option } from "cmd-ts";
import ProductRepositoryFile from "../../repositories/ProductRepositoryFile";
import { addAccount } from "../../usecases/account/addAccount";

const app = command({
	name: "add_account",
	args: {
		first: option({
			type: string,
			env: "APP_FIRST_NAME",
			long: "firstname",
			short: "f",
		}),
		last: option({
			type: string,
			env: "APP_LAST_NAME",
			long: "lastname",
			short: "l",
		}),
	},
	handler: ({ first, last }) => {
		const fileRepo = new ProductRepositoryFile(__dirname);
		const account = addAccount(fileRepo, {
			firstName: first,
			lastName: last,
		});
		console.log('Added account');
		console.log(account);
	},
});

run(app, process.argv.slice(2));
