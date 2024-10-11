import { useState, useEffect } from 'react';
import New_Header from './New_Header';
import MobileMenu from './MobileMenu';

const MenuComponent: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // For desktop hover
  const [isMenuClicked, setIsMenuClicked] = useState(false); // For mobile tap

  let scrollTimeout: NodeJS.Timeout;
  let mobileMenuTimeout: NodeJS.Timeout;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);

      if (window.scrollY > 340) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        if (!isHovered && !isMenuClicked) {
          setIsScrolling(false);
        }
      }, 1500); // 1.5 seconds of inactivity to hide the menu
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isHovered, isMenuClicked]);

  const handleMobileMenuClick = () => {
    setIsMenuClicked(true);

    clearTimeout(mobileMenuTimeout); // Clear any previous timeout

    // Keep the mobile menu visible for 5 seconds after a click
    mobileMenuTimeout = setTimeout(() => {
      setIsMenuClicked(false);
    }, 1000); // 5 seconds of visibility after a tap
  };

  return (
    <>
      {/* Desktop menu */}
      <div
        className={`menu hidden fixed lg:flex items-center justify-center bottom-2 w-full z-[80] transition-opacity duration-300 ${
          isScrolled && (isScrolling || isHovered) ? 'opacity-100' : 'opacity-0 -z-50'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <New_Header />
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed bottom-5 z-[100] w-full justify-between items-center px-6 flex transition-opacity duration-300 ${
          isScrolled && (isScrolling || isMenuClicked) ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleMobileMenuClick} // Handle taps on the mobile menu
      >
        <MobileMenu />
      </div>
    </>
  );
};

export default MenuComponent;
