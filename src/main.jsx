import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import Explore from './pages/Explore/Explore.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'
import WebsDetails from './pages/WebsDetails/WebsDetails.jsx'
import Componentes from './pages/Componentes/Componentes.jsx'


import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/webs/:name' element={<WebsDetails />} />
          <Route path='/componentes' element={<Componentes />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)