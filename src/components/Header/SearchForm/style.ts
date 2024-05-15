import styled from "styled-components"

export const FormContainer = styled.form`
    display: flex;
    align-items: center;
    gap: 2.4rem;
    padding: 4.0rem;
    border-radius: 10px;
    border: 1px solid #EAEAEA;
    
    background-color: ${({theme}) => theme.COLORS.white};
 `

export const InputsContainer = styled.div`
    position: relative;
    height: 4.8rem;
`

export const InputIcons = styled.img`
    position: absolute;
    padding: 1.2rem 1.2rem 1.2rem 1.4rem;
    `

export const ArrowIcon = styled.img`
    position: absolute;
    padding: 1.2rem 1.2rem 1.2rem 1.4rem;
    right: 0;
`

export const Input = styled.input`
    width: 34.8rem;
    height: 4.8rem;
    padding: 1.6rem 1.4rem 1.6rem 5.0rem;
    border-radius: 5px;
    border: none;
    background-color: ${({theme}) => theme.COLORS["purple-100"]};
    
    &::placeholder {
        color: ${({theme}) => theme.COLORS["gray-700"]};
    }
`
export const Select = styled.select`
    width: 34.8rem;
    padding: 1.6rem 1.4rem 1.6rem 4.8rem;
    border-radius: 5px;
    border: none;
    background-color: ${({theme}) => theme.COLORS["purple-100"]};
    color: ${({theme}) => theme.COLORS["gray-700"]};

    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';

`

export const Button = styled.button`
    width: 16.9rem;
    height: 4.8rem;   
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({theme}) => theme.SIZE.SM}rem;
    font-weight: bold;
    text-transform: uppercase;
    padding: 1.2rem 3.2rem;
    border: none;
    border-radius: 5px;
    color: ${({theme}) => theme.COLORS.white};
    background-color: ${({theme}) => theme.COLORS["purple-900"]};

`