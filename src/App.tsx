import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './stores/authStore';

// Lazy loading des composants
const Header = React.lazy(() => import('./components/Header'));
const Footer = React.lazy(() => import('./components/Footer'));
const Home = React.lazy(() => import('./pages/Home'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Services = React.lazy(() => import('./pages/Services'));
const Incubator = React.lazy(() => import('./pages/Incubator'));
const Forum = React.lazy(() => import('./pages/Forum'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Messages = React.lazy(() => import('./pages/Messages'));
const AllProjects = React.lazy(() => import('./pages/AllProjects'));
const ActiveProjects = React.lazy(() => import('./pages/ActiveProjects'));
const AllTransactions = React.lazy(() => import('./pages/AllTransactions'));
const AllReviews = React.lazy(() => import('./pages/AllReviews'));
const PendingActions = React.lazy(() => import('./pages/PendingActions'));
const Profile = React.lazy(() => import('./pages/Profile'));
const AccountSettings = React.lazy(() => import('./pages/AccountSettings'));
const LoginModal = React.lazy(() => import('./components/LoginModal'));
const AvailableBalance = React.lazy(() => import('./pages/finance/AvailableBalance'));
const WithdrawalPage = React.lazy(() => import('./pages/finance/WithdrawalPage'));

function App() {
  const { user } = useAuthStore();
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#0f0f0f] text-white">
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Header 
            onLoginClick={() => setShowLogin(true)} 
            isAuthenticated={!!user}
          />
          
          {showLogin && (
            <LoginModal onClose={() => setShowLogin(false)} />
          )}
          
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/services" element={<Services />} />
              <Route path="/incubator" element={<Incubator />} />
              <Route path="/forum" element={<Forum />} />
              
              {/* Routes protégées */}
              {user ? (
                <>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/messages" element={<Messages />} />
                  <Route path="/all-projects" element={<AllProjects />} />
                  <Route path="/active-projects" element={<ActiveProjects />} />
                  <Route path="/transactions" element={<AllTransactions />} />
                  <Route path="/reviews" element={<AllReviews />} />
                  <Route path="/pending-actions" element={<PendingActions />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/account-settings" element={<AccountSettings />} />
                  <Route path="/balance" element={<AvailableBalance />} />
                  <Route path="/withdrawal" element={<WithdrawalPage />} />
                </>
              ) : (
                // Rediriger les routes protégées si non authentifié
                <>
                  <Route 
                    path="/dashboard" 
                    element={<Navigate to="/" replace />} 
                  />
                  <Route 
                    path="/messages" 
                    element={<Navigate to="/" replace />} 
                  />
                </>
              )}
            </Routes>
          </div>
          
          <Footer />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;