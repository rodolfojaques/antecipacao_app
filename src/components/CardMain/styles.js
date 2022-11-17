import styled from "styled-components"

export const Card = styled.section`
    width: 80%;
    max-width: 740px;
    height: 90vh;

    background-color: mintcream;
    box-shadow: gray 0 0 5px 1px;
    border-radius: 2px;

    @media (min-width: 600px) {
        display: flex;
        height: 60vh;
    }
`;