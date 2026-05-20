
// function App() {

//   return (
//     <div className="container">

//       <h1>Student Dashboard</h1>

//       <div className="card">
//         <h2>Name: Adnan</h2>
//         <h3>Course: React JS</h3>
//         <button>View Profile</button>
//       </div>

//     </div>
//   );
// }

// export default App;


function App() {

  const students = [
    {
      name: "Adnan",
      course: "React JS",
      age: 22,
      city: "Karachi"
    },

    {
      name: "Ali",
      course: "Node JS",
      age : 27 ,
      city: "Larkana"
    },

    {
      name: "Ahmed",
      course: "Python",
      age: 39,
      city: "hyderbad"
    }
  ];
  function ShowMessage () {
    alert("Welcom")
  }

  return (
    <div className="container">

      <h1>Student Dashboard</h1>

      {
        students.map((student, index) => (

          <div className="card" key={index}>

            <h2>Name: {student.name}</h2>

            <h3>Course: {student.course}</h3>
            <h3>Course: {student.age}</h3>
            <h3>Course: {student.city}</h3>

            <button onClick={() => ShowMessage(student.name) }>View Profile</button>

          </div>

        ))
      }

    </div>
  );
}

export default App;



