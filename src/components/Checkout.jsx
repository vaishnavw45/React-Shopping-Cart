import React, { useState } from "react";

const Checkout = ({ cart }) => {
  const[sum,setSum]=useState([]);

  console.log(cart)
  const result=cart.map((product) => {
    return product
  })
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.length > 0 &&
            cart.map((product) => {
              return (
                <>
                <li key={product.id}>
                  <td>{product.description}</td>
                  <td>{product.price }</td>
                </li>
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Checkout;
