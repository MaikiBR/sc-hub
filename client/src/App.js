import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import Sidebar from './components/Sidebar';

import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Videos from './pages/videos';
import Exams from './pages/exams';

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
              <Route path='/videos' element={<Videos />}/>
              <Route path='/exams' element={<Exams />}/>
              <Route path='*' element={<>not found</>}/>
            </Route>
            <Route path='/' element={<Login />}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
