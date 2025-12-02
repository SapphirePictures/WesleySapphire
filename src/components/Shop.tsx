import { useState } from 'react'

interface Product {
  id: number
  title: string
  imageUrl: string
  price: number
  category: 'print' | 'original' | 'digital' | 'merchandise'
  description: string
  inStock: boolean
  size?: string
}

// Sample data - replace with your actual products
const products: Product[] = [
  {
    id: 1,
    title: 'Abstract Dreams - Print',
    imageUrl: 'https://via.placeholder.com/400x500/000000/FFFFFF?text=Print+1',
    price: 45.00,
    category: 'print',
    description: 'High-quality giclée print on archival paper',
    inStock: true,
    size: '12" × 16"'
  },
  {
    id: 2,
    title: 'Original Artwork - Mixed Media',
    imageUrl: 'https://via.placeholder.com/400x500/FFFFFF/000000?text=Original',
    price: 350.00,
    category: 'original',
    description: 'One-of-a-kind original artwork',
    inStock: true,
    size: '18" × 24"'
  },
  {
    id: 3,
    title: 'Digital Art Pack',
    imageUrl: 'https://via.placeholder.com/400x500/3B82F6/FFFFFF?text=Digital',
    price: 25.00,
    category: 'digital',
    description: 'High-resolution digital files for personal use',
    inStock: true
  },
  {
    id: 4,
    title: 'Limited Edition Print',
    imageUrl: 'https://via.placeholder.com/400x500/1E40AF/FFFFFF?text=Limited',
    price: 75.00,
    category: 'print',
    description: 'Signed and numbered, edition of 50',
    inStock: true,
    size: '16" × 20"'
  },
  {
    id: 5,
    title: 'Art Merchandise - Tote Bag',
    imageUrl: 'https://via.placeholder.com/400x500/000000/3B82F6?text=Merch',
    price: 20.00,
    category: 'merchandise',
    description: 'Canvas tote bag featuring original artwork',
    inStock: false
  },
  {
    id: 6,
    title: 'Character Study Print',
    imageUrl: 'https://via.placeholder.com/400x500/FFFFFF/000000?text=Print+2',
    price: 40.00,
    category: 'print',
    description: 'Museum-quality print on matte paper',
    inStock: true,
    size: '11" × 14"'
  },
]

const Shop = () => {
  const [filter, setFilter] = useState<'all' | Product['category']>('all')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [cart, setCart] = useState<number[]>([])

  const categories: ('all' | Product['category'])[] = ['all', 'print', 'original', 'digital', 'merchandise']

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(product => product.category === filter)

  const addToCart = (productId: number) => {
    setCart([...cart, productId])
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-garnet text-6xl md:text-8xl mb-4">SHOP</h1>
              <p className="font-helvetica text-xl text-gray-300">
                Original art, prints, and merchandise
              </p>
            </div>
            <div className="relative">
              <button className="bg-white text-black px-6 py-3 font-helvetica font-bold hover:bg-primary-blue hover:text-white transition-colors">
                CART ({cart.length})
              </button>
            </div>
          </div>
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

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="group">
              <div
                onClick={() => setSelectedProduct(product)}
                className="cursor-pointer relative overflow-hidden border-4 border-black shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                {!product.inStock && (
                  <div className="absolute top-4 right-4 bg-black text-white px-4 py-2 font-helvetica font-bold text-xs uppercase">
                    SOLD OUT
                  </div>
                )}
                <div className="absolute inset-0 bg-primary-blue opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-garnet text-3xl">VIEW DETAILS</p>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-helvetica font-bold text-xl text-black">{product.title}</h3>
                  <p className="font-garnet text-2xl text-black">${product.price}</p>
                </div>
                <p className="font-helvetica text-gray-600 text-sm uppercase tracking-wider">
                  {product.category} {product.size && `• ${product.size}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedProduct(null)}
        >
          <div className="max-w-5xl w-full bg-white border-4 border-primary-blue" onClick={(e) => e.stopPropagation()}>
            <div className="grid md:grid-cols-2">
              {/* Product Image */}
              <div className="relative">
                <img
                  src={selectedProduct.imageUrl}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                />
                {!selectedProduct.inStock && (
                  <div className="absolute top-4 left-4 bg-black text-white px-4 py-2 font-helvetica font-bold text-xs uppercase">
                    SOLD OUT
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-8 flex flex-col">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="self-end bg-black text-white w-12 h-12 flex items-center justify-center font-bold text-2xl hover:bg-primary-blue transition-colors mb-4"
                >
                  ×
                </button>

                <h2 className="font-garnet text-4xl mb-2">{selectedProduct.title}</h2>
                <p className="font-helvetica text-gray-600 uppercase text-sm tracking-wider mb-6">
                  {selectedProduct.category} {selectedProduct.size && `• ${selectedProduct.size}`}
                </p>

                <p className="font-helvetica text-lg text-gray-800 mb-8 flex-1">
                  {selectedProduct.description}
                </p>

                <div className="border-t-2 border-black pt-6">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-garnet text-5xl">${selectedProduct.price}</span>
                    {selectedProduct.inStock ? (
                      <span className="text-primary-blue font-helvetica font-bold uppercase text-sm">
                        ✓ In Stock
                      </span>
                    ) : (
                      <span className="text-gray-500 font-helvetica font-bold uppercase text-sm">
                        Out of Stock
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      if (selectedProduct.inStock) {
                        addToCart(selectedProduct.id)
                        setSelectedProduct(null)
                      }
                    }}
                    disabled={!selectedProduct.inStock}
                    className="w-full bg-black text-white py-4 font-helvetica font-bold text-lg uppercase tracking-wider hover:bg-primary-blue transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    {selectedProduct.inStock ? 'ADD TO CART' : 'OUT OF STOCK'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart notification */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 bg-primary-blue text-white px-6 py-4 shadow-2xl border-2 border-black z-50">
          <p className="font-helvetica font-bold">
            {cart.length} item{cart.length > 1 ? 's' : ''} in cart
          </p>
        </div>
      )}
    </div>
  )
}

export default Shop
