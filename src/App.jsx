import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Homepage from "./pages/Homepage";
import SignInPage from './pages/SignInPage';
import Affiliatespage from './pages/Affiliatespage';
import Pricingpage from './pages/Pricingpage';
import Discoverpage from './pages/Discoverpage'
import BookAuthorspage from './pages/BookAuthorspage'
import CourseCreatorspage from './pages/CourseCreatorspage'
import Entrepreneurspage from './pages/Entrepreneurspage'
import Musicianspage from './pages/Musicianspage'
import Podcasterspage from  './pages/Podcasterspage'
import Web30Enthusiastspage from './pages/Web30Enthusiastspage'
import JewelryStoreOwners from './pages/JewelryStoreOwners'
import Coachespage from './pages/Coachespage';
import BeautySalonspage from './pages/BeautySalonspage'
import Marketingpage from './pages/Marketingpage'
import Lawyerspage from './pages/Lawyerspage'
import Usecases from './pages/Usecases'
import Howtostart from './pages/Howtostart'
import Becomeapartner from './pages/Becomeapartner'
import PrivacyPolicy from './pages/PrivacyPolicy'


function App() {
  return (
    <Router>
      <div className="font-sans">
        {/* Define routes for different pages */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/affiliates" element={<Affiliatespage />} />
          <Route path="/pricing" element={<Pricingpage />} />
          <Route path="/discover" element={< Discoverpage/>} />
          <Route path='/bookauthors' element={<BookAuthorspage />} />
          <Route path='/coachespage' element={<Coachespage/>} />
          <Route path='/coursecreatorspage' element={< CourseCreatorspage/>} />
          <Route path='/entrepreneurspage' element={< Entrepreneurspage/>}  />
          <Route path='/musicianspage' element={<Musicianspage />} />
          <Route path='/podcasterspage'  element={<Podcasterspage />} />
          <Route path='/web3.0enthusiastspage' element={<Web30Enthusiastspage />} />
          <Route path='/jewelrystoreowners' element={<JewelryStoreOwners />}   />
          <Route path='/beautysalonspage'  element={<BeautySalonspage />} />
          <Route path='/marketingpage'  element={<Marketingpage/>}  />
          <Route path='/lawyerspage' element={<Lawyerspage />} />
          <Route path='/usecases'  element={<Usecases />} />
          <Route path='/howtostart' element={<Howtostart  />} />
          <Route path='/becomeapartner' element={<Becomeapartner />} />
          <Route path='/privacypolicy' element={<PrivacyPolicy  />}  />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
