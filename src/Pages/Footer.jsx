import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="/" className="text-gray-400 hover:text-white">Home</a>
              </li>
              <li>
                <a href="/shop" className="text-gray-400 hover:text-white">Shop</a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">About Us</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul>
              <li>
                <a href="/returns" className="text-gray-400 hover:text-white">Returns</a>
              </li>
              <li>
                <a href="/shipping" className="text-gray-400 hover:text-white">Shipping</a>
              </li>
              <li>
                <a href="/faq" className="text-gray-400 hover:text-white">FAQ</a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="https://www.instagram.com" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a href="https://www.twitter.com" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="https://www.linkedin.com" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in"></i> LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">Email: support@ecommerce.com</p>
            <p className="text-gray-400">Phone: +1 (800) 123-4567</p>
            <p className="text-gray-400">Address: 123 E-Commerce St, City, Country</p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-600 pt-4">
          <p className="text-center text-gray-400 text-sm">
            &copy; 2025 E-Commerce Site. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
