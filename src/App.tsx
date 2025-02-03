import React, { useState, Suspense, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './stores/authStore';
import { Toaster } from 'react-hot-toast';
import { ModalProvider } from './contexts/ModalContext';

// Lazy loading des composants
const Header = React.lazy(() => import('./components/Header.tsx'));
const Footer = React.lazy(() => import('./components/Footer.tsx'));
const MobileMenu = React.lazy(() => import('./components/MobileMenu.tsx'));
const Home = React.lazy(() => import('./pages/Home.tsx'));
const Projects = React.lazy(() => import('./pages/Projects.tsx'));
const Services = React.lazy(() => import('./pages/Services.tsx'));
const Incubator = React.lazy(() => import('./pages/Incubator.tsx'));
const Forum = React.lazy(() => import('./pages/Forum.tsx'));
const Dashboard = React.lazy(() => import('./pages/Dashboard.tsx'));
const Messages = React.lazy(() => import('./pages/Messages.tsx'));
const AllProjects = React.lazy(() => import('./pages/AllProjects.tsx'));
const ActiveProjects = React.lazy(() => import('./pages/ActiveProjects.tsx'));
const AllTransactions = React.lazy(() => import('./pages/AllTransactions.tsx'));
const AllReviews = React.lazy(() => import('./pages/AllReviews.tsx'));
const PendingActions = React.lazy(() => import('./pages/PendingActions.tsx'));
const Profile = React.lazy(() => import('./pages/Profile.tsx'));
const AccountSettings = React.lazy(() => import('./pages/AccountSettings.tsx'));
const LoginModal = React.lazy(() => import('./components/LoginModal.tsx'));
const AvailableBalance = React.lazy(() => import('./pages/finance/AvailableBalance.tsx'));
const WithdrawalPage = React.lazy(() => import('./pages/finance/WithdrawalPage.tsx'));
const SkillPooling = React.lazy(() => import('./pages/SkillPooling.tsx'));
const RiskManagement = React.lazy(() => import('./pages/RiskManagement.tsx'));
const FinancialOptimization = React.lazy(() => import('./pages/FinancialOptimization.tsx'));
const PerformanceAnalytics = React.lazy(() => import('./pages/PerformanceAnalytics.tsx'));
const StrategicAlignment = React.lazy(() => import('./pages/StrategicAlignment.tsx'));
const Escrow = React.lazy(() => import('./pages/Escrow.tsx'));
const Ecosystem = React.lazy(() => import('./pages/Ecosystem.tsx'));
const Connect = React.lazy(() => import('./pages/Connect.tsx'));

export const LoginContext = createContext<{
  showLogin: boolean;
  setShowLogin: (show: boolean) => void;
}>({
  showLogin: false,
  setShowLogin: () => {},
});

function App() {
  const { user } = useAuthStore();
  const [showLogin, setShowLogin] = useState(false);

  return (
    <LoginContext.Provider value={{ showLogin, setShowLogin }}>
      <ModalProvider>
        <div className="min-h-screen flex flex-col bg-[#0f0f0f] text-white">
          <Toaster 
            position="top-right"
            toastOptions={{
              style: {
                background: '#333',
                color: '#fff',
              },
              success: {
                style: {
                  background: '#4CAF50',
                  color: '#fff',
                },
              },
              error: {
                style: {
                  background: '#F44336',
                  color: '#fff',
                },
              },
            }}
          />
          <Suspense>
            <Router>
              <Header 
                onLoginClick={() => setShowLogin(true)} 
                isAuthenticated={!!user}
              />
              <MobileMenu />
              
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
                  <Route path="/services/skill-pooling" element={<SkillPooling />} />
                  <Route path="/services/risk-management" element={<RiskManagement />} />
                  <Route path="/services/financial-optimization" element={<FinancialOptimization />} />
                  <Route path="/services/performance-analytics" element={<PerformanceAnalytics />} />
                  <Route path="/services/strategic-alignment" element={<StrategicAlignment />} />
                  <Route path="/services/escrow" element={<Escrow />} />
                  <Route path="/ecosystem" element={<Ecosystem />} />
                  <Route path="/connect" element={<Connect />} />
                </Routes>
              </div>
              
              <Footer />
            </Router>
          </Suspense>
        </div>
      </ModalProvider>
    </LoginContext.Provider>
  )
}

export default App;