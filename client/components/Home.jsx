import React from "react";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home">
      <div className="hexagon-wrapper">
        <div className="hexagon">
          <div className="inner-hexagon">
            <Link to="/form">
              <button>Create a hive</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
