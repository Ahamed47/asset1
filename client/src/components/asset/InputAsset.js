import React, { Fragment, useState } from "react";

const InputAsset = () => {
  const [product, setProduct] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [totalprice, setTotalPrice] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { product, category, quantity, price, totalprice };
      const response = await fetch("http://localhost:8000/assets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/asset";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Asset List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="product"
          className="form-control in"
          pattern="[a-zA-Z ]+"
          required
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
        <input
          type="text"
          placeholder="category"
          className="form-control in"
          pattern="[a-zA-Z ]+"
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="number"
          placeholder="quantity"
          className="form-control in"
          pattern="[0-9]+"
          required
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          type="number"
          placeholder="price"
          className="form-control in"
          pattern="[0-9]+"
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="totalprice"
          className="form-control in"
          pattern="[0-9]+"
          required
          value={totalprice}
          onChange={(e) => setTotalPrice(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputAsset;
