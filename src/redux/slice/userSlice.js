// câu lệnh tạo một cấu trúc slice nhanh : rxslice
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  arrUser: [],
};

const userSlice = createSlice({
  name: 'user',
  // initialState là dữ liệu mặc định của slice
  initialState,
  reducers: {
    // là nơi tạo các hàm giúp xử lí thay đổi dữ liệu cho slice
    getValueUser: (state, action) => {
      console.log(state);
      // action là nhận dữ liệu từ component, bên trong cấu trúc gồm 2 thuộc tính, type được cấu hình dựa trên name của slice và tên phương thức
      // payload là dữ liệu gửi lên khi gọi chạy phương thức ở dưới component
      console.log(action);

      state.arrUser.push(action.payload);
    },
  },
});

export const { getValueUser } = userSlice.actions;

export default userSlice.reducer;
