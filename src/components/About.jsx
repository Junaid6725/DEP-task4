import React from "react";

const About = () => {
  return (
    <>
      <div className="container mt-5">
        <h2 className="pb-2 border-bottom text-center">
          <a id="about">About Us</a>
        </h2>
        <div className="row featurette">
          <div className="col-md-7">
            <h3 className="featurette-heading fw-normal lh-1 pt-3">
              Welcom to Interio Techo:
              <span className="text-body-secondary"> Owner Talks</span>
            </h3>
            <p className="lead pt-3">
              Welcome to <strong>Interio Techo</strong>, your premier
              destination for all the latest and greatest in technology. Our
              mission is to keep you at the forefront of innovation with our
              extensive range of mobiles, tablets, and laptops. Whether you're
              searching for the trendiest mobiles or the best phones available,
              we've got you covered with top picks and expert recommendations.
              <br />
              We also specialize in cutting-edge digital watches and
              smartwatches, providing you with the perfect blend of style and
              functionality. Our smart devices are designed to enhance your
              everyday life, offering seamless connectivity and advanced
              features. Explore our website for the newest trends, in-depth
              reviews, and exceptional deals on all your tech needs. At
              <strong> Interio Techo</strong>, we’re dedicated to delivering
              exceptional value and unmatched quality, helping you make informed
              choices in the ever-evolving world of technology.
            </p>
          </div>
          <div className="col-md-5 pt-3">
            <img
              src="../images/owner.jpg"
              alt="Owner Pic"
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row ">
          <div className="col-md-4 ">
            <div className="text-center py-lg-5 p-4  ">
              <div className="mb-4">
                <i className=" bi bi-people-fill text-primary fs-1 "></i>
              </div>
              <div>
                <h4>Expert Team</h4>
                <p className="mb-0">
                  Vivamus eget neque lacus. Pellentesque egauris ex.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center py-lg-5 p-4">
              <div className="mb-4">
                <i className="bi bi-trophy-fill text-primary fs-1"></i>
              </div>
              <div>
                <h4>Award winning agency</h4>
                <p className="mb-0">
                  Lorem ipsum, dolor sit amet consectetur elitorceat .
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center py-lg-5 p-4">
              <div className="mb-4">
                <i className="bi bi-stars text-primary fs-1 "></i>
              </div>
              <div>
                <h4>10 Year Exp.</h4>
                <p className="mb-0">
                  Pellen tesque eget, mauris lorem iupsum neque lacus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
