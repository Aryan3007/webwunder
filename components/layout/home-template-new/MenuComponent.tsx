import { useState, useEffect } from 'react';
import New_Header from './New_Header';
import MobileMenu from './MobileMenu';

const MenuComponent: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Function to check scroll position
    const handleScroll = () => {
      if (window.scrollY >340) { // You can adjust this threshold as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Desktop menu */}
      <div
        className={`menu hidden fixed md:flex items-center justify-center bottom-2 w-full z-[99] transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
      >
        <New_Header />
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed bottom-5 z-[99] w-full justify-between items-center px-6 flex transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
      >
        <MobileMenu />
      </div>
    </>
  );
};

export default MenuComponent;
