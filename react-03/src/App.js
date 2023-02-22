import './App.css';
import User from './components/User';

const famname = [
{
  name: "Bob ",
  who: "dad",
  age: 45
},
{
  name: "Tracy ",
  who: "mom",
  age: 42
},
{
  name: "Jonas ",
  who: "brother",
  age: 5
},
{
  name: "Elizabeth ",
  who: "sister",
  age: 3
}
    ] 

function App() {
  return (
    <>
    <User name="damla" surname="kasal" age={'(25)'} isLoggedIn={true} 
    friends={['Jon ', 'Janice ','Monica ','chandeler']}
    famname={famname}
    />
    </>
  )
}

export default App;