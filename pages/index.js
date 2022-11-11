import React from "react";
import config from "../config.json";
import styled from "styled-components";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline/index";

function HomePage() {
    const  [filterValue, setfilterValue] = React.useState("");
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu filterValue={filterValue} setfilterValue={setfilterValue} />
                <Header />
                <Timeline searchValue={filterValue} playlists={config.playlists}>
                    Conteudo
                </Timeline>
        </div>
        </>
    );
}

export default HomePage

/* Header */
const StyledHeader = styled.div`
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
/* Banner */
const StyledBanner = styled.div`
    background-color: #270244;
    background-image: url(${config.banner});
    background-size: cover;
    width: 100%;
    height: 338px;
`;
function Header() {
    return (
        <StyledHeader>
            <StyledBanner />
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>
            </section>
        </StyledHeader>
    )
}
/* Timeline */
function Timeline({searchValue, ...props}) {
    const playlistName = Object.keys(props.playlists);
    return (
        <>
        <StyledTimeline>
            {playlistName.map(function (playlistName) {
                const videos = props.playlists[playlistName];
                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.filter((video) => {
                                const titleNormalized = video.title.toLowerCase()
                                const searchValueNormalized = searchValue.toLowerCase()
                                return titleNormalized.includes(searchValueNormalized)    
                            }).map((video) => {
                                return (
                                    <a key={video.url} href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
        </>
    )
}