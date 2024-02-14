import TransactionPresentationInterface, {TransactionOutput} from "../__interfaces__/TransactionPresentationInterface";

export default class TransactionPresenterMock implements TransactionPresentationInterface {
    makeTransactionOutputs(transaction: TransactionOutput): string {
        return JSON.stringify(transaction);
    }
    makeTransactionListOutput(transactions: TransactionOutput[]): string {
        return JSON.stringify(transactions);
    }
}