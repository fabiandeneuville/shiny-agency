import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/index.jsx';
import Survey from './pages/Survey/Survey';
import Header from './components/Header/index';
import Results from './pages/Results/index';
import Freelances from './pages/Freelances/index';
import Error from './components/Error/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Trbuchet MS', Helbertica, sans-serif;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle/>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/survey/:questionNumber' element={<Survey/>}/>
          <Route path='/results' element={<Results/>}/>
          <Route path='/freelances' element={<Freelances/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
