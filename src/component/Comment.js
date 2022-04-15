import React, { useRef } from 'react'
import { collection, addDoc , orderBy, query } from "firebase/firestore";
import { auth, db } from '../firebase';
import { useSelector } from 'react-redux';
import { serverTimestamp } from "firebase/firestore";
import CommentBox from './CommentBox';
import { useCollection } from 'react-firebase-hooks/firestore';
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';

function Comment({ type }) {
  const id = useSelector(store => store[type].docId)
  const inputRef = useRef(null)
  const commentsCollect = collection(db, type, id, 'comments')
  const [commentsCollections] = useCollection(query(commentsCollect , orderBy("timestamp", "asc")))
  const [user] = useAuthState(auth)
  const addReview = async () => {
    try {
      await addDoc(commentsCollect, {
        user: user?.displayName,
        userImg: user?.photoURL,
        review: inputRef.current.value,
        timestamp: serverTimestamp(),
      })
    } catch (error) {
      console.log(error)
    }
    inputRef.current.value = ''
  }
  return (
    <CommentContainer>
      {commentsCollections?.docs.map(doc => {
        const { user, userImg, review, timestamp } = doc.data()
        return <CommentBox key={doc.id}
          user={user}
          userImg={userImg}
          review={review}
          timestamp={timestamp}
        />
      })}
      {user ?
        (<>
          <input ref={inputRef} placeholder='write your review' />
          <button onClick={addReview} > add</button>
        </>) : <h2>Ban phai dang nhap de comment</h2>}


    </CommentContainer>
  )
}

export default Comment
const CommentContainer = styled.div`
  >input{
    flex : 0.45 ; 
  }
`
