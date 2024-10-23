const propertiesData = [
  {
    id: 1,
    title: 'Apartment for Sale',
    location: 'Kolkata, West Bengal',
    price: '₹2.43 Cr (starts at ₹1.21 Lacs)',
    cost: 24300000, // Cost in actual numbers for better usage later
    status: 'For Sale',
    image: 'https://dummyimage.com/600x400', // Bigger image
    // images: [
    //   'https://dummyimage.com/600x400',
    //   'https://dummyimage.com/600x400',
    //   'https://example.com/images/villa3.jpg' //showing y this is wrong format
    // ], // Array of images for the property
    description: 'Luxurious 3 BHK Flat for Sale in the heart of Panjim, offering a spacious living area with modern amenities. Perfect for families looking for comfort and convenience.',
    agent: 'By Lama Group',
    pricePerSqFt: '₹12.08k/sq.ft',
    bedrooms: 3,
    bathrooms: 3,
    parkings: 2,
    area: 3000, // Total square feet area
    type: 'apartment',
    furnished: false,
    availableFrom: '14 Nov 2023',
    unitsAvailable: 2, // Number of units available for sale
    remainingUnits: 1, // Units remaining for sale
    floor: 8,
    amenities: ['Swimming Pool', 'Gym', 'Security', 'Power Backup'],
    facilities: ['Nearby Schools', 'Shopping Malls', 'Hospitals', 'Public Transport'],
  },
  {
    id: 2,
    title: 'Villa for Rent',
    location: 'Mumbai, Maharashtra',
    price: '₹50 thousand (starts at ₹1.21 Lacs)',
    cost: 50000, // Rental price
    status: 'For Rent',
    image: 'https://dummyimage.com/600x400',
    // images: [
    //   'https://dummyimage.com/600x400',
    //   'https://dummyimage.com/600x400',
    //   'https://example.com/images/villa3.jpg' //showing y this is wrong format
    // ], 
    description: 'A beautiful 4 BHK villa located in Bandra, offering a perfect blend of modern and traditional architectural styles. The villa comes with a garden and private parking.',
    agent: 'By Lama Group',
    pricePerSqFt: '₹12.08k/sq.ft',
    bedrooms: 4,
    bathrooms: 4,
    parkings: 3,
    area: 3500, // Total square feet area
    type: 'villa',
    furnished: true, // Furnished status
    availableFrom: '01 Dec 2023',
    unitsAvailable: 1, // For rent, usually 1 unit
    remainingUnits: 1, // Remaining units
    floor: 2, // Villa has 2 floors
    amenities: ['Private Garden', 'Security', 'Power Backup'],
    facilities: ['Nearby Schools', 'Restaurants', 'Shopping Centers', 'Public Transport'],
  },
  // Add more property objects as necessary
];

export default propertiesData;
