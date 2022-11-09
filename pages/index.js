import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    const homePageStyles = {
        //backgroundColor: "red"
    };
    const  [filterValue, setfilterValue] = React.useState("");


    return (
        <>
            <CSSReset />
            <div style={homePageStyles}>
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

/*function Menu() {
    return (
        <div>
            Menu
        </div>
    )
}*/

/* Header */
const StyledHeader = styled.div`
    .user-info img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border-style: solid;
        border-width: 3px;
        border-color: #6C4888;
    }
    /*.banner {
        background-color: #270244;
        width: 100%;
        height: 338px;
    }
    .banner img {
        //tirar o display none quando achar uma imagem boa
        display: none;
        width: 100%;
        height: 338px;
        object-fit: cover;
    }*/
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 16px 26px;
        gap: 16px;
        font-size: 20px;
        background-color: #EADEF4;
        border-radius: 0px 0px 10px 10px;
    }
`;
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
            {/*<img src="banner" />*/}
            {/*<section className="banner">
            <img src={config.banner} />
    </section>*/}
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
    //console.log("Dentro do componente", props);
    const playlistName = Object.keys(props.playlists);
    return (
        <StyledTimeline>
            {playlistName.map(function (playlistName) {
                const videos = props.playlists[playlistName];
                //console.log(playlistName)
                //console.log(videos)
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
    )
}