import styled from 'styled-components';

export const Arrow = styled.a`
    color: #000;
    position: fixed;
    right: 14px;
    bottom: 10px;
    color: rgb(56, 182, 255);
    border-radius: 50%;
    font-size: 32px;  
    text-align: center; 
    transition: ease 0.4s;
    &:hover {
        transform: scale(1.1);
    }
    @media screen and (max-width: 900px) {
        display: none;
    }
`;