import React, { useRef, useState } from 'react'
import ChatMessage from '../ChatMessage/ChatMessage';
import db, { auth } from '../../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/app';

import './ChatRoom.css';
import SendIcon from '@material-ui/icons/Send';

function ChatRoom() {
  const dummy = useRef();
  // const messagesRef = firestore.collection('messages');
  const messagesRef = db.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
  <div className="chatRoom">
      <main>

        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>

      </main>

      <form onSubmit={sendMessage}>

        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Type a message..." />

        <button type="submit" disabled={!formValue}>
          <SendIcon />
        </button>

      </form>
  </div>)
}

export default ChatRoom
