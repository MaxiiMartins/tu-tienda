import { useContext, useEffect } from 'react';

import { ProductContext } from '../contexts/ProductContext';
import Product from './../components/Product';
import Hero from './../components/Hero';
import RedSocial from '../components/RedSocial';
import Opciones from '../components/Opciones';
import MasVisitado from '../components/MasVisitado';

const Home = () => {
  const { products } = useContext(ProductContext)
  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    }
  }, [])


  return (
    <div className='' >
      <Hero />
      <Opciones />
      <section className='py-20' >
        <div className='flex flex-col justify-center items-center gap-2'>
          <h2 className="text-2xl lg:text-3xl font-semibold flex flex-row items-center gap-2 uppercase">Descubre todos los productos</h2>
          <p className='text-gray-500 text-sm lg:text-lg'>Comprá sin moverte de tu casa</p>
        </div>
        <div className='container mx-auto my-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {products.map((item) => (<Product key={item.id} product={item} />))}
          </div>
        </div>
      </section>
      <RedSocial />
      <MasVisitado />
    </div>
  );
};

export default Home;
