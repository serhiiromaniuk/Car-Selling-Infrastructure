interface RegisterUserRequestInterface {
    username: string
    email: string
    password: string
    country: string
}

interface LoginUserRequestInterface {
    email: string
    password: string
}

interface UserResponseInterface {
    user_id: string
}

interface GetUserRequestIterface {
    user_id: string
}

interface GetUserResponseIterface {
    username: string
    email: string
    country: string
}
