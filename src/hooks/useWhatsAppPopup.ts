/**
 * Hook e função para abrir o chat do LeadConnector globalmente
 * Permite que qualquer componente do site abra o balão de chat
 */

export const openWhatsAppPopup = () => {
  // 1. Tentar via Shadow DOM do LeadConnector <chat-widget>
  const chatWidget = document.querySelector("chat-widget");
  if (chatWidget?.shadowRoot) {
    const btn = chatWidget.shadowRoot.querySelector<HTMLElement>("button");
    if (btn) {
      btn.click();
      return;
    }
  }

  // 2. Fallback: seletores no DOM principal
  const btn =
    document.querySelector<HTMLElement>("#lc_chat_widget button") ||
    document.querySelector<HTMLElement>(".lc_text_widget_open") ||
    document.querySelector<HTMLElement>("#chat-widget button");

  if (btn) {
    btn.click();
  }
};

export const useWhatsAppPopup = () => {
  return { openWhatsAppPopup };
};
