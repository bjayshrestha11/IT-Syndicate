import React from 'react'

import {auth, provider} from '../../firebase';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


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
        <>
            <Button variant="outlined" color="primary" onClick={signOut}>
                SignOut
            </Button>
      </>
        // <button className="sign-out" onClick={signOut}>Sign Out</button>
    )
}

export default SignOut
