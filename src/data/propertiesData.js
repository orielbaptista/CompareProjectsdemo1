const propertiesData = [
  {
    id: 1,
    title: 'Apartment for Sale',
    location: 'Kolkata, West Bengal',
    address: "123 Main Street, Mumbai, Maharashtra, India, 400001",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.870176807523!2d72.87765537561491!3d19.0760899713439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce558f84a1b3%3A0x4b1d2e2a2d7c4b23!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1698587801712!5m2!1sen!2sus",
    price: '₹2.43 Cr (starts at ₹1.21 Lacs)',
    cost: 24300000, // Cost in actual numbers for better usage later
    //status: 'For Sale',
    coverimage: 'https://dummyimage.com/600x400',
    media: [
      { type: 'image', src: "https://dummyimage.com/600x400" },
      { type: 'video', src: 'https://www.youtube.com/embed/your-video-id' }, // Replace with your actual video link
      { type: 'image', src: "https://dummyimage.com/600x400" },
      // Add more images/videos as needed
    ],
    galleryImages:[
      'https://dummyimage.com/600x400',
      'https://dummyimage.com/600x400',
      'https://dummyimage.com/600x400',
    ],
    floorplanImages: [
      "https://dummyimage.com/600x400/0000FF/FFFFFF&text=Floorplan+1",
      "https://dummyimage.com/600x400/00FF00/FFFFFF&text=Floorplan+2",
      "https://dummyimage.com/600x400/FF0000/FFFFFF&text=Floorplan+3",
      // Add more images as needed
    ],
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
    amenities: ['swimmingPool', 'gym', 'parking', 'wifi', 'airConditioning'],
    facilities: ['security', 'swimmingPool', 'gym', 'children Play Area', 'garden'],  },
  {
    id: 2,
    title: 'Villa for Rent',
    location: 'Mumbai, Maharashtra',
    address: "123 Main Street, Mumbai, Maharashtra, India, 400001",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.870176807523!2d72.87765537561491!3d19.0760899713439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce558f84a1b3%3A0x4b1d2e2a2d7c4b23!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1698587801712!5m2!1sen!2sus",
    price: '₹50 thousand (starts at ₹1.21 Lacs)',
    cost: 50000, // Rental price
    //status: 'For Rent',
    coverimage: 'https://dummyimage.com/600x400',
    media: [
      { type: 'image', src: "https://dummyimage.com/600x400" },
      { type: 'video', src: 'https://www.youtube.com/embed/your-video-id' }, // Replace with your actual video link
      { type: 'image', src: "https://dummyimage.com/600x400" },
      // Add more images/videos as needed
    ],
    floorplanImages: [
      "https://dummyimage.com/600x400/0000FF/FFFFFF&text=Floorplan+1",
      "https://dummyimage.com/600x400/00FF00/FFFFFF&text=Floorplan+2",
      "https://dummyimage.com/600x400/FF0000/FFFFFF&text=Floorplan+3",
      // Add more images as needed
    ],
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
  {
    id: 3,
    title: 'Luxury Apartment',
    price: '₹2.43 Cr (starts at ₹1.21 Lacs)',
    location: 'Mumbai, India',
    address: "123 Main Street, Mumbai, Maharashtra, India, 400001",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.870176807523!2d72.87765537561491!3d19.0760899713439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce558f84a1b3%3A0x4b1d2e2a2d7c4b23!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1698587801712!5m2!1sen!2sus",
    cost: 2500000,
    availableFrom: '2024-11-01',
    coverimage: 'https://dummyimage.com/600x400',
    media: [
      { type: 'image', src: "https://dummyimage.com/600x400" },
      { type: 'video', src: 'https://www.youtube.com/embed/your-video-id' }, // Replace with your actual video link
      { type: 'image', src: "https://dummyimage.com/600x400" },
      // Add more images/videos as needed
    ],
    galleryImages:[
      'https://dummyimage.com/600x400',
      'https://dummyimage.com/600x400',
      'https://dummyimage.com/600x400',
    ],
    floorplanImages: [
      "https://dummyimage.com/600x400/0000FF/FFFFFF&text=Floorplan+1",
      "https://dummyimage.com/600x400/00FF00/FFFFFF&text=Floorplan+2",
      "https://dummyimage.com/600x400/FF0000/FFFFFF&text=Floorplan+3",
      // Add more images as needed
    ],
    bedrooms: 3,
    bathrooms: 2,
    agent: 'By Lama Group', // Agent name
    parkings: 1,
    furnished: true, // Furnished status
    area: 1500,
    unitsAvailable: 10,
    floor: 5,
    remainingUnits: 5,
    amenities: ['Private Garden', 'Security', 'Power Backup'], // Updated amenities
    facilities: ['Nearby Schools', 'Restaurants', 'Shopping Centers', 'Public Transport'], // Updated facilities
    description: 'A luxurious apartment in the heart of the city.',
  },
];

export default propertiesData;
