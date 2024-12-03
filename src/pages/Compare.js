import React, { useState , useEffect } from 'react';
import PropertyCard from '../components/PropertyCard';
//import './Compare.css';

function Compare({ compareList, setCompareList }) {
  const [properties, setProperties] = useState(compareList);

  useEffect(() => {
    //update local state when compareList changes
    setProperties(compareList);
  }, [compareList]);

  // Function to remove property from compare list
  const removePropertyCard = (propertyId) => {
    const updatedProperties = properties.filter(property => property.id !== propertyId);
    setProperties(updatedProperties);
    setCompareList(updatedProperties); // Update the compareList state in the parent component

    //update localStorage with the update list
    localStorage.setItem('compareList', JSON.stringify(updatedProperties));
  };

  return (
    <div className="compare-page">
      <h2>Compare Properties</h2>
      <div className="compare-list">
        {properties.length > 0 ? (
          properties.map((property, index) => (
            <PropertyCard 
              key={index} 
              property={property} 
              addToCompare={() => {}} // Disable compare button in Compare page
              onRemove={removePropertyCard} // Pass the remove function
              cardType="compare" 
              
            />
          ))
        ) : (
          <p>No properties to compare. Please add some properties first.</p>
        )}
      </div>
    </div>
  );
}

export default Compare;
