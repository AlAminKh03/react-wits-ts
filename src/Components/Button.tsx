
const Button = () => {
    const buttonClick =(e:React.MouseEvent<HTMLButtonElement>, id:number)=>{
        console.log("button clicked")
    }
    return ( <>
    
    <button onClick={(e)=>buttonClick(e,1)}>click</button>
    </> );
}
 
export default Button;