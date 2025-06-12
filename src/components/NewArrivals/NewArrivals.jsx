import React, { useState, useEffect } from 'react';
import './NewArrivals.css';


const NewArrivals = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedCampaign, setSelectedCampaign] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const lowerSearch = searchTerm.toLowerCase();

    const filtered = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(lowerSearch);
      const matchesMin = minPrice === '' || product.price >= parseFloat(minPrice);
      const matchesMax = maxPrice === '' || product.price <= parseFloat(maxPrice);
      const matchesBrand = selectedBrand === '' || product.brand === selectedBrand;
      const matchesColor = selectedColor === '' || product.color === selectedColor;
      const matchesSize = selectedSize === '' || product.size.toString() === selectedSize;
      const matchesCampaign = selectedCampaign === '' || product.campaign === selectedCampaign;
      const matchesArea = selectedArea === '' || product.area === selectedArea;

      return (
        matchesSearch &&
        matchesMin &&
        matchesMax &&
        matchesBrand &&
        matchesColor &&
        matchesSize &&
        matchesCampaign &&
        matchesArea
      );
    });

    setFilteredProducts(filtered);
  }, [
    searchTerm,
    minPrice,
    maxPrice,
    selectedBrand,
    selectedColor,
    selectedSize,
    selectedCampaign,
    selectedArea,
    products,
  ]);

  return (
    <div className="new-arrivals">
      <h2>New Arrivals</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '8px', width: '60%', margin: '10px 0' }}
      />

      {/* Price Filter */}
      <div style={{ margin: '10px 0' }}>
        <input
          type="number"
          placeholder="Min price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          style={{ marginRight: '10px', padding: '6px' }}
        />
        <input
          type="number"
          placeholder="Max price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          style={{ padding: '6px' }}
        />
      </div>

      {/* Dropdown Filters */}
      <div style={{ margin: '10px 0', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        <select value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)} style={{ padding: '6px' }}>
          <option value="">All Brands</option>
          <option value="Nike">Nike</option>
          <option value="Adidas">Adidas</option>
          <option value="Puma">Puma</option>
          <option value="Reebok">Reebok</option>
        </select>

        <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)} style={{ padding: '6px' }}>
          <option value="">All Colors</option>
          <option value="Black">Black</option>
          <option value="White">White</option>
          <option value="Blue">Blue</option>
          <option value="Red">Red</option>
          <option value="Green">Green</option>
        </select>

        <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)} style={{ padding: '6px' }}>
          <option value="">All Sizes</option>
          <option value="38">38</option>
          <option value="39">39</option>
          <option value="40">40</option>
          <option value="41">41</option>
          <option value="42">42</option>
          <option value="43">43</option>
          <option value="44">44</option>
          <option value="45">45</option>
        </select>

        <select value={selectedCampaign} onChange={(e) => setSelectedCampaign(e.target.value)} style={{ padding: '6px' }}>
          <option value="">All Campaigns</option>
          <option value="Black Friday">Black Friday</option>
          <option value="Winter Sale">Winter Sale</option>
          <option value="Back to School">Back to School</option>
          <option value="Featured">Featured</option>
        </select>

        <select value={selectedArea} onChange={(e) => setSelectedArea(e.target.value)} style={{ padding: '6px' }}>
          <option value="">All Areas</option>
          <option value="Running">Running</option>
          <option value="Casual">Casual</option>
          <option value="Training">Training</option>
          <option value="Basketball">Basketball</option>
          <option value="Football">Football</option>
        </select>
      </div>

      {/* Product List */}
      <div className="product-container">
        {filteredProducts.map((product, index) => (
          <div key={index} className="product-box">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
