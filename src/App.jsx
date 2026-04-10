import { useEffect, useState } from 'react'
import './App.css'
import './App.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import All from './pages/All'
import Man from './pages/Man'
import Women from './pages/Women'
import Jewelery from './pages/Jewelery'
import Electronics from './pages/Electronics'
import Login from './pages/Login'
import Member from './pages/Member'
import Cart from './pages/Cart'
import Payment from './pages/Payment'
import UserInfo from './pages/UserInfo'
import ProductDetail from './pages/ProductDetail'
import { useProductStore } from './store/useProductStore'

import ProductList from './components/ProductList'

function App() {

  const { items, onFetchItems } = useProductStore();
  useEffect(() => {
    onFetchItems()
  }, [items])

  if(!items.length) return <div>로딩중....</div>

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 상세 페이지 */}
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/:category/:subcategory" element={<ProductList />} />

        <Route path="/all" element={<All />} />
        <Route path="/men" element={<Man />} />
        <Route path="/women" element={<Women />} />
        <Route path="/jewelery" element={<Jewelery />} />
        <Route path="/electronics" element={<Electronics />} />

        <Route path="/login" element={<Login />} />
        <Route path="/member" element={<Member />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />

        <Route path="/userinfo" element={<UserInfo />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
