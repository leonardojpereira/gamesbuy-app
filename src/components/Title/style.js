import styled from 'styled-components';

export const TitleMessage = styled.h1`
  font-family: 'Helvetica Neue', sans-serif;
  font-size: ${props => props.size || '3rem'};
    font-weight: bold;
    color: #fff;
    text-align: ${props => props.align || 'center'};
    background-image: linear-gradient(to right, #2b6cff, #77d9ffd1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: ${props => props.padding || '1rem'};
    margin: ${props => props.margin || '24px 0'};
    text-transform: ${props => props.textTransform || 'none'};

    @media (max-width: 768px) {
      font-size: ${props => props.size || '2rem'};
    }
`;