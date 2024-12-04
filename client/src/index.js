import React from 'react';
import ReactDOM from 'react-dom/client';
import './Assets/css/styles.css';
import { LandingPage } from './Pages/LandingPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
	<LandingPage />
</React.StrictMode>);
