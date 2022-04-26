/** @format */

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import NotFound from "./Pages/NotFound/NotFound";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import About from "./Pages/Home/About/About";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* <Header></Header> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />}></Route>
          {/* <Route path='/about' element={<About />} /> */}
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />}></Route>
          <Route
            path='/about'
            element={
              <PrivateRoute>
                <About />
              </PrivateRoute>
            }></Route>

          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
