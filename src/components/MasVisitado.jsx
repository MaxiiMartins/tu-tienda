import { useContext } from "react"
import { ProductContext } from "../contexts/ProductContext"
import Product from "./Product"
import { BsFire } from "react-icons/bs"

const MasVisitado = () => {
    const { products } = useContext(ProductContext)


    return (
        <section className='container mx-auto flex flex-col justify-center items-center py-16 gap-10'>

            <h2 className="text-3xl font-semibold flex flex-row items-center gap-2">LOS MÁS VISITADOS  <BsFire className="text-xl text-orange-600" /></h2>
            <div className='hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm md:max-w-none md:mx-0 align-middle'>
                {
                    products.slice(0, 3).map((item, i) => (
                        <div className="relative" key={item.id}>
                            <span className="absolute text-2xl bottom-32 bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-400 align-middle font-semibold left-0 px-4 py-0.5 flex flex-row justify-center items-center gap-1 text-white" >
                                {i + 1}
                                <BsFire className="text-lg " />
                            </span>
                            <Product product={item} />
                        </div>
                    ))
                }
            </div>
            <div className="flex justify-center items-center mx-auto md:hidden max-w-sm" >
                <div className="relative">
                    <span className="absolute text-2xl bottom-32 bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-400 align-middle font-semibold left-0 px-4 py-0.5 flex flex-row justify-center items-center gap-1 text-white" >
                        1
                        <BsFire className="text-lg" />
                    </span>
                    <Product product={products[0]} />
                </div>
            </div>
        </section>
    )
}

export default MasVisitado