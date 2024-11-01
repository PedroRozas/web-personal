import { Icon } from '@iconify/react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useServices } from '@/hooks/useServices';
import { Skeleton } from '@/components/ui/skeleton';

export default function Services() {
  const { services, loading, error } = useServices();

  if (error) {
    return (
      <div className="text-center text-red-500">
        Error al cargar los servicios: {error}
      </div>
    );
  }

  return (
    <section id="services" className="container py-24 sm:py-32">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Servicios
        </h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Soluciones completas para tu presencia digital
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <Skeleton className="h-6 w-2/3" />
                  <Skeleton className="h-4 w-full" />
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-6 w-24" />
                    <Skeleton className="h-10 w-24" />
                  </div>
                </CardContent>
              </Card>
            ))
          : services.map((service) => (
              <Card key={service.id}>
                <CardHeader>
                  <Icon
                    icon={`tabler:${service.icon}`}
                    className="h-8 w-8 text-primary mb-4"
                  />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">
                      Desde ${service.price}
                    </span>
                    <Button>Solicitar</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
      </div>
    </section>
  );
}