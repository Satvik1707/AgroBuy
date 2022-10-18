import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../shared/Loader";
import Message from "../shared/Message";
import { Table } from "react-bootstrap";
import { openBidList } from "../../actions/productActions";
import { Link } from "react-router-dom";

const OpenBids = () => {
  const dispatch = useDispatch();
  const breederListState = useSelector((state) => state.openBidList);
  const { loading, error, bids } = breederListState;

  useEffect(() => {
    dispatch(openBidList());
  }, [dispatch]);

  return (
    <>
      <>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message>Error while fetching OpenBids {error}</Message>
        ) : (
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Source Address</th>
                  <th>Destination Address</th>
                  <th>Minimum Bid Amount</th>
                  <th>Bidding End Date</th>
                  <th>Bid Amount</th>
                </tr>
              </thead>
              <tbody>
                {bids &&
                  bids.map((user) => (
                    <tr>
                      <td>
                        {user.sourcecity}, {user.sourcestate}
                      </td>
                      <td>
                        {user.destinationcity}, {user.destinationstate}
                      </td>
                      <td>{user.shipmentcost}</td>
                      <td>{user.endTime.slice(0, 10)}</td>
                      <td>
                        <input type="number" placeholder="Enter Bid Amount" />
                        &nbsp;
                          <button onClick={dispatch()}>Bid</button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        )}
      </>
    </>
  );
};

export default OpenBids;
