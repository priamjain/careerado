import React from 'react'
import { Redirect } from 'react-router'
import { signOut } from '../../actions/firebaseUtils'

interface Props {
    
}

export const SignOut = (props: Props) => {
    signOut();
    return (
        <Redirect to="/"/>
    )
}
