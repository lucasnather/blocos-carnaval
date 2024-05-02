import styled from "styled-components";

const BaseButton = styled.button`
    width: 8.6rem;
    padding: .4rem 2.4rem;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    font-size: ${({theme}) => theme.SIZE.SM}rem;
`

export const BlocosContainer = styled.section`
    width: 121.3rem;
    margin: 10rem auto;
`

export const BlocosHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4rem;

    & h2 {
        font-weight: bold;
        font-size: ${({theme}) => theme.SIZE.XL}rem;
        color: ${({theme}) => theme.COLORS.black};
    }
 `

 export const ButtonsHeader = styled.div`
    width: 19.0rem;
    padding: .8rem;
    border: 1px solid #EAEAEA;
    border-radius: 5px;
`

export const ButtonList = styled(BaseButton)`
    background-color: ${({theme}) => theme.COLORS["purple-900"]};
    color: ${({theme}) => theme.COLORS["white"]};
`

export const ButtonMap = styled(BaseButton)`
    background-color: ${({theme}) => theme.COLORS["white"]};
    color: ${({theme}) => theme.COLORS["purple-900"]};
`

 export const MainContainer = styled.main`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3.2rem;
`

