import styled from "styled-components";

export const FormCard = styled.form`
    width: 100%;
    height: 60vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 1rem;
    padding: .8rem;

    h2{
        font-size: large;
        color: #4F4F4F; 
    }

    div{
        display: flex;
        flex-direction: column;
        gap: .2rem;
        text-align: start;

        width: 100%;

        label{
            font-size: small;
        }

        input{
            height: 2rem;
            width: 100%;
            color: black;
            font-weight: bold;
            border-style: ridge;
            border-color: lightgray;
            border-radius: 5px;
            
            padding: 0 .3rem 0 .3rem;
        }    
    }



    @media (min-width: 600px){
        width: 55%;
        height: inherit;

        h2{
            font-size: large;
        }

        
    }
`;