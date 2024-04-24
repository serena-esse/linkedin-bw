import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import Profilo from "./component/Profilo";
import Lavoro from "./component/Lavoro";
import Messagistica from "./component/Messagistica";
import Notifiche from "./component/Notifiche";
import Rete from "./component/Rete";
import MyNavBar from "./component/Navbar/MyNavBar";
import Login from "./component/Login";
import Footer from "./component/Footer";
import Chat from "./component/Chat";
import Navbar2 from "./component/Navbar2";

function App() {
  return (
    <div className="position-relative">
      <BrowserRouter>
        <MyNavBar></MyNavBar>
        {/* <Navbar2></Navbar2> */}
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Lavoro" element={<Lavoro />} />
          <Route path="/Messagistica" element={<Messagistica />} />
          <Route path="/Notifiche" element={<Notifiche />} />
          <Route path="/Rete" element={<Rete />} />
          <Route path="/Profilo" element={<Profilo></Profilo>} />
          <Route path="/" element={<Login></Login>} />
        </Routes>
        <Chat></Chat>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
