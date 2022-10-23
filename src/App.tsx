import './App.css';
import Button from './Components/Button';
import Checking from './Components/Checking';
import Box from './Components/Context/Box';
import ThemeContextProvider from './Components/Context/ThemeContext';
import ThemeContext from './Components/Context/ThemeContext';
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
<ThemeContextProvider>
<Box/>
</ThemeContextProvider>
    </div>
  );
}

export default App;
