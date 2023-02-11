import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import http from '../http';


function Create() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const sName = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[sName]:value}))
    }
    const submitForm = () =>{
        http.post('/sections',inputs).then((res)=>{
            navigate('/');
        })
    }

    const script = document.createElement("script");
  script.src = "/js/custom.js";
  script.async = true;
  document.body.appendChild(script);

      return (
    <div>
      <div className="container">
        <div className="card m-5">
          <div className="card-body">
            <h4 className="text-center">Add Sections Details</h4>
           
                <div className="form-group">
                    <label htmlFor="sName">Section</label>
                    <input type="text" className="form-control mb-4" id="sName" placeholder="Enter Section Name" name="sName" value={inputs.sName || ''} onChange={handleChange} required />
                    <div class="invalid-feedback">
        Please provide a valid city.
      </div>
                </div>

                <div className="col-md-8 d-grid offset-md-2">
                    <button type="submit" onClick={submitForm} id="submit" className="btn btn-primary">
                        Send
                    </button>

                </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
