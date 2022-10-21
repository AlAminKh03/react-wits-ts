import './App.css';
import Greet from './Components/Greet';
import Person from './Components/Person';
import PersonList from './Components/PersonList';

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
  <Greet name='Al Amin' debt={240000} isloggedIn={false}/>
  <Person name ={PersonName}/>
  <PersonList personList={PersonLists}/>
    </div>
  );
}

export default App;
