import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <p>Không có đường dẫn này nha N</p>
      <Link to={'/'}>Nhấp em để về trang chủ</Link>
    </div>
  );
};

export default Page404;
