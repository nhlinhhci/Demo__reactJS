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

function App() {
  return (
    <div className="App">
      {/* <BT3ThucHanhLayout /> */}
      {/* <BaiTapLayout1 /> */}
      {/* <Databinding /> */}
      <Styles />
      <p className="text-red">cybersoft app component</p>
      <div className="textGreen">cybersoft green</div>
    </div>
  );
}

export default App;
