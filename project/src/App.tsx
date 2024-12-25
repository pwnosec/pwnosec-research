import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/layout/HeroSection';
import { Investigations } from './pages/Investigations';
import { BugBountyPage } from './pages/BugBounty';
import { Events } from './pages/Events';
import { PhishingCampaignAnalysis } from './pages/investigation/PhishingCampaignAnalysis';
import { BlackCatRansomwareAnalysis } from './pages/investigation/BlackCatRansomwareAnalysis';
import { DDoSAnalysis } from './pages/investigation/DDoSAnalysis';
import { NPMSupplyChainAnalysis } from './pages/investigation/NPMSupplyChainAnalysis';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Home page content */}
              </main>
            </>
          } />
          <Route path="/investigations" element={
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <Investigations />
            </main>
          } />
          <Route 
            path="/investigations/analysis-of-sophisticated-phishing-campaign-targeting-financial-institutions" 
            element={<PhishingCampaignAnalysis />} 
          />
          <Route 
            path="/investigations/blackcat-ransomware-technical-analysis-and-iocs" 
            element={<BlackCatRansomwareAnalysis />} 
          />
          <Route 
            path="/investigations/emerging-ddos-attack-vectors-in-cloud-infrastructure" 
            element={<DDoSAnalysis />} 
          />
          <Route 
            path="/investigations/supply-chain-attack-compromised-npm-packages-analysis" 
            element={<NPMSupplyChainAnalysis />} 
          />
          <Route path="/bug-bounty" element={
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <BugBountyPage />
            </main>
          } />
          <Route path="/events" element={
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <Events />
            </main>
          } />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;