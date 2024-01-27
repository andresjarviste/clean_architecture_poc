import { command, run, string, number, option, flag, boolean } from 'cmd-ts';

const app = command({
	name: 'add_product',
	args: {
		name: option({
			type: string,
			env: 'APP_NAME',
			long: 'name',
			short: 'n',
		  }),
		price: option({
			type: number,
			env: 'APP_PRICE',
			long: 'price',
			short: 'p'
		}),  		
		amountInStock: option({
			type: number,
			env: 'APP_INSTOCK',
			long: 'amount',
			short: 'a'
		})
	},
	handler: ({  name, price, amountInStock  }) => {
		console.log({ name, price, amountInStock });
	  },
});


run(app, process.argv.slice(2));

