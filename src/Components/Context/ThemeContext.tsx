import { createContext } from "react";
import { theme } from "./theme";
type ContextProviderChildren={
    children:React.ReactNode
}

export const ThemeContext= createContext(theme)

const ThemeContextProvider = ({ children }: ContextProviderChildren) => {
   
    return ( 
    <ThemeContext.Provider  value={theme} >
    {children}
    </ThemeContext.Provider> );
}
 
export default ThemeContextProvider;