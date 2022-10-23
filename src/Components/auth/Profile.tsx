export type ProfileProps={
    name:string
}

const Profile = ({name}:ProfileProps) => {
    return (<h1>
        private profile components {name}
    </h1> )
}
 
export default Profile;