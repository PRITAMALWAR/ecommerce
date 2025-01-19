import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fallbackImage = "https://via.placeholder.com/300";  

  useEffect(() => {
    setLoading(true); 
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products.slice(0, 8));
        setLoading(false); 
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); 
      });
  }, []);

  return (
    <div>
      <div className="relative w-full h-96">
        <img
          src="https://static.vecteezy.com/system/resources/previews/011/871/820/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg"
          alt="Main Poster"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Products Section */}
      <div className="mt-8">
        <h1 className="text-3xl font-semibold mb-4">Featured Products</h1>

        {/* Loading state */}
        {loading ? (
          <div className="text-center py-8">
            <p>Loading products...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="border rounded-lg p-4 shadow-md">
                <img
                  src={product.thumbnail || fallbackImage} 
                  alt={product.title}
                  className="w-full h-48 object-contain mb-4"
                />
                <h2 className="text-xl font-semibold">{product.title}</h2>
                <p className="text-gray-600 text-sm">{product.description}</p>
                <p className="mt-2 text-lg font-bold">${product.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer /> 
    </div>
  );
};

export default Home;
