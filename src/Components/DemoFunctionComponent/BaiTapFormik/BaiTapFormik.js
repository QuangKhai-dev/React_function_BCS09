import React from 'react';

const BaiTapFormik = () => {
  // id,ten,giaTien,loai,moTa,mauSac
  return (
    <div className="max-w-7xl mx-auto py-10">
      <h1 className="mb-5 font-bold text-2xl">
        Bài tập dùng formik và yup xử lí form nhập dữ liệu
      </h1>
      <div>
        <form>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="id"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Id
              </label>
              <input
                type="text"
                id="id"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Vui lòng nhập id"
              />
            </div>
            <div>
              <label
                htmlFor="tenSanPham"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Tên sản phẩm
              </label>
              <input
                type="text"
                id="tenSanPham"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Vui lòng nhập tên sản phẩm"
              />
            </div>
            <div>
              <label
                htmlFor="giaTien"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Giá tiền
              </label>
              <input
                type="text"
                id="giaTien"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Vui lòng nhập giá tiền"
              />
            </div>
            <div>
              <label
                for="loai"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Chọn loại
              </label>
              <select
                id="loai"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option selected>Chọn</option>
                <option value="Samsung">Samsung</option>
                <option value="Oppo">Oppo</option>
                <option value="Apple">Apple</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="moTa"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Mô tả
              </label>
              <input
                type="text"
                id="moTa"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Vui lòng nhập mô tả"
              />
            </div>
            <div>
              <label
                htmlFor="mauSac"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Màu sắc
              </label>
              <input
                type="text"
                id="mauSac"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Vui lòng nhập màu sắc"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BaiTapFormik;
