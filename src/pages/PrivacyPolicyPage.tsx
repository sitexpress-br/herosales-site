import { motion } from "framer-motion";
import { Header } from "@/components/sessoes/Header";
import { Footer } from "@/components/sessoes/Footer";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { SEOHead, BreadcrumbSchema } from "@/components/seo";
import { PAGE_SEO, SEO_CONFIG } from "@/lib/seo-config";

const PrivacyPolicyPage = () => {
  const lastUpdated = "08 de abril de 2026";

  return (
    <>
      <SEOHead
        title={PAGE_SEO.legal.privacyPolicy.title}
        description={PAGE_SEO.legal.privacyPolicy.description}
        canonical={`${SEO_CONFIG.siteUrl}/politica-de-privacidade`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Início", url: SEO_CONFIG.siteUrl },
          { name: "Política de Privacidade", url: `${SEO_CONFIG.siteUrl}/politica-de-privacidade` },
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
              Política de Privacidade
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
                A <strong className="text-foreground">Hero Sales</strong> ("nós", "nosso" ou "Empresa"), com sede em Chapecó/SC, Brasil, está comprometida com a proteção da sua privacidade e dos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD) e demais legislações aplicáveis.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Esta Política de Privacidade descreve como coletamos, usamos, armazenamos, compartilhamos e protegemos suas informações pessoais quando você utiliza nossa plataforma e serviços.
              </p>
            </motion.div>

            {/* 1. Controlador de Dados */}
            <motion.div variants={staggerItem} className="mb-10 md:mb-12">
              <h2 className="font-display text-2xl md:text-3xl text-secondary mb-4">
                1. Controlador de Dados
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O controlador responsável pelo tratamento dos seus dados pessoais é:
              </p>
              <div className="bg-muted/50 rounded-lg p-6 border border-border">
                <p className="text-foreground font-medium mb-2">Hero Sales</p>
                <p className="text-muted-foreground text-sm mb-1">Chapecó, SC - Brasil</p>
                <p className="text-muted-foreground text-sm mb-1">E-mail: contato@herosales.pro</p>
                <p className="text-muted-foreground text-sm">Telefone: (49) 98305-5561</p>
              </div>
            </motion.div>

            {/* 2. Dados Coletados */}
            <motion.div variants={staggerItem} className="mb-10 md:mb-12">
              <h2 className="font-display text-2xl md:text-3xl text-secondary mb-4">
                2. Dados Pessoais Coletados
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Coletamos os seguintes tipos de dados pessoais:
              </p>
              
              <h3 className="font-semibold text-foreground text-lg mb-3">2.1 Dados fornecidos diretamente por você:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                <li>Nome completo</li>
                <li>Endereço de e-mail</li>
                <li>Número de telefone/WhatsApp</li>
                <li>Nome da clínica</li>
                <li>Especialidade médica</li>
                <li>Mensagens enviadas através dos formulários de contato</li>
              </ul>

              <h3 className="font-semibold text-foreground text-lg mb-3">2.2 Dados coletados automaticamente:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                <li>Endereço IP</li>
                <li>Tipo de navegador e dispositivo</li>
                <li>Sistema operacional</li>
                <li>Páginas visitadas e tempo de permanência</li>
                <li>Data e hora de acesso</li>
                <li>Origem do tráfego (referrer)</li>
                <li>Cookies e tecnologias similares</li>
              </ul>
            </motion.div>

            {/* 3. Finalidade do Tratamento */}
            <motion.div variants={staggerItem} className="mb-10 md:mb-12">
              <h2 className="font-display text-2xl md:text-3xl text-secondary mb-4">
                3. Finalidade do Tratamento
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Utilizamos seus dados pessoais para as seguintes finalidades:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                <li>Responder às suas solicitações e dúvidas</li>
                <li>Apresentar propostas comerciais de nossos serviços</li>
                <li>Enviar comunicações de marketing (mediante seu consentimento)</li>
                <li>Personalizar sua experiência em nosso site</li>
                <li>Melhorar nossos serviços e conteúdos</li>
                <li>Cumprir obrigações legais e regulatórias</li>
                <li>Proteger nossos direitos legais</li>
                <li>Análises estatísticas e de desempenho do site</li>
              </ul>
            </motion.div>

            {/* 4. Base Legal */}
            <motion.div variants={staggerItem} className="mb-10 md:mb-12">
              <h2 className="font-display text-2xl md:text-3xl text-secondary mb-4">
                4. Base Legal para o Tratamento
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O tratamento dos seus dados pessoais é realizado com base nas seguintes hipóteses legais previstas na LGPD (Art. 7º):
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                <li><strong className="text-foreground">Consentimento:</strong> Para envio de comunicações de marketing e newsletters</li>
                <li><strong className="text-foreground">Execução de contrato:</strong> Para prestação dos serviços contratados</li>
                <li><strong className="text-foreground">Legítimo interesse:</strong> Para melhorar nossos serviços e comunicação comercial</li>
                <li><strong className="text-foreground">Cumprimento de obrigação legal:</strong> Para atender exigências legais e regulatórias</li>
              </ul>
            </motion.div>

            {/* 5. Compartilhamento de Dados */}
            <motion.div variants={staggerItem} className="mb-10 md:mb-12">
              <h2 className="font-display text-2xl md:text-3xl text-secondary mb-4">
                5. Compartilhamento de Dados
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Seus dados pessoais poderão ser compartilhados com:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                <li><strong className="text-foreground">Prestadores de serviços:</strong> Empresas que nos auxiliam na operação do site, hospedagem, análise de dados e marketing digital</li>
                <li><strong className="text-foreground">Plataformas de análise:</strong> Google Analytics e ferramentas similares para análise de tráfego</li>
                <li><strong className="text-foreground">Autoridades públicas:</strong> Quando exigido por lei ou ordem judicial</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Todos os terceiros com quem compartilhamos dados estão obrigados contratualmente a proteger suas informações e utilizá-las apenas para as finalidades especificadas.
              </p>
            </motion.div>

            {/* 6. Retenção de Dados */}
            <motion.div variants={staggerItem} className="mb-10 md:mb-12">
              <h2 className="font-display text-2xl md:text-3xl text-secondary mb-4">
                6. Tempo de Retenção
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Mantemos seus dados pessoais pelo tempo necessário para cumprir as finalidades para as quais foram coletados, incluindo:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                <li>Dados de contato: enquanto houver relacionamento comercial ativo ou por até 5 anos após o último contato</li>
                <li>Dados de navegação: por até 2 anos</li>
                <li>Dados fiscais e contratuais: pelo prazo legal exigido (geralmente 5 a 10 anos)</li>
              </ul>
            </motion.div>

            {/* 7. Direitos do Titular */}
            <motion.div variants={staggerItem} className="mb-10 md:mb-12">
              <h2 className="font-display text-2xl md:text-3xl text-secondary mb-4">
                7. Seus Direitos (LGPD Art. 18)
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Você possui os seguintes direitos em relação aos seus dados pessoais:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                <li><strong className="text-foreground">Confirmação e acesso:</strong> Confirmar a existência e acessar seus dados</li>
                <li><strong className="text-foreground">Correção:</strong> Solicitar a correção de dados incompletos ou desatualizados</li>
                <li><strong className="text-foreground">Anonimização ou eliminação:</strong> Solicitar a anonimização ou exclusão de dados desnecessários</li>
                <li><strong className="text-foreground">Portabilidade:</strong> Solicitar a portabilidade dos dados para outro fornecedor</li>
                <li><strong className="text-foreground">Revogação do consentimento:</strong> Revogar o consentimento a qualquer momento</li>
                <li><strong className="text-foreground">Oposição:</strong> Opor-se ao tratamento em determinadas circunstâncias</li>
                <li><strong className="text-foreground">Informação:</strong> Ser informado sobre compartilhamento de dados</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Para exercer seus direitos, entre em contato conosco através do e-mail: <strong className="text-foreground">privacidade@herosales.pro</strong>
              </p>
            </motion.div>

            {/* 8. Cookies */}
            <motion.div variants={staggerItem} className="mb-10 md:mb-12">
              <h2 className="font-display text-2xl md:text-3xl text-secondary mb-4">
                8. Cookies e Tecnologias Similares
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Utilizamos cookies e tecnologias similares para:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                <li><strong className="text-foreground">Cookies essenciais:</strong> Necessários para o funcionamento do site</li>
                <li><strong className="text-foreground">Cookies de análise:</strong> Para entender como você utiliza o site (Google Analytics)</li>
                <li><strong className="text-foreground">Cookies de marketing:</strong> Para personalizar anúncios e medir campanhas</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Você pode gerenciar suas preferências de cookies através das configurações do seu navegador. Note que a desativação de alguns cookies pode afetar a funcionalidade do site.
              </p>
            </motion.div>

            {/* 9. Segurança */}
            <motion.div variants={staggerItem} className="mb-10 md:mb-12">
              <h2 className="font-display text-2xl md:text-3xl text-secondary mb-4">
                9. Segurança dos Dados
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados pessoais, incluindo:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                <li>Criptografia SSL/TLS em todas as transmissões de dados</li>
                <li>Acesso restrito aos dados pessoais apenas a colaboradores autorizados</li>
                <li>Monitoramento contínuo de segurança</li>
                <li>Backups regulares em servidores seguros</li>
                <li>Políticas internas de proteção de dados</li>
              </ul>
            </motion.div>

            {/* 10. Transferência Internacional */}
            <motion.div variants={staggerItem} className="mb-10 md:mb-12">
              <h2 className="font-display text-2xl md:text-3xl text-secondary mb-4">
                10. Transferência Internacional de Dados
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Alguns dos nossos prestadores de serviços podem estar localizados fora do Brasil. Nesses casos, garantimos que a transferência internacional de dados seja realizada em conformidade com a LGPD, seja para países com nível adequado de proteção ou mediante cláusulas contratuais específicas que assegurem a proteção dos seus dados.
              </p>
            </motion.div>

            {/* 11. Encarregado de Dados (DPO) */}
            <motion.div variants={staggerItem} className="mb-10 md:mb-12">
              <h2 className="font-display text-2xl md:text-3xl text-secondary mb-4">
                11. Encarregado de Dados (DPO)
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Para questões relacionadas à proteção de dados pessoais, entre em contato com nosso Encarregado de Dados:
              </p>
              <div className="bg-muted/50 rounded-lg p-6 border border-border">
                <p className="text-foreground font-medium mb-2">Encarregado de Proteção de Dados</p>
                <p className="text-muted-foreground text-sm mb-1">E-mail: privacidade@herosales.pro</p>
                <p className="text-muted-foreground text-sm">Telefone: (49) 98305-5561</p>
              </div>
            </motion.div>

            {/* 12. Alterações */}
            <motion.div variants={staggerItem} className="mb-10 md:mb-12">
              <h2 className="font-display text-2xl md:text-3xl text-secondary mb-4">
                12. Alterações nesta Política
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças em nossas práticas ou na legislação aplicável. Recomendamos que você revise esta página regularmente. A data da última atualização será sempre indicada no topo deste documento. Alterações significativas serão comunicadas através do nosso site.
              </p>
            </motion.div>

            {/* 13. Contato */}
            <motion.div variants={staggerItem}>
              <h2 className="font-display text-2xl md:text-3xl text-secondary mb-4">
                13. Contato
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Se você tiver dúvidas, comentários ou solicitações relacionadas a esta Política de Privacidade ou ao tratamento dos seus dados pessoais, entre em contato conosco:
              </p>
              <div className="bg-muted/50 rounded-lg p-6 border border-border">
                <p className="text-foreground font-medium mb-2">Hero Sales</p>
                <p className="text-muted-foreground text-sm mb-1">E-mail: contato@herosales.pro</p>
                <p className="text-muted-foreground text-sm mb-1">E-mail (Privacidade): privacidade@herosales.pro</p>
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

export default PrivacyPolicyPage;
