import Laoyout from './features/layout/Layout'
import { Routes, Route } from "react-router-dom";
import Kanban from "./features/kanban/Kanban";
import Login from "./features/login/login";
import Settings from './features/settings/Settings';
import ProtectedRoute from './features/layout/ProtectedRoute';
import { useEffect } from "react";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

function App() {

  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', localStorage.getItem('--primary-color') ?? '#249deb')
    document.documentElement.style.setProperty('--secondary-color', localStorage.getItem('--secondary-color') ?? '#4ac7c4')
    document.documentElement.style.setProperty('--ternary-color', localStorage.getItem('--ternary-color') ?? '#824aea')
    document.documentElement.style.setProperty('--text-color', localStorage.getItem('--text-color') ?? '#1e3a8a')
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Laoyout />}>


          <Route index element={<ProtectedRoute>
              <QueryClientProvider client={queryClient}>
                  <Kanban />
              </QueryClientProvider>
          </ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />

        </Route>

        <Route path="/login" element={<Login />} />
      </Routes >

    </>
  )
}

export default App
