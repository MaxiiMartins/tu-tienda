import { useContext } from 'react';
import { Link, useParams } from "react-router-dom"
import { ProductContext } from './../contexts/ProductContext';
import { CartContext } from '../contexts/CartContext';
import { parseCurrency } from '../utils';
import { IoMdArrowBack } from 'react-icons/io';

const ProductDetails = () => {
  const { products } = useContext(ProductContext)
  const { agregarAlCarrito } = useContext(CartContext)

  const { id } = useParams()
  const product = products.find((item) => item.id === parseInt(id))

  if (!product) return null

  return (
    <section className='py-40 h-full flex items-center'>
      <div className='container mx-auto relative'>
        <Link to={"/"} className='absolute -top-10 left-0 mx-4 lg:mx-2 flex group flex-row justify-center items-center gap-1 uppercase text-xs font-semibold'>
        <IoMdArrowBack className="text-2xl relative group-hover:right-1 transition-all duration-300 " />
          atras
        </Link>
        <div className="flex flex-col lg:flex-row items-center">
          <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0' ><img className='max-w-[150px] md:max-w-[200px] lg:max-w-[250px]' src={product.image} alt={product.title} /></div>
          <div className='flex-1 text-center lg:text-left'>
            <h1 className='text-[25px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>{product.title}</h1>
            <div>
              <p className='text-xl text-price font-medium mb-6'>{parseCurrency(product.price)}</p>
              <p className='mb-8'>{product.description}</p>
              <button onClick={() => agregarAlCarrito(product)} className="bg-price py-4 px-8 text-white"> Agregar al carrito </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
