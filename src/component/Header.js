import React, { useState } from 'react'
import styled from 'styled-components';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import ListIcon from '@mui/icons-material/List';
import { Link } from 'react-router-dom'
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, providerFirebase } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { async } from '@firebase/util';
import { useDispatch } from 'react-redux'
import { searchFood } from '../features/foodSlice'
import { useNavigate } from "react-router-dom";
function Header() {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')
    const [user, loading, error] = useAuthState(auth);
    let navigate = useNavigate();

    const searchFoodButton = () => {
        if (input != '') {
            dispatch(searchFood(input))
            setInput('')
            navigate('/searchfood')
        } else {
            alert('nhap vao gi day kha di di')
        }

    }
    const signIn = async () => {
        try {
            await signInWithPopup(auth, providerFirebase)
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <HeaderContainer>
            <HeaderLeft>
                <Link to='/'>
                    <h1>Quan Bia Huy Hai</h1>
                    <SportsBarIcon />
                </Link>
            </HeaderLeft>
            <HeaderMid>
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder='search some recipe' />
                <button onClick={() => searchFoodButton()}>
                    <SearchIcon />
                </button>
            </HeaderMid>
            <HeaderRight>
                {user ? (<>
                    <UserImg
                        src={user?.photoURL}>

                    </UserImg>
                    <button onClick={() => signOut(auth)}>Sigout</button>
                </>) : <PersonIcon onClick={signIn} />}


                <Link to='/about'>
                    <InfoIcon />
                </Link>
                <ListIcon />
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header;
const HeaderContainer = styled.div`
    display : flex ; 
    position : fixed ; 
    top : 0 ;
    width :100%;
    border-bottom : 1px solid gray  ; 
    padding: 16px;
    box-shadow :   1px 1px 1px gray;
    background-color : #c5d5cb;
    
`
const HeaderLeft = styled.div`
    flex : 0.3 ; 
    display :flex ; 
    >a {
        display :flex;
        text-decoration : none ; 
    }
`
const BeerIcon = styled(SportsBarIcon)`
    padding : 8px ; 
    margin-left : 8px ;     
    font-size : 100px
`
const HeaderMid = styled.div`
flex : 0.4;
display:flex ;
justify-content : center ; 

>input{
    padding : 8px;
    border-radius : 10px;
    border : none ;
    margin-right : 8px; 
    outline : none ;
}
>button{
    border : none ; 
    border-radius : 999px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    background-color : transparent ;  
    padding : 8px;
    
}
`
const HeaderRight = styled.div`
flex : 0.3  ; 
display : flex ; 
justify-content : space-evenly;
align-items : center ;
>button{
    border : none ; 
    border-radius : 999px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    background-color : transparent ;  
    padding : 8px;
    :hover {
        transform : scale(1.2)
    }
}
`
const UserImg = styled.img`
    width : 40px;
    height : 40px; 
    border-radius : 999px;
`
