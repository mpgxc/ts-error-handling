class Email {
  private constructor(private readonly _value: string) { }

  private static validate(value: string): boolean {

    const valueTrimmed = this.format(value);

    const pattern = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/

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

  public static build(value: string): Email {
    if (!this.validate(value)) {
      throw new Error('Invalid email');
    }

    const valueTrimmed = this.format(value);

    return new Email(valueTrimmed);
  }
}

export { Email };
