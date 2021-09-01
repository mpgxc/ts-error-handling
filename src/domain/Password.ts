class Password {
    private constructor(private readonly _value: string) {}

    private static validate(value: string): boolean {
        const valueTrimming = value.trim();

        if (
            !valueTrimming ||
            valueTrimming.length < 8 ||
            valueTrimming.length > 32
        ) {
            return false;
        }

        if (
            !valueTrimming.match(
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
            )
        ) {
            return false;
        }

        return true;
    }

    get value(): string {
        return this._value;
    }

    public static build(value: string): Password {
        if (!this.validate(value)) {
            throw new Error('Invalid password');
        }

        return new Password(value);
    }
}

export { Password };
