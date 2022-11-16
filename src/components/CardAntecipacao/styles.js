import styled from "styled-components";

export const CardAntecip = styled.section`
    width: 100%;
    height: 27vh;

    background-color: lightcyan;
    color: #4F4F4F;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    h2{
        font-size: large;
        color: dodgerblue;
    }

    hr{
        border-color: lightskyblue;
    }

    p{
        font-weight: bold;
        font-size: small;
        color: lightskyblue;
    }

    span{
        font-weight: 900;
        color: deepskyblue;
    }



    @media (min-width: 600px) {
        width: 45%;
        height: inherit;
    }
`