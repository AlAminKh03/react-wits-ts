type personNameProps ={
 name:{
    firstName:string,
    lastName:string,
 }
}

const Person = (props:personNameProps) => {
    return ( <>
    {props.name.firstName} {props.name.lastName}
    </> );
}
 
export default Person;