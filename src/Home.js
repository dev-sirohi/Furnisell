import React from "react";
import "./home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-image"
          src={"images/nathan-oakley-gj1dnc7yRG0-unsplash.jpg"}
          alt=""
        />
        <div className="home-row">
          <Product
            title="Sofa Couch"
            price={5000}
            image={"images/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg"}
            rating={3}
          />
          <Product
            title="Sofa Couch"
            price={5000}
            image={"images/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg"}
            rating={4}
          />
        </div>

        <div className="home-row">
          <Product
            title="Sofa Couch"
            price={5000}
            image={"images/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg"}
            rating={2}
          />
          <Product
            title="Sofa Couch"
            price={5000}
            image={"images/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg"}
            rating={5}
          />
          <Product
            title="Sofa Couch"
            price={5000}
            image={"images/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg"}
            rating={1}
          />
        </div>

        <div className="home-row">
          <Product
            title="Sofa Couch"
            price={5000}
            image={"images/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg"}
            rating={3}
          />
          <Product
            title="Sofa Couch"
            price={5000}
            image={"images/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg"}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
