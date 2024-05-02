import styled from "styled-components"

export const BlocosCard = styled.section`
    width: 38.4rem;
    border: 1px solid #EAEAEA;
    border-radius: 10px;
    
    & img {
        width: 100%;
        border-radius: 10px 10px 0 0;
    }
    `

export const BlocosContent = styled.div`
    padding: 1.6rem;

    & h3 {
        font-weight: bold;
        font-size: ${({theme}) => theme.SIZE.LG}rem;
        color: ${({theme}) => theme.COLORS.black};
    }

    & p {
        margin: 1.6rem 0;
        color: #00000085;
    }
`

export const BlocosLocation = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    & img {
        width: 2.4rem;
        height: 2.4rem;
    }
`