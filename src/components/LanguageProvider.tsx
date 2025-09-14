import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'ro' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('ro');

  useEffect(() => {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('digitalsense-language') as Language;
    
    if (savedLanguage && (savedLanguage === 'ro' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    } else {
      // Simple geolocation-based language detection
      // In a real app, you'd use a proper geolocation service
      const userLanguage = navigator.language.toLowerCase();
      if (userLanguage.startsWith('ro')) {
        setLanguage('ro');
      } else {
        setLanguage('en');
      }
    }
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('digitalsense-language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
};