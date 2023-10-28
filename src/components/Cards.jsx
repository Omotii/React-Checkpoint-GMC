import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Components.css";

const Cards = ({ title, description, image }) => {
  return (
    <div className="cards-container">
      <Card id="card-item">
        <div className="card-image">
        <Card.Img src={image} alt="horse_race" />
        </div>
        <Card.Body className="cardbg">
          <Card.Title>
            <span className="blcolor">{title}</span>
          </Card.Title>
          <Card.Text>
            <span className="whcolor">{description} </span>
          </Card.Text>
          <Button>Read more</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
