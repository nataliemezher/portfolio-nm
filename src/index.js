import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

//Layout
import './style/layout/generic.css';
import './style/layout/navbar.css';
import './style/layout/footer.css';

//Section
import './style/section/hero.css';
import './style/section/projects.css';

//Components
import './style/components/button.css';

//Parts
import './style/parts/project_card.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
