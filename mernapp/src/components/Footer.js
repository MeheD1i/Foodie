import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    //   <div>
    //     <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    //   <div className="col-md-4 d-flex align-items-center">
    //     <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
    //     </Link>
    //     <span className="text-muted">© 2023 Foodie, Inc</span>
    //   </div>
    // </footer>
    //   </div>
    <footer className="bg-dark text-white text-center py-4 border-top">
      <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
      </Link>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h5>About Foodie</h5>
            <p className="text-muted">
              Foodie is your go-to food delivery service, bringing delicious meals right to your doorstep.
            </p>
          </div>
          <div className="col-lg-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Phone: +1-222-000-1111</li>
              <li>Email: info@foodie.com</li>
              <li>Address: 1234 Food Street, Dhanmondi, Bangladesh</li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h5>Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <p className="mb-0">&copy; {new Date().getFullYear()} Foodie. All rights reserved.</p>
      </div>
    </footer>
  )
}
