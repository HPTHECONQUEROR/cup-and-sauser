import logo from '../assets/logo.png';
import name from '../assets/name.png';
import React, { useContext } from "react";
import ThemeContext from "../Themes/ThemeContext";

export default function Header() {
    const { theme } = useContext(ThemeContext);

    const mainstyle = {
        backgroundColor: theme === 'dark' ? '#ada666' : 'black',
        textAlign: "center",  
        display: "flex"
    };

    return (
        <div style={mainstyle}>
            <div>
                <img src={logo} width={220} height={220} alt="logo" />
            </div>

            <div style={{
                display: 'flex',
                justifyContent: "center",
                alignItems: 'center',
                height: '25vh',
                width: '100%',
            }}>
                <img src={name} alt="name" />
            </div>
        </div>
    );
}
