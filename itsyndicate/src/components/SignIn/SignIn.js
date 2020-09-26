import React from 'react';

import {auth, provider} from '../../firebase';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';


function SignIn() {

    const [state, dispatch] = useStateValue();

    const signInWithGoogle = () => {
        auth.signInWithPopup(provider)
        .then(result => {
          dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
          })
          console.log(result.user);
        }).catch(error => alert(error.message));
      }
    
      return (
        <>
          <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
          {/* <p>Do not violate the community guidelines or you will be banned for life!</p> */}
        </>
      )
}

export default SignIn
