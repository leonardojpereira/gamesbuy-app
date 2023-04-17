import styled from 'styled-components';

export const ErrorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    height: 70vh;
`;

export const Error404 = styled.span`
color: #fff;
font-size: 12em;
font-weight: bold;
font-family: Helvetica;
text-shadow: 
  0 1px 0 #ccc, 
  0 2px 0 #c9c9c9, 
  0 3px 0 #bbb, 
  0 4px 0 #b9b9b9, 
  0 5px 0 #aaa, 
  0 6px 1px rgba(0,0,0,.1), 
  0 0 5px rgba(0,0,0,.1), 
  0 1px 3px rgba(0,0,0,.3), 
  0 3px 5px rgba(0,0,0,.2), 
  0 5px 10px rgba(0,0,0,.25), 
  0 10px 10px rgba(0,0,0,.2), 
  0 20px 20px rgba(0,0,0,.15);
  text-align: center;
  
`;

export const ErrorMessage = styled.div`
    font-size: 3em;
    color: #fff;
    font-weight: bold;
    font-family: Helvetica;
    text-align: center;
    font-style: italic;
`;

export const BackToHome = styled.button`
    border: none;
    padding: 14px 22px;
    border-radius: 8px;
    font-size: 18px;
    background: #38b6ff;
    color: #fff;
    cursor: pointer;
    transition: ease 0.4s;
    &:hover {
        opacity: 0.8;
    }
`;