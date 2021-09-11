import { DomainError } from '../commons/DomainError';
import { Either, Result } from '../commons/DomainResult';
import { InvalidEmail } from './Errors';

class Email {
    private constructor(private readonly _value: string) {}

    private static validate(value: string): boolean {
        const valueTrimmed = this.format(value);

        const pattern = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;

        if (!valueTrimmed || !pattern.test(valueTrimmed)) {
            return false;
        }

        return true;
    }

    get value(): string {
        return this._value;
    }

    private static format(value: string): string {
        return value.trim().toLowerCase();
    }

    public static build(value: string): Either<Email, DomainError> {
        if (!this.validate(value)) {
            return Result.Failure(InvalidEmail(value));
        }

        const valueTrimmed = this.format(value);

        return Result.Success(new Email(valueTrimmed));
    }
}

export { Email };
