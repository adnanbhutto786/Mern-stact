

// function App() {
  

//   return (
//     <div>
//       <h1>Hello</h1>
//     </div>
//   )
// }

// export default App











// function App () {

//   const name = "Adnan Ali Bhutto"
//   const age = 22;


//   return (
//     <div>
//       <h1>Name: {name}</h1>
//       <h1>age: {age}</h1>
//     </div>
//   )
// }

// export default App





// import { useState } from "react";


// function App () {
//   const [name , setName] = useState ("");

//   return (
//     <div>
//       <h1>Enter your name</h1>
//       <input type="text" placeholder="text here"
//       onChange={(e) => setName (e.target.value)}
     
//      />
//     <h2>Your name is {name}</h2>
//     </div>
//   )
    
// }

// export default App


// import { useState } from "react";


// function App () {

//   const [age , setAge] = useState("");


//   return (
//     <div>
//       <h1>Enter your real age</h1>
//       <input type="text" placeholder="enter your age"
//       onChange={(e) => setAge(e.target.value)}

//       />

//       <h2>Your age is: {age}</h2>


//       {
//         age >= 20 
//           ? <h3>Go to picnic</h3>
//           : <h3>Go to Home</h3>
        
//       }
//     </div>
//   )
// }


// export default App







import { useState } from "react";

function App () {

  const [marks , setMarks] = useState ("");

  let result = "";



  if ( marks >= 90 ) {
    result = "A++ Grade";

  } else if (marks >=80) {
    result = "A+ Grade";

  }
   else if ( marks >= 70) {
    result = "B Grade";
  } 
  else {
    result = "Fail"
  }


  return (
    <div>
      <h1>Enter your marks</h1>
      <input type="number" placeholder="Enter your marks"

      onChange={(e) => setMarks (e.target.value)}
      />

      <h2>Marks: {marks}</h2>
      <h3>Result: {result}</h3>
    </div>
  )

}




export default App