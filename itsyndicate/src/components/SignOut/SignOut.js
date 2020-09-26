import React from 'react'

import {auth, provider} from '../../firebase';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';


function SignOut() {

    const [state, dispatch] = useStateValue();

    const signOut = () =>{
        auth.signOut().then(result => {
            dispatch({
            type: actionTypes.SET_USER,
            user: null,
          })
        })
    }
    return (
        <button className="sign-out" onClick={signOut}>Sign Out</button>
    )
}

export default SignOut
