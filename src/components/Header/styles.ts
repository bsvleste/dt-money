import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
    ${({theme})=>css`
        background-color:${theme['gray-900']};
        padding: 2.5rem 0 7.5rem;
    `}
`
export const HeaderContent = styled.div`
    width:100%;
    max-width:1120px;
    margin:0 auto;
    padding:0 1.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
`
export const NewTrasnactionButton = styled.button`
    ${({theme})=>css`
        height: 50px;
        border: 0;
        background:${theme['green-500']};
        color:${theme.white};
        font-weight: bold;
        padding: 0 1.25rem;
        border-radius: 6px;
        cursor: pointer;
        transition: background-color 0.2s;
        &:hover{
            background:${theme['green-700']};
        }

    `}
`
