import { createRoot } from 'react-dom/client'
import { BrowserRouter,Route,Routes } from 'react-router'
import './index.css'
import Home from './assets/views/Home.jsx'
import AllMaid from './assets/views/AllMaid.jsx';
import HelperDetails from './assets/views/HelperDetails.jsx';

const rootElement=createRoot(document.getElementById('root'));
rootElement.render(
  <div>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/explore" element={<AllMaid/>}/>
        <Route path="/maid-details" element={<HelperDetails/>}/>
    </Routes>
    </BrowserRouter>
</div>
)
