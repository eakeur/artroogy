import firebase from "firebase/app";
import {Publisher, PublisherActions, Publishers} from "../../model";
import {errors} from "../../model/errors";

const PUBLISHER_COLLECTION = 'publishers'

export class PublisherRepository implements PublisherActions {

    constructor(db: firebase.firestore.Firestore) {
        this.db = db
    }

    private db: firebase.firestore.Firestore

    public async create(publisher: Publisher): Promise<Publisher> {
        try {
            const res = await this.publishers.add({
                name: publisher.name, role: publisher.role, password: publisher.password,
                created: publisher.created, by: publisher.by, active: publisher.active,
                updated: publisher.updated, nickname: publisher.nickname
            })
            publisher.id = res.id
            return publisher
        } catch (e: any) {
            throw new Error('an error occurred adding publisher to the database', {cause: e});
        }
    }

    public async get(id: string): Promise<Publisher> {
        try {
            const res = await this.publishers.doc(id).get()
            if (!res.exists) throw Publishers.ErrNotFound

            const pub = res.data() as Publisher
            return pub
        } catch (e: any) {
            throw new Error("an error occurred while fetching publisher with id " + id, {cause: e});
            
        }
    }

    public async getByNickname(nick: string): Promise<Publisher> {
        try {
            const res = await this.publishers.where('nickname', '==', nick).limit(1).get()
            if (res.size != 1) throw Publishers.ErrNotFound

            const doc = res.docs.at(0)!
            if (!doc?.exists) throw Publishers.ErrNotFound

            const pub = doc.data() as Publisher
            pub.id = doc.id
            return pub
        } catch (e: any) {
            throw new Error("an error occurred while fetching publisher with nick " + nick, {cause: e});
        }
    }

    public async list(name?: string): Promise<Publisher[]> {
        try {
            let query = this.publishers.where('active', '==', true)
            if (name) query = query.where('name', '==', name)
            const res = await query.get()

            const data: Publisher[] = []
            for (const doc of res.docs) {
                if (!doc.exists) throw Publishers.ErrNotFound

                const pub = doc.data() as Publisher
                pub.id = doc.id
                data.push(pub)
            }
            return data
        } catch (e: any) {
            throw new Error("an error occurred while fetching publishers with name " + name, {cause: e});
        }
    }

    public async remove(id: string): Promise<void> {
        return Promise.resolve(undefined);
    }

    public async update(id: string, publisher: Publisher): Promise<void> {
        return Promise.resolve(undefined);
    }

    private get publishers(): firebase.firestore.CollectionReference<firebase.firestore.DocumentData> {
        return this.db.collection(PUBLISHER_COLLECTION)
    }
    

}