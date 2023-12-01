import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
const ChiTietGiay = () => {
  const params = useParams();
  console.log(params);
  const [detail, setDetail] = useState();
  // cách sử dụng useEffect thứ 2 để chạy cả quá trình mounting và updating, là bên trong cặp dấu ngoặc vuông, ta truyền vào dữ liệu mà ta muốn kiểm tra khi thay đổi sẽ chạy lại useEffect
  useEffect(() => {
    const promise = axios({
      method: 'GET',
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${params.id}`,
    });
    promise
      .then((res) => {
        console.log(res);
        setDetail(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });

    // will unmount
    // return () => {
    //   console.log('Hello Nghĩa a đi nhé');
    // };
  }, [params.id]);
  console.log(detail);

  const location = useLocation();
  console.log(location);

  return (
    <div className="py-10">
      <h1>Chi tiết sản phẩm giày</h1>
      <div className="flex">
        <div className="w-4/12">
          <img src={detail?.image} alt="" />
        </div>
        <div className="w-8/12">
          <h2 className="font-bold text-3xl">{detail?.name}</h2>
          <p className="text-2xl mt-4">Giá tiền: {detail?.price}</p>
        </div>
      </div>
      <h3>Xem thêm các sản phẩm khác</h3>
      <div className="grid grid-cols-3 gap-10">
        {detail?.relatedProducts?.map((item, index) => {
          return (
            <div className="p-5 border border-red-400 rounded-lg" key={index}>
              <img src={item.image} alt="" />
              <div>
                <h4 className="font-bold text-xl">{item.name}</h4>
                <p>{item.price}</p>
              </div>
              <Link
                to={`/detail/${item.id}`}
                className="py-2 px-5 bg-green-500 mt-3 text-white rounded-lg hover:bg-green-600 duration-500"
              >
                Xem chi tiết
              </Link>
              {/* <button
                onClick={() => {
                  navigate(`/detail/${item.id}`);
                }}
                // to={`/detail/${item.id}`}
                className="py-2 px-5 bg-green-500 mt-3 text-white rounded-lg hover:bg-green-600 duration-500"
              >
                Xem chi tiết
              </button> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChiTietGiay;
