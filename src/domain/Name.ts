import { Either, Result } from '../commons/DomainResult';
import { IDomainError } from '../commons/IDomainError';
import { InvalidName } from './Errors';

class Name {
    private constructor(private readonly _value: string) {}

    private static validate(value: string): boolean {
        const valueTrimmed = this.format(value);

        if (
            !valueTrimmed ||
            valueTrimmed.length < 5 ||
            valueTrimmed.length > 255
        ) {
            return false;
        }

        return true;
    }

    get value(): string {
        return this._value;
    }

    private static format(value: string): string {
        return value.trim();
    }

    public static build(value: string): Either<Name, IDomainError> {
        if (!this.validate(value)) {
            return Result.Failure(InvalidName(value));
        }

        const valueTrimmed = this.format(value);

        return Result.Success(new Name(valueTrimmed));
    }
}

export { Name };
