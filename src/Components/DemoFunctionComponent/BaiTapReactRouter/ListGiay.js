import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ListGiay = ({ lstGiay }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-4 gap-10">
      {lstGiay.map((item, index) => {
        return (
          <div className="p-5 border border-red-400 rounded-lg" key={index}>
            <img src={item.image} alt="" />
            <div>
              <h4 className="font-bold text-xl">{item.name}</h4>
              <p>{item.price}</p>
            </div>
            {/* <Link
              to={`/detail/${item.id}`}
              className="py-2 px-5 bg-green-500 mt-3 text-white rounded-lg hover:bg-green-600 duration-500"
            >
              Xem chi tiết
            </Link> */}
            <button
              onClick={() => {
                navigate(`/detail/${item.id}`);
              }}
              // to={`/detail/${item.id}`}
              className="py-2 px-5 bg-green-500 mt-3 text-white rounded-lg hover:bg-green-600 duration-500"
            >
              Xem chi tiết
            </button>
          </div>
        );
      })}
      {/* item  */}
    </div>
  );
};

export default ListGiay;
