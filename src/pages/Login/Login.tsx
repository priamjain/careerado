import React,{useEffect} from 'react'
import { signInWithGoogle } from '../../firebase'
import { Layout } from '../../utils/Layout/Layout'


interface Props {
    
}

const Login = (props: Props) => {

    useEffect(() => {
 
    }, [])

    
    return (
        <Layout>
            <div 
                className="btn btn-primary"
                onClick={e=>{
                    signInWithGoogle()
                        .then(res=>
                            console.log(res))}}
                >Login with Google</div>
        </Layout>
    )
}

export default Login
