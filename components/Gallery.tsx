// components/Gallery.tsx - SIMPLIFIED VERSION
'use client';

import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Eye } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isClient, setIsClient] = useState(false);
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const galleryImages = [
    {
      id: 1,
      title: "Fine Dining Training Session",
      category: "Training",
      description: "Conducting wine service training for cruise ship staff",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      date: "2023",
      location: "Royal Caribbean International"
    },
    {
      id: 2,
      title: "Onboard Restaurant Setup",
      category: "Operations",
      description: "Preparing dining area for evening service",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      date: "2023",
      location: "Norwegian Cruise Line"
    },
    {
      id: 3,
      title: "Staff Certification Ceremony",
      category: "Achievements",
      description: "Awarding certificates to completed training batch",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
      date: "2022",
      location: "Princess Cruises"
    },
    {
      id: 4,
      title: "Wine Tasting Workshop",
      category: "Training",
      description: "Teaching wine pairing techniques to F&B team",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
      date: "2022",
      location: "Celebrity Cruises"
    },
    {
      id: 5,
      title: "Kitchen Operations Training",
      category: "Operations",
      description: "Coordinating with culinary team for service excellence",
      image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80",
      date: "2021",
      location: "Royal Caribbean International"
    },
    {
      id: 6,
      title: "Guest Service Excellence",
      category: "Service",
      description: "Demonstrating guest interaction techniques",
      image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=800&q=80",
      date: "2021",
      location: "Norwegian Cruise Line"
    },
    {
      id: 7,
      title: "Team Building Activity",
      category: "Leadership",
      description: "Leading team building exercise for F&B department",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      date: "2020",
      location: "Princess Cruises"
    },
    {
      id: 8,
      title: "Menu Planning Session",
      category: "Planning",
      description: "Collaborating on seasonal menu development",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      date: "2020",
      location: "Celebrity Cruises"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos', count: galleryImages.length },
    { id: 'Training', name: 'Training', count: galleryImages.filter(img => img.category === 'Training').length },
    { id: 'Operations', name: 'Operations', count: galleryImages.filter(img => img.category === 'Operations').length },
    { id: 'Service', name: 'Service', count: galleryImages.filter(img => img.category === 'Service').length },
    { id: 'Leadership', name: 'Leadership', count: galleryImages.filter(img => img.category === 'Leadership').length },
    { id: 'Achievements', name: 'Achievements', count: galleryImages.filter(img => img.category === 'Achievements').length }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const visibleImages = showAllPhotos 
    ? filteredImages 
    : filteredImages.slice(0, 4);

  const selectedImageData = selectedImage !== null 
    ? galleryImages.find(img => img.id === selectedImage) 
    : null;

  const handleNext = () => {
    if (selectedImage === null) return;
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex].id);
  };

  const handlePrev = () => {
    if (selectedImage === null) return;
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex].id);
  };

  if (!isClient) {
    return (
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Loading Gallery...</h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="gallery" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="bg-gold-600 text-white px-4 py-2 rounded-full text-sm font-medium tracking-wide">
              PROFESSIONAL GALLERY
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Portfolio Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional documentation of cruise hospitality expertise
            </p>
          </div>

          {/* Category Filter - Desktop */}
          <div className="hidden md:block mb-10">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setShowAllPhotos(false);
                  }}
                  className={`
                    px-5 py-2.5 rounded-lg font-medium transition-all duration-300
                    ${activeCategory === category.id
                      ? 'bg-gold-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Professional Photos</h3>
              <div className="text-sm text-gray-500">
                {filteredImages.length} photos
              </div>
            </div>

            <div className="space-y-4">
              {visibleImages.map((image) => (
                <div
                  key={image.id}
                  className="relative bg-white rounded-xl border border-gray-200 overflow-hidden"
                  onClick={() => setSelectedImage(image.id)}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={image.image}
                      alt={image.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-block px-2 py-1 bg-gold-100 text-gold-700 rounded text-xs font-medium">
                        {image.category}
                      </span>
                      <span className="text-xs text-gray-500">{image.date}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-base mb-1">
                      {image.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {image.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{image.location}</span>
                      <button className="text-xs text-blue-500 font-medium flex items-center">
                        Tap to view
                        <Eye className="w-3 h-3 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredImages.length > 4 && (
              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowAllPhotos(!showAllPhotos)}
                  className="bg-gold-600 hover:bg-gold-500 text-white font-medium px-6 py-3 rounded-lg transition duration-300"
                >
                  {showAllPhotos ? 'Show Less' : 'View More Photos'}
                </button>
              </div>
            )}
          </div>

          {/* Desktop View */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-xl border border-gray-200 cursor-pointer"
                  onClick={() => setSelectedImage(image.id)}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={image.image}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <div className="flex items-center mb-2">
                        <span className="inline-block px-2 py-1 bg-gold-600 text-white rounded text-xs font-medium mr-3">
                          {image.category}
                        </span>
                        <span className="text-xs text-white/80">{image.date}</span>
                      </div>
                      <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                      <p className="text-white/90 text-sm">{image.description}</p>
                    </div>
                  </div>

                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-2 py-1 bg-white/90 text-gray-800 rounded text-xs font-medium shadow-sm">
                      {image.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery Stats */}
          <div className="mt-12 md:mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Portfolio Summary
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white border border-gray-200 rounded-xl">
                <div className="text-2xl md:text-3xl font-bold text-gold-600 mb-2">{galleryImages.length}</div>
                <div className="text-gray-700 font-medium">Total Photos</div>
              </div>
              <div className="text-center p-4 bg-white border border-gray-200 rounded-xl">
                <div className="text-2xl md:text-3xl font-bold text-gold-600 mb-2">{categories.length - 1}</div>
                <div className="text-gray-700 font-medium">Categories</div>
              </div>
              <div className="text-center p-4 bg-white border border-gray-200 rounded-xl">
                <div className="text-2xl md:text-3xl font-bold text-gold-600 mb-2">4</div>
                <div className="text-gray-700 font-medium">Cruise Lines</div>
              </div>
              <div className="text-center p-4 bg-white border border-gray-200 rounded-xl">
                <div className="text-2xl md:text-3xl font-bold text-gold-600 mb-2">6</div>
                <div className="text-gray-700 font-medium">Years</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImageData && (
        <div className={`fixed inset-0 z-50 ${isFullscreen ? 'bg-black' : 'bg-black/95'} flex items-center justify-center p-4`}>
          <button
            onClick={() => {
              setSelectedImage(null);
              setIsFullscreen(false);
            }}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-10 p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-full"
          >
            <X className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>

          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="absolute top-4 left-4 md:top-6 md:left-6 z-10 p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-full"
          >
            <Maximize2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-10 p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-full"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-10 p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-full"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>

          <div className={`relative ${isFullscreen ? 'w-full h-full' : 'w-full max-w-4xl max-h-[80vh]'}`}>
            <img
              src={selectedImageData.image}
              alt={selectedImageData.title}
              className={`w-full h-full object-contain ${isFullscreen ? 'p-4' : 'rounded-lg'}`}
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 md:p-6 text-white">
              <div className="flex items-center justify-between mb-3">
                <div className="inline-block bg-gold-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {selectedImageData.category}
                </div>
                <div className="text-sm">
                  {selectedImageData.date} • {selectedImageData.location}
                </div>
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2">{selectedImageData.title}</h3>
              <p className="text-white/90 text-sm md:text-base">{selectedImageData.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;