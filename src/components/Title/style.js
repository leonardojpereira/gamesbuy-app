import styled from 'styled-components';

export const TitleMessage = styled.h1`
   font-family: ${props => props.fontFamily || 'Lato'};
  font-size: ${props => props.size || '3rem'};
    font-weight: bold;
    color: #fff;
    text-align: ${props => props.align || 'center'};
    background-image: linear-gradient(to right, #2b6cff, #fff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: ${props => props.padding || '1rem'};
    margin: ${props => props.margin || '42px 0'};
    text-transform: ${props => props.textTransform || 'uppercase'};

    @media (max-width: 768px) {
      font-size: ${props => props.size || '2rem'};
    }

    @media screen and (max-width: 500px) {
      font-size: ${props => props.mobileSize || '1.5rem'}
    }
`;