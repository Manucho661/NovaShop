import Header from "../components/MainLayout/Header";
import Footer from "../components/MainLayout/Footer";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 3500,
    image: "https://via.placeholder.com/300x300?text=Headphones",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 4200,
    image: "https://via.placeholder.com/300x300?text=Smart+Watch",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 1800,
    image: "https://via.placeholder.com/300x300?text=Gaming+Mouse",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 2500,
    image: "https://via.placeholder.com/300x300?text=Speaker",
  },
  {
    id: 5,
    name: "Smartphone",
    price: 28999,
    image: "https://via.placeholder.com/300x300?text=Smartphone",
  },
  {
    id: 6,
    name: "Laptop Bag",
    price: 1500,
    image: "https://via.placeholder.com/300x300?text=Laptop+Bag",
  },
];

const MainLayout = () => {
  return (
    <div className="app-wrapper bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">New Collection</h2>
          <p class="text-xl mb-6">Discover the latest tech essentials</p>
          <button class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Shop Now</button>
        </div>
      </div>
      {/* Products Section */}
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="flex justify-between items-center mb-8">
          <h3 class="text-2xl font-bold text-gray-900">Featured Products</h3>
          <select class="border border-gray-300 rounded-lg px-4 py-2 text-gray-700">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* <!-- Product 1 --> */}
          <div class="product-card bg-white rounded-xl shadow-md overflow-hidden">
            <div class="relative bg-gray-100 h-64 flex items-center justify-center">
              <div class="text-6xl">🎧</div>
              <span class="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full">-20%</span>
            </div>
            <div class="p-4">
              <h4 class="font-semibold text-gray-900 mb-1">Premium Wireless Headphones</h4>
              <p class="text-sm text-gray-500 mb-2">Active noise cancellation</p>
              <div class="flex items-center mb-3">
                <span class="text-yellow-400">★★★★★</span>
                <span class="text-sm text-gray-600 ml-2">(127)</span>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-lg font-bold text-gray-900">$199</span>
                  <span class="text-sm text-gray-400 line-through ml-2">$249</span>
                </div>
                <button class="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Product 2 --> */}
          <div class="product-card bg-white rounded-xl shadow-md overflow-hidden">
            <div class="relative bg-gray-100 h-64 flex items-center justify-center">
              <div class="text-6xl">⌚</div>
              <span class="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full">NEW</span>
            </div>
            <div class="p-4">
              <h4 class="font-semibold text-gray-900 mb-1">Smart Watch Pro</h4>
              <p class="text-sm text-gray-500 mb-2">Fitness & health tracking</p>
              <div class="flex items-center mb-3">
                <span class="text-yellow-400">★★★★☆</span>
                <span class="text-sm text-gray-600 ml-2">(89)</span>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-lg font-bold text-gray-900">$349</span>
                </div>
                <button class="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Product 3 --> */}
          <div class="product-card bg-white rounded-xl shadow-md overflow-hidden">
            <div class="relative bg-gray-100 h-64 flex items-center justify-center">
              <div class="text-6xl">📱</div>
            </div>
            <div class="p-4">
              <h4 class="font-semibold text-gray-900 mb-1">Smartphone X Pro</h4>
              <p class="text-sm text-gray-500 mb-2">256GB, 5G enabled</p>
              <div class="flex items-center mb-3">
                <span class="text-yellow-400">★★★★★</span>
                <span class="text-sm text-gray-600 ml-2">(243)</span>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-lg font-bold text-gray-900">$899</span>
                </div>
                <button class="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Product 4 --> */}
          <div class="product-card bg-white rounded-xl shadow-md overflow-hidden">
            <div class="relative bg-gray-100 h-64 flex items-center justify-center">
              <div class="text-6xl">💻</div>
              <span class="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full">-15%</span>
            </div>
            <div class="p-4">
              <h4 class="font-semibold text-gray-900 mb-1">Ultra Laptop 15"</h4>
              <p class="text-sm text-gray-500 mb-2">16GB RAM, 512GB SSD</p>
              <div class="flex items-center mb-3">
                <span class="text-yellow-400">★★★★★</span>
                <span class="text-sm text-gray-600 ml-2">(156)</span>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-lg font-bold text-gray-900">$1,299</span>
                  <span class="text-sm text-gray-400 line-through ml-2">$1,529</span>
                </div>
                <button class="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Product 5 --> */}
          <div class="product-card bg-white rounded-xl shadow-md overflow-hidden">
            <div class="relative bg-gray-100 h-64 flex items-center justify-center">
              <div class="text-6xl">📷</div>
            </div>
            <div class="p-4">
              <h4 class="font-semibold text-gray-900 mb-1">Mirrorless Camera</h4>
              <p class="text-sm text-gray-500 mb-2">24MP, 4K video</p>
              <div class="flex items-center mb-3">
                <span class="text-yellow-400">★★★★★</span>
                <span class="text-sm text-gray-600 ml-2">(98)</span>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-lg font-bold text-gray-900">$1,499</span>
                </div>
                <button class="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Product 6 --> */}
          <div class="product-card bg-white rounded-xl shadow-md overflow-hidden">
            <div class="relative bg-gray-100 h-64 flex items-center justify-center">
              <div class="text-6xl">🎮</div>
              <span class="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full">NEW</span>
            </div>
            <div class="p-4">
              <h4 class="font-semibold text-gray-900 mb-1">Gaming Console Pro</h4>
              <p class="text-sm text-gray-500 mb-2">Next-gen 8K gaming</p>
              <div class="flex items-center mb-3">
                <span class="text-yellow-400">★★★★★</span>
                <span class="text-sm text-gray-600 ml-2">(312)</span>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-lg font-bold text-gray-900">$499</span>
                </div>
                <button class="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Product 7 --> */}
          <div class="product-card bg-white rounded-xl shadow-md overflow-hidden">
            <div class="relative bg-gray-100 h-64 flex items-center justify-center">
              <div class="text-6xl">🔊</div>
            </div>
            <div class="p-4">
              <h4 class="font-semibold text-gray-900 mb-1">Smart Speaker</h4>
              <p class="text-sm text-gray-500 mb-2">Voice assistant enabled</p>
              <div class="flex items-center mb-3">
                <span class="text-yellow-400">★★★★☆</span>
                <span class="text-sm text-gray-600 ml-2">(167)</span>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-lg font-bold text-gray-900">$129</span>
                </div>
                <button class="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Product 8 --> */}
          <div class="product-card bg-white rounded-xl shadow-md overflow-hidden">
            <div class="relative bg-gray-100 h-64 flex items-center justify-center">
              <div class="text-6xl">🖥️</div>
              <span class="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full">-25%</span>
            </div>
            <div class="p-4">
              <h4 class="font-semibold text-gray-900 mb-1">4K Monitor 27"</h4>
              <p class="text-sm text-gray-500 mb-2">HDR, 144Hz refresh</p>
              <div class="flex items-center mb-3">
                <span class="text-yellow-400">★★★★★</span>
                <span class="text-sm text-gray-600 ml-2">(201)</span>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-lg font-bold text-gray-900">$449</span>
                  <span class="text-sm text-gray-400 line-through ml-2">$599</span>
                </div>
                <button class="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
