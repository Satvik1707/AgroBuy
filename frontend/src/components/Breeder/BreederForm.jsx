import React, {useState} from 'react';
import { Form, Row, Col, Button } from "react-bootstrap";
import { addProduct } from "../../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../shared/Loader";
import Message from "../shared/Message";
import Success from "../shared/Success";

const BreederForm = () => {
    const [name, setname] = useState("");
    const [quantity, setquantity] = useState();
    const [place, setplace] = useState("");
    const [date, setdate] = useState("");
    const [category, setcategory] = useState("");
    
    const addProductState = useSelector((state) => state.addProduct);
    const { loading, error, success } = addProductState;
  
    const dispatch = useDispatch();
  
    const submitForm = (e) => {
      e.preventDefault();
      const product = {
        name,
        quantity,
        place,
        date,
        category
      };
      dispatch(addProduct(product));
    };
    return (
      <div>
        {loading && <Loader />}
        {error && <Message error="Add new product error" />}
        {success && <Success error="Product added succesfully" />}
        <Form onSubmit={submitForm} className="bg-light p-4">
          <Row className="mb-2">
            <Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Seed Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  placeholder="Seed name"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Seeds Quantity</Form.Label>
                <Form.Control
                  type="number"
                  value={quantity}
                  onChange={(e) => setquantity(e.target.value)}
                  placeholder="Seeds Quantity"
                />
              </Form.Group>
            </Row>
          </Row>
          <Row >
            <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
              <Form.Label>Place of growing</Form.Label>
              <Form.Control
                type="text"
                value={place}
                onChange={(e) => setplace(e.target.value)}
                placeholder="Place of growing"
              />
            </Form.Group>
            <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
              <Form.Label>Date of Harvesting</Form.Label>
              <Form.Control
                type="date"
                value={date}
                onChange={(e) => setdate(e.target.value)}
                placeholder="Date of harvesting"
              />
            </Form.Group>
          </Row>
          <Row className="mb-2">
          <Form.Group as = {Col} controlId="formGridAddress1">
              <Form.Label>Seed Category</Form.Label>
              <Form.Control
                type="text"
                value={category}
                onChange={(e) => setcategory(e.target.value)}
                placeholder="Seed Category"
              />
            </Form.Group>
          </Row>
  
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
}

export default BreederForm