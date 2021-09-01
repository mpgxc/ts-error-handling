import { Account } from './Account';

type AccountPersistence = {
    id: string;
    name: string;
    email: string;
    password: string;
};

class AccountMapper {
    public static toPersistence(account: Account): AccountPersistence {
        return {
            id: account.id,
            name: account.name,
            email: account.email,
            password: account.password,
        };
    }
}

export { AccountMapper };
