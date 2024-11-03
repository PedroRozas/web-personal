import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabase';

const formSchema = z.object({
    name: z.string().min(2, 'El nombre es muy corto'),
    email: z.string().email('Email inválido'),
    phone: z.string().min(6, 'Teléfono inválido'),
    service: z.string().min(1, 'Selecciona un servicio'),
    message: z.string().min(10, 'El mensaje es muy corto'),
});

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            service: '',
            message: '',
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        try {
            const { error } = await supabase.from('contacts').insert([values]);

            if (error) throw error;

            toast.success('Mensaje enviado correctamente');
            form.reset();
        } catch (error) {
            toast.error('Error al enviar el mensaje');
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section id="contact" className="w-full py-24 sm:py-32 px-4 lg:px-8">
            <div className="flex flex-col items-center space-y-4 text-center animate-slide-up max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Contacto
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                    ¿Listo para empezar? Contáctame para discutir tu proyecto
                </p>
            </div>

            <div className="mx-auto max-w-[600px] mt-16">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8 stagger-animation"
                    >
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nombre</FormLabel>
                                    <FormControl>
                                        <div className="relative group">
                                            <Icon
                                                icon="tabler:user"
                                                className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary"
                                            />
                                            <Input
                                                placeholder="Tu nombre"
                                                className="pl-10 transition-all hover:border-primary focus:border-primary"
                                                {...field}
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <div className="relative group">
                                            <Icon
                                                icon="tabler:mail"
                                                className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary"
                                            />
                                            <Input
                                                type="email"
                                                placeholder="tu@email.com"
                                                className="pl-10 transition-all hover:border-primary focus:border-primary"
                                                {...field}
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Teléfono</FormLabel>
                                    <FormControl>
                                        <div className="relative group">
                                            <Icon
                                                icon="tabler:phone"
                                                className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary"
                                            />
                                            <Input
                                                placeholder="+56912345678"
                                                className="pl-10 transition-all hover:border-primary focus:border-primary"
                                                {...field}
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="service"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Servicio</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger className="transition-all hover:border-primary focus:border-primary">
                                                <SelectValue placeholder="Selecciona un servicio" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="web-design">Diseño Web</SelectItem>
                                            <SelectItem value="web-development">
                                                Desarrollo Web
                                            </SelectItem>
                                            <SelectItem value="seo">SEO</SelectItem>
                                            <SelectItem value="social-media">
                                                Redes Sociales
                                            </SelectItem>
                                            <SelectItem value="maintenance">
                                                Mantenimiento
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mensaje</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Cuéntame sobre tu proyecto"
                                            className="min-h-[120px] transition-all hover:border-primary focus:border-primary"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            className="w-full transition-transform hover:scale-105"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <Icon
                                        icon="tabler:loader-2"
                                        className="mr-2 h-4 w-4 animate-spin"
                                    />
                                    Enviando...
                                </>
                            ) : (
                                'Enviar Mensaje'
                            )}
                        </Button>
                    </form>
                </Form>
            </div>
        </section>
    );
}
