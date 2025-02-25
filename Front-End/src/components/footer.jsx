import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-lg font-semibold mb-4">ENERGYM⚡️</h3>
            <p className="text-sm">เราช่วยคุณสร้างร่างกายที่แข็งแรงและมีสุขภาพดี</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">ติดต่อเรา</h4>
            <p className="text-sm">อีเมล: <a href="mailto:info@energym.com" className="hover:text-gray-300">info@energym.com</a></p>
            <p className="text-sm">โทร: <a href="tel:021234567" className="hover:text-gray-300">02-123-4567</a></p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">ติดตามเรา</h4>
            <div className="flex justify-center space-x-4">
              <a href="#" className="btn btn-link hover:text-gray-300 transition duration-200">Facebook</a>
              <a href="#" className="btn btn-link hover:text-gray-300 transition duration-200">Instagram</a>
              <a href="#" className="btn btn-link hover:text-gray-300 transition duration-200">Twitter</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; 2024 ENERGYM. สงวนลิขสิทธิ์ทั้งหมด.</p>
        </div>
      </div>
    </footer>


  );
};

export default Footer;
