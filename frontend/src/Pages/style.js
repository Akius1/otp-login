import styled from 'styled-components';


export const PageLoyout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("images/laptopOne.jpeg");
    background-repeat: no-repeat, repeat;
    height: 100vh;
    width: 100vw;
`;

export const Container = styled.div`
width: 80%;
display: grid;
grid-template-columns:20% 20% 50%;
/* column-gap: 0.2rem; */
height: 30%;

`;

export const ImageWrapper =  styled.div`
width: 100%;
background-image: url("images/laptopTwo.jpeg");
    background-repeat: no-repeat, repeat;
`;

export const MidWrapper = styled.form`
width: 100%;
display: flex;
flex-direction: column;
height: 100%;
border: 2%;



/* background-color: ; */

.upper{
    height: 40%;
    background-color: #03C03C;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    padding: 1rem 0;

    /* .top-react-icons{
        color: red;
        fill: black;
        size: ;
    } */
}
.lower{
    height: 60%;
    background-color: white;
    padding: 1rem;
}
`;

export const LastWrapper =  styled.div`
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    background-color: white;
    border: 1px solid black;

    .otpInput{
        font-size: 32px;
        width: 80%;
        border-color: 2px solid red;
    }
`;

export const InputField = styled.input`
width: 80%;
padding: 1rem;
margin: 1rem 0;
border-top-style:hidden ;
border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;

:focus{
    outline: none ;
    border-color: #03C03C;
}
`

export const Button = styled.button`
    width: 87%;
    padding: 1rem;
    background-color: #03C03C;
    color: white;
    border: none;
`