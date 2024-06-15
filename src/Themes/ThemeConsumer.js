import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function ThemeConsumer() {
    var change = "btn btn-dark";
    var light_dark = "Dark";

    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div style={{ backgroundColor: theme === "light" ? "black" : "white", color: theme === "light" ? "white" : "black",paddingLeft:"169vh"}}>
            <button onClick={toggleTheme} type="button" class={theme==="light"?"btn btn-light":"btn btn-dark"}>{light_dark = theme==="light"?"Light":"Dark"}</button>
        </div>
    );
}
