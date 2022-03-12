export interface Publisher {
    id: string
    name: string
    nickname: string
    password: string
    role: Role
    active: boolean
    created: Date
    updated: Date
    by: string
}

export interface PublisherClaims {
    id: string
    name: string
    role: Role
}

export interface PublisherActions {
    create(publisher: Publisher): Promise<Publisher>
    list(name?: string): Promise<Publisher[]>
    get(id: string): Promise<Publisher>
    getByNickname(nick: string): Promise<Publisher>
    update(id: string, publisher: Publisher): Promise<void>
    remove(id: string): Promise<void>
}

export interface PublisherWokflows {
    create(publisher: Publisher): Promise<Publisher>
    list(name?: string): Promise<Publisher[]>
    get(id: string): Promise<Publisher>
    update(id: string, publisher: Publisher): Promise<void>
    remove(id: string): Promise<void>
}

export enum Role {
    admin, publisher
}

export namespace Publishers {

    export const ErrNotFound: Error = { 
        name: 'err_publisher_not_found', 
        message: 'Ops! Esse publicador não foi encontrada :('
    }

    export const ErrNotAuthenticated: Error = { 
        name: 'err_publisher_not_authenticated', 
        message: 'Ops! Parece que você não está logado. Para executar esta ação, faça login primeiro.'
    }

    export const ErrInsuficientPriviledges: Error = {
        name: 'err_insuficient_priviledges',
        message: 'Ops! Você não tem permissão para executar esta ação :('
    }
}



