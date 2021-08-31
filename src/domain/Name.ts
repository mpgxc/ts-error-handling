class Name {
  private constructor(private readonly _value: string) {}

  private static validate(value: string): boolean {
    return true;
  }

  get value(): string {
    return this._value;
  }

  public static build(value: string): Name {
    if (!this.validate(value)) {
      return new Name(value);
    }

    return new Name(value);
  }
}

export { Name };
