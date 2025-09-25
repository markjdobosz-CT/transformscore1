import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t bg-white mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600">
            © 2025 Mark Dobosz. All rights reserved.
          </div>
          <div className="text-sm text-gray-500">
            Fundraising Assessment Pro
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;