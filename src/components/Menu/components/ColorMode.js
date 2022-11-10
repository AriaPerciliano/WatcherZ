import React from "react";

export const ColorModeContext = React.createContext({
    mode: "",
    setMode: () => ( alert("Configura-me ou devoro-te!")),
    toggleMode: () => ( alert("Configura-me ou devoro-te!"))
});

export default function ColorModeProvider(props) {
    const [mode, setMode] = React.useState(props.initialMode)

    function toggleMode() {
        if(mode === "light") setMode("dark")
        if(mode === "dark") setMode("light")
        if(mode === "trans") setMode("goth1909")
        if(mode === "goth1909") setMode("trans")
    }

    return (
        <ColorModeContext.Provider value={{ mode: mode, setMode: setMode, toggleMode: toggleMode }}>
            {props.children}
        </ColorModeContext.Provider>
    )
}