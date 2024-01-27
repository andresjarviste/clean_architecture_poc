import ProductRepositoryMock from '../../mocks/ProductRepositoryMock';
import { addAccount } from '../addAccount';

describe('Add Account Use Case', () => {
	test('Successfully added new account', () => {
		const repo = new ProductRepositoryMock();
		const createdAccount = addAccount(repo, {
			firstName: 'Jack',
			lastName: 'Smith',
		});
        
        const loadedAccount = repo.getAccountById(createdAccount.id);
        expect(loadedAccount).toBeTruthy();
	});
});
