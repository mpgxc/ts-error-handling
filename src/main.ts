import { AppException } from './application/AppException';
import { Account } from './domain/Account';
import { AccountMapper } from './domain/AccountMapper';
import { Email } from './domain/Email';
import { Name } from './domain/Name';
import { Password } from './domain/Password';

const name = Name.build('Um bom name');
const email = Email.build('sdsdsWWFSFSdsdsd@gmail.com  ');

const passwordOrError = Password.build('un2ned');
const passwordOrError2 = Password.build('un2ne##)FEFDF54fdd');

if (!passwordOrError2.isSuccess) {
    throw AppException.build(passwordOrError2.value);
}

const account2 = Account.build({
    email,
    name,
    password: passwordOrError2.value,
});

console.log(AccountMapper.toPersistence(account2));

if (!passwordOrError.isSuccess) {
    throw AppException.build(passwordOrError.value);
}

const account = Account.build({
    email,
    name,
    password: passwordOrError.value,
});

console.log(AccountMapper.toPersistence(account));
