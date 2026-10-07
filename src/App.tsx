/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { JoinModal } from './components/JoinModal';
import { ScrollToTop } from './components/ScrollToTop';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Events } from './pages/Events';
import { EventDetails } from './pages/EventDetails';
import { Projects } from './pages/Projects';
import { ProjectDetails } from './pages/ProjectDetails';
import { Team } from './pages/Team';
import { Resources } from './pages/Resources';
import { Blog } from './pages/Blog';
import { BlogDetails } from './pages/BlogDetails';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  const handleOpenJoin = () => setIsJoinModalOpen(true);
  const handleCloseJoin = () => setIsJoinModalOpen(false);

  return (
    <Router>
      <ScrollToTop />

      {/* Initial Loading Screen */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} minDuration={1400} />
      )}

      <div className="min-h-screen flex flex-col bg-[#0b0f19] text-slate-100">
        {/* Sticky Glass Navbar */}
        <Navbar onOpenJoinModal={handleOpenJoin} />

        {/* Page Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onOpenJoinModal={handleOpenJoin} />} />
            <Route path="/about" element={<About onOpenJoinModal={handleOpenJoin} />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:slug" element={<EventDetails onOpenJoinModal={handleOpenJoin} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
            <Route path="/team" element={<Team onOpenJoinModal={handleOpenJoin} />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetails />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Premium Dark Footer */}
        <Footer onOpenJoinModal={handleOpenJoin} />

        {/* Interactive Join GDGC Modal with Confetti */}
        <JoinModal isOpen={isJoinModalOpen} onClose={handleCloseJoin} />
      </div>
    </Router>
  );
}
