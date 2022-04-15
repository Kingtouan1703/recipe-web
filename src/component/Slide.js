import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Zoom } from 'react-slideshow-image';
import { useDispatch, useSelector } from 'react-redux'
import { fetchImg } from '../features/slideSlice'
import 'react-slideshow-image/dist/styles.css'
function Slide() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchImg())
    }, [])
    const images = useSelector(store => store.slide.img)
    const zoomOutProperties = {
        indicators: true,
        scale: 0.4
    }
    return (
        <SlideContainer>
            <h2>Random food Today</h2>
            <Zoom {...zoomOutProperties}>
                {images.map((img, index) => (
                    <ImgContainer key={index}>
                        <img src={img} />
                    </ImgContainer>
                ))}
            </Zoom>
        </SlideContainer>
    )
}

export default Slide

const SlideContainer = styled.div`
    border-bottom : 1px 1px  gray ; 
    >h2 {

    }
`
const ImgContainer = styled.div`
    >img {
        position : relative ;
        right : -100% ;
        width : 30% ; 
    }
`