import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-blue-200 lg:bg-hero bg-contain bg-right-top bg-no-repeat h-[85vh] mt-8 shadow-md py-24" >
      <div className="container mx-auto flex justify-start h-full">
        <div className="flex flex-col justify-start items-start max-w-md">
          <div className="font-semibold flex flex-row items-center uppercase">
            <span className="w-10 h-[2px] bg-red-600 mr-3" ></span><h3>Nueva tendencia</h3>
          </div>
          <h1 className="text-[50px] lg:text-[60px] leading-[1.1] font-light mb-4" >
            OFERTA<br /> DE TEMPORADA CON ESTILO <br />
            <span className="font-semibold">MUJERES</span>
          </h1>
          <Link to={"/"} className="self-start uppercase font-semibold border-b-2 border-primary" >
            Descubrir más
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
