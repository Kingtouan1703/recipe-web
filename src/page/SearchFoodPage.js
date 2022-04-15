import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import { getSearchFood } from '../features/foodSlice';
function SearchFoodPage() {
  const dispatch = useDispatch()
  const listFood = useSelector(store => store.food.searchFood)
  let navigate = useNavigate() 
  const linkToPage =(id)=>{
    navigate(`/food/:${id}`)
  }
  useEffect(() => {
    return () => {
      dispatch(getSearchFood(null))
    }
  }, [])
  
  if (!listFood) {
    return <SearchFoodContainer>
      <h1>Opps sorry we dont have that</h1>
    </SearchFoodContainer>
  } else {
    return (
      <SearchFoodContainer>
        <h1>Search Page</h1>
        <FoodContainer>
          {listFood.map(food => {
            const { id, img, location, name, category } = food
            return <Food key={id}>
              <img src={img} alt={name} />
              <FoodInfo>
                <h4>{name}</h4>
                <p>Location : {location}</p>
                <p>Category: {category}</p>
              </FoodInfo>
              <button onClick={()=>linkToPage(id)}>More Detail</button>
            </Food>
          })}
        </FoodContainer>
      </SearchFoodContainer>
    )
  }

}

export default SearchFoodPage
const SearchFoodContainer = styled.div`
  margin-top : 80px!important; 
  >h1{
    text-align :center ;  
  }
`
const FoodContainer = styled.div`
    margin : 16px; 
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    padding : 16px; 
    border-radius : 10px; 
    display : flex ;
    flex-wrap : wrap  ;
    justify-content : center ;
  
`
const Food = styled.div`
    flex : 0,2 ; 
    margin : 8px; 
    >img {
      width: 250px;
    }
    >button {
      margin-left: 85px; 
    }
`
const FoodInfo = styled.div`

`