import React, { useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { portfolioData } from './portfolioData'; // Assuming you've moved the data to a separate file
import PortfolioAll from './All';

const PortfolioWithTabs = () => {
  // Tabs
  const [activeTab, setActiveTab] = useState('All');
  return (

    <>

      <div className='projecttabs'>
        <button onClick={() => setActiveTab('All')} className={`${activeTab === 'All' ? 'activeTab' : ''} tab_btn`}>All</button>
        <button onClick={() => setActiveTab('Management')} className={`${activeTab === 'Management' ? 'activeTab' : ''} tab_btn`}>Management</button>
        <button onClick={() => setActiveTab('Property')} className={`${activeTab === 'Property' ? 'activeTab' : ''} tab_btn`}>Property</button>
        <button onClick={() => setActiveTab('Entertainment')} className={`${activeTab === 'Entertainment' ? 'activeTab' : ''} tab_btn`}>Entertainment</button>
        <button onClick={() => setActiveTab('Game')} className={`${activeTab === 'Game' ? 'activeTab' : ''} tab_btn`}>Game</button>
        <button onClick={() => setActiveTab('Restaurants')} className={`${activeTab === 'Restaurants' ? 'activeTab' : ''} tab_btn`}>Restaurants</button>
      </div>
      {activeTab === 'All' && (
        <>
          <PortfolioAll category="all" data={portfolioData} />
        </>
      )}
      {activeTab === 'Management' && (
        <>
          <PortfolioAll category="Management" data={portfolioData} />
        </>
      )}
      {activeTab === 'Property' && (
        <>
          <PortfolioAll category="Property" data={portfolioData} />
        </>
      )}
      {activeTab === 'Entertainment' && (
        <>
          <PortfolioAll category="Entertainment" data={portfolioData} />
        </>
      )}
      {activeTab === 'Game' && (
        <>
          <PortfolioAll category="Game" data={portfolioData} />
        </>
      )}
      {activeTab === 'Restaurants' && (
        <>
          <PortfolioAll category="Restaurants" data={portfolioData} />
        </>
      )}
    </>
  );
};

export default PortfolioWithTabs;