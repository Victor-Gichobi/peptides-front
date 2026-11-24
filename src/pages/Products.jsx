import { useState } from "react";
import { FaSearch, FaArrowRight } from "react-icons/fa";

function Products() {

  const [search, setSearch] = useState("");

  const categories = [
    "All Products",
    "Research Peptides",
    "Custom Synthesis",
    "Laboratory Services"
  ];

  const [activeCategory, setActiveCategory] = useState("All Products");

  const products = [
    {
      id: 1,
      name: "Research Peptide Portfolio",
      category: "Research Peptides",
      description: "Explore our research-oriented peptide portfolio and technical documentation.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
    },
    {
      id: 2,
      name: "Custom Peptide Synthesis",
      category: "Custom Synthesis",
      description: "Submit an enquiry for custom peptide synthesis services.",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67",
    },
    {
      id: 3,
      name: "Analytical Laboratory Services",
      category: "Laboratory Services",
      description: "Explore analytical documentation and laboratory service capabilities.",
      image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120",
    }
  ];

  const filteredProducts = products.filter((product) => {

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "All Products" ||
      product.category === activeCategory;

    return matchesSearch && matchesCategory;

  });

  return (

    <div className="products-page">

      <section className="products-hero">
        <div className="container">

          <span>OUR CATALOGUE</span>

          <h1>Explore Our Solutions</h1>

          <p>
            Discover peptide research products and
            specialized synthesis services.
          </p>

        </div>
      </section>


      <section className="container py-5">

        <div className="search-box">

          <FaSearch />

          <input
            type="text"
            placeholder="Search products and services..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>


        <div className="category-buttons">

          {categories.map((category) => (

            <button
              key={category}
              className={
                activeCategory === category
                  ? "category-btn active"
                  : "category-btn"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>

          ))}

        </div>


        <div className="row g-4">

          {filteredProducts.map((product) => (

            <div className="col-md-6 col-lg-4" key={product.id}>

              <div className="product-card">

                <img
                  src={product.image}
                  alt={product.name}
                />

                <div className="product-content">

                  <span className="product-category">
                    {product.category}
                  </span>

                  <h4>{product.name}</h4>

                  <p>{product.description}</p>

                  <button className="product-link">
                    View Information <FaArrowRight />
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

        {filteredProducts.length === 0 && (

          <div className="text-center py-5">
            <h4>No matching results found.</h4>
          </div>

        )}

      </section>

    </div>

  );

}

export default Products;