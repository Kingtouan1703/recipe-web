import React from 'react'
import styled from 'styled-components'
import DrinkList from '../component/DrinkList'
import FoodList from '../component/FoodList'
import Slide from '../component/Slide'

function Home() {
  return (
    <HomeContainer>
      {/* <Slide /> */}
      <DrinkList />
      <FoodList/>
    </HomeContainer>
  )
}

export default Home

const HomeContainer = styled.div`
  width : 100%; 
  margin-top : 80px!important ; 
`