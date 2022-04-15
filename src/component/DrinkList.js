import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { requestDrink } from '../features/drinkSlice'
import Drink from '../component/Drink.js'

function DrinkList() {
    const dispatch = useDispatch()
    const { loading, drinks } = useSelector(store => store.drink)
    useEffect(() => {
        dispatch(requestDrink())
    }, [])
    if (loading) {
        return <div>
            <h2>loading...</h2>
        </div>
    }
    return (
        <DrinkListContainer>
            <h2>Do uong</h2>
            <List>
                {drinks.map(drink => {
                    return <Drink key= {drink.id} {...drink} />
                })}
            </List>
        </DrinkListContainer>
    )
}

export default DrinkList

const DrinkListContainer = styled.div`
`
const List = styled.div`
    display : flex ;
    justify-content : center ; 
`