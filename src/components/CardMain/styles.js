import styled from "styled-components"

export const Card = styled.section`
    width: 80%;
    height: 70vh;

    background-color: whitesmoke;
    box-shadow: gray 0 0 5px 1px;
    border-radius: 2px;

    @media (min-width: 760px) {
        display: flex;
    }
`;