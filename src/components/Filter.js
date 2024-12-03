import React, { useState } from 'react';
import './Filter.css'; // Create this CSS file for styling
import Select from 'react-select';
//import makeAnimated from 'react-select/animated';
import propertiesData from '../data/propertiesData';


const Filter = ({ handleSelectChanges }) => {
    const [selectedCities, setSelectedCities] = useState([]);
    const [selectedPropertyType, setSelectedPropertyType] = useState(null);
    const [selectedBHK, setSelectedBHK] = useState([]);
    const [selectedLocality, setSelectedLocality] = useState([]);

    const citiesOptions = [
        { value: 'Mumbai', label: 'Mumbai' },
        { value: 'Delhi', label: 'Delhi' },
        { value: 'Panaji', label: 'Goa, Panaji' },
    ];

    const typesOptions = [
        { value: 'house', label: 'House' },
        { value: 'villa', label: 'Villa' },
        { value: 'apartment', label: 'Apartment' },
    ];

    const bhkOptions = [
        { value: '1', label: '1 BHK' },
        { value: '2', label: '2 BHK' },
        { value: '3', label: '3 BHK' },
        { value: '4', label: '4 BHK' },
    ];

    const localityOptions = [
        { value: "Andheri West", label: 'Andheri West' },
        { value: "Bandra West", label: 'Bandra West' },
        { value: "Miramar", label: 'Miramar' },
    ];

    const handleCityChange = (selectedOption) => {
        console.log('Selected Cities:', selectedOption);
        setSelectedCities(selectedOption);
        handleSelectChanges({
            cities: selectedOption,
            type: selectedPropertyType,
            bhk: selectedBHK,
            locality: selectedLocality,
        });
    };

    const handlePropertyTypeChange = (selectedOption) => {
        console.log('Selected Property Type:', selectedOption);
        setSelectedPropertyType(selectedOption);
        handleSelectChanges({
            cities: selectedCities,
            type: selectedOption,
            bhk: selectedBHK,
            locality: selectedLocality,
        });
    };

    const handleBHKChange = (selectedOption) => {
        console.log('Selected Bhk:', selectedOption);
        setSelectedBHK(selectedOption);
        handleSelectChanges({
            cities: selectedCities,
            type: selectedPropertyType,
            bhk: selectedOption,
            locality: selectedLocality,
        });
    };

    const handleLocalityChange = (selectedOption) => {
        console.log('Selected Locality:', selectedOption);
        setSelectedLocality(selectedOption);
        handleSelectChanges({
            cities: selectedCities,
            type: selectedPropertyType,
            bhk: selectedBHK,
            locality: selectedOption,
        });
    };

    return (
        <div className="filter-container">
            <h3>Filters</h3>

            <div className="filter-item">
                <label>Cities:</label>
                <Select
                    isMulti
                    options={citiesOptions}
                    value={selectedCities}
                    onChange={handleCityChange}
                    placeholder="Select Cities"
                    className="react-select-container"
                    classNamePrefix="react-select"
                />
            </div>

            <div className="filter-item">
                <label>Property Type:</label>
                <Select
                    options={typesOptions}
                    value={selectedPropertyType}
                    onChange={handlePropertyTypeChange}
                    placeholder="Select Property Type"
                    className="react-select-container"
                    classNamePrefix="react-select"
                />
            </div>

            <div className="filter-item">
                <label>BHK:</label>
                <Select
                    options={bhkOptions}
                    value={selectedBHK}
                    isMulti
                    onChange={handleBHKChange}
                    placeholder="Select BHK"
                    className="react-select-container"
                    classNamePrefix="react-select"
                />
            </div>

            <div className="filter-item">
                <label>Locality:</label>
                <Select
                    options={localityOptions}
                    value={selectedLocality}
                    isMulti
                    onChange={handleLocalityChange}
                    placeholder="Select Locality"
                    className="react-select-container"
                    classNamePrefix="react-select"
                />
            </div>
            <button className='clear-btn' >Clear Filters</button>


        </div>
    );
};


export default Filter;
