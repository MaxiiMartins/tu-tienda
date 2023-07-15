
const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto">
        <p className="text-white text-center">
          Copyright &copy; <span className="hover:opacity-75" ><a href="https://maxiimartins.vercel.app/" target="_blank" rel="noreferrer" >Tu tienda</a></span> ~ {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
  </footer>
  );
};

export default Footer;
