import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Page/Home";

import { Routes, Route, Link } from "react-router-dom";
import Appointment from "./component/Page/Appointment";
import AboutOurClinic from "./component/Page/AboutOurClinic";
import ContactMe from "./component/Page/ContactMe";
import { UserProvider } from "./component/userContext/userContext";
import { DoctorProvider } from "./component/userContext/doctorContext";
import { NewsProvider } from "./component/userContext/latestNewsContext";
import { SliderProvider } from "./component/userContext/sliderContext";
import SearchResult from "./component/Page/SearchResult";
import PageNotFound from "./component/PageNotFound/PageNotFound";
import Login from "./component/Login/Login";
import Nabar from "./component/Navbar/Nabar";
import Register from "./component/Register/Register";

import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./component/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Nabar />
      <UserProvider>
        <DoctorProvider>
          <NewsProvider>
            <SliderProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/appointment"
                  element={
                    <RequireAuth>
                      <Appointment />
                    </RequireAuth>
                  }
                />
                <Route path="/clinic" element={<AboutOurClinic />} />
                <Route path="/contact" element={<ContactMe />} />
                <Route path="/searchresult" element={<SearchResult />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </SliderProvider>
          </NewsProvider>
        </DoctorProvider>
      </UserProvider>
    </div>
  );
}

export default App;
