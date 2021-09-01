type DomainErrorProps = {
    message: string;
    name: string;
};

class DomainError extends Error {
    constructor({ message, name }: DomainErrorProps) {
        super(message);
        this.name = name;
    }
}

export { DomainError };
