import React from "react";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import ColorModeProvider, { ColorModeContext } from "../src/components/Menu/components/ColorMode";
import EditProfile from "../src/components/Menu/components/EditProfile";
import RegisterVideo from "../src/components/RegisterVideo";

const theme = {
    light: {
        backgroundBase: "#edeaff",
        backgroundLevel1: "#e1ddfd",
        backgroundLevel2: "#d9d5f6",
        borderBase: "#2a2338",
        textColorBase: "#130c1f",
        objectBase: "#b9acd4",
        objectLevel1: "#d1cdec",
        objectLevel2: "#d1cdec",
        buttonBase: "#ab8ce6",
    },
    dark: {
        backgroundBase: "#0a0612",
        backgroundLevel1: "#1f1137",
        backgroundLevel2: "#150c25",
        borderBase: "#291749",
        textColorBase: "#d4befa",
        objectBase: "#341d5c",
        objectLevel1: "#1f1137",
        objectLevel2: "#1f1137",
        buttonBase: "#5021a3",
    },
/* Temas Secrétos */
/* Incompleto :v */
    trans: {
        backgroundBase: "#aae0f0",
        backgroundLevel1: "#e2d2f6",
        backgroundLevel2: "#f3d7f4",
        borderBase: "#aae0f0",
        textColorBase: "#130c1f",
        objectBase: "#aaeef0",
        objectLevel1: "#e2d2f6",
        objectLevel2: "#e2d2f6",
        buttonBase: "#ab8ce6",
    },
    goth1909: {
        backgroundBase: "#000000",
        backgroundLevel1: "#1e1e1e",
        backgroundLevel2: "#111111",
        borderBase: "#000000",
        textColorBase: "#ececec",
        objectBase: "#000000",
        objectLevel1: "#1e1e1e",
        objectLevel2: "#1e1e1e",
        buttonBase: "#5021a3",
    }
};

function ProviderWrapper(props) {
    return (
        <ColorModeProvider initialMode={"dark"}>
            {props.children}
        </ColorModeProvider>
    )
}

function MyApp({ Component, pageProps }) {
    const contexto = React.useContext(ColorModeContext);
    //o RegisterVideo dentro do _app.js faz com que o botão apareça em todas as paginas. Dunno if i like this tho, might change it in the future.
    return (
        <ThemeProvider theme={theme[contexto.mode]}>
            <CSSReset />
            <Component {...pageProps} />
            <RegisterVideo />
            <EditProfile />
        </ThemeProvider>
    )
}

export default function _App(props) {
    return (
        <ProviderWrapper>
            <MyApp {...props} />
        </ProviderWrapper>
    )
};
