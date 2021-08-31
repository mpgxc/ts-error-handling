class Password {
  private constructor(private readonly _value: string) {}

  private static validate(value: string): boolean {
    return true;
  }

  get value(): string {
    return this._value;
  }

  public static build(value: string): Password {
    if (!this.validate(value)) {
      return new Password(value);
    }

    return new Password(value);
  }
}

export { Password };
