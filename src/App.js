import Heading from "./components/Heading";
import Navigation from "./components/Navigation";
import Cards from "./components/Cards";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import './App.css';

function App() {
  document.body.style.backgroundColor = "grey";

  const horse = "Horse Race";
  const horseDescription = "Horse racing is an equestrian performance sport...";
  const horseImg = require("./images/class-horse-1.jpg");

  const car = "Car Race";
  const carDescription =
    "Auto racing is a motorsport involving the racing of automobiles...";
  const carImg = require("./images/car-race.jpg");

  const bicycle = "Bicycle Racing";
  const bicycleDescription =
    "Road bicycle racing is the cycle sport discipline of road cycling..";
  const bicycleImg = require("./images/cycling.jpg");

  return (
    <>
      <div className="App">
        <Container>
          <Heading />
          <Navigation />
         <div className='cards-row'>
              <Cards title={horse} description={horseDescription} image={horseImg} />
              <Cards title={car} description={carDescription} image={carImg} />     
              <Cards title={bicycle} description={bicycleDescription} image={bicycleImg} />
              </div>
        </Container>
      </div>
    </>
  );
}

export default App;
