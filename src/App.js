import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Pages/Home';
import General from './Pages/General';
import DetailedCard from './components/DetailedCard';
import NotFound from './Pages/NotFound';
import Introduction from './Pages/Introduction';
import Documentation from './Pages/Documentation';
import AccountSetting from './Pages/AccountSetting';
import Pricing from './Pages/Pricing';
import AdminSetting from './Pages/AdminSetting';
import PrivacySecurity from './Pages/PrivacySecurity';
import Dashboard from './Pages/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/general' element={<General />} />
        <Route path='/general/:topic' element={<DetailedCard />} />
        <Route path='/introduction' element={<Introduction />} />
        <Route path='/introduction/:topic' element={<DetailedCard />} />
        <Route path='/documentation' element={<Documentation />} />
        <Route path='/documentation/:topic' element={<DetailedCard />} />
        <Route path='/account-setting' element={<AccountSetting />} />
        <Route path='/account-setting/:topic' element={<DetailedCard />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/pricing/:topic' element={<DetailedCard />} />
        <Route path='/admin-setting' element={<AdminSetting />} />
        <Route path='/admin-setting/:topic' element={<DetailedCard />} />
        <Route path='/privacy-security' element={<PrivacySecurity />} />
        <Route path='/privacy-security/:topic' element={<DetailedCard />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/:topic' element={<DetailedCard />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
