import { Route,Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AllProduct from "./components/AllProduct";
import Cart from "./components/Cart";
import Product_details from "./components/Product_details";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import SearchProduct from "./components/SearchProduct";

const App =()=>{


  return (<>
  
  <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/allproduct" element={<AllProduct/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/productDetails" element={<Product_details/>}/>
      <Route path="/loginpage" element={<LoginPage/>}></Route>
      <Route path="/registrationpage" element={<RegistrationPage/>}></Route>
      <Route path="/serachProduct" element={<SearchProduct/>}></Route>
    </Routes>
  </>);
};


//export
export default App;