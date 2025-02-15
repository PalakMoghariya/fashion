import React from 'react';
import { Camera, MapPin, Calendar } from 'lucide-react';
import './css/gallery.css'

const photos = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba',
    title: 'Mountain Lake',
    location: 'Swiss Alps',
    date: 'April 2024',
    photographer: 'John Doe'
  },
  {
    id: 2,
    url: 'https://t4.ftcdn.net/jpg/02/78/52/07/240_F_278520748_G9sRQdSValj67Hihmt4r3ji6SLRT3ViA.jpg',
    title: 'Desert Sunset',
    location: 'Sahara Desert',
    date: 'March 2024',
    photographer: 'Jane Smith'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538',
    title: 'Ocean Waves',
    location: 'Pacific Coast',
    date: 'February 2024',
    photographer: 'Mike Johnson'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1682687220199-d0124f48f95b',
    title: 'Forest Path',
    location: 'Black Forest',
    date: 'January 2024',
    photographer: 'Sarah Wilson'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1682687220923-c58b9a4592ae',
    title: 'City Lights',
    location: 'Tokyo',
    date: 'December 2023',
    photographer: 'David Lee'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1682687221080-5cb261c645cb',
    title: 'Northern Lights',
    location: 'Iceland',
    date: 'November 2023',
    photographer: 'Emma Brown'
  }
];

function ProductGallery() {
  return (
    <div className="tw-bg-gray-900 tw-py-12 tw-px-4">
      <div className="tw-max-w-7xl tw-mx-auto">
        <h1 className="tw-text-4xl tw-font-bold tw-text-white tw-text-center tw-mb-8">Photo Gallery</h1>
        
        <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6">
          {photos.map((photo) => (
            <div 
              key={photo.id} 
              className="tw-relative tw-group tw-overflow-hidden tw-rounded-lg tw-shadow-xl tw-aspect-square"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="tw-w-full tw-h-full tw-object-cover tw-transform tw-transition-transform tw-duration-500 group-hover:tw-scale-110"
              />
              
              <div className="tw-absolute tw-inset-0 tw-bg-black tw-bg-opacity-0 group-hover:tw-bg-opacity-75 tw-transition-all tw-duration-300 tw-flex tw-items-end">
                <div className="tw-p-6 tw-translate-y-full group-hover:tw-translate-y-0 tw-transition-transform tw-duration-300">
                  <h3 className="tw-text-xl tw-font-semibold tw-text-white tw-mb-2">{photo.title}</h3>
                  
                  <div className="tw-space-y-2">
                    <div className="tw-flex tw-items-center tw-text-gray-300">
                      <Camera size={16} className="tw-mr-2" />
                      <span className="tw-text-sm">{photo.photographer}</span>
                    </div>
                    
                    <div className="tw-flex tw-items-center tw-text-gray-300">
                      <MapPin size={16} className="tw-mr-2" />
                      <span className="tw-text-sm">{photo.location}</span>
                    </div>
                    
                    <div className="tw-flex tw-items-center tw-text-gray-300">
                      <Calendar size={16} className="tw-mr-2" />
                      <span className="tw-text-sm">{photo.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductGallery;