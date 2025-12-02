import { useState } from 'react'

interface Comic {
  id: number
  title: string
  coverUrl: string
  pages: string[]
  description: string
  releaseDate: string
  status: 'ongoing' | 'completed'
}

// Sample data - replace with your actual comics
const comics: Comic[] = [
  {
    id: 1,
    title: 'Chapter 1: The Beginning',
    coverUrl: 'https://via.placeholder.com/400x600/000000/FFFFFF?text=Comic+1',
    pages: [
      'https://via.placeholder.com/800x1200/000000/FFFFFF?text=Page+1',
      'https://via.placeholder.com/800x1200/FFFFFF/000000?text=Page+2',
      'https://via.placeholder.com/800x1200/3B82F6/FFFFFF?text=Page+3',
    ],
    description: 'The story begins with an unexpected encounter...',
    releaseDate: '2025-01',
    status: 'completed'
  },
  {
    id: 2,
    title: 'Chapter 2: Rising Action',
    coverUrl: 'https://via.placeholder.com/400x600/FFFFFF/000000?text=Comic+2',
    pages: [
      'https://via.placeholder.com/800x1200/FFFFFF/000000?text=Page+1',
      'https://via.placeholder.com/800x1200/000000/FFFFFF?text=Page+2',
    ],
    description: 'The adventure continues as our hero faces new challenges...',
    releaseDate: '2025-02',
    status: 'ongoing'
  },
  {
    id: 3,
    title: 'Special: Side Story',
    coverUrl: 'https://via.placeholder.com/400x600/3B82F6/FFFFFF?text=Comic+3',
    pages: [
      'https://via.placeholder.com/800x1200/3B82F6/FFFFFF?text=Page+1',
      'https://via.placeholder.com/800x1200/1E40AF/FFFFFF?text=Page+2',
    ],
    description: 'A special side story exploring the past...',
    releaseDate: '2025-03',
    status: 'completed'
  },
]

const Comics = () => {
  const [selectedComic, setSelectedComic] = useState<Comic | null>(null)
  const [currentPage, setCurrentPage] = useState(0)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-garnet text-6xl md:text-8xl mb-4">COMICS</h1>
          <p className="font-helvetica text-xl text-gray-300">
            Original sequential art & storytelling
          </p>
        </div>
      </div>

      {/* Comics Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {comics.map(comic => (
            <div key={comic.id} className="group">
              <div
                onClick={() => {
                  setSelectedComic(comic)
                  setCurrentPage(0)
                }}
                className="cursor-pointer"
              >
                <div className="relative overflow-hidden border-4 border-black shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img
                    src={comic.coverUrl}
                    alt={comic.title}
                    className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-4 py-2 font-helvetica font-bold text-xs uppercase ${
                      comic.status === 'ongoing' 
                        ? 'bg-primary-blue text-white' 
                        : 'bg-white text-black border-2 border-black'
                    }`}>
                      {comic.status}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-primary-blue opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-6">
                      <p className="font-garnet text-4xl mb-4">READ NOW</p>
                      <p className="font-helvetica text-sm">{comic.pages.length} Pages</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="font-garnet text-3xl text-black mb-2">{comic.title}</h3>
                <p className="font-helvetica text-gray-600 mb-3">{comic.description}</p>
                <p className="font-helvetica text-sm text-gray-500 uppercase tracking-wider">
                  Released: {comic.releaseDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comic Reader Modal */}
      {selectedComic && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col">
          {/* Reader Header */}
          <div className="bg-white border-b-4 border-primary-blue px-6 py-4 flex items-center justify-between">
            <div>
              <h2 className="font-garnet text-2xl md:text-3xl">{selectedComic.title}</h2>
              <p className="font-helvetica text-sm text-gray-600">
                Page {currentPage + 1} of {selectedComic.pages.length}
              </p>
            </div>
            <button
              onClick={() => setSelectedComic(null)}
              className="bg-black text-white w-12 h-12 flex items-center justify-center font-bold text-2xl hover:bg-primary-blue transition-colors"
            >
              ×
            </button>
          </div>

          {/* Comic Page Display */}
          <div className="flex-1 flex items-center justify-center p-6 overflow-auto">
            <img
              src={selectedComic.pages[currentPage]}
              alt={`Page ${currentPage + 1}`}
              className="max-w-full max-h-full object-contain shadow-2xl border-4 border-white"
            />
          </div>

          {/* Navigation Controls */}
          <div className="bg-white border-t-4 border-primary-blue px-6 py-6">
            <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
              <button
                onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                className="px-8 py-3 bg-black text-white font-helvetica font-bold uppercase disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary-blue transition-colors"
              >
                ← Previous
              </button>

              {/* Page Indicators */}
              <div className="flex gap-2">
                {selectedComic.pages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPage(idx)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      idx === currentPage 
                        ? 'bg-primary-blue' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrentPage(Math.min(selectedComic.pages.length - 1, currentPage + 1))}
                disabled={currentPage === selectedComic.pages.length - 1}
                className="px-8 py-3 bg-black text-white font-helvetica font-bold uppercase disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary-blue transition-colors"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Comics
