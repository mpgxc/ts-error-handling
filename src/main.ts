import { AppException } from './application/AppException';
import { RegisterAccount } from './application/RegisterAccount';

// Success
const user = RegisterAccount.build({
    email: 'testes@gmail.com',
    name: 'teste',
    password: 'testMe#45',
});

if (!user.isSuccess) {
    throw AppException.build(user.value);
}

// Failure
const user2 = RegisterAccount.build({
    email: 'mpgx5.c@gmail.com',
    name: 'c',
    password: '123efddfd@$Fus',
});

if (!user2.isSuccess) {
    throw AppException.build(user2.value, 422);
}
