import { Either, Result } from '../commons/DomainResult';
import { IDomainError } from '../commons/IDomainError';
import { Account } from '../domain/Account';
import { AccountMapper } from '../domain/AccountMapper';
import { Email } from '../domain/Email';
import { Name } from '../domain/Name';
import { Password } from '../domain/Password';

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
    }: RegisterAccountRequest): Either<Account, IDomainError> {
        const nameOrError = Name.build(name);
        const emailOrError = Email.build(email);
        const passwordOrError = Password.build(password);

        if (!nameOrError.isSuccess) {
            return Result.Failure(nameOrError.value);
        }

        if (!emailOrError.isSuccess) {
            return Result.Failure(emailOrError.value);
        }

        if (!passwordOrError.isSuccess) {
            return Result.Failure(passwordOrError.value);
        }

        const account = Account.build({
            email: emailOrError.value,
            name: nameOrError.value,
            password: passwordOrError.value,
        });

        const accountProps = AccountMapper.toPersistence(account);

        console.log('Saved!', accountProps);

        return Result.Success(account);
    }
}

export { RegisterAccount };
