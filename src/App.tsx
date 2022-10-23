import './App.css';
import UserContextProvider from './Components/Context/USerContext';
import User from './Components/Context/User';

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
<UserContextProvider>
  <User/>
</UserContextProvider>
    </div>
  );
}

export default App;
