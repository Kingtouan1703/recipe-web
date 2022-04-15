import React from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
function Food({ id, img, name, category, instruction }) {
    let navigate = useNavigate();
    const linkToPage = () => {
        navigate(`/food/:${id}`)
    }
    return (
        <FoodContainer>

            <img src={img} />
            <FoodInfo>
                <h3>{name}</h3>
                <span>{category}</span>
                <p>{instruction.slice(0, 200) + '...'}</p>
                <button onClick={linkToPage}>more detail</button>
            </FoodInfo>
        </FoodContainer>
    )
}

export default Food

const FoodContainer = styled.div`
    flex : 0.3;
    display :flex;
    padding : 20px;
    border-radius: 10px/30px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    >img {
        width :200px;
        margin-right : 20px; 
        border-radius : 999px;
    }
    
    
`
const FoodInfo = styled.div`
   >  button {
    :hover{
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
     transform: scale(1.2);
}
    }
`