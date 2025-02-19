import React, { useContext, useEffect, useState } from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';
import SearchBar from '../../Components/SearchBar/SearchBar';
import axios from 'axios';
import Menu from '../../Components/Menu/Menu';
import { NavLink, useParams } from 'react-router-dom';
import { ProductsContext } from '../../Contexts/ProductsContext/ProductsContext';
import { StoresContext } from '../../Contexts/StoresContext/StoresContext';
import { UserContext } from '../../Contexts/UserContext/UserContext';
import SkeletonProductCard from '../../Components/SkeletonProductCard/SkeletonProductCard';

const CanteenCataloguePage = (props) => {
  const [products, setProducts] = useContext(ProductsContext);
  const [user, setUser] = useContext(UserContext);
  const [likedProducts, setLikedProducts] = useState([]);
  const [vegClicked, setVegClicked] = useState(false);
  const [eggClicked, setEggClicked] = useState(false);
  const [option, setOption] = useState('');
  const [stores, setStores] = useContext(StoresContext);
  const [loading, setLoading] = useState(true); // Add loading state

  const id = useParams().storeid;

  const getStoreById = (objectList, id) => objectList.find(store => store._id === id) || null;

  const store = getStoreById(stores, id);

  useEffect(() => {
    async function fetchData() {
      try {
        const url = `http://127.0.0.1:8002/store/product?storeId=${id}`;
        const res = await axios.get(url);
        setProducts(res.data);

        const productsurl = `http://127.0.0.1:8002/user/preferences/product?userId=${user._id}`;
        const rs = await axios.get(productsurl);
        setLikedProducts(rs.data);

        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('error', error);
        setLoading(false); // Set loading to false even if there's an error
      }
    }

    fetchData();
  }, [id, user._id, setProducts]);

  const handleVegClick = () => {
    setVegClicked(!vegClicked);
    if (!vegClicked) {
      setEggClicked(false);
      setOption('Veg');
    }
  };

  const handleEggClick = () => {
    setEggClicked(!eggClicked);
    if (!eggClicked) {
      setVegClicked(false);
      setOption('Egg');
    }
  };

  const storeElements = (product, index) => {
    const isLiked = likedProducts.includes(product._id);
    return (
      <div key={index}>
        <ProductCard product={product} like={isLiked} />
      </div>
    );
  };

  const productsElementsList = products.map((product, index) => storeElements(product, index));

  return (
    <div className='flex items-center justify-center'>
      <div className='w-[800px]'>
        <div className='md:hidden'>
          <NavLink to={'/'}>
            <img className='h-[30px] w-[35px] pl-2 pt-2' src="https://static.thenounproject.com/png/234369-200.png" alt="Back" />
          </NavLink>
        </div>
        <div className='shadow-3xl flex pb-2'>
          <div className='pl-[40px] pt-1 '>
            <img className='h-[75px]' src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg" alt="" />
          </div>
          <div>
            <div className='m-0'>
              <h3 className="text-[20px] font-semibold ml-3">{store.name}</h3>
            </div>
            <div className='m-0'>
              <p className="text-[18px] font-semibold ml-3">{store.location}</p>
            </div>
            <div className="m-0 flex justify-between items-center">
              <div className="flex items-center ml-3">
                <img className='h-[22px] w-[22px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSts1lZDcV1iBgY9SlMe94ge-vEvXKviWhTXCqXg5Ypg&s" alt="" />
                <span className="text-[19px] font-semibold">4.5</span>
              </div>
            </div>
          </div>
        </div>
        <Menu />
        <SearchBar  data={products}/>
        <div className='flex w-[200px] ml-9 mb-1 md:mt-0'>
          <div className='flex h-[25px] text-green-600'>
            <div className='flex justify-center ml-3 mr-2'>
              <button
                className={`h-[20px] w-[20px] rounded-[2px] border-2 border-green-600 m-auto ${vegClicked ? 'bg-green-600 border-2 border-green-600' : ''}`}
                onClick={handleVegClick}
              ></button>
            </div>
            <h1>Veg</h1>
          </div>
          <div className='flex h-[25px] text-red-600 mb-2'>
            <div className='flex justify-center ml-3 mr-2'>
              <button
                className={`h-[20px] w-[20px] rounded-[2px] border-2 border-red-700 m-auto ${eggClicked ? 'bg-red-600' : ''}`}
                onClick={handleEggClick}
              ></button>
            </div>
            <h1>Egg</h1>
          </div>
        </div>
        <div>
          <div className='overflow-auto flex-grow-2 h-screen bg-gray-100 py-1 transition-opacity duration-500 ease-in-out'>
            <div className='w-full flex items-center justify-center font-semibold text-[18px]'>
              <h1 className='m-auto'>--DOSA's--</h1>
            </div>
            {loading ? (
              // Render skeletons while loading
              Array.from({ length: 5 }).map((_, index) => (
                <SkeletonProductCard key={index} />
              ))
            ) : (
              // Render actual products once loaded
              productsElementsList
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanteenCataloguePage;
