import firebase, { auth, firestore } from "../firebase";

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
