import { IDomainError } from '../commons/IDomainError';

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

        console.log({
            name: this.name,
            message: this.message,
            statusCode: this.statusCode,
        });
    }

    static build(error: IDomainError, statusCode?: number): AppException {
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
