import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LoadingSkeleton from '../Loading/LoadingSkeleton';
import { useGetProductByName } from './../../hooks/useAPI';

export default function Search({ showSearchModal, setShowSearchModal }) {
  const [searchResult, setSearchResult] = useState([]);
  const [keywords, setKeywords] = useState('');
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setShowSearchModal(false);
  }, [location]);

  const handleSearchInput = (e) => {
    setKeywords(e.target.value);
  };

  const handleSearch = async () => {
    setLoading(true);
    const data = await useGetProductByName(keywords);
    setTimeout(() => {
      setSearchResult(data);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    handleSearch();
  }, [keywords]);

  return (
    <div className={`${showSearchModal ? 'visible' : 'invisible'}`}>
      <div className='fixed top-0 left-0 right-0 bottom-0 w-full bg-gray-600 bg-opacity-60 z-40' onClick={() => setShowSearchModal(false)}>
        <div className={`absolute top-0 left-0 w-full h-full flex items-center justify-center px-10`}>
          <div
            className={`w-full relative max-w-[800px] bg-white z-50 rounded-xl py-10 px-8 transition-all duration-300 
            ${showSearchModal ? 'visible opacity-100 scale-100' : 'invisible opacity-0 scale-0'}`}
            onClick={(e) => e.stopPropagation()}>
            <input
              type='text'
              value={keywords}
              onChange={handleSearchInput}
              className='w-full py-2 px-4 rounded-md border border-gray-300 outline-none focus:shadow-lg mb-5'
              placeholder='Search products...'
            />
            <div className='relative'>
              <div className='flex items-center justify-between pb-2 border-b text-gray-400'>
                <div className='text-sm'>
                  <span>{searchResult.length}</span> Products
                </div>
                <Link to={'/shop'}>See All</Link>
              </div>
              {loading ? (
                <LoadingSkeleton isLoading={loading} />
              ) : (
                <ul className='my-5 max-h-[400px] overflow-y-auto'>
                  {searchResult.map((item, index) => (
                    <li key={index} className='w-full border p-3 rounded-lg hover:shadow-lg mb-3'>
                      <div className=' flex items-center'>
                        <Link to={'/product/' + item.id + '/' + item.slug}>
                          <div className='w-[120px] h-[120px] rounded-lg overflow-hidden'>
                            <img src={item.image} className='w-full h-full object-cover object-top' alt='' />
                          </div>
                        </Link>
                        <div className='flex flex-col justify-between lg:flex-row ml-4 lg:ml-8'>
                          <div className='flex flex-col gap-y-4 justify-around'>
                            <h3 className='text-sm font-medium line-clamp-2'>{item.title}</h3>
                            <p className='text-xl font-bold'>${item.price}</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
