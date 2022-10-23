import Login from "./Login";
import { ProfileProps } from "./Profile";


type privateProps ={
    isLoggedIn: boolean,
    Component:React.ComponentType <ProfileProps>
}
const Private = ({isLoggedIn,Component}:privateProps) => {
            if(isLoggedIn){
                return <Component name ="Al Amin Khan"/>
                   }
            else{
                return(
                    <Login/>
                )}
            }
 
export default Private;