import { useState } from "react";
import heroImage from "@/assets/hero-bg.webp";
import { Scales, ArrowDown, WhatsappLogo, Phone, EnvelopeSimple, MagnifyingGlass, InstagramLogo, LinkedinLogo, FacebookLogo } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Section, Subsection, ComponentGrid, ComponentCard } from "@/components/design-system/Section";
import { DesignSystemNav } from "@/components/design-system/Navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertWithIcon } from "@/components/ui/alert";
import { Spinner, SpinnerDots, SpinnerRing } from "@/components/ui/spinner";
import { Skeleton, SkeletonCard, SkeletonAvatar, SkeletonText } from "@/components/ui/skeleton";
import { Stepper } from "@/components/ui/stepper";
import { EmptyState, EmptyStateNoData, EmptyStateNoResults } from "@/components/ui/empty-state";
import { Divider } from "@/components/ui/divider";
import { Tag, TagGroup } from "@/components/ui/tag";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
const Index = () => {
  const [sliderValue, setSliderValue] = useState([50]);
  const [stepperValue, setStepperValue] = useState(1);
  return <div className="min-h-screen bg-background">
      <DesignSystemNav />
      
      {/* Main Content */}
      <main className="lg:ml-72">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${heroImage})`
      }}>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
          
          <div className="relative z-10 container mx-auto px-6 py-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <Scales size={48} weight="fill" className="text-primary" />
                <Badge variant="gold" className="text-sm">Design System</Badge>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 font-light">
                Guia Completo de{" "}
                <em className="text-primary italic">Design System</em>{" "}
                Hero Sales
              </h1>
              
              <p className="text-lg text-white/80 mb-8 max-w-2xl">
                Todos os componentes, cores, tipografia e padrões visuais documentados
                para construir interfaces elegantes e profissionais da plataforma Hero Sales.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="gold" size="lg">
                  Explorar Componentes
                </Button>
                <Button variant="glass" size="lg">
                  Ver Documentação
                </Button>
              </div>
            </div>
          </div>
          
          <button onClick={() => document.getElementById('colors')?.scrollIntoView({
          behavior: 'smooth'
        })} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce">
            <ArrowDown size={32} />
          </button>
        </section>

        {/* Content Container */}
        <div className="container mx-auto px-6 lg:px-12">
          
          {/* Colors Section */}
          <Section id="colors" title="Paleta de *Cores*" description="As cores principais do design system, incluindo variações e usos recomendados.">
            <Subsection title="Cores Primárias">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Gold */}
                <div className="rounded-lg overflow-hidden shadow-gold">
                  <div className="h-32 bg-primary" />
                  <div className="p-4 bg-card">
                    <h4 className="font-display font-semibold">Purple / Roxo</h4>
                    <p className="text-sm text-muted-foreground mt-1">#6e5bbb</p>
                    <p className="text-xs text-muted-foreground">HSL: 252 40% 55%</p>
                    <p className="text-xs text-muted-foreground mt-2">Destaques, CTAs, textos itálicos</p>
                  </div>
                </div>
                
                {/* White */}
                <div className="rounded-lg overflow-hidden border shadow-sm">
                  <div className="h-32 bg-white border-b" />
                  <div className="p-4 bg-card">
                    <h4 className="font-display font-semibold">Branco</h4>
                    <p className="text-sm text-muted-foreground mt-1">#ffffff</p>
                    <p className="text-xs text-muted-foreground">HSL: 0 0% 100%</p>
                    <p className="text-xs text-muted-foreground mt-2">Fundos claros, textos em fundos escuros</p>
                  </div>
                </div>
                
                {/* Navy */}
                <div className="rounded-lg overflow-hidden shadow-navy">
                  <div className="h-32 bg-secondary" />
                  <div className="p-4 bg-card">
                    <h4 className="font-display font-semibold">Navy / Roxo Escuro</h4>
                    <p className="text-sm text-muted-foreground mt-1">#1a1535</p>
                    <p className="text-xs text-muted-foreground">HSL: 252 42% 15%</p>
                    <p className="text-xs text-muted-foreground mt-2">Fundos, textos principais, sidebars</p>
                  </div>
                </div>
              </div>
            </Subsection>

            <Subsection title="Cores Semânticas">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-lg border">
                  <div className="w-10 h-10 rounded-lg bg-success" />
                  <div>
                    <p className="font-medium text-sm">Success</p>
                    <p className="text-xs text-muted-foreground">Sucesso</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border">
                  <div className="w-10 h-10 rounded-lg bg-warning" />
                  <div>
                    <p className="font-medium text-sm">Warning</p>
                    <p className="text-xs text-muted-foreground">Alerta</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border">
                  <div className="w-10 h-10 rounded-lg bg-destructive" />
                  <div>
                    <p className="font-medium text-sm">Destructive</p>
                    <p className="text-xs text-muted-foreground">Erro</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border">
                  <div className="w-10 h-10 rounded-lg bg-info" />
                  <div>
                    <p className="font-medium text-sm">Info</p>
                    <p className="text-xs text-muted-foreground">Informativo</p>
                  </div>
                </div>
              </div>
            </Subsection>

            <Subsection title="Gradientes">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="h-24 rounded-lg bg-gradient-to-r from-gold-400 to-gold-600 flex items-center justify-center text-navy-900 font-semibold">
                  Gradient Gold
                </div>
                <div className="h-24 rounded-lg bg-gradient-to-r from-navy-800 to-navy-950 flex items-center justify-center text-white font-semibold">
                  Gradient Navy
                </div>
                <div className="h-24 rounded-lg bg-gradient-to-br from-primary via-gold-300 to-secondary flex items-center justify-center text-white font-semibold">
                  Gold to Navy
                </div>
              </div>
            </Subsection>
          </Section>

          {/* Typography Section */}
          <Section id="typography" title="*Tipografia*" description="Famílias de fontes e estilos tipográficos do design system.">
            <Subsection title="Famílias de Fontes">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card variant="gold">
                  <CardHeader>
                    <CardTitle className="font-display text-3xl">Playfair Display</CardTitle>
                    <CardDescription>Fonte para títulos e destaques</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-display text-4xl mb-4">Aa Bb Cc</p>
                    <p className="font-display text-lg">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className="font-display text-lg">abcdefghijklmnopqrstuvwxyz</p>
                    <p className="font-display text-lg">0123456789</p>
                    <p className="font-display text-lg italic text-primary mt-4">Texto em itálico fica dourado</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="font-sans text-2xl font-bold">Inter</CardTitle>
                    <CardDescription>Fonte para corpo de texto</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-sans text-4xl font-medium mb-4">Aa Bb Cc</p>
                    <p className="font-sans">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className="font-sans">abcdefghijklmnopqrstuvwxyz</p>
                    <p className="font-sans">0123456789</p>
                  </CardContent>
                </Card>
              </div>
            </Subsection>

            <Subsection title="Escala de Títulos">
              <div className="space-y-6 bg-card p-8 rounded-lg border">
                <div className="flex items-baseline gap-4 flex-wrap">
                  <span className="text-xs text-muted-foreground w-16">H1</span>
                  <h1 className="font-display">Título <em className="text-primary italic">Principal</em></h1>
                </div>
                <Divider variant="gold" />
                <div className="flex items-baseline gap-4 flex-wrap">
                  <span className="text-xs text-muted-foreground w-16">H2</span>
                  <h2 className="font-display">Título <em className="text-primary italic">Secundário</em></h2>
                </div>
                <Divider variant="gold" />
                <div className="flex items-baseline gap-4 flex-wrap">
                  <span className="text-xs text-muted-foreground w-16">H3</span>
                  <h3 className="font-display">Título <em className="text-primary italic">Terciário</em></h3>
                </div>
                <Divider variant="gold" />
                <div className="flex items-baseline gap-4 flex-wrap">
                  <span className="text-xs text-muted-foreground w-16">H4</span>
                  <h4 className="font-display">Título <em className="text-primary italic">Quaternário</em></h4>
                </div>
                <Divider variant="gold" />
                <div className="flex items-baseline gap-4 flex-wrap">
                  <span className="text-xs text-muted-foreground w-16">Body</span>
                  <p>Este é um texto de corpo padrão com a fonte Inter.</p>
                </div>
                <Divider variant="gold" />
                <div className="flex items-baseline gap-4 flex-wrap">
                  <span className="text-xs text-muted-foreground w-16">Small</span>
                  <p className="text-sm text-muted-foreground">Texto pequeno para legendas e informações secundárias.</p>
                </div>
              </div>
            </Subsection>
          </Section>

          {/* Inputs Section */}
          <Section id="inputs" title="Campos de *Texto*" description="Variantes de inputs para formulários.">
            <ComponentGrid columns={2}>
              <ComponentCard title="Default">
                <div className="w-full space-y-3">
                  <Input placeholder="Digite seu nome..." />
                  <Input placeholder="Com ícone à esquerda..." leftIcon={<EnvelopeSimple size={18} />} />
                  <Input placeholder="Com ícone à direita..." rightIcon={<MagnifyingGlass size={18} />} />
                </div>
              </ComponentCard>

              <ComponentCard title="Variante Gold">
                <div className="w-full space-y-3">
                  <Input variant="gold" placeholder="Variante Gold..." />
                  <Input variant="gold" placeholder="Com helper text..." helperText="Este campo é obrigatório" />
                </div>
              </ComponentCard>

              <ComponentCard title="Tamanhos">
                <div className="w-full space-y-3">
                  <Input inputSize="sm" placeholder="Small" />
                  <Input inputSize="default" placeholder="Default" />
                  <Input inputSize="lg" placeholder="Large" />
                  <Input inputSize="xl" placeholder="Extra Large" />
                </div>
              </ComponentCard>

              <ComponentCard title="Estados">
                <div className="w-full space-y-3">
                  <Input placeholder="Normal" />
                  <Input placeholder="Com erro" error helperText="Este campo contém um erro" />
                  <Input placeholder="Desabilitado" disabled />
                </div>
              </ComponentCard>

              <ComponentCard title="Filled & Underline">
                <div className="w-full space-y-3">
                  <Input variant="filled" placeholder="Variante Filled" />
                  <Input variant="underline" placeholder="Variante Underline" />
                </div>
              </ComponentCard>

              <ComponentCard title="Glass (Fundo Escuro)" dark>
                <div className="w-full space-y-3">
                  <Input variant="glass" placeholder="Glass input..." />
                  <Input variant="glass" placeholder="Com ícone..." leftIcon={<Phone size={18} className="text-white/60" />} />
                </div>
              </ComponentCard>
            </ComponentGrid>
          </Section>

          {/* Textarea Section */}
          <Section id="textarea" title="Área de *Texto*" description="Campos para textos maiores.">
            <ComponentGrid columns={2}>
              <ComponentCard title="Default">
                <Textarea placeholder="Digite sua mensagem..." className="w-full" />
              </ComponentCard>

              <ComponentCard title="Variante Gold">
                <Textarea variant="gold" placeholder="Variante Gold..." className="w-full" />
              </ComponentCard>

              <ComponentCard title="Tamanhos">
                <div className="w-full space-y-3">
                  <Textarea textareaSize="sm" placeholder="Small" />
                  <Textarea textareaSize="default" placeholder="Default" />
                  <Textarea textareaSize="lg" placeholder="Large" />
                </div>
              </ComponentCard>

              <ComponentCard title="Glass (Fundo Escuro)" dark>
                <Textarea variant="glass" placeholder="Escreva aqui..." className="w-full" />
              </ComponentCard>
            </ComponentGrid>
          </Section>

          {/* Checkboxes Section */}
          <Section id="checkboxes" title="*Checkboxes*" description="Caixas de seleção para múltiplas opções.">
            <ComponentGrid columns={2}>
              <ComponentCard title="Default">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="check1" />
                    <Label htmlFor="check1">Opção 1</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="check2" defaultChecked />
                    <Label htmlFor="check2">Opção 2 (marcada)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="check3" disabled />
                    <Label htmlFor="check3" className="text-muted-foreground">Desabilitado</Label>
                  </div>
                </div>
              </ComponentCard>

              <ComponentCard title="Com descrição">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox id="terms" className="mt-1" />
                    <div>
                      <Label htmlFor="terms">Aceito os termos de uso</Label>
                      <p className="text-sm text-muted-foreground">Ao marcar, você concorda com nossos termos e condições.</p>
                    </div>
                  </div>
                </div>
              </ComponentCard>
            </ComponentGrid>
          </Section>

          {/* Radio Buttons Section */}
          <Section id="radio" title="Radio *Buttons*" description="Seleção única entre opções.">
            <ComponentGrid columns={2}>
              <ComponentCard title="Default">
                <RadioGroup defaultValue="option1">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option1" id="r1" />
                    <Label htmlFor="r1">Opção 1</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option2" id="r2" />
                    <Label htmlFor="r2">Opção 2</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option3" id="r3" />
                    <Label htmlFor="r3">Opção 3</Label>
                  </div>
                </RadioGroup>
              </ComponentCard>

              <ComponentCard title="Horizontal">
                <RadioGroup defaultValue="a" className="flex gap-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="a" id="ra" />
                    <Label htmlFor="ra">Sim</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="b" id="rb" />
                    <Label htmlFor="rb">Não</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="c" id="rc" />
                    <Label htmlFor="rc">Talvez</Label>
                  </div>
                </RadioGroup>
              </ComponentCard>
            </ComponentGrid>
          </Section>

          {/* Select Section */}
          <Section id="select" title="Select / *Dropdown*" description="Menus de seleção suspensa.">
            <ComponentGrid columns={2}>
              <ComponentCard title="Default">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Opção 1</SelectItem>
                    <SelectItem value="option2">Opção 2</SelectItem>
                    <SelectItem value="option3">Opção 3</SelectItem>
                  </SelectContent>
                </Select>
              </ComponentCard>

              <ComponentCard title="Com valor padrão">
                <Select defaultValue="option2">
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Direito Civil</SelectItem>
                    <SelectItem value="option2">Direito Trabalhista</SelectItem>
                    <SelectItem value="option3">Direito Empresarial</SelectItem>
                  </SelectContent>
                </Select>
              </ComponentCard>
            </ComponentGrid>
          </Section>

          {/* Switch Section */}
          <Section id="switch" title="Switch / *Toggle*" description="Interruptores para ativar/desativar opções.">
            <ComponentGrid columns={2}>
              <ComponentCard title="Default">
                <div className="space-y-4 w-full">
                  <div className="flex items-center justify-between">
                    <Label>Notificações por email</Label>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Notificações por SMS</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label className="text-muted-foreground">Desabilitado</Label>
                    <Switch disabled />
                  </div>
                </div>
              </ComponentCard>

              <ComponentCard title="Com descrição">
                <div className="flex items-start justify-between gap-4 w-full">
                  <div>
                    <Label className="text-base">Modo escuro</Label>
                    <p className="text-sm text-muted-foreground">Ativar tema escuro na interface</p>
                  </div>
                  <Switch />
                </div>
              </ComponentCard>
            </ComponentGrid>
          </Section>

          {/* Slider Section */}
          <Section id="slider" title="*Sliders*" description="Barras de ajuste de valores.">
            <ComponentGrid columns={2}>
              <ComponentCard title="Default">
                <div className="w-full space-y-6">
                  <Slider value={sliderValue} onValueChange={setSliderValue} max={100} step={1} />
                  <p className="text-sm text-muted-foreground">Valor: {sliderValue}%</p>
                </div>
              </ComponentCard>

              <ComponentCard title="Range">
                <div className="w-full space-y-6">
                  <Slider defaultValue={[25, 75]} max={100} step={1} />
                  <p className="text-sm text-muted-foreground">Seleção de intervalo</p>
                </div>
              </ComponentCard>
            </ComponentGrid>
          </Section>

          {/* Buttons Section */}
          <Section id="buttons" title="Botões *Primários*" description="Botões principais para ações de destaque.">
            <Subsection title="Variantes">
              <div className="flex flex-wrap gap-4">
                <Button variant="default">Default</Button>
                <Button variant="gold">Gold</Button>
                <Button variant="navy">Navy</Button>
                <Button variant="cta">CTA Button</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </Subsection>

            <Subsection title="Tamanhos">
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="xl">Extra Large</Button>
              </div>
            </Subsection>

            <Subsection title="Estados">
              <div className="flex flex-wrap gap-4">
                <Button>Normal</Button>
                <Button disabled>Desabilitado</Button>
                <Button loading>Carregando</Button>
              </div>
            </Subsection>

            <Subsection title="Com Ícones">
              <div className="flex flex-wrap gap-4">
                <Button>
                  <WhatsappLogo size={20} weight="fill" />
                  WhatsApp
                </Button>
                <Button variant="outline">
                  <Phone size={20} />
                  Ligar Agora
                </Button>
                <Button variant="gold">
                  <EnvelopeSimple size={20} />
                  Enviar Email
                </Button>
              </div>
            </Subsection>
          </Section>

          {/* Secondary Buttons */}
          <Section id="buttons-secondary" title="Botões *Secundários*" description="Variantes para ações secundárias.">
            <div className="flex flex-wrap gap-4">
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="success">Success</Button>
              <Button variant="warning">Warning</Button>
              <Button variant="info">Info</Button>
            </div>
          </Section>

          {/* Icon Buttons */}
          <Section id="buttons-icon" title="Botões de *Ícone*" description="Botões apenas com ícones.">
            <div className="flex flex-wrap items-center gap-4">
              <Button size="icon-sm" variant="ghost"><Phone size={18} /></Button>
              <Button size="icon"><Phone size={20} /></Button>
              <Button size="icon-lg"><Phone size={24} /></Button>
              <Button size="icon" variant="outline"><EnvelopeSimple size={20} /></Button>
              <Button size="icon" variant="gold"><WhatsappLogo size={20} weight="fill" /></Button>
              <Button size="icon" variant="navy"><LinkedinLogo size={20} weight="fill" /></Button>
            </div>
          </Section>

          {/* FAB Section */}
          <Section id="fab" title="*FAB*" description="Floating Action Button para ações principais.">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="fab" size="fab">
                <WhatsappLogo size={24} weight="fill" />
              </Button>
              <Button variant="fab" size="fab-lg">
                <Phone size={28} />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              FABs ficam fixos no canto inferior direito da tela com a classe <code className="text-primary">fab</code>.
            </p>
          </Section>

          {/* Button Groups */}
          <Section id="button-groups" title="Grupos de *Botões*" description="Agrupamento de botões relacionados.">
            <div className="space-y-4">
              <div className="inline-flex rounded-md shadow-sm">
                <Button className="rounded-r-none border-r-0">Anterior</Button>
                <Button className="rounded-none border-x-0">Atual</Button>
                <Button className="rounded-l-none border-l-0">Próximo</Button>
              </div>

              <div className="inline-flex rounded-md shadow-sm">
                <Button variant="outline" className="rounded-r-none">
                  <InstagramLogo size={20} weight="fill" />
                </Button>
                <Button variant="outline" className="rounded-none border-x-0">
                  <LinkedinLogo size={20} weight="fill" />
                </Button>
                <Button variant="outline" className="rounded-l-none">
                  <FacebookLogo size={20} weight="fill" />
                </Button>
              </div>
            </div>
          </Section>

          {/* Glass Buttons */}
          <Subsection title="Glass Buttons (Fundo Escuro)">
            <div className="bg-secondary rounded-lg p-8">
              <div className="flex flex-wrap gap-4">
                <Button variant="glass">Glass Button</Button>
                <Button variant="glass-gold">Glass Gold</Button>
                <Button variant="glass" size="icon"><Phone size={20} /></Button>
              </div>
            </div>
          </Subsection>

          {/* Links Section */}
          <Section id="links" title="*Links*" description="Estilos de links e hiperlinks.">
            <div className="space-y-4">
              <p>
                Este é um texto com um{" "}
                <a href="#" className="text-primary hover:underline font-medium">
                  link padrão
                </a>{" "}
                no meio.
              </p>
              <p className="story-link">
                <a href="#">Link com animação underline</a>
              </p>
              <Button variant="link">Button como Link</Button>
            </div>
          </Section>

          {/* Search Section */}
          <Section id="search" title="Barra de *Busca*" description="Campos de busca com ícone.">
            <ComponentGrid columns={2}>
              <ComponentCard title="Default">
                <Input placeholder="Buscar..." leftIcon={<MagnifyingGlass size={18} />} className="w-full" />
              </ComponentCard>

              <ComponentCard title="Glass (Fundo Escuro)" dark>
                <Input variant="glass" placeholder="Buscar..." leftIcon={<MagnifyingGlass size={18} className="text-white/60" />} className="w-full" />
              </ComponentCard>
            </ComponentGrid>
          </Section>

          {/* Breadcrumbs Section */}
          <Section id="breadcrumbs" title="*Breadcrumbs*" description="Trilhas de navegação.">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Serviços</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Direito Trabalhista</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </Section>

          {/* Pagination Section */}
          <Section id="pagination" title="*Paginação*" description="Navegação entre páginas de conteúdo.">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </Section>

          {/* Tabs Section */}
          <Section id="tabs" title="*Tabs*" description="Navegação por abas.">
            <Subsection title="Default">
              <Tabs defaultValue="tab1" className="w-full max-w-lg">
                <TabsList>
                  <TabsTrigger value="tab1">Sobre</TabsTrigger>
                  <TabsTrigger value="tab2">Serviços</TabsTrigger>
                  <TabsTrigger value="tab3">Contato</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">
                  <Card><CardContent className="pt-6">Conteúdo da aba Sobre</CardContent></Card>
                </TabsContent>
                <TabsContent value="tab2">
                  <Card><CardContent className="pt-6">Conteúdo da aba Serviços</CardContent></Card>
                </TabsContent>
                <TabsContent value="tab3">
                  <Card><CardContent className="pt-6">Conteúdo da aba Contato</CardContent></Card>
                </TabsContent>
              </Tabs>
            </Subsection>

            <Subsection title="Underline">
              <Tabs defaultValue="tab1" className="w-full max-w-lg">
                <TabsList variant="underline">
                  <TabsTrigger variant="underline" value="tab1">Sobre</TabsTrigger>
                  <TabsTrigger variant="underline" value="tab2">Serviços</TabsTrigger>
                  <TabsTrigger variant="underline" value="tab3">Contato</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">Conteúdo underline</TabsContent>
                <TabsContent value="tab2">Serviços underline</TabsContent>
                <TabsContent value="tab3">Contato underline</TabsContent>
              </Tabs>
            </Subsection>

            <Subsection title="Pills">
              <Tabs defaultValue="tab1" className="w-full max-w-lg">
                <TabsList variant="pills">
                  <TabsTrigger variant="pills" value="tab1">Sobre</TabsTrigger>
                  <TabsTrigger variant="pills" value="tab2">Serviços</TabsTrigger>
                  <TabsTrigger variant="pills" value="tab3">Contato</TabsTrigger>
                </TabsList>
              </Tabs>
            </Subsection>

            <Subsection title="Gold">
              <Tabs defaultValue="tab1" className="w-full max-w-lg">
                <TabsList variant="gold">
                  <TabsTrigger variant="gold" value="tab1">Sobre</TabsTrigger>
                  <TabsTrigger variant="gold" value="tab2">Serviços</TabsTrigger>
                  <TabsTrigger variant="gold" value="tab3">Contato</TabsTrigger>
                </TabsList>
              </Tabs>
            </Subsection>
          </Section>

          {/* Cards Section */}
          <Section id="cards" title="*Cards*" description="Componentes de cartão para agrupar conteúdo.">
            <ComponentGrid>
              <Card>
                <CardHeader>
                  <CardTitle>Card Default</CardTitle>
                  <CardDescription>Descrição do card padrão</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Conteúdo do card com informações relevantes.</p>
                </CardContent>
                <CardFooter>
                  <Button size="sm">Ação</Button>
                </CardFooter>
              </Card>

              <Card variant="gold">
                <CardHeader>
                  <CardTitle>Card Gold</CardTitle>
                  <CardDescription>Com borda e sombra dourada</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Destaque especial com visual premium.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="gold" size="sm">Ação</Button>
                </CardFooter>
              </Card>

              <Card variant="navy">
                <CardHeader>
                  <CardTitle className="text-white">Card Navy</CardTitle>
                  <CardDescription className="text-white/70">Fundo escuro elegante</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">Texto em fundo navy.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="gold" size="sm">Ação</Button>
                </CardFooter>
              </Card>

              <Card variant="elevated">
                <CardHeader>
                  <CardTitle>Card Elevated</CardTitle>
                  <CardDescription>Com sombra elevada</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Efeito de elevação ao passar o mouse.</p>
                </CardContent>
              </Card>

              <Card variant="interactive">
                <CardHeader>
                  <CardTitle>Card Interactive</CardTitle>
                  <CardDescription>Clicável com hover</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Efeito de lift ao hover.</p>
                </CardContent>
              </Card>

              <Card variant="outline">
                <CardHeader>
                  <CardTitle>Card Outline</CardTitle>
                  <CardDescription>Apenas bordas</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Sem fundo, apenas contorno.</p>
                </CardContent>
              </Card>
            </ComponentGrid>

            <Subsection title="Glass Cards (Fundo Escuro)">
              <div className="bg-secondary rounded-lg p-8">
                <ComponentGrid>
                  <Card variant="glass">
                    <CardHeader>
                      <CardTitle className="text-white">Glass Card</CardTitle>
                      <CardDescription className="text-white/70">Glassmorphism effect</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/80">Efeito de vidro fosco.</p>
                    </CardContent>
                  </Card>

                  <Card variant="glass-gold">
                    <CardHeader>
                      <CardTitle>Glass Gold</CardTitle>
                      <CardDescription className="text-primary/80">Com tom dourado</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Glass com destaque gold.</p>
                    </CardContent>
                  </Card>
                </ComponentGrid>
              </div>
            </Subsection>
          </Section>

          {/* Accordion Section */}
          <Section id="accordion" title="*Accordion*" description="Seções expansíveis de conteúdo.">
            <Accordion type="single" collapsible className="w-full max-w-2xl">
              <AccordionItem value="item-1">
                <AccordionTrigger>O que é dermatologia?</AccordionTrigger>
                <AccordionContent>
                  O dermatologia é o ramo do direito que regula as relações de trabalho entre empregadores e empregados.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Quais são os prazos para reclamação trabalhista?</AccordionTrigger>
                <AccordionContent>
                  O prazo prescricional para ajuizar uma ação trabalhista é de 2 anos após o término do contrato de trabalho.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Qual a documentação necessária?</AccordionTrigger>
                <AccordionContent>
                  São necessários documentos como CTPS, contracheques, termo de rescisão, entre outros relacionados ao vínculo empregatício.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Section>

          {/* Dividers Section */}
          <Section id="dividers" title="*Divisores*" description="Separadores visuais de conteúdo.">
            <div className="space-y-8 max-w-2xl bg-card p-8 rounded-lg border">
              <div>
                <p className="text-sm text-muted-foreground mb-3">Default</p>
                <Divider />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-3">Gold</p>
                <Divider variant="gold" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-3">Navy</p>
                <Divider variant="navy" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-3">Dashed</p>
                <Divider variant="dashed" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-3">Com Label</p>
                <Divider variant="gold" label="OU" />
              </div>
            </div>
          </Section>

          {/* Avatars Section */}
          <Section id="avatars" title="*Avatares*" description="Representações visuais de usuários.">
            <div className="flex flex-wrap items-end gap-6">
              <div className="text-center">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://i.pravatar.cc/100?img=1" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-2">SM</p>
              </div>
              <div className="text-center">
                <Avatar>
                  <AvatarImage src="https://i.pravatar.cc/100?img=2" />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-2">Default</p>
              </div>
              <div className="text-center">
                <Avatar className="h-14 w-14">
                  <AvatarImage src="https://i.pravatar.cc/100?img=3" />
                  <AvatarFallback>CD</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-2">LG</p>
              </div>
              <div className="text-center">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="https://i.pravatar.cc/100?img=4" />
                  <AvatarFallback>EF</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-2">XL</p>
              </div>
              <div className="text-center">
                <Avatar className="h-14 w-14 ring-2 ring-primary ring-offset-2">
                  <AvatarImage src="https://i.pravatar.cc/100?img=5" />
                  <AvatarFallback>GH</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-2">Ring Gold</p>
              </div>
            </div>
          </Section>

          {/* Tables Section */}
          <Section id="tables" title="*Tabelas*" description="Exibição de dados em formato tabular.">
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Processo</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Valor</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">0001234-56.2024</TableCell>
                    <TableCell>João Silva</TableCell>
                    <TableCell><Badge variant="success">Ativo</Badge></TableCell>
                    <TableCell className="text-right">R$ 15.000,00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">0002345-67.2024</TableCell>
                    <TableCell>Maria Santos</TableCell>
                    <TableCell><Badge variant="warning">Pendente</Badge></TableCell>
                    <TableCell className="text-right">R$ 8.500,00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">0003456-78.2024</TableCell>
                    <TableCell>Carlos Oliveira</TableCell>
                    <TableCell><Badge variant="muted">Arquivado</Badge></TableCell>
                    <TableCell className="text-right">R$ 22.000,00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </Section>

          {/* Tags Section */}
          <Section id="tags" title="Tags / *Chips*" description="Etiquetas para categorização e filtros.">
            <Subsection title="Variantes">
              <TagGroup>
                <Tag>Default</Tag>
                <Tag variant="gold">Gold</Tag>
                <Tag variant="navy">Navy</Tag>
                <Tag variant="outline">Outline</Tag>
                <Tag variant="success">Sucesso</Tag>
                <Tag variant="warning">Alerta</Tag>
                <Tag variant="destructive">Erro</Tag>
              </TagGroup>
            </Subsection>

            <Subsection title="Com remoção">
              <TagGroup>
                <Tag variant="gold" onRemove={() => {}}>Direito Civil</Tag>
                <Tag variant="gold" onRemove={() => {}}>Trabalhista</Tag>
                <Tag variant="gold" onRemove={() => {}}>Empresarial</Tag>
              </TagGroup>
            </Subsection>

            <Subsection title="Tamanhos">
              <TagGroup>
                <Tag size="sm">Small</Tag>
                <Tag size="default">Default</Tag>
                <Tag size="lg">Large</Tag>
              </TagGroup>
            </Subsection>
          </Section>

          {/* Modals Section */}
          <Section id="modals" title="*Modais*" description="Pop-ups e dialogs para ações importantes.">
            <div className="flex gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Abrir Modal</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Título do Modal</DialogTitle>
                    <DialogDescription>
                      Esta é a descrição do modal. Você pode adicionar qualquer conteúdo aqui.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <p>Conteúdo do modal vai aqui.</p>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancelar</Button>
                    <Button>Confirmar</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="gold">Modal Gold</Button>
                </DialogTrigger>
                <DialogContent className="border-primary/30">
                  <DialogHeader>
                    <DialogTitle>Confirmar <em className="text-primary italic">Ação</em></DialogTitle>
                    <DialogDescription>
                      Tem certeza que deseja prosseguir com esta ação?
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button variant="outline">Cancelar</Button>
                    <Button variant="gold">Confirmar</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </Section>

          {/* Alerts Section */}
          <Section id="alerts" title="*Alertas*" description="Mensagens de feedback e notificações.">
            <div className="space-y-4 max-w-2xl">
              <AlertWithIcon variant="default" title="Informação" description="Esta é uma mensagem informativa padrão." />
              <AlertWithIcon variant="success" title="Sucesso!" description="A operação foi concluída com sucesso." />
              <AlertWithIcon variant="warning" title="Atenção" description="Esta ação pode ter consequências." />
              <AlertWithIcon variant="destructive" title="Erro" description="Ocorreu um erro ao processar sua solicitação." />
              <AlertWithIcon variant="info" title="Dica" description="Você pode usar atalhos de teclado para agilizar." />
              <AlertWithIcon variant="gold" title="Premium" description="Você tem acesso a recursos exclusivos." />
            </div>
          </Section>

          {/* Tooltips Section */}
          <Section id="tooltips" title="*Tooltips*" description="Dicas de ferramenta ao passar o mouse.">
            <div className="flex gap-6">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover me</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Tooltip padrão</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="gold" size="icon">
                      <Phone size={20} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Ligar agora</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </Section>

          {/* Progress Section */}
          <Section id="progress" title="Barras de *Progresso*" description="Indicadores de progresso de tarefas.">
            <div className="space-y-8 max-w-2xl">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Default</p>
                <Progress value={60} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Gold</p>
                <Progress value={75} variant="gold" indicatorVariant="gold" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Navy</p>
                <Progress value={45} indicatorVariant="navy" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Tamanhos</p>
                <div className="space-y-4">
                  <Progress value={80} size="sm" />
                  <Progress value={80} size="default" />
                  <Progress value={80} size="lg" />
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Com valor</p>
                <Progress value={65} showValue indicatorVariant="gold" />
              </div>
            </div>
          </Section>

          {/* Spinners Section */}
          <Section id="spinners" title="*Spinners*" description="Indicadores de carregamento.">
            <Subsection title="Spinner Padrão">
              <div className="flex items-center gap-8">
                <Spinner size="sm" />
                <Spinner size="default" />
                <Spinner size="lg" />
                <Spinner size="xl" />
              </div>
            </Subsection>

            <Subsection title="Spinner Gold">
              <div className="flex items-center gap-8">
                <Spinner size="sm" variant="gold" />
                <Spinner size="default" variant="gold" />
                <Spinner size="lg" variant="gold" />
              </div>
            </Subsection>

            <Subsection title="Spinner Ring">
              <div className="flex items-center gap-8">
                <SpinnerRing size="sm" />
                <SpinnerRing size="default" />
                <SpinnerRing size="lg" />
                <SpinnerRing size="lg" variant="gold" />
              </div>
            </Subsection>

            <Subsection title="Spinner Dots">
              <div className="flex items-center gap-8">
                <SpinnerDots size="sm" />
                <SpinnerDots size="default" />
                <SpinnerDots size="lg" />
                <SpinnerDots size="lg" variant="gold" />
              </div>
            </Subsection>

            <Subsection title="White (Fundo Escuro)">
              <div className="bg-secondary rounded-lg p-8 flex items-center gap-8">
                <Spinner variant="white" />
                <SpinnerRing variant="white" />
                <SpinnerDots variant="white" />
              </div>
            </Subsection>
          </Section>

          {/* Skeletons Section */}
          <Section id="skeletons" title="*Skeletons*" description="Placeholders de pré-carregamento.">
            <ComponentGrid>
              <ComponentCard title="Card Skeleton">
                <div className="w-full">
                  <SkeletonCard />
                </div>
              </ComponentCard>

              <ComponentCard title="Avatar Skeleton">
                <div className="flex items-center gap-4">
                  <SkeletonAvatar size="sm" />
                  <SkeletonAvatar size="default" />
                  <SkeletonAvatar size="lg" />
                </div>
              </ComponentCard>

              <ComponentCard title="Text Skeleton">
                <div className="w-full">
                  <SkeletonText lines={4} />
                </div>
              </ComponentCard>

              <ComponentCard title="Gold Variant">
                <div className="w-full">
                  <SkeletonCard variant="gold" />
                </div>
              </ComponentCard>
            </ComponentGrid>
          </Section>

          {/* Badges Section */}
          <Section id="badges" title="*Badges*" description="Contadores e etiquetas de status.">
            <Subsection title="Variantes">
              <div className="flex flex-wrap gap-4">
                <Badge>Default</Badge>
                <Badge variant="gold">Gold</Badge>
                <Badge variant="gold-outline">Gold Outline</Badge>
                <Badge variant="navy">Navy</Badge>
                <Badge variant="navy-outline">Navy Outline</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="muted">Muted</Badge>
              </div>
            </Subsection>

            <Subsection title="Tamanhos">
              <div className="flex flex-wrap items-center gap-4">
                <Badge size="sm">Small</Badge>
                <Badge size="default">Default</Badge>
                <Badge size="lg">Large</Badge>
              </div>
            </Subsection>

            <Subsection title="Com Dot">
              <div className="flex flex-wrap gap-4">
                <Badge variant="success" dot>Online</Badge>
                <Badge variant="warning" dot>Pendente</Badge>
                <Badge variant="destructive" dot>Offline</Badge>
              </div>
            </Subsection>
          </Section>

          {/* Empty States Section */}
          <Section id="empty-states" title="Empty *States*" description="Telas para quando não há conteúdo.">
            <ComponentGrid columns={2}>
              <Card>
                <EmptyStateNoData description="Nenhum processo cadastrado ainda." action={{
                label: "Novo Processo",
                onClick: () => {}
              }} />
              </Card>

              <Card>
                <EmptyStateNoResults action={{
                label: "Limpar Filtros",
                onClick: () => {}
              }} />
              </Card>
            </ComponentGrid>
          </Section>

          {/* Steppers Section */}
          <Section id="steppers" title="*Steppers*" description="Indicadores de etapas de um processo.">
            <Subsection title="Horizontal">
              <Card className="p-8">
                <Stepper currentStep={stepperValue} steps={[{
                title: "Dados Pessoais"
              }, {
                title: "Documentos"
              }, {
                title: "Revisão"
              }, {
                title: "Conclusão"
              }]} />
                <div className="flex gap-4 mt-8 justify-center">
                  <Button variant="outline" onClick={() => setStepperValue(Math.max(0, stepperValue - 1))} disabled={stepperValue === 0}>
                    Anterior
                  </Button>
                  <Button onClick={() => setStepperValue(Math.min(3, stepperValue + 1))} disabled={stepperValue === 3}>
                    Próximo
                  </Button>
                </div>
              </Card>
            </Subsection>

            <Subsection title="Vertical">
              <Card className="p-8 max-w-md">
                <Stepper orientation="vertical" currentStep={2} steps={[{
                title: "Consulta Inicial",
                description: "Entrevista com o cliente"
              }, {
                title: "Análise Documental",
                description: "Revisão de documentos"
              }, {
                title: "Elaboração de Estratégia",
                description: "Definição do plano"
              }, {
                title: "Execução",
                description: "Início do processo"
              }]} />
              </Card>
            </Subsection>

            <Subsection title="Gold Variant">
              <Card className="p-8">
                <Stepper variant="gold" currentStep={1} steps={[{
                title: "Etapa 1"
              }, {
                title: "Etapa 2"
              }, {
                title: "Etapa 3"
              }]} />
              </Card>
            </Subsection>
          </Section>

          {/* Footer */}
          <footer className="py-16 border-t mt-16">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Scales size={32} weight="fill" className="text-primary" />
                <span className="font-display text-xl font-bold">Design System</span>
              </div>
              <p className="text-muted-foreground">
                Baseado no design de{" "}
                <a href="https://herosales.pro" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Hero Sales
                </a>
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Fontes: Playfair Display + Inter • Cores: Purple #6e5bbb + Navy #1a1535 + White
              </p>
            </div>
          </footer>
        </div>
      </main>

    </div>;
};
export default Index;