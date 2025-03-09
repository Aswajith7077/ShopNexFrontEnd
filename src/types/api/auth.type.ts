


type SigninRequesttype = {
    email:string,
    username:string,
    fullname:string,
    password:string
}

type LoginRequestType = {
    username:string,
    password:string
}

type LoginResponseType = {
    fullname:string,
    username:string,
    accessToken:string,
    refreshToken:string,
}

export type{
    LoginRequestType,
    LoginResponseType,
    SigninRequesttype,
}