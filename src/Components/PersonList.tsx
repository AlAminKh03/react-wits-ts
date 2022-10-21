type peronListsProps={
    personList:{
     firstName:string,
     lastName:string
    }[]
}

const PersonList = (props:peronListsProps) => {
    return ( <>
    {props.personList.map(person=>{
        return <div key={person.firstName}>
            {person.firstName}  {person.lastName}
        </div>
    })}
    </> );
}
 
export default PersonList;