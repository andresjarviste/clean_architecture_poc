import ProductRepositoryInterface from '../interfaces/ProductRepositoryInterface';
import Account from '../../entities/Account/Account';
import { v4 as uuid } from 'uuid';

export type DTONewAccount = {
    firstName: string,
    lastName:  string,
}

export const addAccount = function<T extends ProductRepositoryInterface>(
    repository: T,
    accountData: DTONewAccount,
): Account {
    const id: string = uuid();
    const account = new Account(
        id,
        accountData.firstName,
        accountData.lastName,
        new Date()
    )

    repository.addAccount(account);
    return account;
}
