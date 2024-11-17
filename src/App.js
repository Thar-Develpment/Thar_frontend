import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import "./common.css";
import Login from "./Pages/Login";
import { Profile } from "./Pages/Profile";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import ContactUs from "./Pages/ContactUs";
import FAQ from "./Pages/FAQ";
import TermsandCondition from "./Pages/TermsandCondition";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  useEffect(() => {
    const clientId = process.env.REACT_APP_CLIENT_ID;

    function start() {
      gapi.client.init({
        clientId: { clientId },
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  });

  // var accessToken = gapi.auth.getToken().access_token;

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route path="/profile" element={<Profile />}></Route>

          <Route path="/contact-us" element={<ContactUs />}></Route>
          <Route path="/faq" element={<FAQ />}></Route>
          <Route
            path="/terms-and-conditions"
            element={<TermsandCondition />}
          ></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
