import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';
import { scrollToSection } from '@/lib/utils';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
      <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="w-full flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <a href="#" className="text-lg md:text-2xl font-bold">
              Pedro Rozas
            </a>
            <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="md:hidden"
                aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                  <Moon className="h-5 w-5" />
              ) : (
                  <Sun className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            <button
                onClick={() => handleNavClick('services')}
                className="text-base md:text-lg font-medium hover:text-primary transition-colors"
            >
              Servicios
            </button>
            <button
                onClick={() => handleNavClick('testimonials')}
                className="text-base md:text-lg font-medium hover:text-primary transition-colors"
            >
              Testimonios
            </button>
            <button
                onClick={() => handleNavClick('contact')}
                className="text-base md:text-lg font-medium hover:text-primary transition-colors"
            >
              Contacto
            </button>
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'light' ? (
                  <Moon className="h-5 w-5" />
              ) : (
                  <Sun className="h-5 w-5" />
              )}
            </Button>
            <Button onClick={() => handleNavClick('contact')} className="text-base md:text-lg">
              Solicitar Cotización
            </Button>
          </div>

          {/* Mobile menu */}
          {isOpen && (
              <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden transition-all duration-200">
                <div className="flex flex-col p-6 space-y-4 px-8">
                  <button
                      onClick={() => handleNavClick('services')}
                      className="text-base font-medium hover:text-primary transition-colors text-left"
                  >
                    Servicios
                  </button>
                  <button
                      onClick={() => handleNavClick('testimonials')}
                      className="text-base font-medium hover:text-primary transition-colors text-left"
                  >
                    Testimonios
                  </button>
                  <button
                      onClick={() => handleNavClick('contact')}
                      className="text-base font-medium hover:text-primary transition-colors text-left"
                  >
                    Contacto
                  </button>
                  <Button onClick={() => handleNavClick('contact')} className="w-full text-base">
                    Solicitar Cotización
                  </Button>
                </div>
              </div>
          )}
        </div>
      </nav>
  );
}
