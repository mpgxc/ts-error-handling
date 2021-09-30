type IDomainErrorProps = {
    message: string;
    name: string;
};

const InvalidPassword = (value: string): IDomainErrorProps => ({
    message: `The ${value} must contain between 8 to 32 digits and at least 1 number,
        1 special character, 1 uppercase letter and 1 lowercase letter`,
    name: 'PasswordError',
});

const InvalidEmail = (value: string): IDomainErrorProps => ({
    message: `The ${value} is wrong, be sure to enter a valid email address! `,
    name: 'EmailError',
});

const InvalidName = (value: string): IDomainErrorProps => ({
    message: `The ${value} must contain between 5 to 255 caracters `,
    name: 'NameError',
});

export { InvalidPassword, InvalidEmail, InvalidName };
