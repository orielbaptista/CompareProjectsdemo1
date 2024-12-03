const propertiesData = [
  {
    id: 1,
    featured: true,
    title: 'Apartment for Sale',
    location: "Mumbai, Maharashtra",
    city: "Mumbai",
    locality: 'Andheri West',
    address: "123 Main Street, Mumbai, Maharashtra, India, 400001",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.870176807523!2d72.87765537561491!3d19.0760899713439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce558f84a1b3%3A0x4b1d2e2a2d7c4b23!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1698587801712!5m2!1sen!2us",
    price: '₹2.43 Cr (starts at ₹1.21 Lacs)',
    cost: 24300000,
    coverimage: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg',
    media: [
      { type: 'image', src: "https://dummyimage.com/600x400" },
      { type: 'video', src: 'https://www.youtube.com/embed/your-video-id' },
      { type: 'image', src: "https://dummyimage.com/600x400" },
    ],
    galleryImages: [
      'https://dummyimage.com/600x400',
      'https://dummyimage.com/600x400',
      'https://dummyimage.com/600x400',
    ],
    floorplanImages: [
      "https://dummyimage.com/600x400/0000FF/FFFFFF&text=Floorplan+1",
      "https://dummyimage.com/600x400/00FF00/FFFFFF&text=Floorplan+2",
      "https://dummyimage.com/600x400/FF0000/FFFFFF&text=Floorplan+3",
    ],
    description: 'Luxurious 3 BHK Flat for Sale in the heart of Panjim, offering a spacious living area with modern amenities. Perfect for families looking for comfort and convenience.',
    agent: 'By Lama Group',
    pricePerSqFt: '₹12.08k/sq.ft',
    area: 3000,
    bhk: 2,
    bathrooms: 3,
    parkings: 2,
    type: 'Apartment',
    furnished: 'Furnished',
    availableFrom: '14 Nov 2023',
    unitsAvailable: 2,
    remainingUnits: 1,
    floor: 8,  //on the 8th floor for apartments    totalFloors: 10
    amenities: [
      'swimmingPool', 
      'gym', 
      'parking', 
      'wifi', 
      'airConditioning',
      'Gymnasium',
      'Yoga and meditation zone',
      'Indoor games',
      'Gazebo',
      'Kids play area',
      'EV charging point',
      'Senior citizen zone'
    ],
    facilities: [
      'security', 
      'swimmingPool', 
      'gym', 
      'children Play Area', 
      'garden',
      'Nearby Schools',
      'Restaurants',
      'Shopping Centers',
      'Public Transport'
    ],
    security: [
      'CCTV camera in the entire premises',
      '24-hour security',
      'Intercom and video door phone for all flats',
      'Fire-fighting system in all rooms',
      'Decorative entrance lobby',
    ],
  },
  
  // Add the remaining properties and adjust as necessary.

  {
    id: 2,
    featured: false,
    title: 'Apartment for Sale',
    location: "Mumbai, Maharashtra",
    city: "Mumbai",
    locality: "Bandra West",
    address: "456 Beach Road, Bandra West, Mumbai, Maharashtra, India, 400050",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.870176807523!2d72.87765537561491!3d19.0760899713439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce558f84a1b3%3A0x4b1d2e2a2d7c4b23!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1698587801712!5m2!1sen!2us",
    price: '₹2.43 Cr (starts at ₹1.21 Lacs)',
    cost: 24300000,
    coverimage: 'https://dummyimage.com/600x400',
    media: [
      { type: 'image', src: "https://dummyimage.com/600x400" },
      { type: 'video', src: 'https://www.youtube.com/embed/your-video-id' },
      { type: 'image', src: "https://dummyimage.com/600x400" },
    ],
    galleryImages: [
      'https://dummyimage.com/600x400',
      'https://dummyimage.com/600x400',
      'https://dummyimage.com/600x400',
    ],
    floorplanImages: [
      "https://dummyimage.com/600x400/0000FF/FFFFFF&text=Floorplan+1",
      "https://dummyimage.com/600x400/00FF00/FFFFFF&text=Floorplan+2",
      "https://dummyimage.com/600x400/FF0000/FFFFFF&text=Floorplan+3",
    ],
    description: 'Luxurious 3 BHK Flat for Sale in the heart of Panjim, offering a spacious living area with modern amenities. Perfect for families looking for comfort and convenience.',
    agent: 'By Lama Group',
    pricePerSqFt: '₹12.08k/sq.ft',
    area: 3000,
    bhk: 4,
    bathrooms: 3,
    parkings: 2,
    type: 'House',
    furnished: 'Semi-furnished',
    availableFrom: '14 Nov 2023',
    unitsAvailable: 2,
    remainingUnits: 1,
    floor: 8,  //on the 8th floor for apartments    totalFloors: 10
    amenities: [
      'swimmingPool', 
      'gym', 
      'Senior citizen zone'
    ],
    facilities: [
      'Nearby Schools',
      'Restaurants',
      'Public Transport'
    ],
    security: [
      'CCTV camera in the entire premises',
      '24-hour security',
    ],
  },

  
  {
    id: 3,
    featured: true,
    title: 'Apartment for Sale',
    location: "Goa, India",
    city: "Panaji",
    locality: "Miramar",
    address: "123 Beach View Road, Miramar, Panaji, Goa, India, 403001",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.870176807523!2d72.87765537561491!3d19.0760899713439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce558f84a1b3%3A0x4b1d2e2a2d7c4b23!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1698587801712!5m2!1sen!2us",
    price: '₹2.43 Cr (starts at ₹1.21 Lacs)',
    cost: 24300000,
    coverimage: 'https://dummyimage.com/600x400',
    media: [
      { type: 'image', src: "https://dummyimage.com/600x400" },
      { type: 'video', src: 'https://www.youtube.com/embed/your-video-id' },
      { type: 'image', src: "https://dummyimage.com/600x400" },
    ],
    galleryImages: [
      'https://dummyimage.com/600x400',
      'https://dummyimage.com/600x400',
      'https://dummyimage.com/600x400',
    ],
    floorplanImages: [
      "https://dummyimage.com/600x400/0000FF/FFFFFF&text=Floorplan+1",
      "https://dummyimage.com/600x400/00FF00/FFFFFF&text=Floorplan+2",
      "https://dummyimage.com/600x400/FF0000/FFFFFF&text=Floorplan+3",
    ],
    description: 'Luxurious 3 BHK Villa for Sale in the heart of Panjim, offering a spacious living area with modern amenities. Perfect for families looking for comfort and convenience.',
    agent: 'By Lama Group',
    pricePerSqFt: '₹12.08k/sq.ft',
    area: 3000,
    bhk: 3,
    bathrooms: 3,
    parkings: 2,
    type: 'Villa',
    furnished: 'Unfurnished',
    availableFrom: '14 Nov 2023',
    unitsAvailable: 2,
    remainingUnits: 1,
    floor: 9,  //on the 8th floor for apartments    totalFloors: 10
    amenities: [
      'swimmingPool', 
      'gym', 
      'Senior citizen zone'
    ],
    facilities: [
      'Nearby Schools',
      'Restaurants',
      'Public Transport'
    ],
    security: [
      'CCTV camera in the entire premises',
      '24-hour security',
    ],
  },




];

export default propertiesData;
