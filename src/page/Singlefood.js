import { async } from '@firebase/util'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useCollection, useCollectionData } from 'react-firebase-hooks/firestore'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { requestFood, requestOneFood, setFoodDocId } from '../features/foodSlice'
import { db } from '../firebase'
import styled from 'styled-components'
import Comment from '../component/Comment'

function Singlefood() {
    const { id } = useParams()
    const foodCollect = collection(db, 'food')
    const number = parseInt(id.substring(1))
    const [foodData, loading, error] = useCollectionData(foodCollect)
    const dispatch = useDispatch()
    const foodState = useSelector(store => store.food)
    const checkDoc = async () => {
        const result = foodData.map(doc => doc.title).includes(id.toString())
        if (result === false) {
            const docRef = await addDoc(foodCollect, {
                title: id,
            })
            console.log(docRef.id)
        } else {
            getDocId()
            return;
        }
    }
    const getDocId = async () => {
        const docsRef = await getDocs(foodCollect)
        const index = docsRef.docs.findIndex(doc => doc.data().title === id)
        const docId = docsRef.docs[index].id
        dispatch(setFoodDocId(docId))
    }
    useEffect(() => {
        if (loading === false) {
            checkDoc()
            dispatch(requestOneFood(number))
        }

    }, [foodData])
    if (foodState.loading) {
        return <div>
            <h1>Loading....</h1>
        </div>
    } else {
        if (foodState.food !== null) {
            var { location, category, name, img, ingredient1, instruction, ingredient2, ingredient3, ingredient4, ingredient5 } = foodState.food
        }

        return (
            <SinglefoodContainer>
                <FoodInfoContainer>
                    <ImgContainer>
                        <img src={img} alt={name} />
                    </ImgContainer>
                    <FoodInfoContent>
                        <h3>{name}</h3>
                        <h4>{location}</h4>
                        <p>{category}</p>
                        <p>{`Ingredient : ${ingredient1},${ingredient2},${ingredient3},${ingredient4},${ingredient5},...`}</p>
                        <p>{instruction?.slice(0, 350)}</p>
                    </FoodInfoContent>

                </FoodInfoContainer>
                <CommentContainer>
                    <h4>Review hear my fen</h4>
                    {foodState.docId &&<Comment type={'food'} /> }
                    
                </CommentContainer>

            </SinglefoodContainer>
        )
    }

}

export default Singlefood
const SinglefoodContainer = styled.div` 
    margin : 90px 16px !important;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    display : flex;
    justify-content : space-around 
`
const ImgContainer = styled.div`
    
>img {
    border-radius : 8px; 
    width  : 400px;
    margin : 16px;
}
`
const FoodInfoContent = styled.div`
>h3 {
        text-align :center ;
    }
`
const FoodInfoContainer = styled.div`
    flex : 0.5;
    display :flex;
    
`
const CommentContainer = styled.div`
    flex : 0.5;
    margin : 16px; 
    padding : 16px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`

