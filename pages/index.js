import React from "react";
import config from "../config.json";
import styled from "styled-components";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline/index";
import { videoService } from "../src/services/videoService";
import { StyledHeader } from "../src/components/Header"
import { StyledFooter } from "../src/components/Footer";
import Link from "next/link";

function HomePage() {
    const service = videoService();
    const [filterValue, setfilterValue] = React.useState("");
    const [playlists, setPlaylists] = React.useState({});

	React.useEffect(() => {
		service
            .getAllVideos()
			.then((dados) => {
                //forma imutavel
				const novasPlaylists = { ...playlists }
				dados.data.forEach((video) => {
					if (!novasPlaylists[video.playlist]) novasPlaylists[video.playlist] = [];
                    novasPlaylists[video.playlist] = [
                        video,
                        ...novasPlaylists[video.playlist],
                    ];
                });
				setPlaylists(novasPlaylists)
			})

	}, [])

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu filterValue={filterValue} setfilterValue={setfilterValue} />
                <Header />
                <Timeline searchValue={filterValue} playlists={playlists}>
                    Conteudo
                </Timeline>
                <Footer />
            </div>
        </>
    );
}

export default HomePage

/* Banner */
//Por algum motivo bizarro, colocar o banner em outro lugar parece quebrar tudo :v
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
function Timeline({ searchValue, ...props }) {
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
                                    let idVideo;
                                    const linkFormat =
                                      /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
                                    const match = video.url.match(linkFormat);
                                    if (match && match[2].length == 11) {
                                        idVideo = match[2];
                                    }
                                    return (
                                        <Link 
                                        key={video.url} 
                                        href={{
                                            pathname: "/video",
                                            query: {
                                                v: idVideo,
                                                title: video.title,
                                            },
                                        }}>
                                            <img src={video.thumb} />
                                            <span>
                                                {video.title}
                                            </span>
                                        </Link>
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

function Footer() {
    return (
        <StyledFooter>
            <section>
                <div>
                    <p>S2 - Feito com amor por Aria - S2</p>
                    <a href="https://github.com/AriaPerciliano" target="_blank">Github</a>
                    <a href="https://www.linkedin.com/in/aria-perciliano/" target="_blank">Linkedin</a>
                </div>
            </section>
        </StyledFooter>
    )
}