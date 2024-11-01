import { ArrowRight, Code, Globe, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="container py-24 sm:py-32">
      <div className="flex flex-col items-center text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Soluciones Web para{' '}
            <span className="text-primary">Emprendedores y Pequeñas Empresas</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Aumenta la visibilidad de tu marca con soluciones tecnológicas
            accesibles y profesionales
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="gap-2">
            Empezar Ahora <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Ver Portafolio
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
          <div className="flex flex-col items-center space-y-2 p-4 border rounded-lg">
            <Globe className="h-8 w-8 text-primary" />
            <h3 className="font-semibold">Diseño Web</h3>
            <p className="text-sm text-muted-foreground text-center">
              Sitios web modernos y responsivos
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 p-4 border rounded-lg">
            <Code className="h-8 w-8 text-primary" />
            <h3 className="font-semibold">Desarrollo</h3>
            <p className="text-sm text-muted-foreground text-center">
              Soluciones web personalizadas
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 p-4 border rounded-lg">
            <Rocket className="h-8 w-8 text-primary" />
            <h3 className="font-semibold">SEO</h3>
            <p className="text-sm text-muted-foreground text-center">
              Optimización para buscadores
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}