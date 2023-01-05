import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import Sidebar from './components/Sidebar';

import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Results from './pages/results';
import AddUsers from './pages/add_users';
import AddEvaluations from './pages/add_evaluations';
import Evaluations from './pages/evaluations';
import Videoteca from './pages/videoteca';
import VidSeguridad from './pages/vid_security';
import VidProcesos from './pages/vid_process';
import VidInstitucional from './pages/vid_institution';

const SidebarLayout = () => (
  <>
    <Sidebar>
      <Outlet />
    </Sidebar>
  </>
)

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route element={<SidebarLayout />}>
              <Route path='/dashboard' element={<Dashboard />}/>

              <Route path='/videoteca' element={<Videoteca />}/>
              <Route path='/videoteca/security' element={<VidSeguridad />}/>
              <Route path='/videoteca/process' element={<VidProcesos />}/>
              <Route path='/videoteca/institution' element={<VidInstitucional />}/>
              
              <Route path='/evaluations' element={<Evaluations />}/>
              
              <Route path='/results' element={<Results />}/>
              <Route path='/addUsers' element={<AddUsers />}/>
              <Route path='/addEvaluations' element={<AddEvaluations />}/>

              <Route path='*' element={<>not found</>}/>
            </Route>
            <Route path='/' element={<Login />}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
