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

    public static build(value: string): Name {
        if (!this.validate(value)) {
            throw new Error('Invalid name');
        }

        const valueTrimmed = this.format(value);

        return new Name(valueTrimmed);
    }
}

export { Name };
