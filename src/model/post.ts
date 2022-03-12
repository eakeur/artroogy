export interface Post {
    id: string
    title: string
    author: string
    body: string
    tags: string
    history: PostHistory[]
}

export interface PostHistory {
    date: Date
    by: string
}

export interface PostEdition {
    title: string
    body: string
    tags: string
    history: PostHistory[]
}

export interface PostActions {
    create(publication: Post): Promise<Post>
    list(title?: string): Promise<Post[]>
    get(id: string): Promise<Post>
    update(id: string, edition: PostEdition): Promise<void>
    remove(id: string): Promise<void>
}

export interface PostWorkflows {
    publish(publication: Post): Promise<Post>
    update(id: string, publication: Post): Promise<Post>
    list(title?: string): Promise<Post[]>
    get(id: string): Promise<Post>
    remove(id: string): Promise<void>
}

export namespace Posts {

    export const ErrNotFound: Error = {
        name: "err_post_not_found",
        message: "",
    }
}