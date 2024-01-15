import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CartContextProvider } from './store/CartContextProvider';
import  {BrowserRouter} from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';
import { useAuth0 } from "@auth0/auth0-react";
import Entry from './Entry';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  
  <Auth0Provider
  domain="dev-kdyimig5qbt8dxpa.us.auth0.com"
  clientId="94pFDAFGhsN6zVj35wyykIxpAGFKls6J"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <Entry/>

  </Auth0Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

