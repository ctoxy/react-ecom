import React, { Component } from "react";
import "./HomePage.css";

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div clasName="content">
          <h1 className="title">Hats</h1>
          <span className="subtitle">Shop Now</span>
        </div>
        <div clasName="content">
          <h1 className="title">Jacquets</h1>
          <span className="subtitle">Shop Now</span>
        </div>
        <div clasName="content">
          <h1 className="title">Sneakers</h1>
          <span className="subtitle">Shop Now</span>
        </div>
        <div clasName="content">
          <h1 className="title">Womens</h1>
          <span className="subtitle">Shop Now</span>
        </div>
        <div clasName="content">
                <h1 className="title">mens</h1>
                <span className="subtitle">Shop Now</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
