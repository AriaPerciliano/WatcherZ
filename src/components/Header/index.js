import styled from "styled-components";

export const StyledHeader = styled.div`
    .user-info img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border-style: solid;
        border-width: 4px;
        border-color: ${({ theme }) => theme.objectBase};
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 16px 26px;
        gap: 16px;
        font-size: 20px;
        background-color: ${({ theme }) => theme.backgroundLevel1};
        border-radius: 0px 0px 10px 10px;
    }
`;
