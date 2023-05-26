import Laoyout from './features/layout/Layout'
import { Routes, Route } from "react-router-dom";
import Kanban from "./features/kanban/Kanban";
import Login from "./features/login/Login";
import Settings from './features/settings/Settings';
import ProtectedRoute from './features/layout/ProtectedRoute';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Laoyout />}>


          <Route index element={<ProtectedRoute><Kanban /></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />

        </Route>

        <Route path="/login" element={<Login />} />
      </Routes >

    </>
  )
}

export default App
