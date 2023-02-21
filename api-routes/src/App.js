import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemsPage } from './pages/ItemsPage'
import {ItemDetails} from './pages/ItemDetails'
import { Home } from './pages/Home'

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <h1>Routes and API Demo</h1>
        
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/items" element={<ItemsPage />} />
          <Route exact path="/itemdetails/:id" element={<ItemDetails />}/>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;