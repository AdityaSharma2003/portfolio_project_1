import React from 'react'

const FooterBottom = () => {
  let today = new Date();
  return (
    <div className="w-full py-10">
      <p className="text-center text-gray-500 text-base">
        © {today. getFullYear()} . All rights reserved by Aditya Sharma
      </p>
    </div>
  );
}

export default FooterBottom