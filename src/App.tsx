import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from "./routes";
import { MovieProvider } from './context/movies-context';
import ReactGA from "react-ga4"

function App() {
   ReactGA.initialize("YOUR TRACKING ID");
 
   
  return (
  <MovieProvider>
    <RouterProvider router={router} />;
  </MovieProvider>

  
  );
}

export default App;