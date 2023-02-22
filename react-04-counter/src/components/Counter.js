import {useState} from "react";


function Counter() {
  const [count, setCount] = useState(0);

  const incrase = () =>{
    setCount(count+1);
  };

  const decrase = () => {
    setCount(count-1);
  };
  
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={decrase}>Decrase</button>
        <button onClick={incrase}>Incrase</button>
    </div>
  )
 
    
}
export default Counter;