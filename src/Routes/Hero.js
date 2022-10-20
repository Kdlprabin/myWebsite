import React from "react";

export default function HeroImage() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div className="p-5 text-center">
        <div className="mask">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-light">
              <h4 className="mb-3">I'm <span className="text-primary">Prabin Kandel</span></h4>
              <h1 className="mb-3">Web Developer <span className="text-primary">|</span> Designer</h1>
              <h4 className="mb-3"> React Developer </h4>
              <a
                className="btn btn-outline-light btn-lg"
                href="#!"
                role="button"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
