
import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header'; // Import the Header component
import Footer from './components/Footer'; // Import the Footer component
import Home from './pages/Home';         // Import the Home component
import Compare from './pages/Compare';   
import Properties from './pages/Properties';
import PropertyPage from './components/PropertyPage';  // Import PropertyPage
import 'bootstrap/dist/css/bootstrap.min.css';
import propertiesData from './data/propertiesData';
import LoginPage from './pages/LoginPage';
import DeveloperPage from './pages/DeveloperPage';

const isAuuthenticated =() => {
  return !!localStorage.getItem('token');
};

const ProtectedRoute =({ children}) => {
  return isAuuthenticated() ? children : <Navigate to="/login" />;
}


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
    <Router>  {/* Wrap everything inside Router */}
      <div className="App">
        {/* Render the common Header across all pages */}
        <Header /> 

        {/* Define routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/properties" element={<Properties properties={propertiesData} addToCompare={addToCompare} compareList={compareList} />} />  
          <Route path="/compare" element={<Compare compareList={compareList} setCompareList={setCompareList} />} />  
          {/* Add route for individual property pages */}
          <Route path="/property/:id" element={<PropertyPage />} />

          <Route path="/login" element={<LoginPage />} /> {/* Route for Login */}
          
          <Route
            path="/developer"
            element={<ProtectedRoute><DeveloperPage /></ProtectedRoute>} // Redirect to login if not logged in or OTP not verified , if all is good then render the DevelopersPage
          />

          
          <Route path="*" element={<Navigate to="/" />} /> {/* Redirect to Home for any undefined routes */}
        </Routes>

        <Footer /> {/* Render the common Footer across all pages */}
      </div>
    </Router>
  );
}

export default App;
