import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import Sidebar from './components/Sidebar';

import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Results from './pages/results';
import AddUsers from './pages/add_users';
import AddEvaluations from './pages/add_evaluations';
import BancoDeTalento from './pages/banco_de_talento/main';
import Conocimiento from './pages/banco_de_talento/conocimiento';
import Performance from './pages/banco_de_talento/desempeño';
import Productividad from './pages/banco_de_talento/productividad';
import EstructuraOrganizacional from './pages/estructura_organizacional/main';
import AtraccionTalento from './pages/atraccion_de_talento/main';
import Contratacion from './pages/contratacion/main';
import IntegracionPersonal from './pages/integracion_de_personal/main';
import RetencionTalento from './pages/retencion_de_talento/main';
import PrevencionLaboral from './pages/prevencion_laboral/main';
import ClimaOrg from './pages/clima_org/main';
import SeguridadLaboral from './pages/seguridad_laboral/main';
import PanelRH from './pages/panel_de_control_rh/main';

const SidebarLayout = () => (
  <>
    <Sidebar>
      <Outlet />
    </Sidebar>
  </>
)

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route element={<SidebarLayout />}>
              <Route path='/dashboard' element={<Dashboard />}/>

              <Route path='/estructura-organizacional' element={<EstructuraOrganizacional />}/>
              <Route path='/atraccion-de-talento' element={<AtraccionTalento />}/>
              <Route path='/contratacion' element={<Contratacion />}/>
              <Route path='/integracion-de-personal' element={<IntegracionPersonal />}/>

              //#region BancoDeTalento

              <Route path='/banco-de-talento' element={<BancoDeTalento />}/>
              <Route path='/banco-de-talento/conocimiento' element={<Conocimiento />}/>
              <Route path='/banco-de-talento/desempeño' element={<Performance />}/>
              <Route path='/banco-de-talento/productividad' element={<Productividad />}/>
              
              //#endregion
              
              <Route path='/retencion-de-talento' element={<RetencionTalento />}/>
              <Route path='/prevencion-laboral' element={<PrevencionLaboral />}/>
              <Route path='/clima-organizacional' element={<ClimaOrg />}/>
              <Route path='/seguridad-laboral' element={<SeguridadLaboral />}/>
              <Route path='/panel-de-control-rh' element={<PanelRH />}/>


              <Route path='/results' element={<Results />}/>
              <Route path='/addUsers' element={<AddUsers />}/>
              <Route path='/addEvaluations' element={<AddEvaluations />}/>

              <Route path='*' element={<>not found</>}/>
            </Route>
            <Route path='/' element={<Login />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
