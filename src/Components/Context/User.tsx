import { useContext } from "react";
import { UserContext } from "./USerContext";

const User = () => {
    const user =useContext(UserContext)
const handleLoginButton=()=> {
    if(user) {
            user.setUser({
                name:"Al Amin Khan",
                email:"alaminkhan6203@gmail.com"
            })
        }
}
const handleLogOutButton=()=> {
    if(user) {
        user.setUser(null)
    }
}

    return ( <>
   <h1> hello welcome {user?.user?.name}</h1>
   <h1>Your email is {user?.user?.email}</h1>
    <button onClick={handleLoginButton}>
        Login
    </button>
    <button onClick={handleLogOutButton}>
        Logout
    </button>
    </> );
}
 
export default User;