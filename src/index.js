import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './SPA/Header'
import Work from './SPA/Work'
import Contact from './SPA/Contact'
import Footer from './SPA/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './FONTS/beauty.woff';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Header />
    <Contact />
    <Work />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
