import React, { Fragment, useEffect, useState } from "react";
import AdminNavbar from "../navbar/AdminNavbar";
//import { Link } from "react-router-dom";

//import EditAsset from "./EditAsset";

const ListRequest = () => {
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
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteAsset(asset.product_id)}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListRequest;

// import React, { Fragment, useEffect, useState } from "react";
// import AdminNavbar from "../navbar/AdminNavbar";
// //import { Link } from "react-router-dom";

// //import EditAsset from "./EditAsset";

// const ListRequest = () => {
//   const [assets, setAssets] = useState([]);
//   const [product, setProduct] = useState("");
//   const [category, setCategory] = useState("");
//   const [quantity, setQuantity] = useState("");

//   const approveAsset = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:8000/approved/${id}`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//       });

//       window.location = "/status";
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   //delete asset function

//   const deleteAsset = async (id) => {
//     try {
//       const deleteAsset = await fetch(`http://localhost:8000/requests/${id}`, {
//         method: "DELETE",
//       });

//       setAssets(assets.filter((asset) => asset.product_id !== id));
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   const getAssets = async () => {
//     try {
//       const response = await fetch("http://localhost:8000/requests");
//       const jsonData = await response.json();

//       setAssets(jsonData);
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   useEffect(() => {
//     getAssets();
//   }, []);

//   console.log(assets);

//   return (
//     <Fragment>
//       <AdminNavbar />
//       <table className="table mt-5 text-center container">
//         <thead>
//           <tr>
//             <th>Request ID</th>
//             <th>Product</th>
//             <th>Category</th>
//             <th>Quantity</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/*<tr>
//             <td>John</td>
//             <td>Doe</td>
//             <td>john@example.com</td>
//           </tr> */}
//           {assets.map((asset) => (
//             <tr key={asset.product_id}>
//               <td>{asset.product_id}</td>
//               <td
//                 value={product}
//                 onChange={(id) => setProduct(id.target.value)}
//               >
//                 {asset.product}
//               </td>
//               <td
//                 value={category}
//                 onChange={(id) => setCategory(id.target.value)}
//               >
//                 {asset.category}
//               </td>
//               <td
//                 value={quantity}
//                 onChange={(id) => setQuantity(id.target.value)}
//               >
//                 {asset.quantity}
//               </td>

//               <td>
//                 <button
//                   className="btn btn-danger"
//                   onClick={() => deleteAsset(asset.product_id)}
//                 >
//                   Reject
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </Fragment>
//   );
// };

// export default ListRequest;
