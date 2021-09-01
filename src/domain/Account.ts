import { v4 as uuid } from 'uuid';

import { Email } from './Email';
import { Name } from './Name';
import { Password } from './Password';

type AccountProps = {
    name: Name;
    email: Email;
    password: Password;
};

class Account {
    private readonly _id: string;
    private readonly _props: AccountProps;

    private constructor(props: AccountProps, id?: string) {
        this._props = props;
        this._id = id || uuid();
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._props.name.value;
    }

    get email(): string {
        return this._props.email.value;
    }

    get password(): string {
        return this._props.password.value;
    }

    public static build(props: AccountProps, id?: string): Account {
        return new Account(props, id);
    }
}

export { Account };
