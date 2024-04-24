import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import  { Bottom }  from "./bottom/bottom";
import { Login } from "./pages/login/login";
import { Sidebar } from "./sidebar/sidebar";
// import { Sidebar } from "phosphor-react";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/" element={<Shop />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Shop" element={<Bottom />} />
            <Route path="/Sidebar" element={<Sidebar/>}/>
          </Routes>
        </Router>
      </ShopContextProvider>
      {<Bottom/>}
      {/* {<sidebar/>} */}
    </div>
  );
}

export default App;
