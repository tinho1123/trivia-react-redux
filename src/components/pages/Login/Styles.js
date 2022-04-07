import styled, { createGlobalStyle, keyframes } from 'styled-components';

const animation = keyframes`
0% {
  background-position: 0% 50%;
}

50% {
    background-position: 100% 50%;
}

100% {
    background-position: 0% 50%;
}
`;

export const Body = createGlobalStyle` 
body { 
background-color: #d22153;
}
`;

export const Container = styled.div`
max-width: 200px;
max-heigth: 100px;
padding: 70px;
margin-left: auto;
margin-right: auto;
margin-top: 30vh;
border: solid black 2px;
background-color: purple;
`;

export const Input = styled.input`
margin-top: 10px;
margin-bottom: 10px;
`;

export const Buttons = styled.button`
background: linear-gradient(-45deg, #3f00b5, #9f69fe, #27c8b7, #3f00b5);
background-size: 800% 400%;
 padding: 1em 2em;
 display: inline-block;
 border: none;
 border-radius: 10px;
 font-size: 17px;
 font-weight: 700;
 color: white;
 transition: all .5s ease-in-out;
 animation: gradient 10s infinite cubic-bezier(.62, .28, .23, .99) both;
 margin-bottom: 15px;

&:hover {
    animation: gradient 3s infinite;
    transform: scale(1.05);
}

&:active {
    animation: gradient 3s infinite;
    transform: scale(0.8);
}

animation: ${animation} 2s linear infinite;

`;
