const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

app.post("/assets", async (req, res) => {
  try {
    const { product, category, quantity, price, totalprice } = req.body;
    const newAsset = await pool.query(
      "INSERT INTO asset (product,category ,quantity ,price ,totalprice) VALUES($1,$2,$3,$4,$5) RETURNING *",
      [product, category, quantity, price, totalprice]
    );

    res.json(newAsset.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/assets", async (req, res) => {
  try {
    const allAssets = await pool.query("SELECT * FROM asset");
    res.json(allAssets.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/assets/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const asset = await pool.query(
      "SELECT * FROM asset WHERE product_id = $1",
      [id]
    );

    res.json(asset.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.put("/assets/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { product, category, quantity, price, totalprice } = req.body;
    const updateAsset = await pool.query(
      "UPDATE asset SET  product = $1 , category = $2 , quantity = $3 , price = $4 , totalprice = $5 WHERE product_id = $6",
      [product, category, quantity, price, totalprice, id]
    );

    res.json("Asset was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

app.delete("/assets/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteAsset = await pool.query(
      "DELETE FROM asset WHERE product_id = $1",
      [id]
    );
    res.json("Asset was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

app.post("/requests", async (req, res) => {
  try {
    const { product, category, quantity } = req.body;
    const newRequest = await pool.query(
      "INSERT INTO request (product,category,quantity) VALUES($1,$2,$3) RETURNING *",
      [product, category, quantity]
    );

    res.json(newRequest.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/requests", async (req, res) => {
  try {
    const allAssets = await pool.query("SELECT * FROM request");
    res.json(allAssets.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/requests/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const asset = await pool.query(
      "SELECT * FROM request WHERE product_id = $1",
      [id]
    );

    res.json(asset.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.put("/requests/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { product, category, quantity } = req.body;
    const updateAsset = await pool.query(
      "UPDATE request SET  product = $1 , category = $2 , quantity = $3 WHERE product_id = $4",
      [product, category, quantity, id]
    );

    res.json("Asset was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

app.delete("/requests/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteAsset = await pool.query(
      "DELETE FROM request WHERE product_id = $1",
      [id]
    );
    res.json("Asset was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(8000, () => {
  console.log("server has started on port 8000");
});
