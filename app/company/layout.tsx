import React from "react";

const CompanyLayout = ({ children }) => {
  console.log(2);
  return (
    <div>
      <header>이게 마 헤더다</header>
      {children}
    </div>
  );
};

export default CompanyLayout;
