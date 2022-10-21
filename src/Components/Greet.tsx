type greetName ={
    name:string,
    debt:number,
    isloggedIn:boolean
}

const Greet = (props:greetName) => {
    return ( <>
   {props.isloggedIn?  <h2>Hello, {props.name}, Welcome to {props.debt}</h2> : "welcome guest"}
    </> );
}
 
export default Greet;