import { useState } from "react";

// function App () {

//   const name = "Adnan";
//   const marks = 48;


//   return (
//     <div>
//       <h1>My name is: {name}</h1>
//       <h2>Total_Marks: {marks}</h2>

//       {
//         marks >= 50 
//         ? <h1>Pass</h1>
//         : <h2>Fail</h2>
//       }



//     </div>


//   )
// }

// export default App


// function  App () {

//   const [name , setName] = useState("");

//   return (
//     <div>

//       <h1>Enter your name</h1> 
//       <input type="text" placeholder="Type here..."
//       onChange={(en) => setName(en.target.value)}
//        />

//        <h2>Your name is: {name}</h2>

//     </div>

//   )

// }

// export default App













function App () {

  const [ name , setName] = useState ("");

  return (


    <div>

      <h1>Enter your name</h1>
      <input type="text" placeholder="Type here......."

      onChange={(e) => setName (e.target.value)}
      />
     
     <h2>My name is: {name}</h2>



    </div>
  )
}

export default App