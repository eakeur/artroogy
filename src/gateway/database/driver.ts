
import firebase from "firebase/app"
import 'firebase/firestore';

export function connectToFirebase(config: any): firebase.firestore.Firestore {
    const app = firebase.initializeApp(config);
    return firebase.firestore(app)
}