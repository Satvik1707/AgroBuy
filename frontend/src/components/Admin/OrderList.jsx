import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../shared/Loader";
import Message from "../shared/Message";
import { Button, Table } from "react-bootstrap";
// import { getAllOrders, deliverOrder } from "../../actions/orderAction";

const OrderList = () => {
  const dispatch = useDispatch();
  const orderList = useSelector((state) => state.getAllOrders);

  // const { loading, error, order } = orderList;
  // useEffect(() => {
  //   dispatch(getAllOrders());
  // }, [dispatch]);
  return (
    <>
      <>
      <div>
        <Table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Name</th>
              <th>Total Amount</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
        </Table>
      </div>
      </>
    </>
  );
};

export default OrderList;
