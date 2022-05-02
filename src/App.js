/** @format */
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import NotFound from "./Pages/NotFound/NotFound";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import About from "./Pages/Home/About/About";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Payment from "./Pages/Dashboard/Payment/Payment";
import MyOrder from "./Pages/Dashboard/MyOrder/MyOrder";
import Review from "./Pages/Dashboard/Review/Review";
import ManageAllOrder from "./Pages/Dashboard/ManageAllOrders/ManageAllOrder";
import ManageProduct from "./Pages/Dashboard/ManageProduct/ManageProduct";
import AddProduct from "./Pages/Dashboard/AddProduct/AddProduct";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path='payment' element={<Payment />} />
            <Route path='myOrder' element={<MyOrder />} />
            <Route path='review' element={<Review />} />
            <Route path='manageAllOrder' element={<ManageAllOrder />} />
            <Route path='addProduct' element={<AddProduct />} />
            <Route path='makeAdmin' element={<MakeAdmin />} />
            <Route path='manageProduct' element={<ManageProduct />} />
          </Route>
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
