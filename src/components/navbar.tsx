import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="text-xl font-bold">
          Pedro Rozas
        </a>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-sm font-medium hover:text-primary">
            Servicios
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium hover:text-primary"
          >
            Testimonios
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary">
            Contacto
          </a>
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
          <Button>Solicitar Cotización</Button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <a
                href="#services"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Servicios
              </a>
              <a
                href="#testimonials"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Testimonios
              </a>
              <a
                href="#contact"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </a>
              <Button onClick={() => setIsOpen(false)}>
                Solicitar Cotización
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}