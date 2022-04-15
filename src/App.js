import React from 'react';
import styled from 'styled-components'
import { Routes, Route } from "react-router-dom";
import Home from './page/Home';
import About from './page/About';
import Header from './component/Header';
import SingleDrink from './page/SingleDrink';
import Singlefood from './page/Singlefood';
import SearchFoodPage from './page/SearchFoodPage';
function App() {
  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/drink/:id" element={<SingleDrink />} />
        <Route path='/food/:id' element={<Singlefood />} />
        <Route path='/searchfood' element={<SearchFoodPage />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
const AppContainer = styled.div`
  * , ::before , ::after {
    margin : 0 ; 
    box-sizing : border-box ; 
  }
` ;
