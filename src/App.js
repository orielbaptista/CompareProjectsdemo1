
import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header'; // Import the Header component
import Footer from './components/Footer'; // Import the Footer component
import Home from './pages/Home';         // Import the Home component
import Compare from './pages/Compare';   
import Properties from './pages/Properties';
import PropertyPage from './components/PropertyPage';  // Import PropertyPage
import Login from './components/Login';
import Signup from './components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import propertiesData from './data/propertiesData';
import ProtectedRoute from './components/ProtectedRoute';
import DevelopersPage from './components/DevelopersPage';
//import developersRoutes from './backend/routes/developersRoutes';

function App() {
  const [compareList, setCompareList] = useState(() => {
    // Retrieve the compare list from localStorage when the app initializes
    const savedCompareList = localStorage.getItem('compareList');
    return savedCompareList ? JSON.parse(savedCompareList) : [];
  });

  // Always call useEffect without conditional
  useEffect(() => {
    // Save the updated compare list to localStorage whenever it changes
    localStorage.setItem('compareList', JSON.stringify(compareList));
  }, [compareList]); // The hook will run every time compareList changes

  const addToCompare = (property) => {
    if (!compareList.some((item) => item.id === property.id)) {
      setCompareList([...compareList, property]);
    }
  };


  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>  {/* Wrap everything inside BrowserRouter */}
      <div className="App">
        {/* Render the common Header across all pages */}
        <Header /> 

        {/* Define routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/properties" element={<Properties properties={propertiesData} addToCompare={addToCompare} compareList={compareList} />} />  
          <Route path="/compare" element={<Compare compareList={compareList} setCompareList={setCompareList} />} />  
          <Route path="/login" element={<Login />} /> {/* Route for Login */}
          <Route path="/signup" element={<Signup />} />
          {/* Add route for individual property pages */}
          <Route path="/property/:id" element={<PropertyPage />} />
          {/* Protect the Developers Page route */}
          <Route
          path="/developers"element={
            <ProtectedRoute>
              <DevelopersPage />
            </ProtectedRoute>
          } />

        </Routes>

        <Footer /> {/* Render the common Footer across all pages */}
      </div>
    </BrowserRouter>
  );
}

export default App;
