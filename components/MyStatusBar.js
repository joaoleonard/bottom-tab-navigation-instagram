import { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { ModeContext } from "../context/Context";

function MyStatusBar() {
    const ctx = useContext(ModeContext);

    return <StatusBar style={ctx.darkMode ? 'light' : 'dark'} />
}

export default MyStatusBar;