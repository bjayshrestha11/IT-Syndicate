import React, { useRef, useState } from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import SignIn from './components/SignIn/SignIn';
import { useStateValue } from './StateProvider';
import SignOut from './components/SignOut/SignOut';
import { auth } from './firebase';
import ChatRoom from './components/ChatRoom/ChatRoom';





const firestore = firebase.firestore();
const analytics = firebase.analytics();


function App() {

  const [{user},dispatch] = useStateValue();

  return (
    <div className="App">

        <header>
        <h1>IT Syndicate</h1>
        {user ? <SignOut /> : (
          <>
          </>
        )}
        
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

export default App;