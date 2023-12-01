import React, { useEffect, useState } from 'react';
import ListGiay from './ListGiay';
import axios from 'axios';

const BaiTapReactRouter = () => {
  // hook useEffect
  // useEffect sử dụng cho 3 trạng thái chính của một component là mounting, updating, unmounting
  // Đầu tiên : Quá trình mounting, sử dụng quá trình mounting trên fc, ta sử dụng useEffect có 2 tham số, tham số thứ nhất là hàm sẽ chạy, tham số thứ 2 là một array rỗng
  const [lstGiay, setLstGiay] = useState([]);
  useEffect(() => {
    // sử dụng gọi dữ liệu về và render lên giao diện trong lần đầu tiên render component
    let promise = axios({
      method: 'GET',
      url: 'https://shop.cyberlearn.vn/api/Product',
    });
    promise
      .then((res) => {
        console.log(res);
        setLstGiay(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(lstGiay);

  return (
    <div>
      <h2>Bài tập cửa hàng giày</h2>
      <ListGiay lstGiay={lstGiay} />
    </div>
  );
};

export default BaiTapReactRouter;
