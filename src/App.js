import './App.css';
import './assets/fonts/Fonts.css'
import Home from "./pages/home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Furniture from "./pages/Furniture";
import Contacts from "./pages/Contacts";
import AboutPage from "./pages/AboutPage";
import ChairsPage from "./pages/categories/ChairsPage";
import BedsPage from "./pages/categories/BedsPage";
import SofasPage from "./pages/categories/SofasPage";
import LampsPage from "./pages/categories/LampsPage";
import ChairProductPage from "./pages/productPages/ChairProductPage";
import BedProductPage from "./pages/productPages/BedProductPage";
import SofaProductPage from "./pages/productPages/SofaProductPage";
import LampProductPage from "./pages/productPages/LampProductPage";
import Cart from "./pages/Cart";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";


function App() {
    return (
          <div className="App">
              <Router>
                  <div className="container">
                  <Routes>
                      <Route exact path="/" element={<Home/>}/>
                      <Route exact path="/furniture" element={<Furniture/>}/>
                      <Route exact path="/about" element={<AboutPage/>}  />
                      <Route exact path="/contacts" element={<Contacts/>}  />
                      <Route exact path="/furniture/Chairs" element={<ChairsPage/>}  />
                      <Route exact path="/furniture/Chairs/:id" element={<ChairProductPage/>}  />
                      <Route exact path="/furniture/Beds" element={<BedsPage/>}  />
                      <Route exact path="/furniture/Beds/:id" element={<BedProductPage/>}  />
                      <Route exact path="/furniture/Sofas" element={<SofasPage/>}  />
                      <Route exact path="/furniture/Sofas/:id" element={<SofaProductPage/>}  />
                      <Route exact path="/furniture/Lamps" element={<LampsPage/>}  />
                      <Route exact path="/furniture/Lamps/:id" element={<LampProductPage/>}  />
                      <Route exact path="/cart" element={<Cart/>}  />
                      <Route exact path="/terms&conditions" element={<TermsConditions/>}  />
                      <Route exact path="/privacy-policy" element={<PrivacyPolicy/>}  />
                  </Routes>
                  </div>
              </Router>
          </div>
  );
}

export default App;
