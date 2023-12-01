// câu lệnh rafce giúp khởi tạo một function component : rafce
import React, { useState } from 'react';
import DemoProps from './DemoProps';
import { Outlet } from 'react-router-dom';

const DemoFunction = () => {
  // demo state trong function component
  // Tạo một state giúp lưu trữ giá trị số
  // state = {
  //   number : 1
  // }
  // this.setState()
  // useState giúp tạo một state và phương thức setState có trên fc
  // giá trị đầu tiên trong array là state, giá trị tiếp theo sẽ là phương thức cập nhật lại state
  const [number, setNumber] = useState(10);
  // Tạo một state lưu trữ thông tin sinh viên của trường đại học
  const [sinhVien, setSinhVien] = useState({
    hoTen: 'Long Ủn ỉn',
    tuoi: 26,
    lop: 'BCS09',
  });

  return (
    <div className="container mx-auto">
      <Outlet />
      <h2>Demo về State trong React</h2>

      {/* Demo về Props trong fc  */}
      <DemoProps number={number} setNumber={setNumber} />
      <div>
        <h3>Thông tin sinh viên</h3>
        <p>{sinhVien.hoTen}</p>
        <p>{sinhVien.tuoi}</p>
        <p>{sinhVien.lop}</p>
        <button
          onClick={() => {
            // let newSinhVien = sinhVien;
            // newSinhVien.hoTen = 'Lâm ủn ỉn';
            // setSinhVien(newSinhVien);
            setSinhVien({ ...sinhVien, hoTen: 'Lâm ủn ỉn' });
          }}
          className="py-2 px-5 bg-green-600 text-white rounded-lg"
        >
          Đổi tên sinh viên
        </button>
      </div>
    </div>
  );
};

export default DemoFunction;
