import React from 'react';
import HeaderDemo from '../../Components/HeaderDemo/HeaderDemo';
import FooterDemo from '../../Components/FooterDemo/FooterDemo';
import { Outlet } from 'react-router-dom';
const TemplateDemo = () => {
  // set up một template dành cho tất cả trang
  // Phía trên là header, ở giữa là nội dung các component, footer
  return (
    <div>
      <HeaderDemo />
      <Outlet />
      <FooterDemo />
    </div>
  );
};

export default TemplateDemo;
