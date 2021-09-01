import { DomainError } from '../commons/DomainError';

type ExceptionProps = {
    name: string;
    message: string;
};

class AppException {
    public readonly name: string;
    public readonly message: string;
    public readonly statusCode: number;

    private constructor(
        { name, message }: ExceptionProps,
        statusCode?: number,
    ) {
        this.name = name;
        this.message = message;
        this.statusCode = statusCode || 500;
    }

    static build(error: DomainError, statusCode?: number): AppException {
        return new AppException(
            {
                name: error.name,
                message: error.message,
            },
            statusCode,
        );
    }
}

export { AppException };
