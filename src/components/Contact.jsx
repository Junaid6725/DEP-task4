import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container mt-5">
        <h2 className="pb-2 border-bottom text-center">
          <a id="contact">Feel Free To Contact Us!</a>
        </h2>
        <h4 className="py-3 text-center">
          <a id="contact"></a>
        </h4>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            @
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            id="username"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            @example.com
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            aria-label="Email"
            aria-describedby="basic-addon1"
            id="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="basic-url" className="form-label">
            Your product URL
          </label>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon3">
              https://example.com/users/
            </span>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3 basic-addon4"
            />
          </div>
          <div className="form-text" id="basic-addon4">
            Example help text goes outside the input group.
          </div>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">$</span>
          <input
            type="text"
            className="form-control"
            aria-label="Amount (to the nearest dollar)"
            id="payment"
          />
          <span className="input-group-text">.00</span>
        </div>
        <div className="input-group">
          <span className="input-group-text">Your Message</span>
          <textarea
            className="form-control"
            aria-label="With textarea"
            defaultValue={""}
            id="message"
          />
        </div>
        <div className="container d-flex justify-content-start my-4">
          <button className="btn btn-primary ">Submit</button>
        </div>
      </div>
      <section className="mb-xl-9">
        <div className="container">
          <div className="row row border-top border-bottom">
            <div className="col-md-3 border-end-md border-bottom border-bottom-md-0">
              <div className="text-center p-5 px-xl-8 px-md-0">
                <div className="icon-lg mb-4">
                  <i className="bi bi-geo-alt-fill text-primary fs-1"></i>
                </div>

                <h5>Location</h5>
                <p className="mb-0">
                  Ahmedabad hall 74 Grand Avenue South, Cambridge, ON
                </p>
              </div>
            </div>
            <div className="col-md-3 border-end-md border-bottom border-bottom-md-0">
              <div className="text-center p-5 px-xl-8 px-md-0">
                <div className="icon-lg mb-4">
                  <i className="bi bi-window-dock text-primary fs-1"></i>
                </div>

                <h5>Opening Hours</h5>
                <p className="mb-0">8:00 AM - 10:00 PM PST</p>
              </div>
            </div>
            <div className="col-md-3  border-end-md border-bottom border-bottom-md-0">
              <div className="text-center p-5 px-xl-8 px-md-0">
                <div className="icon-lg  mb-4">
                  <i className="bi bi-telephone-fill text-primary fs-1"></i>
                </div>

                <h5>Contact</h5>
                <p className="mb-0">+924902354465</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center p-5 px-xl-8 px-md-0">
                <div className="icon-lg  mb-4">
                  <i className="bi bi-envelope-at-fill text-primary fs-1"></i>
                </div>

                <h5>Gmail</h5>
                <p className="mb-0">Interio@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
