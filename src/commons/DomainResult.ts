interface IDomainResult<S, F> {
    value: S | F;

    isSuccess: boolean;
    isFailure: boolean;
}

interface ISuccessResult<S, F> extends IDomainResult<S, F> {
    value: S;
    isSuccess: true;
    isFailure: false;
}

interface IFailureResult<S, F> extends IDomainResult<S, F> {
    value: F;
    isSuccess: false;
    isFailure: true;
}

const Success = <S, F>(value: S): ISuccessResult<S, never> => ({
    value,
    isSuccess: true,
    isFailure: false,
});

const Failure = <S, F>(value: F): IFailureResult<never, F> => ({
    value,
    isSuccess: false,
    isFailure: true,
});

type Either<S, F> = ISuccessResult<S, F> | IFailureResult<S, F>;

const Result = { Success, Failure };

export { IDomainResult, ISuccessResult, IFailureResult, Result, Either };
