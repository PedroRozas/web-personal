import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Pedro Rozas</h3>
            <p className="text-sm text-muted-foreground">
              Soluciones web profesionales para tu negocio
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-primary">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-primary">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li>Madrid, España</li>
              <li>+34 600 000 000</li>
              <li>pedro@rozas.dev</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Redes Sociales</h3>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Pedro Rozas. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}