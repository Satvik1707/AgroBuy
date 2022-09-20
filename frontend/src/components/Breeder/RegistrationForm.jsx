import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { addProduct } from "../../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../shared/Loader";
import Message from "../shared/Message";
import Success from "../shared/Success";

const RegistrationForm = () => {
  const [name, setname] = useState("");
  const [price, setprice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  const [brand, setbrand] = useState("");
  
  const addProductState = useSelector((state) => state.addProduct);
  const { loading, error, success } = addProductState;

  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    const product = {
      name,
      image,
      description,
      category,
      price,
      brand,
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
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
                placeholder="First name"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                value={price}
                onChange={(e) => setprice(e.target.value)}
                placeholder="Last Name"
              />
            </Form.Group>
          </Row>
        </Row>
        <Row >
          <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address Line 1</Form.Label>
            <Form.Control
              type="text"
              value={category}
              onChange={(e) => setcategory(e.target.value)}
              placeholder="Address Line 1"
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address Line 2</Form.Label>
            <Form.Control
              type="text"
              value={brand}
              onChange={(e) => setbrand(e.target.value)}
              placeholder="Address Line 2"
            />
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>City</Form.Label>
            <Form.Control
              ttype="text"
              value={image}
              onChange={(e) => setimage(e.target.value)}
              placeholder="City"
            />
          </Form.Group>
          <Form.Group as = {Col} controlId="formGridAddress1">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              placeholder="State"
            />
          </Form.Group>
          <Form.Group as = {Col} controlId="formGridAddress1">
            <Form.Label>Pin Code</Form.Label>
            <Form.Control
              type="text"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              placeholder="Pin Code"
            />
          </Form.Group>
        </Row>
        <Row className="mb-2">
        <Form.Group as = {Col} controlId="formGridAddress1">
            <Form.Label>Phone No.</Form.Label>
            <Form.Control
              type="text"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              placeholder="Phone No."
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Add New
        </Button>
      </Form>
    </div>
  );
};

export default RegistrationForm;
