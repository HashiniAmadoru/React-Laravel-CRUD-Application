import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import http from '../http';


function Edit(props) {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        fetchUsers();
    },[]);

    const fetchUsers = () => {
        http.get('/sections/' + id + '/edit').then(res=>{
            setInputs({
                sName:res.data.sName,

            });
        });
    }

    const handleChange = (event) => {
        const sName = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[sName]:value}))
    }
    const submitForm = () =>{
        http.put('/sections/' + id ,inputs).then((res)=>{
            navigate('/');
        })
    }
      return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h4 className="text-center">Edit Sections Details</h4>
            {/* <form> */}
                <div className="form-group">
                    <label htmlFor="sName">Username</label>
                    <input type="text" className="form-control mb-4" id="sName" placeholder="Enter Section Name" name="sName" value={inputs.sName || ''} onChange={handleChange} required />
                </div>

                <div className="col-md-8 offset-md-4">
                    <button type="submit" onClick={submitForm} id="submit" className="btn btn-primary">
                        Update
                    </button>

                </div>
            {/* </form> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
