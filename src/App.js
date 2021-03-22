import logo from "./logo.svg";
import "./App.css";
import DemoFunction from "./Components/DemoComponent/DemoFunction";
import DemoClass from "./Components/DemoComponent/DemoClass";
import CardProduct from "./Components/DemoComponent/CardProduct";
import BaiTapLayout1 from "./Components/BaiTapLayout1/BaiTapLayout1";
import Databinding from "./Databinding/Databinding";
import BT3ThucHanhLayout from "./Components/BaiTapThucHanhLayout/BT3ThucHanhLayout";
import Styles from "./Components/Styles/Styles";
import "./Components/Styles/styles.css";
import HandleEvent from "./Components/HandleEvent/HandleEvent";
import StateDemo from "./StateDemo/StateDemo";
import BaiTapChonXe from "./StateDemo/BaiTapChonXe";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import BaiTapLayoutMap from "./RenderWithMap/BaiTapLayoutMap";
import DanhSachSanPhamProps from "./Props/DemoProps/DanhSachSanPhamProps";
import Products from "./BaiTapProps/Products";
import Glasses from "./BaiTapThuKinhState/Glasses";
import BaiTapGioHangRedux from "./BTGioHangRedux/BaiTapGioHangRedux";

function App() {
  return (
    <div className="App">
      {/* <BT3ThucHanhLayout /> */}
      {/* <BaiTapLayout1 /> */}
      {/* <Databinding /> */}
      {/* <Styles />
      <p className="text-red">cybersoft app component</p>
      <div className="textGreen">cybersoft green</div> */}
      {/* <HandleEvent /> */}
      {/* <StateDemo /> */}
      {/* <BaiTapChonXe /> */}
      {/* <RenderWithMap /> */}
      {/* <BaiTapLayoutMap /> */}
      {/* <DanhSachSanPhamProps /> */}
      {/* <Products /> */}
      <Glasses />
      {/* <BaiTapGioHangRedux /> */}
    </div>
  );
}

export default App;
