import { useState } from 'react'

interface ArtWork {
  id: number
  title: string
  category: string
  imageUrl: string
  description: string
}

// Sample data - replace with your actual artwork
const artworks: ArtWork[] = [
  {
    id: 1,
    title: 'Abstract Composition',
    category: 'illustration',
    imageUrl: 'https://via.placeholder.com/400x500/000000/FFFFFF?text=Artwork+1',
    description: 'A stunning abstract piece'
  },
  {
    id: 2,
    title: 'Character Design',
    category: 'character',
    imageUrl: 'https://via.placeholder.com/400x500/FFFFFF/000000?text=Artwork+2',
    description: 'Original character artwork'
  },
  {
    id: 3,
    title: 'Digital Portrait',
    category: 'portrait',
    imageUrl: 'https://via.placeholder.com/400x500/3B82F6/FFFFFF?text=Artwork+3',
    description: 'Modern digital portrait'
  },
  {
    id: 4,
    title: 'Concept Art',
    category: 'concept',
    imageUrl: 'https://via.placeholder.com/400x500/000000/3B82F6?text=Artwork+4',
    description: 'Environment concept art'
  },
  {
    id: 5,
    title: 'Line Art Study',
    category: 'illustration',
    imageUrl: 'https://via.placeholder.com/400x500/FFFFFF/000000?text=Artwork+5',
    description: 'Detailed line work'
  },
  {
    id: 6,
    title: 'Fantasy Illustration',
    category: 'illustration',
    imageUrl: 'https://via.placeholder.com/400x500/1E40AF/FFFFFF?text=Artwork+6',
    description: 'Fantasy themed artwork'
  },
]

const Works = () => {
  const [filter, setFilter] = useState('all')
  const [selectedWork, setSelectedWork] = useState<ArtWork | null>(null)

  const categories = ['all', 'illustration', 'character', 'portrait', 'concept']

  const filteredWorks = filter === 'all' 
    ? artworks 
    : artworks.filter(work => work.category === filter)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-garnet text-6xl md:text-8xl mb-4">WORKS</h1>
          <p className="font-helvetica text-xl text-gray-300">
            A collection of my art & illustration projects
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-gray-100 border-b-2 border-black sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-wrap gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 font-helvetica font-bold uppercase tracking-wider transition-all
                  ${filter === cat 
                    ? 'bg-black text-white' 
                    : 'bg-white text-black border-2 border-black hover:bg-primary-blue hover:text-white hover:border-primary-blue'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map(work => (
            <div
              key={work.id}
              onClick={() => setSelectedWork(work)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden border-4 border-black shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={work.imageUrl}
                  alt={work.title}
                  className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary-blue opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <h3 className="font-garnet text-3xl mb-2">{work.title}</h3>
                    <p className="font-helvetica text-sm uppercase tracking-wider">{work.category}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-helvetica font-bold text-xl text-black">{work.title}</h3>
                <p className="font-helvetica text-gray-600 uppercase text-sm tracking-wider mt-1">
                  {work.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for selected work */}
      {selectedWork && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedWork(null)}
        >
          <div className="max-w-5xl w-full bg-white border-4 border-primary-blue" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <button
                onClick={() => setSelectedWork(null)}
                className="absolute top-4 right-4 bg-black text-white w-12 h-12 flex items-center justify-center font-bold text-2xl hover:bg-primary-blue transition-colors z-10"
              >
                ×
              </button>
              <img
                src={selectedWork.imageUrl}
                alt={selectedWork.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>
            <div className="p-8 border-t-4 border-black">
              <h2 className="font-garnet text-4xl mb-2">{selectedWork.title}</h2>
              <p className="font-helvetica text-gray-600 uppercase text-sm tracking-wider mb-4">
                {selectedWork.category}
              </p>
              <p className="font-helvetica text-lg text-gray-800">
                {selectedWork.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Works
