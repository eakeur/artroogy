import { Publisher, PublisherClaims, Role } from "."

export interface PublisherStorer {
    store(publisher: Publisher): void
    get(role?: Role): PublisherClaims
    remove(): void
}

export interface Auth {
    nickname: string
    password: string
}

export interface AuthWorkflows {
    authenticate(auth: Auth): Promise<void>
}

export namespace Authentication {

    export const ErrInvalidNickname: Error = {
        name: 'err_invalid_nickname',
        message: 'Ops! O nome de usuário fornecido é inválido',
    }

    export const ErrInvalidPassword: Error = {
        name: 'err_invalid_password',
        message: 'Ops! A senha fornecida é inválida',
    }

    export const ErrWrongPassword: Error = {
        name: 'err_wrong_password',
        message: 'Ops! A senha fornecida está incorreta',
    }

    export function validateAuth(auth: Auth){
        if (auth.nickname.trim() === "" || auth.nickname.length <= 2 || auth.nickname.length > 12)
            throw ErrInvalidNickname
        
        if (auth.password.trim() === "" || auth.password.length < 8 || auth.password.length > 16)
            throw ErrInvalidPassword
    }
}