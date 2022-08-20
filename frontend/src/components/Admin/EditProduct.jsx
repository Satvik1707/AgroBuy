import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../shared/Loader";
import Message from "../shared/Message";
import { Table } from "react-bootstrap";
import { getProductById } from "../../actions/productActions";

const EditProduct = ({match}) => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.getAllUser);
  const { loading, error, order } = userList;
  useEffect(() => {
    dispatch(getProductById(match.params.id));
  }, [dispatch]);
  return (
    <>
      <>
      <h1>Edit Product</h1>
        {/* {loading ? (
          <Loader />
        ) : error ? (
          <Message>Error while fetching products {error}</Message>
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
              <tbody>
                {users &&
                  users.map((user) => (
                    <tr>
                      <td>{user._id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <AiFillDelete
                          style={{ color: "red" }}
                          onClick={() => {
                            dispatch(deleteUser(user._id));
                          }}
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        )} */}
      </>
    </>
  );
};

export default EditProduct;
