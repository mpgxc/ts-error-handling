import { DomainError } from '../commons/DomainError';

type ExceptionProps = {
    name: string;
    message: string;
};

class AppException extends Error {
    public readonly name: string;
    public readonly statusCode: number;

    private constructor(
        { name, message }: ExceptionProps,
        statusCode?: number,
    ) {
        super(message);
        this.name = name;
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
