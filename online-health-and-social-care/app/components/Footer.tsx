import React from 'react';
import './Footer.css'; // Ensure this CSS file is correctly linked

export default function Footer() {
  return (
    <footer className="footer py-5">
      <div className="container">
        {/* Flexbox Row */}
        <div className="footer-content d-flex flex-wrap justify-content-between">
          {/* First Column */}
          <div className="footer-section">
            <h4 className="text-white">Terapia</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolorem impedit eos autem dolores laudantium.
            </p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="text-white">Quick Links</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="text-white">Services</h4>
            <ul>
              <li><a href="#">Physiotherapy</a></li>
              <li><a href="#">Diagnostics</a></li>
              <li><a href="#">Massage Therapy</a></li>
              <li><a href="#">Rehabilitation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="text-white">Contact Info</h4>
            <ul>
              <li><i className="fas fa-map-marker-alt"></i> 123 Street, New York, USA</li>
              <li><i className="fas fa-envelope"></i> info@example.com</li>
              <li><i className="fas fa-phone"></i> +012 345 67890</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom text-center text-white p-3">
        &copy; 2025 Online Health and Social Care. All rights reserved.
      </div>
    </footer>
  );
}
