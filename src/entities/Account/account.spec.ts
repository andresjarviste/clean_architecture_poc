import Account from "./Account";

describe('Account', () => {
	test('Account name is correct', () => {
		const account = new Account(
			'test',
			'John',
			'Smith',
			new Date()
		)
		
		expect(account.getFullName()).toBe('John Smith');
	});
});

