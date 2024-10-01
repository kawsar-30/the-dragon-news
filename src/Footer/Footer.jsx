import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 text-white py-8">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
    {/* About Section */}
    <div>
      <h3 className="text-xl font-semibold mb-4">About Dragon News</h3>
      <p className="text-sm text-gray-400">
        Dragon News is your trusted source for reliable, up-to-date news on the
        stories that shape our world. We are committed to delivering
        fast, accurate, and impartial reporting on a wide range of topics,
        from politics and business to entertainment, technology, and more.
      </p>
    </div>

    {/* Quick Links Section */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
      <ul>
        <li className="mb-2">
          <a href="/about" className="text-sm text-gray-400 hover:text-white">About Us</a>
        </li>
        <li className="mb-2">
          <a href="/contact" className="text-sm text-gray-400 hover:text-white">Contact Us</a>
        </li>
        <li className="mb-2">
          <a href="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a>
        </li>
        <li>
          <a href="/terms" className="text-sm text-gray-400 hover:text-white">Terms of Service</a>
        </li>
      </ul>
    </div>

    {/* Contact Section */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
      <p className="text-sm text-gray-400">
        Have a question or want to give feedback? Reach out to us at:
      </p>
      <p className="text-sm text-gray-400 mt-2">
        <strong>Email:</strong> support@dragonnews.com
      </p>
      <p className="text-sm text-gray-400">
        <strong>Phone:</strong> +123-456-7890
      </p>
      <div className="flex mt-4 space-x-4">
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="mt-8 border-t border-gray-700 pt-4 text-center">
    <p className="text-sm text-gray-400">
      © 2024 Dragon News. All rights reserved.
    </p>
  </div>
</footer>

        </div>
    );
};

export default Footer;