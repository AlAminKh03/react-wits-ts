import { createContext } from "react";
import Box from "./Box";
import { theme } from "./theme";
type ContextProviderChildren={
    children:React.ReactNode
}

const ThemeContext= createContext(theme)

const ThemeContextProvider = ({ children }: ContextProviderChildren) => {
   
    return ( 
    <ThemeContext.Provider  value={theme} >
    {children}
    </ThemeContext.Provider> );
}
 
export default ThemeContextProvider;