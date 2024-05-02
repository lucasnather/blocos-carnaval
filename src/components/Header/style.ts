import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 53.2rem;
    position: relative;
    background-color: ${({theme}) => theme.COLORS["purple-100"]};
`

export const ContentContainer = styled.section`
    width: 99.3rem;
    height: 33.2rem;
    margin: 0 auto;
    padding: 10rem 0;
    text-align: center;

    & p {
        color: ${({theme}) => theme.COLORS["red"]};
    }
    `

export const Title = styled.h1`
    font-weight: bold;
    line-height: 125%;
    font-size: ${({theme}) => theme.SIZE.XXL}rem;
    margin: 18px 0 40px 0;
    
    & strong {
        color: ${({theme}) => theme.COLORS["purple-900"]};
    }
    `

export const FirstImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
`

export const SecondImage = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;
`