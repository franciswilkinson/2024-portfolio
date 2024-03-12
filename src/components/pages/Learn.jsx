import React from 'react';
import '../../../src/vendor/fontawesome-free/css/all.min.css';
import '../../../src/vendor/simple-line-icons/css/simple-line-icons.css';

function Learn() {
  return (
  <div>
  <section className="contact-section bg-dblue" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-3 mb-md-0">
          <div className="card py-4 h-100">
            <div className="card-body text-center">
              <i className="fas fa-map-marked-alt text-primary mb-2"></i>
              <h4 className="text-uppercase m-0">Location</h4>
              <hr className="my-4" />
              <div className="small text-black-50">Bishop Auckland, UK</div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3 mb-md-0">
          <div className="card py-4 h-100">
            <div className="card-body text-center">
              <i className="fas fa-envelope text-primary mb-2"></i>
              <h4 className="text-uppercase m-0">Email</h4>
              <hr className="my-4" />
              <div className="small text-black-50"><a href="#!">email.com</a></div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3 mb-md-0">
          <div className="card py-4 h-100">
            <div className="card-body text-center">
              <i className="fas fa-mobile-alt text-primary mb-2"></i>
              <h4 className="text-uppercase m-0">Phone</h4>
              <hr className="my-4" />
              <div className="small text-black-50">The last 10 digits of pi. </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  );
}

export default Learn;
