import React from "react";

type InputProps ={
    value: string,
    onChange: (e:React.ChangeEvent<HTMLInputElement>,id:number) => void,
   
}

const InputField = (props:InputProps) => {
    return ( <>
    <input value={props.value} onChange={(e)=>props.onChange(e,1)}/>
    </> );
}
 
export default InputField;