import React from "react";

const sizeClasses = {
  txtIBMPlexSans11: "font-ibmplexsans font-normal",
  txtIBMPlexSansMedium12: "font-ibmplexsans font-medium",
  txtIBMPlexSans12: "font-ibmplexsans font-normal",
  txtIBMPlexSansMedium14: "font-ibmplexsans font-medium",
  txtIBMPlexSansMedium15: "font-ibmplexsans font-medium",
  txtIBMPlexSans19: "font-ibmplexsans font-normal",
  txtIBMPlexSans18: "font-ibmplexsans font-normal",
  txtIBMPlexSans16: "font-ibmplexsans font-normal",
  txtIBMPlexSansSemiBold13: "font-ibmplexsans font-semibold",
  txtIBMPlexSans18Black900: "font-ibmplexsans font-normal",
  txtIBMPlexSans12BlueA700: "font-ibmplexsans font-normal",
  txtIBMPlexSans13: "font-ibmplexsans font-normal",
  txtIBMPlexSansSemiBold22: "font-ibmplexsans font-semibold",
  txtIBMPlexSans14: "font-ibmplexsans font-normal",
  txtIBMPlexSansMedium14Teal800: "font-ibmplexsans font-medium",
  txtIBMPlexSansSemiBold18: "font-ibmplexsans font-semibold",
  txtIBMPlexSansSemiBold13GreenA700: "font-ibmplexsans font-semibold",
  txtIBMPlexSansMedium15Bluegray400: "font-ibmplexsans font-medium",
  txtIBMPlexSans16Bluegray400: "font-ibmplexsans font-normal",
  txtIBMPlexSansMedium16: "font-ibmplexsans font-medium",
  txtIBMPlexSansBold24: "font-bold font-ibmplexsans",
  txtIBMPlexSansMedium18: "font-ibmplexsans font-medium",
  txtIBMPlexSansBold36: "font-bold font-ibmplexsans",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
