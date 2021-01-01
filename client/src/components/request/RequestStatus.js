// import React, { Fragment, useState } from "react";
// import Navbar from "../navbar/Navbar";

// const InputAsset = ({ request }) => {
//   const [product, setProduct] = useState("");
//   const [requests, setRequests] = useState([]);

//   const onSubmitForm = async (e) => {
//     e.preventDefault();
//     try {
//       const body = { product };
//       const response = await fetch(
//         `http://localhost:8000/assets/${request.product_id}`,
//         {
//           method: "POST",a
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(body),
//         }
//       );

//       window.location = "/status";
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   return (
//     <Fragment>
//       <Navbar />
//       <div class="container contain">
//         <h1 className="text-center">Request Form</h1>
//         <form onSubmit={onSubmitForm}>
//           <div class="mb-3">
//             <input
//               type="number"
//               placeholder="id"
//               className="form-control in"
//               value={product}
//               onChange={(e) => setProduct(e.target.value)}
//             />
//           </div>

//           <button className="btn btn-success">Request</button>
//         </form>
//       </div>
//       <table className="table mt-5 text-center">
//         <thead>
//           <tr>
//             <th>Product</th>
//             <th>Category</th>
//             <th>Quantity</th>
//             <th>status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/*<tr>
//             <td>John</td>
//             <td>Doe</td>
//             <td>john@example.com</td>
//           </tr> */}
//           {requests.map((request) => (
//             <tr key={request.product_id}>
//               <td>{request.product}</td>
//               <td>{request.category}</td>
//               <td>{request.quantity}</td>
//               <td>Approved</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </Fragment>
//   );
// };

// export default InputAsset;
