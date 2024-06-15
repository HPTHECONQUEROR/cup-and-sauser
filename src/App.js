import React from "react";
import Header from "./components/Header";
import ThemeConsumer from "./Themes/ThemeConsumer";
import ThemeProvider from "./Themes/ThemeProvider";
import NavigationBar from "./components/NavigationBar";
function App() {
    return (
        <ThemeProvider>
            <Header />
            <ThemeConsumer />
            <NavigationBar/>
        </ThemeProvider>
    );
}

export default App;
