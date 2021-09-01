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

    public static build(value: string): Password {
        if (!this.validate(value)) {
            throw new Error('Invalid password');
        }

        return new Password(value);
    }
}

export { Password };
