import './App.css';
// import Private from './Components/auth/Private';
// import Profile from './Components/auth/Profile';
import Counter from './Components/state/Counter';
// import UserContextProvider from './Components/Context/USerContext';
// import User from './Components/Context/User';

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
{/* <UserContextProvider>
  <User/>
</UserContextProvider> */}
{/* <Private isLoggedIn={true} Component={Profile}/> */}
<Counter/>
    </div>
  );
}

export default App;
