import React, { useState } from 'react';
import './Filter.css'; // Create this CSS file for styling



const Filter = ({ applyFilters }) => {
    const [budget, setBudget] = useState([1000, 5000]);
    const [propertyType, setPropertyType] = useState("");
    const [bhk, setBhk] = useState("");
    const [postedBy, setPostedBy] = useState("");
    const [showMoreFilters, setShowMoreFilters] = useState(false);

    // Handle slider change
    const handleBudgetChange = (e) => {
        const { name, value } = e.target;
        setBudget(prev => name === 'min' ? [value, prev[1]] : [prev[0], value]);
    };

    // Apply filters and close filter options
    const handleApplyFilters = () => {
        applyFilters({
            budget,
            propertyType,
            bhk,
            postedBy
        });
    };

    return (
        <div className="filter-container">
            <h3>Filters</h3>
            
            {/* Budget Slider */}
            <div className="filter-item">
                <label>Budget:</label>
                <input type="range" name="min" min="1000" max="10000" value={budget[0]} onChange={handleBudgetChange} />
                <input type="range" name="max" min="1000" max="10000" value={budget[1]} onChange={handleBudgetChange} />
                <span>{`$${budget[0]} - $${budget[1]}`}</span>
            </div>

            {/* Property Type Dropdown */}
            <div className="filter-item">
                <label>House/Villa:</label>
                <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
                    <option value="">Select Type</option>
                    <option value="house">House</option>
                    <option value="villa">Villa</option>
                    <option value="apartment">Apartment</option>
                </select>
            </div>

            {/* BHK Dropdown */}
            <div className="filter-item">
                <label>BHK:</label>
                <select value={bhk} onChange={(e) => setBhk(e.target.value)}>
                    <option value="">Select BHK</option>
                    <option value="1">1 BHK</option>
                    <option value="2">2 BHK</option>
                    <option value="3">3 BHK</option>
                    <option value="4">4 BHK</option>
                    <option value="5">5 BHK</option>
                    <option value="6">5 BHK</option>
                </select>
            </div>

            {/* Posted By Dropdown */}
            <div className="filter-item">
                <label>Posted By:</label>
                <select value={postedBy} onChange={(e) => setPostedBy(e.target.value)}>
                    <option value="">Select</option>
                    <option value="agent">Agent</option>
                    <option value="individual">Individual</option>
                </select>
            </div>

            {/* More Filters */}
            <button onClick={() => setShowMoreFilters(!showMoreFilters)}>
                More Filters
            </button>

            {/* Apply Filters */}
            <button onClick={handleApplyFilters}>Done</button>
        </div>
    );
};

export default Filter;
