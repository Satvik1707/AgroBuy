import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { getProductById } from "../../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../shared/Loader";
import Message from "../shared/Message";
import Success from "../shared/Success";

const AddNewProduct = ({ match }) => {
  const [name, setname] = useState("");
  const [price, setprice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  const [brand, setbrand] = useState("");
  const [countInStock, setquantity] = useState("");

  const dispatch = useDispatch();

  const getProductState = useSelector((state) => state.getProductById);
  const { loading, error, product } = getProductState;

  useEffect(() => {
    if (product) {
      if (product._id === match.params.id) {
        setname(product.name);
        setprice(product.price);
        setimage(product.image);
        setdescription(product.description);
        setcategory(product.category);
        setbrand(product.brand);
        setquantity(product.countInStock);
      } else {
        dispatch(getProductById(match.params.id));
      }
    } else {
      dispatch(getProductById(match.params.id));
    }
  }, []);

  const submitForm = (e) => {
    e.preventDefault();
    const editedProduct = {
      name,
      image,
      description,
      category,
      price,
      brand,
      countInStock,
    };
    // dispatch(addProduct(product));
  };

  return (
    <div>
      {loading && <Loader />}
      {error && <Message error="Add new product error" />}
      <Form onSubmit={submitForm} className="bg-light p-4">
        <Row className="mb-2">
          <Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
                placeholder="Enter product name"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                value={price}
                onChange={(e) => setprice(e.target.value)}
                placeholder="Enter price"
              />
            </Form.Group>
          </Row>
        </Row>
        <Row>
          <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              value={category}
              onChange={(e) => setcategory(e.target.value)}
              placeholder="Enter Category"
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
            <Form.Label>Brand</Form.Label>
            <Form.Control
              type="text"
              value={brand}
              onChange={(e) => setbrand(e.target.value)}
              placeholder="Enter Brand"
            />
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Image</Form.Label>
            <Form.Control
              ttype="text"
              value={image}
              onChange={(e) => setimage(e.target.value)}
              placeholder="Add Image URL"
            />
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              placeholder="Enter Description"
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

export default AddNewProduct;
