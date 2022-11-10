import React from "react";
import styled from "styled-components";
import Menu from "../src/components/Menu";
import { ColorModeContext } from "../src/components/Menu/components/ColorMode";


export default function Video() {
    const contexto = React.useContext(ColorModeContext);
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
        }}>
            <Menu />
            <PlayerVideo />
        </div>
    )
}
const StyledVideoWindow = styled.div`
    .video-window {
        display: flex;
        align-items: center;
        height: 100%;
        width: 60%;
        padding: 16px 16px 26px;
        gap: 16px;
        font-size: 20px;
        background-color: ${({ theme }) => theme.backgroundLevel1};
        border-radius: 0px 0px 10px 10px;
    }
    iframe {
        padding: 50px;
        height: 720px;
        width: 1280px;
    }
`;

function PlayerVideo() {
    return(
        <StyledVideoWindow>
            <section className="video-window">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ddHa1fCB4Gg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
        </StyledVideoWindow>
    )
}