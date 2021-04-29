import React,{useState,useEffect} from 'react'
import firebase,{ auth } from '../firebase'

interface Props {
    children : React.ReactNode
}

export const AuthContext = React.createContext<firebase.User | null>(null)

export const AuthProvider = (props: Props) => {

    const [currentUser, setCurrentUser] = useState<firebase.User | null>(null)

    useEffect(() => {
        const unsubscribeFromAuth = auth.onAuthStateChanged((user)=>setCurrentUser(user))
        return(()=>{
            unsubscribeFromAuth();
        })
    }, [])
    
    

    return (
        <AuthContext.Provider value={currentUser}>
            {props.children}
        </AuthContext.Provider>
    )
}
