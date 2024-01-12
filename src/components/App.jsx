import "./App.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// component import
import Nave from "./sub_components/navbar";
import Hom from "./sub_components/Home";
import Fotter from "./sub_components/footer.jsx";

// component_importing
import Social from "./sub_components/social.jsx";
import Login from "./sub_components/user/login.jsx";

//pagesssss=========== importing
import Home from "./pages/home/Homepage";
import Affiliate from "./pages/Affiliate/Affiliate";
import Contact from "./pages/Contact/Contact";
import Faq from "./pages/FAQ/FAQ";
import Payouts from "./pages/Payouts/PayOuts";

import Navaee from "./test/nave.jsx";
function App() {
  return (
    <BrowserRouter>
      <Nave />

      <Routes>
        <Route path="*" element={<Home />} />;
        <Route path="/react1st" element={<Home />} />;
        <Route path="/Affiliate" element={<Affiliate />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/FAQ" element={<Faq />} />
        <Route path="/Payouts" element={<Payouts />} />
      </Routes>

      <Fotter />
    </BrowserRouter>
  );
}

export default App;
