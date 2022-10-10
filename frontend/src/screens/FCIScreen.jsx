import React from "react";
import { Row, Col } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import BreederList from "../components/FCI/BreederList";
import TransportList from "../components/FCI/TransportList";
import Breeder from "../components/FCI/Breeder";
import Transport from "../components/FCI/Transport";
import CreateBid from "../components/FCI/CreateBid";
import AllBids from "../components/FCI/AllBids";
import OpenBids from "../components/FCI/OpenBids";

const FCIScreen = () => {
  return (
    <div>
      <Row>
        <h1 className="text-center p-2 ">FCI Panel</h1>
      </Row>
      <br />
      <Col md={2}>
        <div>
          <div className="btn-group-vertical" role="group">
            <a href="/fci/breederlist" className="btn btn-primary ">
              Breeder Application request
            </a>
            <br />
          </div>
          <div className="btn-group-vertical" role="group">
            <a href="/fci/transportlist" className="btn btn-primary ">
              Transport Application request
            </a>
            <br />
          </div>
          <div className="btn-group-vertical" role="group">
            <a href="/fci/breeder" className="btn btn-primary ">
              Approved Breeder
            </a>
            <br />
          </div>
          <div className="btn-group-vertical" role="group">
            <a href="/fci/transport" className="btn btn-primary ">
              Approved Transport
            </a>
            <br />
          </div>
          <div className="btn-group-vertical" role="group">
            <a href="/fci/createbid" className="btn btn-primary ">
              Create a New Bid
            </a>
            <br />
          </div>
          <div className="btn-group-vertical" role="group">
            <a href="/fci/openbids" className="btn btn-primary ">
              Open Bids
            </a>
            <br />
          </div>
          <br />
          <div className="btn-group-vertical" role="group">
            <a href="/fci/allbids" className="btn btn-primary ">
              All Bids
            </a>
            <br />
          </div>
        </div>
      </Col>
      <Col md={10}>
        <Switch>
          <Route exact path="/fci/breederlist" component={BreederList} />
          <Route exact path="/fci/transportlist" component={TransportList} />
          <Route exact path="/fci/breeder" component={Breeder} />
          <Route exact path="/fci/transport" component={Transport} />
          <Route exact path="/fci/createbid" component={CreateBid} />
          <Route exact path="/fci/openbids" component={OpenBids} />
          <Route exact path="/fci/allbids" component={AllBids} />
        </Switch>
      </Col>
    </div>
  );
};

export default FCIScreen;
