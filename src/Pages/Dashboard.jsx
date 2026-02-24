import React, { useEffect, useState, useMemo } from "react";
import ProductCard from "../Components/Products/ProductCard";
import Loader from "../Components/Loader/Loader";


const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/vehicle")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching data");
        setLoading(false);
      });
  }, []);

  // Search + Sort combined
  const filteredProducts = useMemo(() => {
    let updated = [...products];

    // Search filter
    if (searchTerm) {
      updated = updated.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort
    if (sortOption === "low") {
      updated.sort((a, b) => a.price - b.price);
    } else if (sortOption === "high") {
      updated.sort((a, b) => b.price - a.price);
    }

    return updated;
  }, [products, searchTerm, sortOption]);

  if (loading) return <Loader />;
 

  return (
    <div className="min-h-screen p-6">
      {/* Search & Sort */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 rounded-lg text-black w-full md:w-1/3"
        />

        <select
          className="p-2 rounded-lg text-black"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort by Price</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;