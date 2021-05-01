
import firebase, { auth, firestore } from "../firebase";
import { getUserId } from "./user.service";


export const signInWithGoogle = () =>{
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(googleProvider);
}
export const signOut = () =>{
    return auth.signOut()
}
export const getSuggestionsSnapshot = (id:string) =>{
    return  firestore
                .collection('roadmaps')
                .doc(id)
                .collection('suggestchanges')
}

export const getSuggestionRef = (id:string,docId:string) => {
    return  firestore
                .collection('roadmaps')
                .doc(id)
                .collection('suggestchanges')
                .doc(docId)
}

export const getVoteSuggestions = (roadmapId:string) =>{
    const userId = getUserId();
    if(!userId) return null
    return  firestore
                .collection('users')
                .doc(userId)
                .collection('suggestchanges')
}

export const voteSuggestion = (roadmapId:string, postId:string) =>{
    const userId = getUserId();
    console.log({userId})
    if(!userId) return null
    return  firestore
                .collection('users')
                .doc(userId)
                .collection('suggestchanges')
                .doc(postId)
}
