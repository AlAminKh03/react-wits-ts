import { useState } from "react";

const Checking = () => {
const [check, setcheck]=useState(false)

const loginButton =()=>{
setcheck(true)
}

const logoutButton =()=>{
setcheck(false)
}
    return ( <>
    <button onClick={loginButton}>Log in </button>
    <button onClick={logoutButton}>Log out </button>
{check? "you are logged in " : "please log in"}

    </> );
}
 
export default Checking;