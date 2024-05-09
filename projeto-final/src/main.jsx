import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard/index.jsx';
import { Beneficiarios } from './pages/Beneficiarios/index.jsx';
import { Informacoes } from './pages/Informacoes/index.jsx';
import { Login } from './pages/Login/index.jsx';
import { pessoas } from './data/Usuarios/index.js';

const initializeUsers = () => {
    if (!localStorage.getItem('pessoas')) {
        localStorage.setItem('pessoas', JSON.stringify(pessoas));
    }
};

// Chamar a função de inicialização antes de montar o aplicativo
initializeUsers();

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: 'dashboard', element: <Dashboard /> },
            { path: 'beneficiarios', element: <Beneficiarios /> },
            { path: 'informacoes', element: <Informacoes /> },
            { path: 'login', element: <Login /> }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
