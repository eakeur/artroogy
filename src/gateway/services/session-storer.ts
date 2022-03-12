import { Publisher, PublisherClaims, Publishers, PublisherStorer, Role } from '../../model'

const STORAGE_ITEM_KEY = 'pub_ses'

export class SessionStorer implements PublisherStorer {
    remove(): void {
        try {
            localStorage.removeItem(STORAGE_ITEM_KEY)
        }
        catch (error: any) {
            throw new Error("an error occurred when removing the actual user", {cause: error});
        }
    }

    public store(publisher: Publisher): void {
        try {
            const claims = publisher as PublisherClaims
            localStorage.setItem(STORAGE_ITEM_KEY, JSON.stringify(claims))
        }
        catch (error: any) {
            throw new Error("an error occurred when storing the actual user", {cause: error});
        }
    }

    public get(role?: Role): PublisherClaims {
        try {
            const claims = localStorage.getItem(STORAGE_ITEM_KEY)
            if (!claims) throw Publishers.ErrNotAuthenticated

            const parsedClaims = JSON.parse(claims!)
            if (!parsedClaims.id || !parsedClaims.name || !parsedClaims.role)
                throw Publishers.ErrNotAuthenticated
            
            if (role && parsedClaims.role !== role) throw Publishers.ErrInsuficientPriviledges    
            return parsedClaims as PublisherClaims
        } catch (error: any) {
            throw new Error("An error occurred fetching the logged in user", {cause: error}); 
        }
    }

}