import { useNavigate } from "react-router-dom";
import Car from "../components/Car";

function Home() {
  // useNavigate : changer de page depuis le code (clic sur la Mercedes → /details/3)
  const navigate = useNavigate();

  return (
    <div>
      <h1>{"Welcome to the Home Page"}</h1>
      <h2>Car List</h2>
      <div className="container">
        <Car make="BMW" color="blue" />
        <Car make="Toyota" color="red" />
        <Car
          make="Mercedes"
          color="black"
          onClick={() => navigate("/details/3")}
        />
      </div>
    </div>
  );
}

export default Home;
