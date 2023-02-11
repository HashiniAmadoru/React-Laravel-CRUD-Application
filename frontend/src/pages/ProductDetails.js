import React, { useState, useEffect } from "react";
import http from "../http";
import { Link } from "react-router-dom";

function ProductDetails() {
  const [allProduct, setallProduct] = useState([]);

  useEffect(() => {
    fetchallProduct();
  }, []);

  const fetchallProduct = () => {
    http.get("/products").then((res) => {
      setallProduct(res.data);
    });
  };

  const deleteSection = (id) => {
    http.delete("/products/" + id).then((res) => {
      fetchallProduct();
    });
  };

  return (
    <div>
      <Link className="btn btn-primary  m-4" to={{ pathname: "/Product" }}>
        Add New Product
      </Link>
      <h2 className="text-center m-4">Product Listing</h2>
      <table id="example" className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Secction No</th>
            <th>Title</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>section</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allProduct.map(
            (allProducts, index) => (
              console.log(allProducts),
              (
                <tr key={allProducts.id}>
                  <td>{++index}</td>
                  <td>{allProducts.title}</td>
                  <td>{allProducts.pName}</td>
                  <td>{allProducts.price}</td>
                  <td>{allProducts.category}</td>
                  <td>{allProducts.sName}</td>
                  <td>
                    <Link
                      className="btn btn-info m-1"
                      to={{ pathname: "/editProduct/" + allProducts.id }}
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        deleteSection(allProducts.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ProductDetails;
