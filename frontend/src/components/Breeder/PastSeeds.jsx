import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { listMySeeds } from "../../actions/productActions";
import { useEffect } from "react";
import Loader from "../shared/Loader";
import Message from "../shared/Message";
import { Table } from "react-bootstrap";

const PastSeeds = () => {
  const dispatch = useDispatch();
  const seedList = useSelector((state) => state.listMySeeds);
  const { loading, error, seeds } = seedList;

  console.log(seeds);

  useEffect(() => {
    dispatch(listMySeeds());
  }, [dispatch]);
  return (
    <>
      <>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message>
            Error while fetching data <br /> {error}
          </Message>
        ) : (
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>E-mail address</th>
                  <th>Actions</th>
                </tr>
              </thead>
              {/* <tbody>
                {seeds &&
                  seeds.map((user) => (
                    <tr>
                      <td>{user._id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td></td>
                    </tr>
                  ))}
              </tbody> */}
            </Table>
          </div>
        )}
      </>
    </>
  );
};

export default PastSeeds;
