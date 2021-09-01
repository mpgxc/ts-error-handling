import { DomainError } from '../commons/DomainError';

const InvalidPassword = (value: string): DomainError =>
    new DomainError({
        message: `The ${value} must contain between 8 to 32 digits and at least 1 number,
        1 special character, 1 uppercase letter and 1 lowercase letter`,
        name: 'PasswordError',
    });

export { InvalidPassword };
