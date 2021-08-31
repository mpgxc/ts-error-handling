import { Account } from "./domain/Account";
import { AccountMapper } from "./domain/AccountMapper";
import { Email } from "./domain/Email";
import { Name } from "./domain/Name";
import { Password } from "./domain/Password";

const name = Name.build('')
const email = Email.build('')
const password = Password.build('')

const account = Account.build({
  email,
  name,
  password
})

console.log(AccountMapper.toPersistence(account));
