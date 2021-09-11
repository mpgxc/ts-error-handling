import { Account } from '../domain/Account';
import { AccountMapper } from '../domain/AccountMapper';
import { Email } from '../domain/Email';
import { Name } from '../domain/Name';
import { Password } from '../domain/Password';
import { AppException } from './AppException';

type RegisterAccountRequest = {
    name: string;
    email: string;
    password: string;
};

class RegisterAccount {
    public static build({
        email,
        name,
        password,
    }: RegisterAccountRequest): void {
        const nameOrError = Name.build(name);
        const emailOrError = Email.build(email);
        const passwordOrError = Password.build(password);

        if (!nameOrError.isSuccess) {
            throw AppException.build(nameOrError.value);
        }

        if (!emailOrError.isSuccess) {
            throw AppException.build(emailOrError.value);
        }

        if (!passwordOrError.isSuccess) {
            throw AppException.build(passwordOrError.value);
        }

        const account = Account.build({
            email: emailOrError.value,
            name: nameOrError.value,
            password: passwordOrError.value,
        });

        const accountProps = AccountMapper.toPersistence(account);

        console.log('Saved!', accountProps);
    }
}

export { RegisterAccount };
