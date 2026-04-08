# WhatsApp Widget

Widget flutuante de WhatsApp com formulário de contato para React.

![WhatsApp Widget](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)

## 📦 Instalação

### 1. Dependências

```bash
npm install zod react-hook-form @hookform/resolvers
```

### 2. Copiar Arquivos

1. Copie `WhatsAppWidget.tsx` para `src/components/`
2. Copie `whatsapp-bg.avif` para `public/images/`

### 3. Configurar Tailwind

Adicione o conteúdo de `tailwind.config.snippet.ts` ao seu `tailwind.config.ts`:

```ts
// tailwind.config.ts
export default {
  theme: {
    extend: {
      keyframes: {
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "slide-up": "slide-up 0.3s ease-out",
      },
    },
  },
};
```

## 🚀 Uso

```tsx
import WhatsAppWidget from "@/components/WhatsAppWidget";

function App() {
  return (
    <>
      {/* Seu conteúdo */}
      <WhatsAppWidget />
    </>
  );
}
```

## ⚙️ Personalização

Edite as constantes no início do arquivo `WhatsAppWidget.tsx`:

```ts
// Configurações - altere conforme necessário
const WHATSAPP_NUMBER = "5511999999999"; // Número com código do país
const COMPANY_NAME = "Minha Empresa";     // Nome exibido no header
const WELCOME_MESSAGE = "Olá! Como posso ajudar você hoje?"; // Mensagem inicial
```

## 📋 Campos do Formulário

O widget coleta:
- **Nome** - Obrigatório
- **E-mail** - Obrigatório, validado
- **Telefone** - Obrigatório, formatado automaticamente

## 🎨 Características

- ✅ Animação suave de entrada (slide-up)
- ✅ Efeito pulse no botão
- ✅ Validação de formulário com Zod
- ✅ Formatação automática de telefone brasileiro
- ✅ Design responsivo
- ✅ Overlay escuro ao abrir
- ✅ Visual autêntico do WhatsApp

## 📁 Estrutura de Arquivos

```
src/components/whatsapp-widget/
├── WhatsAppWidget.tsx          # Componente principal
├── whatsapp-bg.avif            # Imagem de fundo do chat
├── tailwind.config.snippet.ts  # Configuração do Tailwind
└── README.md                   # Este arquivo
```

## 📄 Licença

Livre para uso pessoal e comercial.
