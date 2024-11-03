import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Services from '@/components/services';
import Testimonials from '@/components/testimonials';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
      <ThemeProvider defaultTheme="light" storageKey="pedro-rozas-theme">
        <div className="min-h-screen bg-background">
          <Navbar />
          <main>
            <Hero />
            <Services />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
          <Toaster />
        </div>
      </ThemeProvider>
  );
}



export default App;