import { Account } from "./domain/Account";
import { AccountMapper } from "./domain/AccountMapper";
import { Email } from "./domain/Email";
import { Name } from "./domain/Name";
import { Password } from "./domain/Password";

const name = Name.build('Um bom name')
const email = Email.build('sdsdsWWFSFSdsdsd@gmail.com  ')
const password = Password.build('und#eFfi2ned')

const account = Account.build({
  email,
  name,
  password
})

console.log(AccountMapper.toPersistence(account));
