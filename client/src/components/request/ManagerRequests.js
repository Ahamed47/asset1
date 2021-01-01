import React, { Fragment, useEffect, useState } from "react";
import AdminNavbar from "../navbar/AdminNavbar";
//import { Link } from "react-router-dom";

//import EditAsset from "./EditAsset";

const ManagerRequests = () => {
  const [assets, setAssets] = useState([]);

  //delete asset function

  const deleteAsset = async (id) => {
    try {
      const deleteAsset = await fetch(`http://localhost:8000/requests/${id}`, {
        method: "DELETE",
      });

      setAssets(assets.filter((asset) => asset.product_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getAssets = async () => {
    try {
      const response = await fetch("http://localhost:8000/requests");
      const jsonData = await response.json();

      setAssets(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getAssets();
  }, []);

  console.log(assets);

  return (
    <Fragment>
      <AdminNavbar />
      <table className="table mt-5 text-center container">
        <thead>
          <tr>
            <th>Request ID</th>
            <th>Product</th>
            <th>Category</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {assets.map((asset) => (
            <tr key={asset.product_id}>
              <td>{asset.product_id}</td>
              <td>{asset.product}</td>
              <td>{asset.category}</td>
              <td>{asset.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ManagerRequests;
