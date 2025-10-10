import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'; // We import Outlet, which is a placeholder for our page content.


function App() {
  return (
      <div>
      {/* We keep the header here so it shows on every page. */}
      <Header />
      
      {/* The <Outlet> component will render the specific page that matches the URL, like ProductList or Cart. */}
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
