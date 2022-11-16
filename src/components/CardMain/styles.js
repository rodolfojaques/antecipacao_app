import styled from "styled-components"

export const Card = styled.section`
    width: 80%;
    max-width: 740px;
    height: 80vh;

    background-color: aliceblue;
    box-shadow: gray 0 0 5px 1px;
    border-radius: 2px;

    @media (min-width: 600px) {
        display: flex;
        height: 55vh;
    }
`;