import DemoFunction from './Components/DemoFunctionComponent/DemoFunction';
import DemoReactRouter from './Components/DemoFunctionComponent/DemoReactRouter';
import { Routes, Route } from 'react-router-dom';
import TemplateDemo from './Templates/DemoReactRouter/TemplateDemo';
import BaiTapReactRouter from './Components/DemoFunctionComponent/BaiTapReactRouter/BaiTapReactRouter';
import DemoUngDung from './Components/DemoFunctionComponent/DemoUngDung';
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
        </Route>
      </Routes>
    </>
  );
}

export default App;
