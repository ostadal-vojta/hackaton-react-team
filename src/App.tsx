import Laoyout from './features/layout/Layout'
import { Routes, Route } from "react-router-dom";
import Kanban from "./features/kanban/Kanban";
import Login from "./features/login/login";
import Settings from './features/settings/Settings';
import ProtectedRoute from './features/layout/ProtectedRoute';
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

function App() {

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
