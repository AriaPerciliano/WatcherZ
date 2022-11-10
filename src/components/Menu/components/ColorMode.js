import React from "react";

export const ColorModeContext = React.createContext({
    mode: "light"
});

export default function ColorModeProvider(props) {
    return (
        <ColorModeContext.Provider>
            {props.children}
        </ColorModeContext.Provider>
    )
}