import { Either, Result } from '../commons/DomainResult';
import { IDomainError } from '../commons/IDomainError';
import { InvalidPassword } from './Errors';

class Password {
    private constructor(private readonly _value: string) {}

    private static validate(value: string): boolean {
        const valueTrimming = value.trim();

        const pattern =
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,32}$/;

        if (!pattern.test(valueTrimming)) {
            return false;
        }

        return true;
    }

    get value(): string {
        return this._value;
    }

    public static build(value: string): Either<Password, IDomainError> {
        if (!this.validate(value)) {
            return Result.Failure(InvalidPassword(value));
        }

        return Result.Success(new Password(value));
    }
}

export { Password };
