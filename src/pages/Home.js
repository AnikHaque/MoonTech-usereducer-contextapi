import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";


const Home = () => {
 const {data} = useProducts();
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
    {
      data.map(product => <ProductCard product={product} />)
    }
    </div>
  );
};

export default Home;

