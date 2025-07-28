'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detectar seção ativa baseada no scroll
      const sections = ['sobre', 'servico', 'pacotes', 'beneficios', 'depoimentos', 'contato'];
      const isMobile = window.innerWidth < 768;
      const navbarHeight = isMobile ? 60 : 80;
      const scrollPosition = window.scrollY + navbarHeight; // apenas a altura da navbar
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviço', href: '#servico' },
    { name: 'Pacotes', href: '#pacotes' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      // Altura da navbar responsiva: menor no mobile
      const isMobile = window.innerWidth < 768;
      const navbarHeight = isMobile ? 60 : 80; // 60px no mobile, 80px no desktop
      const offset = navbarHeight; // apenas a altura da navbar
      
      const elementTop = (element as HTMLElement).offsetTop;
      const scrollPosition = elementTop - offset;
      
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white/90 backdrop-blur-sm md:bg-white/90 md:shadow-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex justify-center md:justify-between items-center py-2 md:py-4 relative">
          {/* Logo - Centered on mobile, left on desktop */}
          <div className="flex items-center justify-center md:justify-start flex-shrink-0 relative z-20">
            <Image 
              src="/logo_cristiane.png" 
              alt="Cristiane Alcântara - Nutricionista Funcional" 
              width={120}
              height={120}
              className="object-contain h-14"
            />
          </div>

          {/* Desktop Navigation - Right side */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`font-medium transition-all duration-300 relative ${
                    isActive 
                      ? 'text-purple-600 border-b-2 border-purple-400 pb-1' 
                      : 'text-gray-700 hover:text-purple-600'
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
            <button
              onClick={() => window.open('https://wa.me/5579991175352?text=Olá! Gostaria de agendar uma consulta com a Cristiane Alcântara.', '_blank')}
              className="bg-gradient-purple-rose text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              Agendar
            </button>
          </div>

          {/* Mobile Menu Button - Right side */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 flex-shrink-0 absolute right-0 z-[300]"
          >
            {isMobileMenuOpen ? (
              // Close button (X)
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger button
              <>
                <div className="w-6 h-0.5 transition-all duration-300 bg-gray-800"></div>
                <div className="w-6 h-0.5 my-1 transition-all duration-300 bg-gray-800"></div>
                <div className="w-6 h-0.5 transition-all duration-300 bg-gray-800"></div>
              </>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-[200]">
            {/* Click outside to close */}
            <div className="fixed inset-0" onClick={toggleMenu}></div>
            
            <div className="fixed inset-0" onClick={(e) => e.stopPropagation()}>
              <div className="flex flex-col h-full">
                {/* Conteúdo centralizado */}
                <div className="flex-1 mt-18 flex flex-col justify-center px-6 border-b-1 pb-8 pt-4 border-gray-50 bg-white/95 backdrop-blur-md shadow-lg rounded-b-2xl">
                  <nav className="space-y-6">
                    {navItems.map((item) => {
                      const isActive = activeSection === item.href.substring(1);
                      return (
                        <button
                          key={item.href}
                          onClick={() => scrollToSection(item.href)}
                          className={`block font-medium text-lg transition-all duration-300 text-center w-fit mx-auto ${
                            isActive 
                              ? 'text-purple-600 border-b-2 border-purple-400 pb-2' 
                              : 'text-gray-800 hover:text-purple-600'
                          }`}
                        >
                          {item.name}
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Overlay para gradiente apenas no mobile */}
      {/* {!isScrolled && !isMobileMenuOpen && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#c4cdd7]/90 to-[#d8dde8]/90 pointer-events-none md:hidden"></div>
      )} */}
    </nav>
  );
}