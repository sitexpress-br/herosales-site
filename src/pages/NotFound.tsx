import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { House, MagnifyingGlass } from "@phosphor-icons/react";
import { Header } from "@/components/sessoes/Header";
import { Footer } from "@/components/sessoes/Footer";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo";
import { PAGE_SEO } from "@/lib/seo-config";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title={PAGE_SEO.notFound.title}
        description={PAGE_SEO.notFound.description}
        noindex={true}
      />

      <Header />

      <main className="flex-1 flex items-center justify-center py-20">
        <div className="text-center px-6">
          <h1 className="font-display text-8xl md:text-9xl text-primary mb-4">404</h1>
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
            Página Não Encontrada
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            A página que você procura não existe, foi removida ou o endereço está incorreto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/">
                <House size={20} weight="bold" />
                Voltar para Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/blog">
                <MagnifyingGlass size={20} weight="bold" />
                Explorar Blog
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
