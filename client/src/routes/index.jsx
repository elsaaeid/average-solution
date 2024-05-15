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
import ContactPortfolio from '../pages/portfolio-pages/contact/ContactPortfolio.jsx';
import Error from '../pages/portfolio-pages/Error.jsx';
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard-pages/dashboard/index.jsx";
import UserList from "../pages/dashboard-pages/user-list/UserList.jsx";
import Products from "../pages/dashboard-pages/products/index.jsx";
import Contact from "../pages/dashboard-pages/contact/index.jsx";
import AddProduct from "../pages/dashboard-pages/addProduct/AddProduct.jsx";
import EditProduct from "../pages/dashboard-pages/editProduct/EditProduct.jsx";
import LayoutPortfolio from "../components/portfolio-components/layoutPortfolio/LayoutPortfolio.jsx"
import LayoutDashboard from "../components/dashboard-components/layoutDashboard/LayoutDashboard.jsx";
import EditProfile from "../components/global-components/profile/EditProfile.js";
import ChangePassword from '../components/global-components/changePassword/ChangePassword.js';
import PageMenu from "../components/global-components/page-menu/PageMenu.jsx";
import Service from "../components/portfolio-components/intro-home/Service.jsx"

const index = ({ 
  t,
  activeNav,
  setActiveNav,
  orderState, 
  toggleTab, 
  profile, 
  setProfile, 
  profileImage, 
  setProfileImage, 
  imagePreview, 
  setImagePreview, 
  selection, 
  isSidebar, 
  setIsSidebar,
  joinState,
  setJoinState,
}) => {

  return(
    <Routes>
      <Route path="/register" element={
        <PageMenu 
        orderState={orderState}
        toggleTab={toggleTab}
        firstLinkNav="/register" firstTitleNav="Signup"
        secondLinkNav="/login" secondTitleNav="Login"
        >
          <Register 
             joinState={joinState} 
          />
        </PageMenu>
        } 
      />
      <Route path="/login" element={
        <PageMenu 
        orderState={orderState}
        toggleTab={toggleTab}
        firstLinkNav="/register" firstTitleNav="Signup"
        secondLinkNav="/login" secondTitleNav="Login"
        >
          <Login 
            setJoinState={setJoinState}
          />
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
        <LayoutPortfolio
        joinState={joinState}
        setJoinState={setJoinState}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        t={t}
        toggleTab={toggleTab}
        profile={profile} imagePreview={imagePreview}>
          <Home 
            t={t}
            setActiveNav={setActiveNav}
          />
        </LayoutPortfolio>
      } />
      <Route path='/about' element={
        <LayoutPortfolio 
        joinState={joinState}
        setJoinState={setJoinState}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        t={t}
        toggleTab={toggleTab}
        profile={profile} imagePreview={imagePreview}>
          <About />
        </LayoutPortfolio>
      } />
      <Route path='/experience' element={
        <LayoutPortfolio 
        joinState={joinState}
        activeNav={activeNav}
        setJoinState={setJoinState}
        setActiveNav={setActiveNav}
        t={t}
        toggleTab={toggleTab}
        profile={profile} imagePreview={imagePreview}>
          <Experience />
        </LayoutPortfolio>
      } />
      <Route path='/services' element={
        <LayoutPortfolio 
        setJoinState={setJoinState}
        joinState={joinState}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        t={t}
        toggleTab={toggleTab}
        profile={profile} 
        imagePreview={imagePreview}>
          <Services />
        </LayoutPortfolio>
      } />
      <Route path='/portfolio' element={
        <LayoutPortfolio 
        setJoinState={setJoinState}
        joinState={joinState}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        t={t}
        toggleTab={toggleTab}
        profile={profile} 
        imagePreview={imagePreview}>
          <Portfolio />
        </LayoutPortfolio>
      } />
      <Route path='/contactPortfolio' element={
        <LayoutPortfolio 
        setJoinState={setJoinState}
        joinState={joinState}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        t={t}
        toggleTab={toggleTab}
        profile={profile} 
        imagePreview={imagePreview}>
          <ContactPortfolio />
        </LayoutPortfolio>
      } />
      {/*Services*/}
      <Route path="/service/:id" exact element={
         <LayoutPortfolio 
          setJoinState={setJoinState}
          joinState={joinState}
          activeNav={activeNav}
          setActiveNav={setActiveNav}
          t={t}
          toggleTab={toggleTab}
          profile={profile} 
          imagePreview={imagePreview}> 
          <Service />
        </LayoutPortfolio>
      } />
      <Route
        path="/edit-profile"
        element={
            <PageMenu 
            orderState={orderState}
            toggleTab={toggleTab}
            firstLinkNav="/edit-profile" firstTitleNav="Edit Profile"
            secondLinkNav="/change-password" secondTitleNav="Change Password"
            >
              <EditProfile 
              profile={profile} 
              setProfile={setProfile} 
              profileImage={profileImage} 
              setProfileImage={setProfileImage} 
              imagePreview={imagePreview} 
              setImagePreview={setImagePreview} />
            </PageMenu>
            }
          />
      <Route
      path="/change-password"
      element={
          <PageMenu 
          orderState={orderState}
          toggleTab={toggleTab}
          firstLinkNav="/edit-profile" firstTitleNav="Edit Profile"
          secondLinkNav="/change-password" secondTitleNav="Change Password">
            <ChangePassword 
            profile={profile} 
            setProfile={setProfile}
            profileImage={profileImage}
            setProfileImage={setProfileImage} 
            imagePreview={imagePreview} 
            setImagePreview={setImagePreview} />
          </PageMenu>
          }
        />
      <Route path='/dashboard' element={
        <LayoutDashboard 
        toggleTab={toggleTab}
        setJoinState={setJoinState}
        joinState={joinState}
        t={t}
        profile={profile} 
        imagePreview={imagePreview} 
        isSidebar={isSidebar} 
        setIsSidebar={setIsSidebar}>
          <Dashboard />
        </LayoutDashboard>} />

        <Route path='/products' element={
          <LayoutDashboard 
          toggleTab={toggleTab}
          setJoinState={setJoinState}
          joinState={joinState}
          t={t}
          profile={profile} 
          imagePreview={imagePreview} 
          isSidebar={isSidebar} 
          setIsSidebar={setIsSidebar}>
            <Products />
          </LayoutDashboard>} />
          <Route path='/users' element={
            <LayoutDashboard 
            toggleTab={toggleTab}
            joinState={joinState}
            setJoinState={setJoinState}
            t={t}
            profile={profile} 
            imagePreview={imagePreview} 
            isSidebar={isSidebar} 
            setIsSidebar={setIsSidebar}>
              <UserList />
            </LayoutDashboard>} />

          <Route
          path="/add-product"
          element={
            <LayoutDashboard 
            toggleTab={toggleTab}
            joinState={joinState}
            setJoinState={setJoinState}
            t={t}
            profile={profile} 
            imagePreview={imagePreview} 
            isSidebar={isSidebar} 
            setIsSidebar={setIsSidebar}>
              <AddProduct />
            </LayoutDashboard>} />

        <Route
        path="/edit-product/:id"
        element={
          <LayoutDashboard 
          toggleTab={toggleTab}
          joinState={joinState}
          setJoinState={setJoinState}
          t={t}
          profile={profile} 
          imagePreview={imagePreview} 
          selection={selection} 
          isSidebar={isSidebar} 
          setIsSidebar={setIsSidebar}>
            <EditProduct />
          </LayoutDashboard>} />
          <Route path='/contact-us' element={
            <LayoutDashboard 
            toggleTab={toggleTab}
            joinState={joinState}
            setJoinState={setJoinState}
            t={t}
            profile={profile} 
            imagePreview={imagePreview} 
            selection={selection} 
            isSidebar={isSidebar} 
            setIsSidebar={setIsSidebar}>
              <Contact />
            </LayoutDashboard>} />
    
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default index;
