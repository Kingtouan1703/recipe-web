import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore';
import styled from 'styled-components';

function CommentBox({ user, userImg, review, timestamp }) {
  const time = new Date(timestamp?.toDate()).toString()

  return (
    <CommentBoxContainer>
      <ImgContainer>
        <img src={userImg} alt='user'></img>
      </ImgContainer>
      <CommentInfo>
        <h4>{user}
          <span>{time}</span>
        </h4>

        <p>{review}</p>
      </CommentInfo>

    </CommentBoxContainer>
  )
}

export default CommentBox
const CommentBoxContainer = styled.div`
  display : flex;
  margin : 8px ;
`
const ImgContainer = styled.div`
>img {
  width : 40px;
  margin-right  : 8px; 
}
`
const CommentInfo = styled.div`
  >h4{
    font-size : 12px;
    color: #333;
  }
  > h4 > span {
    margin-left : 30px;
    color : gray ;
    font-weight : 300 ; 
  }
`