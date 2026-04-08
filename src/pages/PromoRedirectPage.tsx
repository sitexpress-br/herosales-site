import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const PromoRedirectPage = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const base = "https://app.herosales.pro/";
    const params = searchParams.toString();
    window.location.href = params ? `${base}?${params}` : base;
  }, [searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-muted-foreground text-lg">Redirecionando...</p>
    </div>
  );
};

export default PromoRedirectPage;
