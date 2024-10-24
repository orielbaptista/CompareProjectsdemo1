import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import './Properties.css';
//import propertiesData from '../data/propertiesData';
//import { useNavigate } from 'react-router-dom';

function Properties({ properties = [], addToCompare, compareList }) { //debug: fallback value for properties if undefined
  const [filters, setFilters] = useState({
    state: '',
    city: '',
    district: '',
    bedrooms: '',
    bathrooms: '',
    type: '',
    status: '',
    minPrice: '',  // Add minPrice
    maxPrice: '', // Add maxPrice (you can adjust it to a higher default value if needed)
  });

  // const [compareList, setCompareList] = useState([]);
  // const navigate = useNavigate();

  // Function to add a property to the compare list
  // const addToCompare = (property) => {
  //   if (!compareList.some((item) => item.id === property.id)) {
  //     const newCompareList = [...compareList, property];
  //     setCompareList(newCompareList);
  //     console.log("Updated Compare List:", newCompareList); 
  //   }else{
  //     console.log("Property already in compare list", property);
  //   }
  // };

  //Function to navigate to the compare page
  // const goToComparePage = () => {
  //   console.log("Navigate to Compare Page with Compare List:", compareList);
  //   navigate('/compare', { state: { compareList } });
  // };

  // Handles filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  // Filter properties based on selected filters including price range
  const filteredProperties = properties.filter((property) => {
    const propertyCost = property.cost || 0; // Default to 0 if cost is undefined
    return (
      (filters.state ? property.location.includes(filters.state) : true) &&
      (filters.type ? property.type === filters.type : true) &&
      (filters.bedrooms ? property.bedrooms === parseInt(filters.bedrooms) : true) &&
      // Add additional filters for city, district, bathrooms, status
      (filters.status ? property.status === filters.status : true) &&
      (filters.minPrice ? propertyCost >= parseInt(filters.minPrice) : true) &&
      (filters.maxPrice ? propertyCost <= parseInt(filters.maxPrice) : true)
    );
  });

  return (

    
    





    <div className="properties-page">

      {/* <div className="banner">
    <div className="banner-content">
      <h1>Find Your Perfect Property</h1>
      <input type="text" className="search-bar" placeholder="Search by location, property type, etc." />
    </div>
  </div> */}



      
      {/* Filter Section */}
      <div className="filter-container">
        <h2>Filter Properties</h2>

        {/* State filter */}
        <select name="state" value={filters.state} onChange={handleFilterChange}>
          <option value="">Select State</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Mumbai">Mumbai</option>
          {/* Add more options for states */}
        </select>

        {/* Property type filter */}
        <select name="type" value={filters.type} onChange={handleFilterChange}>
          <option value="">Property Type</option>
          <option value="apartment">Apartment</option>
          <option value="villa">Villa</option>
        </select>

        {/* Bedrooms filter */}
        <input
          type="number"
          name="bedrooms"
          placeholder="Bedrooms"
          value={filters.bedrooms}
          onChange={handleFilterChange}
        />

        {/* Status filter */}
        <select name="status" value={filters.status} onChange={handleFilterChange}>
          <option value="">Status</option>
          <option value="For Sale">For Sale</option>
          <option value="For Rent">For Rent</option>
        </select>

        {/* Price range */}
        <div>
          <h3>Price range:</h3>
          {/* Min Price filter */}
          <input
            type="number"
            name="minPrice"
            placeholder="Min Price"
            value={filters.minPrice}
            onChange={handleFilterChange}
          />

          {/* Max Price filter */}
          <input
            type="number"
            name="maxPrice"
            placeholder="Max Price"
            value={filters.maxPrice}
            onChange={handleFilterChange}
          />
        </div>
      </div>






      
      <div className="property-listings-container">
        <h2>Available Properties</h2>

        

        <div className="property-listings">
          
          {/* Render filtered properties */}
          {Array.isArray(filteredProperties) && filteredProperties.length > 0 ? (
            filteredProperties.map((property, index) => (
              <PropertyCard
                key={index}
                property={property}
                addToCompare={addToCompare} // Adding property to compare list
                //goToComparePage={goToComparePage} // Navigate to compare page
                //cardType="properties"
              />
            ))
          ) : (
            <p>No properties found</p>
          )}
        </div>
        
      </div>
    </div>
  );
}

export default Properties;
