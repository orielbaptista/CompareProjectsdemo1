import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import './Properties.css';
import Select from 'react-select';
import propertiesData from '../data/propertiesData';




function Properties({ addToCompare, compareList }) { //debug: fallback value for properties if undefined
  

  //extract localities, bhks, types, amenities from propertiesData
  const localities = [...new Set(propertiesData.map(property => property.locality))];
  const bhks = [...new Set(propertiesData.map(property => property.bhk))];
  const cities = [...new Set(propertiesData.map(property => property.city))];
  const propertyTypes = [...new Set(propertiesData.map(property => property.type))];
  const furnishingTypes = [...new Set(propertiesData.map(property => property.furnished))];
  const allAmenities = [...new Set(propertiesData.map(property => property.amenities))];

  //covert localities/bhks to options for select
  const localityOptions = localities.map(locality => 
    ({ value: locality, label: locality }));

  const cityOptions = cities.map(city => 
    ({ value: city, label: city }));

  const bhkOptions = bhks.map((bhk) =>({
      value: bhk,
      label: `${bhk} BHK`,
    }));
  
  const propertyTypeOptions = propertyTypes.map((type) => ({
      value: type,
      label: type,
  }))

  const furnishingTypeOptions = furnishingTypes.map((furnished) => ({
      value: furnished,
      label: furnished,
  }))

    

    //state for selected localities, bhks, types 
    const [selectedLocalities, setSelectedLocalities] = useState([]);
    const [selectedCities, setSelectedCities] = useState([]);
    const [selectedBhks, setSelectedBhks] = useState([]);
    const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);
    const [selectedFurnishingTypes, setSelectedFurnishingTypes] = useState([]);
    const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
    const [selectedAmenities, setSelectedAmenities] = useState([]);

     // Filtered properties based on selection
  const filteredProperties = propertiesData.filter((property) => {

    const localityMatch =
      selectedLocalities.length === 0 ||
      selectedLocalities.some((option) => option.value === property.locality);

    const cityMatch =
      selectedCities.length === 0 ||
      selectedCities.some((city) => city.value === property.city);

    const bhkMatch =
      selectedBhks.length === 0 ||
      selectedBhks.some((option) => option.value === property.bhk);

    const propertyTypeMatch =
      selectedPropertyTypes.length === 0 ||
      selectedPropertyTypes.some((type) => type.value === property.type);

    const furnishingTypeMatch =
      selectedFurnishingTypes.length === 0 ||
      selectedFurnishingTypes.some((option) => option.value === property.furnished);

    const featuredMatch = !showFeaturedOnly || property.featured;

    const amenitiesMatch = 
      selectedAmenities.length === 0 ||
      selectedAmenities.every((option) => property.amenities.includes(option.value));


    return localityMatch && bhkMatch && 
           cityMatch && propertyTypeMatch && furnishingTypeMatch &&
           featuredMatch && amenitiesMatch  ;
  });

  // Handle checkbox changes
  const handleAmenityChange = (e) => {
    const selected = e.target.checked
      ? [...selectedAmenities, e.target.value]
      : selectedAmenities.filter(amenity => amenity !== e.target.value);
    setSelectedAmenities(selected);
  };

  


  return (


    <div className="properties-page">

      <div className="filter-container">
            <h3 style={{ marginBottom: "25px" }}>Filter Properties</h3>

        <div className='filter-item' style={{ marginBottom: "10px" }}>
          <labell>Select Locality:</labell>
          <Select
            options={localityOptions}
            isMulti
            onChange={(selectedOptions) => setSelectedLocalities(selectedOptions)}
            value={selectedLocalities}
            placeholder="Select Locality"
          />
        </div>

        <div className='filter-item' style={{ marginBottom: "10px" }}>
          <labell>Select City:</labell>
          <Select
            options={cityOptions}
            isMulti
            onChange={(selectedOptions) => setSelectedCities(selectedOptions)}
            value={selectedCities}
            placeholder="Select City"
          />
        
        </div>

        <div className='filter-item' style={{ marginBottom: "10px" }}>
          <labell>Select BHK:</labell>
          <Select
            options={bhkOptions}
            isMulti
            onChange={(selectedOptions) => setSelectedBhks(selectedOptions)}
            value={selectedBhks}
            placeholder="Select BHK"
          />
        
        </div>

        <div className='filter-item' style={{ marginBottom: "10px" }}>
          <labell>Select Property Type:</labell>
          <Select
            options={propertyTypeOptions}
            isMulti
            onChange={(selectedOptions) => setSelectedPropertyTypes(selectedOptions)}
            value={selectedPropertyTypes}
            placeholder="Select Property Type"
          />
        </div>

        <div className='filter-item' style={{ marginBottom: "10px" }}>
          <label>Select Furnishing Type:</label>
          <Select
            options={furnishingTypeOptions}
            isMulti
            onChange={(selectedOptions) => setSelectedFurnishingTypes(selectedOptions)}
            value={selectedFurnishingTypes}
            placeholder="Select Options"
          />
        
        </div>

        <div className='filter-item' style={{ marginBottom: "10px" }}>
          <label>Select Price range</label>
    
        </div>

        <div className='filter-item' style={{ marginBottom: "10px" }}>
          <label>Select Sq Feet</label>
    
        </div>

        <div className='filter-item' style={{ marginBottom: "10px" }}>
          <label>Amenities</label>
          
        </div>

        <div className='filter-item' style={{ marginBottom: "10px" }}>
        <label>Show Featured Properties </label>
        <button style={{
            padding: "5px",
            display: "inline-block",
            position: "relative",
            width: "50px",
            height: "25px",
            background: showFeaturedOnly ? "#4CAF50" : "#ccc",
            borderRadius: "25px",
            cursor: "pointer",
            transition: "background 0.3s ease",
          }}

          onClick={() => setShowFeaturedOnly((prev) => !prev)} >

          <span
            style={{
              position: "absolute",
              top: "50%",
              left: showFeaturedOnly ? "28px" : "2px",
              transform: "translateY(-50%)",
              width: "15px",
              height: "15px",
              background: "#fff",
              borderRadius: "50%",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              transition: "left 0.3s ease",
            }}
          />
        </button>
        </div>

        <button className='clear-btn'>Clear Filter</button>


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
                onRemove={null} // Remove property from compare list (if needed)
                //goToComparePage={goToComparePage} // Navigate to compare page
                
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
