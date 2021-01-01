import React, { Fragment, useEffect, useState } from "react";
//import { Link } from "react-router-dom";

import EditAsset from "./EditAsset";

const ListAssets = () => {
  const [assets, setAssets] = useState([]);

  //delete asset function

  const deleteAsset = async (id) => {
    try {
      const deleteAsset = await fetch(`http://localhost:8000/assets/${id}`, {
        method: "DELETE",
      });

      setAssets(assets.filter((asset) => asset.product_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getAssets = async () => {
    try {
      const response = await fetch("http://localhost:8000/assets");
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
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total Price</th>
            <th>Edit</th>
            <th>Delete</th>
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
              <td>{asset.price}</td>
              <td>{asset.totalprice}</td>
              <td>
                <EditAsset asset={asset} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteAsset(asset.product_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListAssets;
