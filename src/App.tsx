import Laoyout from './features/layout/Layout'
import { Routes, Route } from "react-router-dom";
import Kanban from "./features/kanban/Kanban";
import Login from "./features/login/login";
import Settings from './features/settings/Settings';


function App() {

  return (
    <>
      <Routes>

        <Route path="/" element={<Laoyout />}>
          <Route index element={<Kanban />} />

          <Route path="/settings" element={<Settings />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>

    </>
  )
}

export default App
