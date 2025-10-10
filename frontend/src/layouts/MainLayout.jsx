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

      {/* Products Section */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-[#002B5B] mb-6 text-center">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-[140px]">
                <h3 className="text-[#002B5B] font-semibold text-lg mb-2 truncate">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-3">Ksh {product.price.toLocaleString()}</p>
                <button className="bg-[#ec5b53] hover:bg-[#f36b63] text-white text-sm font-semibold py-2 rounded-md transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
