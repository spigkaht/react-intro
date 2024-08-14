import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Greeting from './Greeting.jsx';
import { Goodbye } from './Goodbye.jsx';
import { PlanetsNearby } from './PlanetsNearby.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Greeting />
    <PlanetsNearby />
    <Goodbye />
  </StrictMode>,
);
