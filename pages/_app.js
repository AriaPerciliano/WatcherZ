import React from "react";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import ColorModeProvider, { ColorModeContext } from "../src/components/Menu/components/ColorMode";

const theme = {
    light: {
        backgroundBase: "#f9f9f9",
        backgroundLevel1: "#ffffff",
        backgroundLevel2: "#f0f0f0",
        borderBase: "#e5e5e5",
        textColorBase: "#222222",
        objectBase: "#222222",
        objectLevel1: "#ffffff",
        objectLevel2: "#f0f0f0",
    },
    dark: {
        backgroundBase: "#181818",
        backgroundLevel1: "#202020",
        backgroundLevel2: "#313131",
        borderBase: "#383838",
        textColorBase: "#FFFFFF",
        objectBase: "#181818",
        objectLevel1: "#202020",
        objectLevel2: "#313131",
    },
    trans: {
        backgroundBase: "#DDC5F1",
        backgroundLevel1: "#202020",
        backgroundLevel2: "#313131",
        borderBase: "#383838",
        textColorBase: "#FFFFFF",
        objectBase: "#181818",
        objectLevel1: "#202020",
        objectLevel2: "#313131",
    },
    goth1909: {
        backgroundBase: "#181818",
        backgroundLevel1: "#202020",
        backgroundLevel2: "#313131",
        borderBase: "#383838",
        textColorBase: "#FFFFFF",
        objectBase: "#222222",
        objectLevel1: "#ffffff",
        objectLevel2: "#f0f0f0",
    }
};

function MyApp({ Component, pageProps }) {
    
    const contexto = React.useContext(ColorModeContext);

    return (
    <>
        <ColorModeProvider>
            <ThemeProvider theme={theme[contexto.mode]}>
                <CSSReset />
                <Component {...pageProps} />
            </ThemeProvider>
        </ColorModeProvider>
    </>
    )
}

export default MyApp;