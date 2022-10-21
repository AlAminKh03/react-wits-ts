import './App.css';
import Button from './Components/Button';
import Checking from './Components/Checking';
import Greet from './Components/Greet';
import InputField from './Components/Input';
import Message from './Components/Message';
import Oscar from './Components/Oscar';
import Person from './Components/Person';
import PersonList from './Components/PersonList';
import User from './Components/User';

function App() {
const PersonName ={
  firstName:"Bruce",
  lastName :"Wayne"
}

const PersonLists =[
  {
    firstName: "Bruce",
    lastName: "Wayne"
  },
  {
    firstName: "Clark",
    lastName: "kent"
  },
  {
    firstName: "Princess",
    lastName: "Diana"
  }
]

  return (
    <div className="App">
  <Message>This is just a placeholders</Message>
  <Oscar>
    <Message>And the oscar goes to to decaprio</Message>
  </Oscar>
  <Button/>
  <InputField value='' onChange={(e,id)=>{
    console.log('onChanged')
  }}/>
  <Checking/>
  <User/>
    </div>
  );
}

export default App;
