import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Address Point</span>  5674 BrianHead Dr Corona California
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">mail me</span>{" "}
        <a href="mailto:steve@mail.com">bagumabrian21@gmail.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">Book a call with me</span>{" "}
        <a href="Tel: +216 21 184 010"> 
https://calendly.com/bagumabrian21 </a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
