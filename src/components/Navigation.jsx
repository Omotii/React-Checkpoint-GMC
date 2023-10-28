import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Components.css";
import Loginform from "./form";

const Navigation = () => {
  return (
    <>
      <Navbar className="bg-color">
        <Navbar.Brand className="ms-4"><span className="blcolor">Racing Sports</span></Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="blcolor">
            <Nav.Link href="#home"><span className="whcolor">Home</span></Nav.Link>
            <Nav.Link href="#link"><span className="whcolor">About</span></Nav.Link>
            <Nav.Link href="#link"><span className="whcolor">Requirements</span></Nav.Link>
            <Nav.Link href="#link"><span className="whcolor">Community</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Loginform />
      </Navbar>
    </>
  );
};

export default Navigation;
