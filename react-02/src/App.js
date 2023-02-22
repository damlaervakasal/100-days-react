import './App.css';
import Header from './components/Header';
 {/*
 //********    1     *********
 import Header from './components/Header';

 function App(){
   return(
    <div>
      <h1>Hello React</h1>
      <Header></Header>
    </div>

   );
 }
*/}

// export default App;

// ********    2     *********
const name = "Damla";
const age = "22";
const favcol = "yellow";
const favmov = "FRIENDS";
const isLoggedIn = true;

function App() {
  return  (<>
  <h3>{name}</h3>
  <h4>{age}</h4>
  <Header></Header>
  <h5>{isLoggedIn ? `Helloo benim adim ${name}, ${age} yasindayim
        En sevdigim renk ${favcol} ve en sevdigim dizi ${favmov} `
        : "daha fazla bilgiye erisemezsiniz"  }</h5>
  </>
  );
}
  export default App;

