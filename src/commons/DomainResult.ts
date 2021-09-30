interface IDomainResult<S, F> {
    value: S | F;
    isSuccess: boolean;
}

interface ISuccessResult<S, F> extends IDomainResult<S, F> {
    value: S;
    isSuccess: true;
}

interface IFailureResult<S, F> extends IDomainResult<S, F> {
    value: F;
    isSuccess: false;
}

const Success = <S>(value: S): ISuccessResult<S, never> => ({
    value,
    isSuccess: true,
});

const Failure = <F>(value: F): IFailureResult<never, F> => ({
    value,
    isSuccess: false,
});

type Either<S, F> = ISuccessResult<S, F> | IFailureResult<S, F>;

const Result = { Success, Failure };

export { Result, Either };
