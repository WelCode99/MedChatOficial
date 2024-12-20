import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AuthProvider } from './context/AuthContext';
import { AppRoutes } from './routes';
// In ./components/Chatbot.tsx
export const Chatbot = () => {
  // component code
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <AppRoutes />
        </Layout>
        <Chatbot />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;