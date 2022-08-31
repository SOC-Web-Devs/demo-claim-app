import React from "react";

function Topsection() {
    return (
      <div style={{color: "white"}} className="mt-3 col-sm-12">
        <div className="mx-3"> Overview </div>
        <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
    <button className="btn"style={{backgroundColor: "#2A2B31", color: "white"}} type="submit">Claims</button>
    <button className="btn text-white mx-4" type="submit">Validator</button>
    <button className="btn text-white" type="submit">Adjustor</button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item me-2 ms-5">
            <p>All</p>
          </li>
          <li className="nav-item mx-2">
          <p style={{color: "#6c757d"}}>Active</p>
          </li>
          <li className="nav-item mx-2">
          <p style={{color: "#6c757d"}}>Closed</p>
          </li>
          <li className="nav-item mx-2">
          <p style={{color: "#6c757d"}}>Recent</p>
          </li>
        </ul>
      </div>
    </div>
  </nav>
      </div>
    );
  }
  
  export default Topsection;