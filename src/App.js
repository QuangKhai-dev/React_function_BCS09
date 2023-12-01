import DemoFunction from './Components/DemoFunctionComponent/DemoFunction';
import DemoReactRouter from './Components/DemoFunctionComponent/DemoReactRouter';
import { Routes, Route } from 'react-router-dom';
import TemplateDemo from './Templates/DemoReactRouter/TemplateDemo';
import BaiTapReactRouter from './Components/DemoFunctionComponent/BaiTapReactRouter/BaiTapReactRouter';
import DemoUngDung from './Components/DemoFunctionComponent/DemoUngDung';
import ChiTietGiay from './Components/DemoFunctionComponent/BaiTapReactRouter/ChiTietGiay';
import Page404 from './Components/DemoFunctionComponent/Page404';
import BaiTapFormik from './Components/DemoFunctionComponent/BaiTapFormik/BaiTapFormik';
function App() {
  return (
    // <div className="App">
    //   <h1 className="text-red-500">Hello</h1>
    //   <DemoFunction />
    // </div>
    <>
      <Routes>
        {/* khi đi vào trang chủ sẽ hiển thị component DemoFunction  */}
        {/* <Route element={<DemoFunction />} path="/home" /> */}
        {/* /hoi-dap  */}
        {/* localhost:3000/ */}
        {/* <Route element={<DemoFunction />} path="/">
          <Route element={<DemoReactRouter />} path="hoi-dap" />
        </Route> */}
        <Route element={<TemplateDemo />} path="/">
          {/* // khi người dùng vừa truy cập vào đúng path của Route cha, sẽ tự động hiển thị component có thuộc tính index lên luôn  */}
          <Route element={<BaiTapReactRouter />} index />
          <Route element={<DemoUngDung />} path="ung-dung" />
          {/* tạo ra các route có thể truyền id lên url giúp thực hiện quá trình kiểm tra xem người dùng đang muốn coi sản phẩm nào  */}
          <Route element={<ChiTietGiay />} path="detail/:id" />
          <Route element={<BaiTapFormik />} path="cum-rap" />
        </Route>

        {/* kiểm tra page not found  */}
        <Route element={<Page404 />} path="*"></Route>
      </Routes>
    </>
  );
}

export default App;
