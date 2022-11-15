import styled from "styled-components";

export const FormCard = styled.form`
    width: 100%;
    height: 43vh;

    border: solid red;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    gap: 1rem;
    padding: 1rem;

    h2{
        font-size: x-large;
        color: #4F4F4F; 
    }

    input{
        height: 12px;
        color: black;
        font-weight: bold;
    }

    @media (min-width: 760px){
        width: 60%;
        height: 70vh;
    }
`;