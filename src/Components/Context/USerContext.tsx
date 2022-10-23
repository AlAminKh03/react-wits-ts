import { createContext, useState } from "react";
type UserContextProviderProps={
    children:React.ReactNode
}
type AuthUser ={
    name:string,
    email:string
}

type UserValueType={
    user: AuthUser | null,
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}
export const UserContext=createContext<UserValueType | null>(null)

const UserContextProvider = ({children}:UserContextProviderProps) => {
    const [user,setUser]=useState<AuthUser | null>(null)
    return ( <>
    <UserContext.Provider value={{user,setUser}}>
    {children}
    </UserContext.Provider>
    </> );
}
 
export default UserContextProvider;