import { Check } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const defaultBenefits = [
  "Site profissional completo",
  "E-mail corporativo",
  "Domínio personalizado",
  "Certificado SSL",
  "Suporte dedicado",
  "Otimizado para Google",
  "Design responsivo",
];

interface LeadCaptureDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  price?: string;
  priceSuffix?: string;
  benefits?: string[];
  formUrl?: string;
  formId?: string;
}

export function LeadCaptureDialog({
  open,
  onOpenChange,
  title = "Site + Email Profissional",
  price = "R$97",
  priceSuffix = "/mês",
  benefits = defaultBenefits,
  formUrl = "https://api.leadconnectorhq.com/widget/form/0Vh9BPHKWDw8gkreQkrN",
  formId = "0Vh9BPHKWDw8gkreQkrN",
}: LeadCaptureDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg w-[calc(100vw-2rem)] sm:w-full p-0 overflow-hidden max-h-[90vh] overflow-y-auto border border-white rounded-xl bg-secondary">
        <DialogTitle className="sr-only">Solicite seu site</DialogTitle>
        <div className="px-4 pt-5 pb-4 sm:px-8 sm:pt-8 sm:pb-5">
          <h3 className="font-display text-xl sm:text-2xl text-white text-center">
            {title}
          </h3>
          <p className="text-center mt-2">
            <span className="text-primary font-display font-bold text-2xl sm:text-3xl">{price}</span>
            <span className="text-white/50 text-sm">{priceSuffix}</span>
          </p>
          <ul className="hidden sm:grid grid-cols-2 gap-3 mt-5">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-2 text-white/70 text-xs">
                <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                {b}
              </li>
            ))}
          </ul>
          <div className="hidden sm:block h-px bg-white/15 mt-5" />
        </div>
        <div className="p-0">
          <iframe
            src={formUrl}
            className="w-full border-none h-[350px] sm:h-[500px]"
            id={`popup-${formId}`}
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="[FORMS] Lançamentos"
            data-height="undefined"
            data-layout-iframe-id={`popup-${formId}`}
            data-form-id={formId}
            title="[FORMS] Lançamentos"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
