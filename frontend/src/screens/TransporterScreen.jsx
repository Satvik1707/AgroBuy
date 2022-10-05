import React from "react";
import RegistrationForm from "../components/Breeder/RegistrationForm";
import BreederForm from "../components/Breeder/BreederForm";
import PastSeeds from "../components/Breeder/PastSeeds";
import { Container, Row, Col } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const BreederScreen = () => {
  const userState = useSelector((state) => state.userLogin);
  const { userInfo } = userState;

  return (
    <Container>
      <Row>
        <h1 className="text-center p-2 ">Transport Panel</h1>
        <br />
        <Col md={2}>
          {!userInfo.isTransport ? (
            <div className="btn-group-vertical" role="group">
              <a href="/transport/register" className="btn btn-primary ">
                Registration Form
              </a>
              <br />
            </div>
          ) : (
            <div>
              <div className="btn-group-vertical" role="group">
                <a href="/transport/allbids" className="btn btn-primary ">
                  All Open bids
                </a>
                <br />
              </div>
              <div className="btn-group-vertical" role="group">
                <a href="/transport/mybids" className="btn btn-primary ">
                  My bids
                </a>
              </div>
            </div>
          )}
        </Col>
        <Col md={10}>
          <Switch>
            <Route
              exact
              path="/transport/register"
              component={RegistrationForm}
            />
            <Route exact path="/transport/allbids" component={BreederForm} />
            <Route exact path="/transport/mybids" component={PastSeeds} />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default BreederScreen;
