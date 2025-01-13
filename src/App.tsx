import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Incubator from './pages/Incubator';
import Forum from './pages/Forum';
import Dashboard from './pages/Dashboard';
import Messages from './pages/Messages';
import AllProjects from './pages/AllProjects';
import ActiveProjects from './pages/ActiveProjects';
import AllTransactions from './pages/AllTransactions';
import AllReviews from './pages/AllReviews';
import PendingActions from './pages/PendingActions';
import Profile from './pages/Profile';
import AccountSettings from './pages/AccountSettings';
import LoginModal from './components/LoginModal';
import AvailableBalance from './pages/finance/AvailableBalance';
import WithdrawalPage from './pages/finance/WithdrawalPage';
import { useNavigationStore } from './stores/navigationStore';

export const LoginContext = React.createContext<{
  showLogin: boolean;
  setShowLogin: (show: boolean) => void;
}>({
  showLogin: false,
  setShowLogin: () => {},
});

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const { isOpen } = useNavigationStore();

  return (
    <LoginContext.Provider value={{ showLogin, setShowLogin }}>
      <Router>
        <div className="min-h-screen bg-[#0f0f0f] text-white">
          {/* Backdrop blur when mobile menu is open */}
          {isOpen && (
            <div 
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden pointer-events-none" 
              aria-hidden="true"
            />
          )}
          
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/incubator" element={<Incubator />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/projects/all" element={<AllProjects />} />
            <Route path="/active-projects" element={<ActiveProjects />} />
            <Route path="/transactions" element={<AllTransactions />} />
            <Route path="/reviews" element={<AllReviews />} />
            <Route path="/pending-actions" element={<PendingActions />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<AccountSettings />} />
            <Route path="/finance/available-balance" element={<AvailableBalance />} />
            <Route path="/finance/withdraw" element={<WithdrawalPage />} />
          </Routes>
          <Footer />
          {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
        </div>
      </Router>
    </LoginContext.Provider>
  );
}