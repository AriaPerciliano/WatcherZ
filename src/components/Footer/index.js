import styled from "styled-components";

export const StyledFooter = styled.span`
    background-color:  ${({ theme }) => theme.backgroundLevel2};
    font-size: 1.1em;
    text-transform: capitalize;
    color: ${({ theme }) => theme.textColorBase};
    text-align: center;
    margin-bottom: 15px;
    padding: 2px;

    p {
        font-weight: bold;
    }

    a {
        display: inline;
        margin: 10px;
        padding: 2px;
        text-decoration: none;
        color: ${({ theme }) => theme.textColorBase};
        cursor: pointer;
    }
`;