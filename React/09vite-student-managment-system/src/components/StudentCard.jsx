function StudentCard({ name, age, course, city }) {
  return (
    <div className="card">
      <h2>{name}</h2>

      <p>
        <strong>age: </strong> {age}
      </p>

      <p>
         <strong>course: </strong> {course}

      </p>

      <p>
         <strong> City: </strong> {city}
      </p>


    </div>
  );
}

export default StudentCard;
