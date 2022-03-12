import firebase from "firebase/app";
import {Post, PostActions, PostEdition, Posts, Publisher, Publishers} from "../../model";

const POST_COLLECTION = 'posts'

export class PostRepository implements PostActions {

    constructor(db: firebase.firestore.Firestore) {
        this.db = db
    }

    private db: firebase.firestore.Firestore

    public async create(post: Post): Promise<Post> {
        try {
            const res = await this.posts.add({
                author: post.author, body: post.body, history: post.history,
                id: post.id, tags: post.tags, title: post.title
            })
            post.id = res.id
            return post
        } catch (e: any) {
            throw new Error('an error occurred adding post to the database', {cause: e});
        }
    }

    public async get(id: string): Promise<Post> {
        try {
            const res = await this.posts.doc(id).get()
            if (!res.exists) throw Posts.ErrNotFound

            const pub = res.data() as Post
            return pub
        } catch (e: any) {
            throw new Error("an error occurred while fetching post with id " + id, {cause: e});
            
        }
    }

    public async list(title?: string): Promise<Post[]> {
        try {
            let query = this.posts.where('active', '==', true)
            if (title) query = query.where('title', '==', title)
            const res = await query.get()

            const data: Post[] = []
            for (const doc of res.docs) {
                if (!doc.exists) throw Posts.ErrNotFound

                const pub = doc.data() as Post
                pub.id = doc.id
                data.push(pub)
            }
            return data
        } catch (e: any) {
            throw new Error("an error occurred while fetching posts with name " + title, {cause: e});
        }
    }

    public async remove(id: string): Promise<void> {
        try {
            this.posts.doc(id).delete()
        } catch (e: any) {
            throw new Error("an error occurred while removing posts with id " + id, {cause: e});
        }
    }

    public async update(id: string, post: PostEdition): Promise<void> {
        try {
            const res = await this.posts.doc(id).set({
                body: post.body, history: post.history,
                tags: post.tags, title: post.title
            })
        } catch (e: any) {
            throw new Error("an error occurred while updating post with id " + id, {cause: e});
            
        }
    }

    private get posts(): firebase.firestore.CollectionReference<firebase.firestore.DocumentData> {
        return this.db.collection(POST_COLLECTION)
    }
    

}