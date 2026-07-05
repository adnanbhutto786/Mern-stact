import Navbar from "./components/Navbar";
import StudentCard from "./components/StudentCard";
import Footer from "./components/Footer";
import "./App.css"

function App() {
  return (
    <>
      <Navbar />

      <StudentCard name="Adnan" age={23} course="Data science" city="Karachi" />

      <StudentCard name= "Ahmed" age = {24} course="AI" city="Islmabad" />

      <StudentCard name= "Muzmail" age = {25} course="communication skills" city="Lahore" />

      <StudentCard name= "Rizwan" age = {24} course="AI" city="Islmabad" />

      <StudentCard name= "Ahmed" age = {24} course="AI" city="Islmabad" />

      <Footer />
    </>
  );
}

export default App;
