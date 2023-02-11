import React, { useState, useEffect } from "react";
import http from "../http";
import { Link } from "react-router-dom";

export default function Home() {
  const [allSection, setallSection] = useState([]);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = () => {
    http.get("/sections").then((res) => {
      console.log(res.data)
      setallSection(res.data);
    });
  };

  const deleteSection = (id) => {
    http.delete("/sections/" + id).then((res) => {
      fetchAllUsers();
    });
  };

  // const script = document.createElement("script");
  // script.src = "/js/custom.js";
  // script.async = true;
  // document.body.appendChild(script);
// console.log(allSection);
  return (
    <div>
      <Link
        className="btn btn-primary  m-4"
        to={{ pathname: "/Create"}}
      >
        Add New Section 
      </Link>
      <h2 className="text-center m-4">Sections Listing</h2>
      <table id="example" className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Section No</th>
            <th>Name</th>
            <th>Count</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allSection.map((allSections, index) => (
            <tr key={allSections.id}>
              <td>{++index}</td>
              <td>{allSections.sName}</td>
              <td>{allSections.section_count}</td>
              <td>
              {allSections.section_count == 0 &&
              <>
                <Link
                  className="btn btn-info m-1"
                  to={{ pathname: "/edit/" + allSections.id }}
                >
                  Edit
                </Link>

                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    deleteSection(allSections.id);
                  }}
                >
                  Delete
                </button>

                </>
              }
                {allSections.section_count > 0 &&
        <p>Cannot Edit Or Delete when it has sub Products</p>
      }
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
