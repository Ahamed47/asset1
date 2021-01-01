import React, { Fragment, useEffect, useState } from "react";

const ManagerListAssets = () => {
  const [assets, setAssets] = useState([]);

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
    <Fragment className="contain">
      <h3>Current Asset</h3>
      <table className="table text-center">
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total Price</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ManagerListAssets;
