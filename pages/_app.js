import React from "react";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import ColorModeProvider, { ColorModeContext } from "../src/components/Menu/components/ColorMode";

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
    },
/* Temas Secrétos */
    trans: {
        backgroundBase: "#f4c6f2",
        backgroundLevel1: "#e2d2f6",
        backgroundLevel2: "#f3d7f4",
        borderBase: "#aae0f0",
        textColorBase: "#130c1f",
        objectBase: "#aae0f0",
        objectLevel1: "#ece2f4",
        objectLevel2: "#bdedfb",
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
    }
};

function ProviderWrapper(props) {
    return (
        <ColorModeProvider initialMode={"light"}>
            {props.children}
        </ColorModeProvider>
    )
}

function MyApp({ Component, pageProps }) {
    const contexto = React.useContext(ColorModeContext);

    return (
        <ThemeProvider theme={theme[contexto.mode]}>
            <CSSReset />
            <Component {...pageProps} />
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