import { useState } from "react"
type authUser ={
    name:string,
    email:string
}


const User = () => {
    const [user, setUser]=useState<authUser | null>(null)

const loginButton =()=>{
setUser({
    name:"Al Amin Khan",
    email:"alam@alam.com"

})
}

const logoutButton =()=>{
setUser(null)
}
    return ( <>
    <button onClick={loginButton}>Log in </button>
    <button onClick={logoutButton}>Log out </button>
    <p>User name is {user?.name}</p>
    <p>User Email is {user?.email}</p>

</>)}
 
export default User;