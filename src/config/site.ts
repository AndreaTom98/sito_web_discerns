/**
 * Configurazione del sito — unico punto in cui inserire i dati reali.
 *
 * Tutti i valori marcati TODO vengono dal prototipo Claude Design, dove erano
 * props ancora da compilare. Finché restano vuoti il sito funziona comunque:
 * i CTA WhatsApp fanno fallback sull'ancora #contatto, esattamente come
 * previsto nel prototipo.
 */

export interface SiteConfig {
  /** Numero WhatsApp in formato internazionale, es. "+39 333 1234567".
   *  I caratteri non numerici vengono rimossi automaticamente. */
  whatsappNumber: string;
  /** Messaggio precompilato nella chat WhatsApp. */
  whatsappMessage: string;
  /** URL del profilo LinkedIn di Andrea Tomasello. */
  linkedinUrl: string;
  /** URL del singolo post LinkedIn mostrato nella sezione "L’intervista". */
  linkedinPostUrl: string;
  /** Dati aziendali mostrati nel footer. */
  companyName: string;
  vatNumber: string;
  companyAddress: string;
  contactEmail: string;
  /** Link legali del footer. */
  termsUrl: string;
  privacyUrl: string;
  cookieUrl: string;
  /** Ritratto di Andrea nella sezione "L’intervista".
   *  Metti il file in public/assets/ e indica qui il percorso, es.
   *  "/assets/ritratto-andrea.jpg". Vuoto = segnaposto. */
  founderPortrait: string;
  /** Testo alternativo del ritratto. */
  founderPortraitAlt: string;
  /** Disponibilità mostrata nella fascia prezzo, come pill con puntino.
   *  Stringa vuota = la riga non compare. Deve essere un dato reale. */
  availabilityLine: string;
  /** Immagine di anteprima per i link condivisi (og:image e twitter:image).
   *  Percorso sotto /assets/, es. "/assets/og-discerns.png" (1200×630).
   *  Stringa vuota = nessun tag emesso. */
  ogImage: string;
}

export const site: SiteConfig = {
  whatsappNumber: '', // TODO: numero WhatsApp
  whatsappMessage: 'Ciao Andrea, mi interessa Discerns per il mio LinkedIn.',
  linkedinUrl: 'https://www.linkedin.com/in/andrea-tomasello/',
  linkedinPostUrl: '', // TODO: URL del post sulla memoria ChatGPT → Claude
  companyName: 'Discerns S.R.L.',
  vatNumber: '07129080821',
  companyAddress: 'Via Principe di Villafranca 50, 90141 Palermo (PA)',
  contactEmail: 'info@discerns.ai',
  termsUrl: 'https://app.discerns.ai/links/terms',
  privacyUrl: 'https://www.iubenda.com/privacy-policy/39451382',
  cookieUrl: 'https://www.iubenda.com/privacy-policy/39451382/cookie-policy',
  founderPortrait: '/assets/andrea-tomasello.jpg',
  founderPortraitAlt: 'Ritratto di Andrea Tomasello, founder di Discerns',
  availabilityLine: '5 posti disponibili per settembre',
  ogImage: '/assets/og-discerns.png',
};

/** Metadati per <head>. */
export const meta = {
  title: 'Discerns · Un’ora di intervista al mese. Il tuo LinkedIn attivo, ogni settimana.',
  description:
    'Ti facciamo le domande giuste per far emergere quello che sai. Lo trasformiamo in 3 post a settimana su LinkedIn, con la tua voce, le tue esperienze e i tuoi punti di vista.',
  /** Titolo e testo dell'anteprima quando il link viene condiviso. */
  ogTitle: 'Fatti conoscere per quello che sai. Su LinkedIn, ogni settimana.',
  ogDescription:
    'Ti intervistiamo, trasformiamo quello che ci racconti in 3 post a settimana con la tua voce, li rileggiamo uno a uno e li pubblichiamo. Tu li approvi.',
  locale: 'it_IT',
  lang: 'it',
} as const;

/**
 * Costruisce il link WhatsApp.
 * Senza numero configurato, il CTA punta all'ancora #contatto nella stessa
 * scheda — così il bottone resta utile invece di rompersi.
 */
export function whatsappLink(config: SiteConfig = site): {
  href: string;
  target: '_self' | '_blank';
  configured: boolean;
} {
  const digits = (config.whatsappNumber ?? '').replace(/\D/g, '');
  if (!digits) {
    return { href: '#contatto', target: '_self', configured: false };
  }
  const text = encodeURIComponent(config.whatsappMessage);
  return { href: `https://wa.me/${digits}?text=${text}`, target: '_blank', configured: true };
}

/** Href con fallback: un link non configurato non deve portare a "#". */
export function linkOr(url: string, fallback = '#contatto'): string {
  return url && url.trim() ? url.trim() : fallback;
}
