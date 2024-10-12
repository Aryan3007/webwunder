import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowBigDown } from 'lucide-react';

const CustomLanguageDropdown2: React.FC = () => {
  const [changeLanguage, setChangeLanguage] = useState('en'); // Default language is 'en'
  const [isOpen, setIsOpen] = useState(false); // Dropdown open/close state

  // Load the saved language from localStorage on initial render
  useEffect(() => {
    const savedLanguage = localStorage.getItem('lang');
    if (savedLanguage) {
      setChangeLanguage(savedLanguage);
    }
  }, []);

  // Handle language change
  const handleLanguageChange = (lang: string) => {
    setChangeLanguage(lang); // Set the selected language
    localStorage.setItem('lang', lang); // Save to localStorage
    location.reload(); // Reload the page to apply language change
  };

  // Get language icon based on current language
  const getLanguageIcon = (language: string) => {
    return language === 'de' ? '/images/germany.png' : '/images/united-kingdom.png';
  };

  // Toggle dropdown
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Dropdown animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: 10, display: 'none' }, // Dropdown starts below the button when hidden
    visible: { opacity: 1, y: 0, display: 'block' }, // Dropdown moves to the correct position when visible
  };

  return (
    <div className="relative inline-block text-left">
      {/* Button to toggle dropdown */}
      <button
        className="flex items-center gap-2 bg-[#2a2a2a] lg:px-4 p-2 lg:p-3 rounded-full text-white"
        onClick={toggleDropdown}
      >
        <Image src={getLanguageIcon(changeLanguage)} alt="Language" width={25} height={25} />
        <span className='lg:flex hidden'>{changeLanguage === 'de' ? 'DE' : 'EN'}</span>
        <Image className='lg:flex hidden'
          src="/images/arrowdown.svg" // Replace this with the correct logo path (or import your image from the file if needed)
          alt="WebWunder Logo"
          width={10}
          height={10}
        />
      </button>

      {/* Dropdown menu with animation - positioned above */}
      <motion.div
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        variants={dropdownVariants}
        transition={{ duration: 0.3 }}
        className="absolute bottom-full mb-3 w-36 rounded-3xl shadow-lg bg-[#191919]" // Use "bottom-full" to position above, and add negative margin for spacing
      >
        <ul className="py-1">
          <li
            className="flex items-center gap-2 px-4 py-2 text-white cursor-pointer"
            onClick={() => handleLanguageChange('en')}
          >
            <Image src="/images/united-kingdom.png" alt="English" width={25} height={25} />
            <span>English</span>
          </li>
          <li
            className="flex items-center gap-2 px-4 py-2 text-white cursor-pointer"
            onClick={() => handleLanguageChange('de')}
          >
            <Image src="/images/germany.png" alt="German" width={25} height={25} />
            <span>German</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default CustomLanguageDropdown2;
