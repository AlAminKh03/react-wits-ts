import { useReducer } from "react";

type CounterState={
    count:number
}
type CounterChange={
    type: 'increment' | 'decrement',
    payload:number
}
type CounterReset ={
    type:'reset',
}

type CounterAction= CounterChange | CounterReset

const initialState={
    count:0
}

const reducer=(state: CounterState,action:CounterAction)=>{
switch (action.type) {
    case 'increment':{
return{
    count:state.count + action.payload
}
    }     
case 'decrement':{
return{
    count:state.count - action.payload
}
}
case 'reset':{
    return initialState
}
    default:
        return state;
}
}
const Counter = () => {
    const[state,dispatch]=useReducer(reducer,initialState)
    // console.log(dispatch)
    console.log(state)
    console.log(initialState)
    return ( <>
    count: {state.count}
    <button onClick={()=>{dispatch({type:'increment',payload:10})
    }}>
        Increment
    </button>
    <button onClick={()=>{dispatch({type:'decrement',payload:10})
    }}>
        decrement
    </button>
    <button onClick={()=>{dispatch({type:'reset'})
    }}>
        reset
    </button>
    </> );
}
 
export default Counter;