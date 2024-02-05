import { APIPurchase } from '../../../usecases/product/purchase';
import { TransactiontInTerminal } from '../types';

function outputRow(
	id: string,
	productName: string,
	accountName: string,
	amount: string,
) {
    const idLength = 10;
    const productNameLength = 30;
    const accountNameLength = 10;
    const amountLength = 10;
    let output = '|';
    output += id.padEnd(idLength-1);
    output += '|';
    output += productName.padStart(productNameLength-1);
    output += '|';
    output += accountName.padStart(accountNameLength-1);
    output += '|';
    output += amount.toString().padStart(amountLength-1);
    output += '|';
    console.log(output);
    console.log('-'.padEnd(idLength+productNameLength+accountNameLength+amountLength+1, '-'))
}

export const presentTransactions = (transactions: TransactiontInTerminal[]) => {
    outputRow('Id', 'Product name', 'Account name', 'Amount', );
    transactions.forEach((t) => {
        outputRow(t.id, t.productName, t.accountName, t.amount.toString());
    })
}