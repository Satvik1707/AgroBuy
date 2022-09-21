import React from "react";
import RegistrationForm from "../components/Breeder/RegistrationForm";
import BreederForm from "../components/Breeder/BreederForm";
import { Container, Row, Col } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
// import {RegistrationForm }  from "../components/Breeder/RegistrationForm";

const BreederScreen = () => {
  return (
    <Container>
      <Row>
        <h1 className="text-center p-2 ">Breeder Panel</h1>
        <br />
        <Col md={2}>
          <div className="btn-group-vertical" role="group">
            <a href="/breeder/register" className="btn btn-primary ">
              Registration Form
            </a>
            <br />
          </div>
          <div className="btn-group-vertical" role="group">
            <a href="/breeder/breederForm" className="btn btn-primary ">
              Breeder's Form
            </a>
          </div>
        </Col>
        <Col md={10}>
          <Switch>
            <Route
              exact
              path="/breeder/register"
              component={RegistrationForm}
            />
            <Route
              exact
              path="/breeder/breederForm"
              component={BreederForm}
            />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default BreederScreen;
