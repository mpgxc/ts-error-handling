import { AppException } from './application/AppException';
import { Account } from './domain/Account';
import { AccountMapper } from './domain/AccountMapper';
import { Email } from './domain/Email';
import { Name } from './domain/Name';
import { Password } from './domain/Password';

const name = Name.build('Um bom name');
const email = Email.build('sdsdsWWFSFSdsdsd@gmail.com  ');

const passwordOrError = Password.build('un2ned');

if (passwordOrError.isFailure) {
    throw AppException.build(passwordOrError.value, 400);
}

const account = Account.build({
    email,
    name,
    password: passwordOrError.value,
});

console.log(AccountMapper.toPersistence(account));
