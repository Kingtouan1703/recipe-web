import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Comment from '../component/Comment'
import { db } from '../firebase'
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, addDoc } from "firebase/firestore";
import { setDocId } from '../features/drinkSlice'
function SingleDrink() {
    const disptach = useDispatch()
    const { id } = useParams()
    const { drinks, docId } = useSelector(store => store.drink)
    const drinkCollect = collection(db, 'drink')
    const [drinkCollection, loading, error] = useCollection(drinkCollect)
    const checkF = () => {
        if (drinkCollection) {
            const check = drinkCollection?.docs?.map(doc => doc.data().title).includes(id.toString())
            disptach(setDocId(drinkCollection?.docs?.find(doc => doc.data().title === id.toString()).id))
            return check
        } else {    
            return true
        }
    }
    // have to use function collection to adddoc when componet mount
    const addDocInit = async () => {
        try {
            const ref = await addDoc(drinkCollect, {
                title: id
            })
            disptach(setDocId(ref.id))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if (checkF()) {
            return null;
        } else {
            addDocInit()

        }
        return () => {
            // setDocid(null)
            disptach(setDocId(null))
        }
    }, [drinkCollection])
    const displayDrink = drinks.find((drink) => {
        return drink.id === id
    })
    const { img, ingredient, instruction, name } = displayDrink
    return (
        <SingleDrinkContainer>
            <img alt='drink' src={img} />
            <SingleDrinkInfo>
                <h1>{name}</h1>
                <p>{instruction}</p>
                {
                    ingredient.map(item => {
                        return <h3 key={item}>{`ingredient :${item}`} </h3>
                    })
                }
            </SingleDrinkInfo>
            <ReviewContainer>
                <h1>Review</h1>
                {docId && <Comment type={'drink'} />}
            </ReviewContainer>

        </SingleDrinkContainer>
    )
}

export default SingleDrink

const SingleDrinkContainer = styled.div`
    display :flex;
    justify-content: center;
    >img {
        width : 300px;
        border-radius : 9px;
        margin-right : 16px; 
       height : 450px; 
    }
    margin-top : 100px !important;
`
const SingleDrinkInfo = styled.div`
    flex : 0.3 ; 
`
const ReviewContainer = styled.div`
    flex : 0.5 ; 
 border-radius : 8px ;      
 box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
 `