import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import products from '../db/data';
import Card from '../components/Card/Card';
import Products from '../components/Products/Products';
import { IoFilter } from 'react-icons/io5';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [showFilter, setShowFilter] = useState(false);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
  };

  function filterData(products, category, price) {
    let filteredProducts = products;

    if (category) {
      filteredProducts = filteredProducts.filter((p) => p.category.toLowerCase() === category);
    }

    if (price) {
      switch (price) {
        case '50':
          filteredProducts = filteredProducts.filter((p) => p.price <= 50);
          break;
        case '100':
          filteredProducts = filteredProducts.filter((p) => p.price <= 100 && p.price >= 50);
          break;
        case '150':
          filteredProducts = filteredProducts.filter((p) => p.price <= 150 && p.price >= 100);
          break;
        case '200':
          filteredProducts = filteredProducts.filter((p) => p.price >= 200);
          break;
      }
    }

    return filteredProducts.map(({ id, image, title, slug, price, reviews }) => (
      <Card key={id} id={id} image={image} title={title} slug={slug} price={price} reviews={reviews} />
    ));
  }

  const result = filterData(products, selectedCategory, selectedPrice);

  return (
    <div className='bg-white py-8'>
      <div className='container'>
        <div className='flex items-center gap-x-2 lg:hidden mb-5 cursor-pointer' onClick={() => setShowFilter(true)}>
          <IoFilter />
          Filter
        </div>
        <div className='grid grid-cols-12'>
          <div className='col-span-3'>
            <Sidebar
              showFilter={showFilter}
              setShowFilter={setShowFilter}
              handleCategoryChange={handleCategoryChange}
              handlePriceChange={handlePriceChange}
            />
          </div>
          <div className='col-span-12 lg:col-span-9 lg:border-l'>
            <Products result={result} />
          </div>
        </div>
      </div>
    </div>
  );
}
