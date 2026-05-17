

// function App() {

//   const name = "Adnan Ali Bhutto";
//   const age = 22;

//   return (
    
//     // <h1>My Name is Adnan Ali Bhutto</h1>

//     <div>
//       <h1>My name is {name}</h1>
//       <h6>My age is {age}</h6>

//     </div>
//   )
// }


// function App () {

//   const name = "Adnan";
//   const age = 22;
//   const city = "Karachi";
//   const proffession = "Web devepoler"

// return (
//   <div>
//     <h1>
//       My name is {name}
//     </h1>
//     <h2>
//       My age is {age}
//     </h2>
//     <h1>
//       My city is {city}
//     </h1>
//     <h1>
//       My proffession is {proffession}
//     </h1>
//   </div>
// );

// }
// export default App


// function App () {
//   const studentName = "Adnan";
//   const marks = 85;
  

//   return  (
//     <div>
//       <h1>Sudent name: {studentName}</h1>
//       <h2>Student Marks{marks}</h2>
   


//     {
//       marks >= 50
//       ?<h2>Pass</h2>
//       :  <h2>Fail</h2>
//     }

//      </div>


//   );

  
// }

// export default App



// function app (){

//   const Username = "Adnan Ali Bhutto";
//   const marks = 70;


//   return (


//     <div>
//     <h1>My Name is: {Username}</h1>
//     <h2>Marks: {marks}</h2>


//     {
//       marks>=50
//       ? <h1>Pass A grade</h1>
//        : <h1>Fail</h1>
//     }


//     </div>

//   );

// }

// export default app











// function App () {

//   const name = "Adnan";
//   const age = 29;


//   return (

//     <div>
//     <h1>My Name is: {name}</h1>
//     <h2>My Age is: {age}</h2>


//     {
//       age >= 24
//       ? <h3>You can vote</h3>
//       :  <h3>You can not vote</h3>
       
//     }

//     </div>
//   )

// }
// export default App 



// function App (){

//   const temp = 10;

//   return (
//     <div>

//       <h1>Temp: {temp}</h1>

//       {
//         temp >= 20
//         ? <h1>Hot</h1>
//         : <h1>cold</h1>
//       }

//     </div>
//   )



// }

// export default App



function App () {

  const numcheck = 3;

  return (
    <div>

      <h1>This Number is: {numcheck}</h1>

      {
        (numcheck % 2 === 0)
        ? <h3>Num is Even</h3> 
        : <h3>Num is Odd</h3>
      }

    </div>
  )
}

export default App
