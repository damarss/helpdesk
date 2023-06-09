import React from "react";
import SliderCaptcha from "@slider-captcha/react";

const Captcha = () => {
  return (
    <div className="border-2 border-biru p-2 py-5 text-center">
      <SliderCaptcha
        create="/api/captcha/create"
        verify="/api/captcha/verify"
      />
    </div>
  );
};

export default Captcha;
