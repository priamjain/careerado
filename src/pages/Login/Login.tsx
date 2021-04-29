import React,{useContext} from 'react'
// import { Layout } from '../../utils/Layout/Layout'
// import signInwithGoogleIcon from '../../assets/illustrations/signInWithGoogle.png'
import { AuthContext } from '../../context/AuthContext'
// import { Toast } from 'react-bootstrap'
// import style from './Login.module.css'
import { signInWithGoogle } from '../../utils/firebaseUtils'
import { Redirect } from 'react-router'


interface Props {
    
}

const Login = (props: Props) => { 
    const currentUser : any = useContext(AuthContext);
    // const [signInFailed, setsignInFailed] = useState(false)
    const onSignIn = () =>{ 
            signInWithGoogle()
            .then()
            .catch(reject=>{
                // setsignInFailed(true);
            })
        }

    if(!currentUser){
        onSignIn();
        
    }
    return(<Redirect to="/"/>)
    
    // return (

    //     <Layout>
    //         <Toast show={signInFailed} onClose={()=>setsignInFailed(false)} delay={3000} autohide className={"bg-danger "+style.toast}>
    //             <Toast.Header>
    //                 <strong className="mr-auto">Login Failed</strong>
    //             </Toast.Header>
                
    //         </Toast>
    //         <img
    //             src={signInwithGoogleIcon}
    //             onClick={onSignIn}
    //             alt="Sign In with Google"
    //             height="50"
    //             className="ml-auto d-block mr-auto mt-5"
    //         />
    //     </Layout>
    // )
}

export default Login
