import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import { useTestimonials } from '@/hooks/useTestimonials';
import { Skeleton } from '@/components/ui/skeleton';

export default function Testimonials() {
  const { testimonials, loading, error } = useTestimonials();
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const previous = () => {
    setCurrentIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  if (error) {
    return (
      <div className="text-center text-red-500">
        Error al cargar los testimonios: {error}
      </div>
    );
  }

  if (loading) {
    return (
      <section id="testimonials" className="container py-24 sm:py-32">
        <div className="flex flex-col items-center space-y-4 text-center">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-6 w-96" />
        </div>

        <div className="mt-16 flex justify-center">
          <Card className="max-w-2xl">
            <CardHeader>
              <Skeleton className="h-8 w-8 rounded-full" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-4 w-48 ml-auto" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Testimonios
        </h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Lo que dicen nuestros clientes
        </p>
      </div>

      <div className="mt-16 flex justify-center">
        <Card className="max-w-2xl">
          <CardHeader>
            <Icon
              icon="tabler:quote"
              className="h-8 w-8 text-primary"
            />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-xl italic">
                {testimonials[currentIndex]?.quote}
              </p>
              <CardDescription className="text-right">
                {testimonials[currentIndex]?.author} -{' '}
                {testimonials[currentIndex]?.company}
              </CardDescription>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <Button variant="outline" size="icon" onClick={previous}>
          <Icon icon="tabler:chevron-left" className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={next}>
          <Icon icon="tabler:chevron-right" className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}