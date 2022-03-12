import { Auth, Authentication, AuthWorkflows, PublisherActions, PublisherClaims, PublisherStorer } from "../model";

export class AuthWorkspace implements AuthWorkflows {

    constructor(publishers: PublisherActions, sessions: PublisherStorer){
        this.publishers = publishers
        this.sessions = sessions
    }

    publishers: PublisherActions

    sessions: PublisherStorer

    public async authenticate(auth: Auth): Promise<void> {
        try {
            Authentication.validateAuth(auth);
            const pub = await this.publishers.getByNickname(auth.nickname)
            if (pub.password !== auth.password)
                throw Authentication.ErrWrongPassword
            
            this.sessions.store(pub)
        } catch (error: any) {
            throw new Error("an error occurred while logging in: ", {cause: error});
        }
    }
    
} 