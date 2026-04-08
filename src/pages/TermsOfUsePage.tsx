import { motion } from "framer-motion";
import { Header } from "@/components/sessoes/Header";
import { Footer } from "@/components/sessoes/Footer";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { SEOHead, BreadcrumbSchema } from "@/components/seo";
import { PAGE_SEO, SEO_CONFIG } from "@/lib/seo-config";

const TermsOfUsePage = () => {
  const lastUpdated = "08 de abril de 2026";

  return (
    <>
      <SEOHead
        title={PAGE_SEO.legal.termsOfUse.title}
        description={PAGE_SEO.legal.termsOfUse.description}
        canonical={`${SEO_CONFIG.siteUrl}/termos-de-uso`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Início", url: SEO_CONFIG.siteUrl },
          { name: "Termos de Uso", url: `${SEO_CONFIG.siteUrl}/termos-de-uso` },
        ]}
      />

      <Header />

      {/* Hero Section */}
      <section className="bg-secondary pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <div>
              <Badge variant="gold-outline" className="mb-6">
                Documento Legal
              </Badge>
            </div>
            <motion.h1
              variants={fadeInUp}
              className="font-display text-3xl md:text-5xl text-white mb-4"
            >
              Termos de Uso
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-white/60 text-sm"
            >
              Última atualização: {lastUpdated}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-10 md:py-[90px] bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            {/* Introdução */}
            <motion.div variants={staggerItem} className="mb-10 md:mb-12">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Bem-vindo ao site da <strong className="text-foreground">Hero Sales</strong>. Ao acessar e utilizar este site, você concorda em cumprir e estar vinculado aos seguintes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nosso site.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Estes Termos de Uso constituem um acordo legal entre você ("Usuário") e a Hero Sales ("Empresa", "nós" ou "nosso"), regulando o uso deste site e dos serviços oferecidos.
              </p>
            </motion.div>

            {/* 1. Aceitação dos Termos */}
            <motion.div variants={staggerItem} className="mb-10 md:mb-12">
              <h2 className="font-display text-2xl md:text-3xl text-secondary mb-4">
                1. Aceitação dos Termos
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ao acessar ou usar este site, você declara que:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                <li>Leu, compreendeu e concorda com estes Termos de Uso</li>
                <li>Tem capacidade legal para celebrar este acordo</li>
                <li>Utilizará o site de acordo com as leis aplicáveis</li>
                <li>Concorda com nossa Política de Privacidade</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação no site. O uso continuado do site após tais modificações constitui sua aceitação dos novos termos.
              </p>
            </motion.div>

            {/* 2. Descrição dos Serviços */}
            <motion.div variants={staggerItem} className="mb-10 md:mb-12">
              <h2 className="font-display text-2xl md:text-3xl text-secondary mb-4">
                2. Descrição dos Serviços
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A Hero Sales oferece uma plataforma SaaS (Software as a Service) especializada para clínicas e profissionais de saúde, incluindo:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                <li>CRM e gestão de relacionamento com pacientes</li>
                <li>Funis de vendas e captação de pacientes</li>
                <li>Agendamento online de consultas</li>
                <li>Automações de marketing e follow-up</li>
                <li>Chatbots com inteligência artificial</li>
                <li>Marketing por email e SMS</li>
                <li>Construtor de sites e landing pages</li>
                <li>Gestão de reputação online</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Os serviços específicos, prazos e valores serão definidos em propostas comerciais e contratos individuais firmados entre as partes.
              </p>
            </motion.div>

            {/* 3. Elegibilidade */}
            <motion.div variants={staggerItem} className="mb-10 md:mb-12">
              <h2 className="font-display text-2xl md:text-3xl text-secondary mb-4">
                3. Elegibilidade
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Para utilizar nossos serviços, você deve:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                <li>Ter pelo menos 18 anos de idade</li>
                <li>Possuir capacidade legal para contratar</li>
                <li>Fornecer informações verdadeiras e precisas</li>
                <li>Manter suas informações de contato atualizadas</li>
              </ul>
            </motion.div>

            {/* 4. Propriedade Intelectual */}
            <motion.div variants={staggerItem} className="mb-10 md:mb-12">
              <h2 className="font-display text-2xl md:text-3xl text-secondary mb-4">
                4. Propriedade Intelectual
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Todo o conteúdo deste site, incluindo mas não limitado a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                <li>Textos, artigos e materiais escritos</li>
                <li>Imagens, fotografias e ilustrações</li>
                <li>Logotipos, marcas e identidade visual</li>
                <li>Layout, design e estrutura do site</li>
                <li>Códigos-fonte e software</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                São de propriedade exclusiva da Hero Sales ou de seus licenciadores, protegidos pelas leis brasileiras de propriedade intelectual (Lei nº 9.610/1998 e Lei nº 9.279/1996).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                É expressamente proibida a reprodução, distribuição, modificação ou utilização comercial de qualquer conteúdo sem autorização prévia e por escrito.
              </p>
            </motion.div>

            {/* 5. Uso Permitido e Proibido */}
            <motion.div variants={staggerItem} className="mb-10 md:mb-12">
              <h2 className="font-display text-2xl md:text-3xl text-secondary mb-4">
                5. Uso Permitido e Proibido
              </h2>
              
              <h3 className="font-semibold text-foreground text-lg mb-3">5.1 Uso Permitido:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                <li>Navegar pelo site para fins informativos</li>
                <li>Entrar em contato para solicitar informações sobre serviços</li>
                <li>Compartilhar links do site em redes sociais</li>
                <li>Citar trechos do conteúdo com devida atribuição de fonte</li>
              </ul>

              <h3 className="font-semibold text-foreground text-lg mb-3">5.2 Uso Proibido:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                <li>Copiar, reproduzir ou distribuir conteúdo sem autorização</li>
                <li>Utilizar o site para fins ilegais ou fraudulentos</li>
                <li>Tentar acessar áreas restritas do sistema</li>
                <li>Transmitir vírus, malware ou código malicioso</li>
                <li>Realizar engenharia reversa do site ou sistemas</li>
                <li>Coletar dados de outros usuários sem consentimento</li>
                <li>Utilizar bots, scrapers ou ferramentas automatizadas</li>
                <li>Difamar, assediar ou prejudicar a reputação da empresa</li>
              </ul>
            </motion.div>

            {/* 6. Limitação de Responsabilidade */}
            <motion.div variants={staggerItem} className="mb-10 md:mb-12">
              <h2 className="font-display text-2xl md:text-3xl text-secondary mb-4">
                6. Limitação de Responsabilidade
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Na máxima extensão permitida pela lei brasileira:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                <li>O site é fornecido "como está", sem garantias de qualquer tipo</li>
                <li>Não garantimos que o site estará disponível ininterruptamente</li>
                <li>Não nos responsabilizamos por erros, omissões ou imprecisões no conteúdo</li>
                <li>Não nos responsabilizamos por danos indiretos, incidentais ou consequenciais</li>
                <li>Links para sites de terceiros são fornecidos apenas para conveniência</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Nossa responsabilidade total não excederá o valor pago pelos serviços efetivamente contratados.
              </p>
            </motion.div>

            {/* 7. Isenção de Garantias */}
            <motion.div variants={staggerItem} className="mb-10 md:mb-12">
              <h2 className="font-display text-2xl md:text-3xl text-secondary mb-4">
                7. Isenção de Garantias
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Isentamo-nos expressamente de todas as garantias, expressas ou implícitas, incluindo:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                <li>Garantias de comercialização e adequação a um propósito específico</li>
                <li>Garantia de que o site atenderá às suas expectativas</li>
                <li>Garantia de resultados específicos dos serviços</li>
                <li>Garantia de que o site será livre de erros ou vírus</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Os resultados dos serviços de marketing digital dependem de diversos fatores externos e não podem ser garantidos.
              </p>
            </motion.div>

            {/* 8. Indenização */}
            <motion.div variants={staggerItem} className="mb-10 md:mb-12">
              <h2 className="font-display text-2xl md:text-3xl text-secondary mb-4">
                8. Indenização
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Você concorda em indenizar, defender e isentar a Hero Sales, seus diretores, funcionários, parceiros e prestadores de serviços de qualquer reclamação, dano, perda, responsabilidade, custo ou despesa (incluindo honorários advocatícios) decorrentes de: (a) seu uso do site; (b) violação destes Termos; (c) violação de direitos de terceiros; (d) qualquer conteúdo que você envie ou transmita através do site.
              </p>
            </motion.div>

            {/* 9. Lei Aplicável e Foro */}
            <motion.div variants={staggerItem} className="mb-10 md:mb-12">
              <h2 className="font-display text-2xl md:text-3xl text-secondary mb-4">
                9. Lei Aplicável e Foro Competente
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Estes Termos de Uso são regidos exclusivamente pelas leis da República Federativa do Brasil.
              </p>
              <div className="bg-muted/50 rounded-lg p-6 border border-border">
                <p className="text-foreground font-medium mb-2">Foro Eleito</p>
                <p className="text-muted-foreground text-sm">
                  Fica eleito o Foro da Comarca de Chapecó, Estado de Santa Catarina, Brasil, para dirimir quaisquer questões oriundas destes Termos, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
                </p>
              </div>
            </motion.div>

            {/* 10. Rescisão */}
            <motion.div variants={staggerItem} className="mb-10 md:mb-12">
              <h2 className="font-display text-2xl md:text-3xl text-secondary mb-4">
                10. Rescisão
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Podemos, a nosso exclusivo critério:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                <li>Encerrar ou suspender seu acesso ao site a qualquer momento</li>
                <li>Remover ou recusar publicação de conteúdo</li>
                <li>Tomar medidas legais contra violações destes Termos</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                A rescisão não afetará os direitos e obrigações das partes acumulados até a data da rescisão.
              </p>
            </motion.div>

            {/* 11. Disposições Gerais */}
            <motion.div variants={staggerItem} className="mb-10 md:mb-12">
              <h2 className="font-display text-2xl md:text-3xl text-secondary mb-4">
                11. Disposições Gerais
              </h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                <li><strong className="text-foreground">Integralidade:</strong> Estes Termos constituem o acordo integral entre as partes</li>
                <li><strong className="text-foreground">Independência das cláusulas:</strong> A invalidade de qualquer disposição não afetará as demais</li>
                <li><strong className="text-foreground">Renúncia:</strong> A não aplicação de qualquer direito não constitui renúncia</li>
                <li><strong className="text-foreground">Cessão:</strong> Você não pode ceder seus direitos sem nosso consentimento</li>
              </ul>
            </motion.div>

            {/* 12. Contato */}
            <motion.div variants={staggerItem}>
              <h2 className="font-display text-2xl md:text-3xl text-secondary mb-4">
                12. Contato
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Para dúvidas sobre estes Termos de Uso, entre em contato:
              </p>
              <div className="bg-muted/50 rounded-lg p-6 border border-border">
                <p className="text-foreground font-medium mb-2">Hero Sales</p>
                <p className="text-muted-foreground text-sm mb-1">Chapecó, SC - Brasil</p>
                <p className="text-muted-foreground text-sm mb-1">E-mail: contato@herosales.pro</p>
                <p className="text-muted-foreground text-sm">Telefone: (49) 98305-5561</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TermsOfUsePage;
