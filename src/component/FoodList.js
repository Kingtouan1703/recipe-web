import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { requestFood } from '../features/foodSlice'
import Food from './Food'

function FoodList() {
    const dispatch = useDispatch()
    const { foods, loading } = useSelector(store => store.food)
    useEffect(() => {
        dispatch(requestFood())
    }, [])
    return (
        <FoodListContainer>
            <h2>Food List</h2>
            <FoodsContainer >
                {foods.map((food) => {
                    return <Food key={food.id} {...food} />
                })}
            </FoodsContainer>
        </FoodListContainer>
    )
}

export default FoodList

const FoodListContainer = styled.div`
`
const FoodsContainer = styled.div` 
    display : flex; 
    justify-content : space-around ; 
   
`