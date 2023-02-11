import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import http from "../http";

function ProductForm() {
  const navigate = useNavigate();
  const [allSection, setallSection] = useState([]);
  const [inputs, setInputs] = useState({});
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  

  useEffect(() => {
    fetchAllSection();

    
  }, []);

  const fetchAllSection = () => {
    http.get("/sections").then((res) => {
      setallSection(res.data);
    });
  };

  const submitForm = () => {
    http.post("/products", inputs).then((res) => {
      navigate("/ProductDetails");
    });
    // console.log(inputs);
  };
  return (
    <div>
      <div className="container">
        <div className="card m-5">
          <div className="card-body">
            <h4 className="text-center">Add Product Details</h4>
            {/* <form> */}
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control mb-4"
                id="title"
                placeholder="Enter Title"
                name="title"
                value={inputs.title || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="pName">Product</label>
              <input
                type="text"
                className="form-control mb-4"
                id="pName"
                placeholder="Enter Product Name"
                name="pName"
                value={inputs.pName || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                className="form-control mb-4"
                id="price"
                placeholder="Enter Price "
                name="price"
                value={inputs.price || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                className="form-control mb-4"
                id="category"
                placeholder="Enter Category"
                name="category"
                value={inputs.category || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="sName">Select Section</label>
              <select className="form-control" id="sName" name="sName" value={inputs.sName || ""} onChange={handleChange}>
              <option value="">Please Select</option>
              {allSection.map((allSections) => (
                
                <option value={allSections.id}>{allSections.sName}</option>
                
                ))}
              </select>
            </div>

            <div className="col-md-8 d-grid offset-md-2 mt-4">
              <button
                type="submit"
                onClick={submitForm}
                id="submit"
                className="btn btn-primary"
              >
                Send
              </button>
            </div>
            {/* </form> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductForm;
