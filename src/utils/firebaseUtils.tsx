import firebase, { auth } from "../firebase";

export const signInWithGoogle = () =>{
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(googleProvider);
} 

export const signOut =() =>{
    return auth.signOut()
}