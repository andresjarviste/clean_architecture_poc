import { APIPurchase } from '../../../usecases/product/purchase';
import { TransactiontInTerminal } from '../types';

function outputRow(
	id: string,
	productName: string,
	accountName: string,
	amount: string,
) {
    const idLength = 10;
    const productNameLength = 20;
    const accountNameLength = 20;
    const amountLength = 10;
    let output = '| ';
    output += id.padEnd(idLength-1);
    output += ' | ';
    output += productName.padEnd(productNameLength-3);
    output += ' | ';
    output += accountName.padStart(accountNameLength-3);
    output += ' | ';
    output += amount.toString().padStart(amountLength-3);
    output += ' |';
    console.log(output);
    console.log('-'.padEnd(idLength+productNameLength+accountNameLength+amountLength+3, '-'))
}

export const presentTransactions = (transactions: TransactiontInTerminal[]) => {
    outputRow('Id', 'Product name', 'Account', 'Amount', );
    transactions.forEach((t) => {
        outputRow(t.id, t.productName, t.accountName, t.amount.toString());
    })
}