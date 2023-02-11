import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from "../http";

function EditProduct(props) {
  const navigate = useNavigate();
  const [allSection, setallSection] = useState([]);
  const [inputs, setInputs] = useState({});
  const {id} = useParams();
  

  

  useEffect(() => {
    fetchAllSection();

    
  }, []);

  const fetchAllSection = () => {
    http.get('/products/' + id + '/edit').then(res=>{
        setInputs({
            title:res.data.title,
            pName:res.data.pName,
            price:res.data.price,
            category:res.data.category,

        });
    });
  };

    const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const submitForm = () =>{
    http.put('/products/' + id ,inputs).then((res)=>{
        navigate('/ProductDetails');
    })
}
  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h4 className="text-center">Edit Product Details</h4>
           
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

            {/* <div className="form-group">
              <label htmlFor="sName">Select Section</label>
              <select className="form-control" id="sName" name="sName" value={inputs.sName || ""} onChange={handleChange}>
              {allSection.map((allSections) => (
                
                <option value={allSections.id}>{allSections.sName}</option>
                
                ))}
              </select>
            </div> */}

            <div className="col-md-8 offset-md-4">
              <button
                type="submit"
                onClick={submitForm}
                id="submit"
                className="btn btn-primary"
              >
                Update
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
