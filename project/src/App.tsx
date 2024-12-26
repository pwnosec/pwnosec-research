import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/layout/HeroSection';
import { FeaturesSection } from './components/home/FeaturesSection';
import { Investigations } from './pages/Investigations';
import { BugBountyPage } from './pages/BugBounty';
import { Events } from './pages/Events';
import { Contact } from './pages/Contact';
import { Community } from './pages/Community';
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
              <FeaturesSection />
            </>
          } />
          <Route path="/investigations" element={<Investigations />} />
          <Route path="/investigations/analysis-of-sophisticated-phishing-campaign-targeting-financial-institutions" element={<PhishingCampaignAnalysis />} />
          <Route path="/investigations/blackcat-ransomware-technical-analysis-and-iocs" element={<BlackCatRansomwareAnalysis />} />
          <Route path="/investigations/emerging-ddos-attack-vectors-in-cloud-infrastructure" element={<DDoSAnalysis />} />
          <Route path="/investigations/supply-chain-attack-compromised-npm-packages-analysis" element={<NPMSupplyChainAnalysis />} />
          <Route path="/bug-bounty" element={<BugBountyPage />} />
          <Route path="/community" element={<Community />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;