import Car from "../components/Car";

function Home() {
  return (
    <div>
      <h1>{"Welcome to the Home Page"}</h1>
      <h2>Car List</h2>
      <div className="container">
        <Car make="BMW" color="blue" />
        <Car make="Toyota" color="red" />
        <Car make="Mercedes" color="black" />
      </div>
    </div>
  );
}

export default Home;
