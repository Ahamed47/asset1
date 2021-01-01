import React, { Fragment, useEffect, useState } from "react";
//import Navbar from "../navbar/Navbar";
//import { Link } from "react-router-dom";

//import EditAsset from "./EditAsset";

const ListStatus = ({ request }) => {
  const [assets, setAssets] = useState([]);

  //delete asset function

  const getAssets = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/assets/${request.product_id}`
      );
      const jsonData = await response.json();

      setAssets(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getAssets();
  });

  console.log(assets);

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>status</th>
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
              <td>{asset.product}</td>
              <td>{asset.category}</td>
              <td>{asset.quantity}</td>
              <td>Approved</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListStatus;
