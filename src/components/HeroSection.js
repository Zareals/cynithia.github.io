import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/Videos/pixels.mp4" autoPlay loop muted />

      <h1>INSERT A COIN</h1>
      <p>Join the game and connect with other Tunisian game developers</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>

        <Button
          className="btns"
          buttonStyle="btn--primart"
          buttonSize="btn--large"
        >
          LOG IN <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}
export default HeroSection;
