// import { useState } from "react";


// function App () {


//   const [ marks , SetMarks] = useState ("");
//   let result = " ";


//   if ( marks >= 90) {
//     result = "A++ Grade"
//   }
//    else if ( marks >= 80) {
//     result = "A+ Grade";

//    } else if ( marks >= 70) {
//     result = "B grade"

//    } else {
//     result = " Fail"
//    }


//    return (
//     <div>
//       <h1>Enter the marks</h1>
//       <input type="number" placeholder="Enter the marks"
//       onChange={(e) => SetMarks (e.target.value)}
//       />

//       <h2>Marks: {marks}</h2>
//       <h1>Marks: {result}</h1>
//     </div>
//    )


// }


// export default App

















import { use, useState } from "react";
import "./App.css"


function App () {

  const [count , setCount] = useState (0);

  function increase () {
    setCount (count +1) 
  }

  function decrease () {
    setCount (count -1)
  }


  function reset () {
    setCount(0)
  }


  return (
    <div className="container">
      <h1>Counter App</h1>
      <h2>{count}</h2>

      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>

    </div>
  )
}

export default App






































