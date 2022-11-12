import { useRouter } from "next/router";
import styled from "styled-components";


const StyledVideoPlayer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    .title {
        padding: 16px;
    }
    iframe {
        border-radius: 20px;
        border: none;
    }
`;

const VideoPlayer = () => {
    const router = useRouter();
    return (
        <StyledVideoPlayer>
            <h2 className="title">{router.query.title}</h2>
            <iframe
            width="896"
            height="504"
            src={`https://www.youtube.com/embed/${router.query.v}`}
            title="Youtube Video Player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
        </StyledVideoPlayer>
    )
}

export default VideoPlayer;