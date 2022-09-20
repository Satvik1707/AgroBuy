import React from "react";
import { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import AddNewProduct from "../components/Admin/AddNewProduct";
import EditProduct from "../components/Admin/EditProduct";
import OrderList from "../components/Admin/OrderList";
import ProductList from "../components/Admin/ProductList";
import UserList from "../components/Admin/UserList";
const AdminScreen = (history) => {
  const userState = useSelector((state) => state.userLogin);
  const { userInfo } = userState;
  useEffect(() => {
    if (localStorage.getItem("userInfo") === null || !userInfo.isAdmin) {
      window.location.href = "/ ";
    }
  });
  
  return (
    <Container>
      <Row>
        <h1 className="text-center p-2 ">Admin Panel</h1>
        <br />
        <Col md={2}>
          <div className="btn-group-vertical" role="group">
            <a href="/admin/orderlist" className="btn btn-primary ">
              Order List
            </a>
            <br />
            <a href="/admin/userlist" className="btn btn-primary">
              User List
            </a>
            <br />
            <a href="/admin/productlist" className="btn btn-primary">
              Product List
            </a>
            <br />
            <a
              href="/admin/addnewproduct"
              className="btn btn-primary"
              onClick={() => history.push("/admin/addnewproduct")}
            >
              Add New Product
            </a>
          </div>
        </Col>
        <Col md={10}>
          <Switch>
            <Route exact path="/admin/editproduct/:id" component={EditProduct} />
            <Route exact path="/admin/orderlist" component={OrderList} />
            <Route exact path="/admin/userlist" component={UserList} />
            <Route exact path="/admin/productlist" component={ProductList} />
            <Route exact path="/admin/addnewproduct" component={AddNewProduct} />
            <Route path="/admin" component={OrderList} /> 
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminScreen;
