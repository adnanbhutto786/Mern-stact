// import { useState } from "react";




// function App () {


//   const [ name , Setname ] = useState("Adnan");

//   return (
//     <div>
//      <h1>{name}</h1>

//      <button onClick={ () => Setname("Ali")}>Change name</button>

//     </div>
//   )
// }

// export default App



import { useState } from "react";
import './App.css'


function App () {

    // create usestate intial state 
  const [ profile , setProfile ] = useState( {
    name : "Adnan" ,
    age : 24 ,
    proffession : "Frontend devepoler"
  })


   // change // setprofile


   const changeProfile = () => {
    setProfile( {
      name : "Ahmed" ,
      age : 23 ,
      proffession :  "Backend Devepoler"
    })
   }



   return (
  
    <div className="profile-card">

      <h1>Profile Card</h1>

      <p> <strong>Name:</strong> {profile.name}  </p>  

      <p> <strong>age:</strong> { profile.age}  </p>  

      <p> <strong>Proffesion:</strong> {profile.proffession}  </p>  


      <button onClick={changeProfile}>Change Profile</button>

    </div>

   )

}

export default App