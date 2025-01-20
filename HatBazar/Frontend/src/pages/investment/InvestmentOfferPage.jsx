import React , { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import SubNavbar from '../../components/SubNavbar/SubNavbar';


function InvestmentOfferPage() {
          return (
                    <div className='bg-green-600 min-h-screen'>
                              <div className='fixed top-0 left-0 right-0 z-50'>
                                        <Navbar/>
                              </div>

                              <div className='fixed top-16 left-0 right-0 z-40 bg-white shadow-sm'>
                                        <SubNavbar currentTab={currentTab} onTabChange={setCurrentTab} />
                              </div>
                    </div>
          );
}

export default InvestmentOfferPage;