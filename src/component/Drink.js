import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
function Drink({ id, img, name, category, instruction, ingredient }) {
    return (
        <DrinkContainer>
            <Link to={`/drink/${id}`}>
                   <img src={img} alt={name} />
            </Link>
         

            <DrinkInfo>
                <h2>{name}</h2>
                <h3>{category}</h3>
                {ingredient.map((item, index) => {
                    return <h4 key={index}>{`ingredient-${index + 1}: ${item}`}</h4>
                })}
                <p>{instruction}</p>
            </DrinkInfo>
        </DrinkContainer>
    )
}

export default Drink

const DrinkContainer = styled.div`
    
    flex  :  0.3 ; 
    display : flex ; 
    margin: 16px !important;    
    border-radius : 8px ; 
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
   > a >img {
        border-radius : 999px;
        width : 90% ;
        :hover {
            opacity : 0.8;
        }
    }
`
const Img = styled.div`
>img {
        border-radius : 999px;
        width : 50% ;
        :hover {
            opacity : 0.8;
        }
    }
`
const DrinkInfo = styled.div``