import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h2>CodeCorner Administration</h2>
    <p>How to implement Redux to your React app!</p>
    <Link to="about">Learn more</Link>
  </div>
);

export default HomePage;