import React from 'react';
import Image from 'next/image';

interface LanguageToggleProps {
  language: 'en' | 'de';
  onToggle: (value: string) => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, onToggle }) => {
  const isEnglish = language === 'en';

  const handleToggle = () => {
    onToggle(isEnglish ? 'german' : 'english');
  };

  const getLanguageIcon = (lang: 'de' | 'en') => {
    return lang === 'de' ? '/images/germany.png' : '/images/united-kingdom.png';
  };

  return (
    <div 
      className="relative w-24 px-4 h-10 bg-[#ffffff] rounded-full p-1 cursor-pointer"
      onClick={handleToggle}
    >
      <div
        className={`absolute w-8 h-8 rounded-full transition-transform duration-300 ease-in-out ${
          isEnglish ? '-translate-x-3 bg-red-500' : 'translate-x-11 bg-white'
        }`}
      >
        <Image
          src={getLanguageIcon(language)}
          alt={isEnglish ? 'English' : 'German'}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <div className={`absolute inset-0 flex items-center ${isEnglish ? 'justify-end' : 'justify-start'} px-3`}>
        <span className={`text-sm font-bold  ${isEnglish ? ' -translate-x-2' : ' translate-x-2'} text-black`}>
          {isEnglish ? 'EN' : 'DE'}
        </span>
      </div>
    </div>
  );
};

export default LanguageToggle;