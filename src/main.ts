import { RegisterAccount } from './application/RegisterAccount';

// Sucess
RegisterAccount.build({
    email: 'testes@gmail.com',
    name: 'teste',
    password: 'testMe#45',
});

// Failure
RegisterAccount.build({
    email: 'xxxxxxxx',
    name: 'xx',
    password: 'xxxxxxxxxxxxxxxx',
});
