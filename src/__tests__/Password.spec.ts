import { Password } from '../domain/Password';

describe('Domain/Password', () => {
    it('should be able to create a password!', () => {
        const password = Password.build('Senha123#');
        const password2 = Password.build('123Ab#1234');

        expect(password.isSuccess).toBe(true);
        expect(password2.isSuccess).toBe(true);

        if (password.isSuccess && password2.isSuccess) {
            expect(password.value.value).toBe('Senha123#');
            expect(password2.value.value).toBe('123Ab#1234');
        }
    });

    it('should not be able to create a password without requirements rules!', () => {
        const passwordOrError = Password.build('12349');
        const passwordOrError1 = Password.build('');
        const passwordOrError2 = Password.build('1111111111111111111111');
        const passwordOrError3 = Password.build('ddddddddddddddddd');
        const passwordOrError4 = Password.build('!@#$%*()P_');
        const passwordOrError5 = Password.build('QWERTYUIOPASDFGHJKLMNBVCX');
        const passwordOrError6 = Password.build('A14#'.repeat(10));

        expect(passwordOrError.isFailure).toBe(true);
        expect(passwordOrError1.isFailure).toBe(true);
        expect(passwordOrError2.isFailure).toBe(true);
        expect(passwordOrError3.isFailure).toBe(true);
        expect(passwordOrError4.isFailure).toBe(true);
        expect(passwordOrError5.isFailure).toBe(true);
        expect(passwordOrError6.isFailure).toBe(true);
    });
});
