import {useContext} from "react";
import { ThemeContext } from "../providers/ThemeProvider";

export const ThemeContainer = () => {
    const data = useContext(ThemeContext);
    console.log(data);
    return(
        <div style={
            {backgroundColor: data.theme === "light" ? "#fff" : "#000",
            color: data.theme === "light" ? "#000" : "#fff"
            }
            }>
            {data.theme}
            <button onClick={data.toggleTheme}>Switch</button>
        </div>
    )
}

export default ThemeContainer;