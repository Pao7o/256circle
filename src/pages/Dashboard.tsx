import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import DashboardOverview from '../components/dashboard/DashboardOverview';
import ProjectsSection from '../components/dashboard/ProjectsSection';
import FinanceSection from '../components/dashboard/FinanceSection';
import MessagesSection from '../components/dashboard/MessagesSection';
import PerformanceSection from '../components/dashboard/PerformanceSection';
import RecommendationsSection from '../components/dashboard/RecommendationsSection';

export default function Dashboard() {
  const { user } = useAuthStore();
  const location = useLocation();
  const sectionRefs = {
    messages: useRef<HTMLDivElement>(null),
    reviews: useRef<HTMLDivElement>(null),
    transactions: useRef<HTMLDivElement>(null),
    'active-projects': useRef<HTMLDivElement>(null),
    recommendations: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const state = location.state as { scrollToSection?: string };
    if (state?.scrollToSection && sectionRefs[state.scrollToSection as keyof typeof sectionRefs]?.current) {
      sectionRefs[state.scrollToSection as keyof typeof sectionRefs].current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  if (!user) {
    return null;
  }

  return (
    <div className="pt-24 pb-12 min-h-screen bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 gradient-text">Welcome back, {user.username}</h1>
        
        <div className="grid gap-8">
          <DashboardOverview />

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div ref={sectionRefs['active-projects']}>
                <ProjectsSection />
              </div>
              <div ref={sectionRefs.transactions}>
                <FinanceSection />
              </div>
              <div ref={sectionRefs.reviews}>
                <PerformanceSection />
              </div>
            </div>

            <div className="space-y-8">
              <div ref={sectionRefs.messages}>
                <MessagesSection />
              </div>
              <div ref={sectionRefs.recommendations}>
                <RecommendationsSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}