import React from "react";

function Nav() {
    return (
      <div style={{color: "white"}}>
        <nav className="navbar navbar-expand-lg mt-3">
    <div className="container-fluid">
      <span className="navbar-brand" style={{color: "white"}} href="#">Claims</span>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item mx-5">
        <form className="d-flex">
          <input className="form-control me-2" style={{backgroundColor: "#2A2B31", borderColor: "#2A2B31"}} type="search" placeholder="Search" aria-label="Search" />
        </form>
          </li>
          <li className="nav-item me-2 ms-5">
          <button className="btn"style={{backgroundColor: "#2A2B31", color: "white"}} type="submit">Support</button>
          </li>
          <li className="nav-item mx-2">
          <button className="btn"style={{backgroundColor: "#2A2B31", color: "white"}} type="submit">0 SQA</button>
          </li>
          <li className="nav-item mx-2">
          <button className="btn"style={{backgroundColor: "#2A2B31", color: "white"}} type="submit">Connect Wallet</button>
          </li>
          <li className="nav-item mx-2">
          <button className="btn"style={{backgroundColor: "#2A2B31", color: "white"}} type="submit">C</button>
          </li>
          <li className="nav-item mx-2">
          <button className="btn"style={{backgroundColor: "#2A2B31", color: "white"}} type="submit">...</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
      </div>
    );
  }
  
  export default Nav;