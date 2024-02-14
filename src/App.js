import './App.scss';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import User from './components/Server/User';
import 'react-18-image-lightbox/style.css';
import Header from './layouts/header/Header.js';
import HomePage from './pages/ui/HomePage.js';
import AddNewProduct from './components/AddNewProduct';
import Product from './components/Product';
import OTP from './OTP/OTP';
import UserByID from './components/Server/UserByID';
import SanPham from './components/SanPham/sanpham';
import SanPhamUpdate from './components/SanPham/SanPhamUpdate';
import SanPhamDelete from './components/SanPham/SanPhamDelete';
import NavbarLayout from './layouts/navbar/Navbar.js';

const App = () => {
  return (
    <>
      <Header />
      <NavbarLayout />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trang-chu" element={<Navigate to="/" />} />
        <Route path="/ca-canh" element={<AddNewProduct />} />
        <Route path="/tep-canh" element={<OTP />} />
        <Route path="/cay-thuy-sinh" element={<Product />} />
        <Route path="/phu-kien" element={<User />} />
        <Route path="/users/:id" element={<UserByID />} />
        <Route path="/sanpham" element={
          <div>
            <SanPham />
            <Outlet />
          </div>
        }>
          <Route path="updateSP/:id" element={<SanPhamUpdate />} />
          <Route path="delete/:id" element={<SanPhamDelete />} />
        </Route>
        <Route path="/sp/updateSP/:id" element={<SanPhamUpdate />} />
        <Route path="/sp/delete/:id" element={<SanPhamDelete />} />
        <Route path="*" element={<div>404 Not Found!</div>} />

      </Routes>
    </>

  );

}

export default App;

