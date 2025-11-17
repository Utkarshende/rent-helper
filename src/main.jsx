import { createRoot } from 'react-dom/client'
import { BrowserRouter,Route,Routes } from 'react-router'
import './index.css'
import Home from './assets/views/Home.jsx'
import HelperDetails from './assets/views/HelperDetails.jsx';
import Register from './assets/views/Register.jsx'
import Login from './assets/views/Login.jsx'
import AllMaid from './assets/views/AllMaid.jsx'

const rootElement=createRoot(document.getElementById('root'));
rootElement.render(
  <div>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/explore" element={<AllMaid/>}/>
        <Route path="/maid-details" element={<HelperDetails/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
</div>
)
