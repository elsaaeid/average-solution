import React from 'react';
import Login from '../pages/auth-pages/Login.js';
import Register from '../pages/auth-pages/Register.js';
import Forget from "../pages/auth-pages/Forget.js";
import Reset from "../pages/auth-pages/Reset.js";
import Verify from "../pages/auth-pages/Verify.js";
import LoginWithCode from "../pages/auth-pages/LoginWithCode.js";
import Home from '../pages/portfolio-pages/home/Home.jsx';
import About from '../pages/portfolio-pages/about/About.jsx';
import Experience from '../pages/portfolio-pages/experience/Experience.jsx';
import Services from '../pages/portfolio-pages/services/Services.jsx';
import Portfolio from '../pages/portfolio-pages/portfolio/Portfolio.jsx';
import Contact from '../pages/portfolio-pages/contact/Contact.jsx';
import Error from '../pages/portfolio-pages/Error.jsx';
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard-pages/dashboard/index.jsx";
import UserList from "../pages/dashboard-pages/user-list/UserList.jsx";
import Products from "../pages/dashboard-pages/products/index.jsx";
import AddProduct from "../pages/dashboard-pages/addProduct/AddProduct.jsx";
import EditProduct from "../pages/dashboard-pages/editProduct/EditProduct.jsx";
import LayoutPortfolio from "../components/portfolio-components/layoutPortfolio/LayoutPortfolio.jsx"
import LayoutDashboard from "../components/dashboard-components/layoutDashboard/LayoutDashboard.jsx";
import EditProfile from "../components/global-components/profile/EditProfile.js";
import ChangePassword from '../components/global-components/changePassword/ChangePassword.js';
import PageMenu from "../components/global-components/page-menu/PageMenu.jsx";
import Service from "../components/portfolio-components/intro-home/Service.jsx"
import LandingPage from "../pages/portfolio-pages/landing-page/LandingPage.jsx"



const index = () => {

  return(
    <Routes>
      <Route path="/register" element={
        <PageMenu 
          firstLinkNav="/register" firstTitleNav="Signup"
          secondLinkNav="/login" secondTitleNav="Login"
          >
          <Register />
        </PageMenu>
        } 
      />
      <Route path="/login" element={
        <PageMenu 
          firstLinkNav="/register" firstTitleNav="Signup"
          secondLinkNav="/login" secondTitleNav="Login"
          >
          <Login />
        </PageMenu>
      } 
    />
      <Route path="/forget" element={<Forget />} />
      <Route path="/resetPassword/:resetToken" element={<Reset />} />
      <Route path="/loginWithCode/:email" element={<LoginWithCode />} />
      <Route
        path="/verify/:verificationToken"
        element={
          <Verify />
        }
      />
      {/*Portfolio*/}
      <Route path='/' element={
        <LandingPage />} 
        />
      <Route path='/home' element={
        <LayoutPortfolio>
          <Home />
        </LayoutPortfolio>
      } />
      <Route path='/about' element={
        <LayoutPortfolio>
          <About />
        </LayoutPortfolio>
      } />
      <Route path='/experience' element={
        <LayoutPortfolio>
          <Experience />
        </LayoutPortfolio>
      } />
      <Route path='/services' element={
        <LayoutPortfolio>
          <Services />
        </LayoutPortfolio>
      } />
      <Route path='/portfolio' element={
        <LayoutPortfolio>
          <Portfolio />
        </LayoutPortfolio>
      } />
      <Route path='/contact' element={
        <LayoutPortfolio>
          <Contact />
        </LayoutPortfolio>
      } />
      {/*Services*/}
      <Route path="/service/:id" exact element={
         <LayoutPortfolio > 
          <Service />
        </LayoutPortfolio>
      } />
      <Route
        path="/edit-profile"
        element={
            <PageMenu 
              firstLinkNav="/edit-profile" firstTitleNav="Edit Profile"
              secondLinkNav="/change-password" secondTitleNav="Change Password"
            >
              <EditProfile />
            </PageMenu>
            }
          />
      <Route
      path="/change-password"
      element={
          <PageMenu 
            firstLinkNav="/edit-profile" firstTitleNav="Edit Profile"
            secondLinkNav="/change-password" secondTitleNav="Change Password">
            <ChangePassword />
          </PageMenu>
          }
        />
      <Route path='/dashboard' element={
        <LayoutDashboard >
          <Dashboard />
        </LayoutDashboard>} />

        <Route path='/products' element={
          <LayoutDashboard >
            <Products />
          </LayoutDashboard>} />
          <Route path='/users' element={
            <LayoutDashboard >
              <UserList />
            </LayoutDashboard>} />

          <Route
          path="/add-product"
          element={
            <LayoutDashboard >
              <AddProduct />
            </LayoutDashboard>} />

        <Route
        path="/edit-product/:id"
        element={
          <LayoutDashboard >
            <EditProduct />
          </LayoutDashboard>} />
    
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default index;
