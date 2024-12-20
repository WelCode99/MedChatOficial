import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AuthProvider } from './context/AuthContext';
import { AppRoutes } from './routes';
import { DatabaseProvider } from './context/DatabaseContext';
// In ./components/Chatbot.tsx
export const Chatbot = () => {
  return (
    <div>
      {/* component code */}
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <DatabaseProvider>
          <Layout>
            <AppRoutes />
          </Layout>
          <Chatbot />
        </DatabaseProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;