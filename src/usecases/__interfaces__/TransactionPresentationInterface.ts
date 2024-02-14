
export type TransactionOutput = {
	transactionId: string,
	productId: string;
	productName: string;
	accountId: string;
	accountName: string;
	amount: number;
	date: Date;
}

export default interface TransactionPresentationInterface {
    makeTransactionOutputs(transactions: TransactionOutput): string;
	makeTransactionListOutput(transactions: TransactionOutput[]): string;
}
