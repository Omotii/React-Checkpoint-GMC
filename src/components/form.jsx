import "./Components.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Loginform = () => {
  return (
    <>
      <Form id="form1">
        <Form.Group className="me-3">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="me-3">
          <Form.Control type="password" placeholder="password"/>
        </Form.Group>
        <Button type="submit">Login</Button>
      </Form>
    </>
  );
};

export default Loginform;
