import {
    Post, PostWorkflows, PostActions,
    PublisherStorer,
    Role,
} from "../model";

export class PostWorkspace implements PostWorkflows {

    constructor(actions: PostActions, session: PublisherStorer){
        this.actions = actions; this.session = session;
    }

    private actions: PostActions

    private session: PublisherStorer

    public async publish(post: Post): Promise<Post> {
        try {
            const admin = this.session.get(Role.admin);
            post.author = admin.id
            post.history = [
                {by: admin.id!, date: new Date(Date.now())}
            ]
            post = await this.actions.create(post);
            return post
        } catch (err: any) {
            throw new Error("an error occurred while publishing this post", {cause: err});  
        }
    }

    public async list(title?: string): Promise<Post[]> {
        try {
            const list = await this.actions.list(title)
            return list
        } catch (err: any) {
            throw new Error("an error occurred while fetching posts with filter: " + title, {cause: err});
        }
        
    }

    public async get(id: string): Promise<Post> {
        try {
            const post = await this.actions.get(id)
            return post
        } catch (err: any) {
            throw new Error("an error occurred while fetching post with id: " + id, {cause: err});
        }
    }

    public async update(id: string, post: Post): Promise<Post> {
        try {
            const admin = this.session.get(Role.admin);
            post.history?.push({by: admin.id!, date: new Date(Date.now())})
            await this.actions.update(id, post)
            return post
        } catch (err: any) {
            throw new Error("an error occurred while updating post with id: " + id, {cause: err});
            
        }
    }

    public async remove(id: string): Promise<void> {
        try {
            this.session.get(Role.admin);
            await this.actions.remove(id)
        } catch (err: any) {
            throw new Error("an error occurred while removing post with id: " + id, {cause: err});
            
        }
    }
}