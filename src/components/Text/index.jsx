import React from "react";

const sizeClasses = {
  txtPlusJakartaSansRegular18: "font-normal font-plusjakartasans",
  txtPlusJakartaSansRegular16Red400: "font-normal font-plusjakartasans",
  txtPlusJakartaSansRegular16Teal300: "font-normal font-plusjakartasans",
  txtInterMedium12: "font-inter font-medium",
  txtPlusJakartaSansMedium18: "font-medium font-plusjakartasans",
  txtPlusJakartaSansMedium16Bluegray800: "font-medium font-plusjakartasans",
  txtPlusJakartaSansSemiBold18Gray90002: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansMedium16: "font-medium font-plusjakartasans",
  txtPlusJakartaSansMedium14: "font-medium font-plusjakartasans",
  txtPlusJakartaSansSemiBold12: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansRegular16: "font-normal font-plusjakartasans",
  txtPlusJakartaSansSemiBold20: "font-plusjakartasans font-semibold",
  txtInterMedium14: "font-inter font-medium",
  txtPlusJakartaSansRegular14: "font-normal font-plusjakartasans",
  txtPlusJakartaSansSemiBold24: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansSemiBold14: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansSemiBold18: "font-plusjakartasans font-semibold",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular14Gray700: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtPlusJakartaSansMedium18Teal300: "font-medium font-plusjakartasans",
  txtPlusJakartaSansMedium16Gray900: "font-medium font-plusjakartasans",
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
