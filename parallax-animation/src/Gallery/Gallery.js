import React, { Component } from "react";
import "./Gallery.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({ duration: 1000, easing: "ease-in-sine", offset: 200 });

class Gallery extends Component {
  render() {
    return (
      <div className="animation-container">
        <div className="wrapper">
          <div className="row">
            <div data-aos="anim1" className="img img-1" />
            <div data-aos="anim2" className="img img-2" />
            <div data-aos="anim3" className="img img-3" />
            <div data-aos="anim4" className="img img-4" />
          </div>
          <div className="row">
            <div data-aos="anim5" className="img img-5" />
            <div data-aos="anim6" className="img img-6" />
            <div data-aos="anim7" className="img img-7" />
            <div data-aos="anim8" className="img img-8" />
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
