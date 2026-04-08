import { useState } from "react";
import { List, CaretDown, House, Briefcase, User, Gear, Phone, EnvelopeSimple, Certificate, Gavel, Shield, MagnifyingGlass, Bell, SignOut, ArrowRight, Plus, X, CaretRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import logoImage from "@/assets/logotipo.png";

// Navigation data for sidebar
const navSections = [{
  title: "Introdução",
  items: [{
    id: "hero",
    label: "Hero Section"
  }, {
    id: "colors",
    label: "Cores"
  }, {
    id: "typography",
    label: "Tipografia"
  }]
}, {
  title: "Formulários",
  items: [{
    id: "inputs",
    label: "Inputs"
  }, {
    id: "textarea",
    label: "Textarea"
  }, {
    id: "checkboxes",
    label: "Checkboxes"
  }, {
    id: "radio",
    label: "Radio Buttons"
  }, {
    id: "select",
    label: "Select / Dropdown"
  }, {
    id: "switch",
    label: "Switch / Toggle"
  }, {
    id: "datepicker",
    label: "Date Picker"
  }, {
    id: "slider",
    label: "Sliders"
  }, {
    id: "upload",
    label: "Upload"
  }]
}, {
  title: "Botões",
  items: [{
    id: "buttons",
    label: "Botões Primários"
  }, {
    id: "buttons-secondary",
    label: "Botões Secundários"
  }, {
    id: "buttons-icon",
    label: "Botões de Ícone"
  }, {
    id: "fab",
    label: "FAB"
  }, {
    id: "button-groups",
    label: "Grupos de Botões"
  }]
}, {
  title: "Navegação",
  items: [{
    id: "navbar",
    label: "Navbar"
  }, {
    id: "links",
    label: "Links"
  }, {
    id: "search",
    label: "Busca"
  }, {
    id: "breadcrumbs",
    label: "Breadcrumbs"
  }, {
    id: "pagination",
    label: "Paginação"
  }, {
    id: "tabs",
    label: "Tabs"
  }, {
    id: "sidebar",
    label: "Sidebar"
  }]
}, {
  title: "Conteúdo",
  items: [{
    id: "cards",
    label: "Cards"
  }, {
    id: "accordion",
    label: "Accordion"
  }, {
    id: "carousel",
    label: "Carrossel"
  }, {
    id: "dividers",
    label: "Divisores"
  }, {
    id: "avatars",
    label: "Avatares"
  }, {
    id: "lists",
    label: "Listas"
  }, {
    id: "tables",
    label: "Tabelas"
  }, {
    id: "tags",
    label: "Tags / Chips"
  }]
}, {
  title: "Feedback",
  items: [{
    id: "modals",
    label: "Modais"
  }, {
    id: "alerts",
    label: "Alertas"
  }, {
    id: "tooltips",
    label: "Tooltips"
  }, {
    id: "progress",
    label: "Progresso"
  }, {
    id: "spinners",
    label: "Spinners"
  }, {
    id: "skeletons",
    label: "Skeletons"
  }, {
    id: "badges",
    label: "Badges"
  }, {
    id: "empty-states",
    label: "Empty States"
  }, {
    id: "steppers",
    label: "Steppers"
  }]
}];
interface DesignSystemNavProps {
  activeSection?: string;
}
export function DesignSystemNav({
  activeSection
}: DesignSystemNavProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(navSections.map(s => s.title));
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const toggleSection = (title: string) => {
    setExpandedSections(prev => prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title]);
  };
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
    setIsMobileOpen(false);
  };
  return <>
      {/* Mobile toggle */}
      <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="fixed top-4 left-4 z-50 lg:hidden bg-secondary text-white p-3 rounded-lg shadow-lg">
        {isMobileOpen ? <X size={24} /> : <List size={24} />}
      </button>

      {/* Overlay */}
      {isMobileOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileOpen(false)} />}

      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-full w-72 bg-secondary text-secondary-foreground z-50 transform transition-transform duration-300 lg:translate-x-0 ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="h-full overflow-y-auto scrollbar-gold">
          {/* Header */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center justify-center">
              <img src={logoImage} alt="Hero Sales" className="h-10 w-auto object-contain" />
            </div>
          </div>

          {/* Navigation */}
          <nav className="p-4 space-y-2">
            {navSections.map(section => <div key={section.title}>
                <button onClick={() => toggleSection(section.title)} className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-md transition-colors">
                  <span>{section.title}</span>
                  <CaretDown size={16} className={`transition-transform ${expandedSections.includes(section.title) ? "rotate-180" : ""}`} />
                </button>
                {expandedSections.includes(section.title) && <div className="ml-3 mt-1 space-y-0.5 border-l border-white/10 pl-3">
                    {section.items.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`w-full text-left px-3 py-1.5 text-sm rounded-md transition-colors ${activeSection === item.id ? "bg-primary text-primary-foreground" : "text-white/60 hover:text-white hover:bg-white/5"}`}>
                        {item.label}
                      </button>)}
                  </div>}
              </div>)}
          </nav>
        </div>
      </aside>
    </>;
}
export { navSections };