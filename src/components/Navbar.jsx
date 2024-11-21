const Navbar = () => {
    return (
      <nav className="bg-background sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text-black font-ginebra">S.P</h1>
          <ul className="flex space-x-6">
            <li><a href="#home" className="text-black font-bold hover:text-gray-300">Home</a></li>
            <li><a href="#about" className="text-black  font-bold hover:text-gray-300">About</a></li>
            <li><a href="#skills" className="text-black font-bold hover:text-gray-300">Skills</a></li>
            <li><a href="#portfolio" className="text-black font-bold hover:text-gray-300">Portfolio</a></li>
            <li><a href="#contact" className="text-black font-bold hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  };
  
  
  

export default Navbar;  