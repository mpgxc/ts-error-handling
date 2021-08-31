class Email {
  private constructor(private readonly _value: string) {}

  private static validate(value: string): boolean {
    return true;
  }

  get value(): string {
    return this._value;
  }

  public static build(value: string): Email {
    if (!this.validate(value)) {
      return new Email(value);
    }

    return new Email(value);
  }
}

export { Email };
