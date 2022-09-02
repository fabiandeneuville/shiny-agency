import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/index.jsx';
import Survey from './pages/Survey';
import Header from './components/Header/index';
import Results from './pages/Results/index';
import Freelances from './pages/Freelances/index';
import Error from './components/Error/index';
import Footer from './components/Footer/index';
import { ThemeProvider, SurveyProvider } from '../src/utils/context/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './utils/style/GlobalStyle';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider>
      <SurveyProvider>
        <GlobalStyle/>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/survey/:questionNumber' element={<Survey/>}/>
            <Route path='/results' element={<Results/>}/>
            <Route path='/freelances' element={<Freelances/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
        <Footer/>
      </SurveyProvider>
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
