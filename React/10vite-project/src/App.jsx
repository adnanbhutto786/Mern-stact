import { useState } from "react"
import './App.css';








function App () {

  const [count , setCount ] = useState (0);

  /// Increment Function

  const increment = () => {
    setCount (count + 1);
  };

  // Decrement Functio  


  const decrement = () => {
    setCount ( count - 1);

  };


  // reset Function




  const restFunction = () => {
    setCount (0)
  }


return (
  <div className="counter-container">
    <h1>Counter App</h1>
    <h2>{count}</h2>




    <div className="button-group">
      <button onClick={decrement}>-</button>

      <button onClick={restFunction}>Reset</button>

      <button onClick={increment}>+</button>
     
    </div>
  </div>
)




}

export default App