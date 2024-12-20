import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import Home from '../pages/Home';
import Chat from '../pages/Chat';
import PhysicalExam from '../pages/PhysicalExam';
import Emergency from '../pages/Emergency';
import Calculators from '../pages/Calculators';
import Register from '../pages/Register';

export function AppRoutes() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat/:specialtyId" element={<Chat />} />
          <Route path="/physical-exam" element={<PhysicalExam />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/calculators" element={<Calculators />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}