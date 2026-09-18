export interface FaqItem {
  q: string;
  a: string;
}

export const faqs: FaqItem[] = [
  {
    q: 'Devo prepararmi per l’intervista?',
    a: 'Non devi preparare post o presentazioni. Ti facciamo domande sul tuo lavoro e approfondiamo insieme esperienze, decisioni e idee.',
  },
  {
    q: 'Come fate a scrivere con la mia voce?',
    a: 'Partiamo da come racconti le cose durante l’intervista: parole, esempi e punti di vista. Le tue indicazioni ci aiutano a rifinire i contenuti, e ogni post passa dalla tua approvazione.',
  },
  {
    q: 'Non posso farlo da solo con ChatGPT?',
    a: 'Puoi, se gli dai il contesto giusto. Se gli dici solo che mestiere fai, ti scrive il post medio del tuo settore. L’intervista serve a tirare fuori esperienze, criteri e ragioni delle tue scelte, anche quelle che dai per scontate. Noi le organizziamo, le usiamo per i post e ci occupiamo della pubblicazione.',
  },
  {
    q: 'Devo usare ChatGPT o Claude?',
    a: 'No. Dei contenuti ci occupiamo noi. Il cervello digitale è tuo e puoi collegarlo ai tuoi strumenti, se vuoi usarlo anche in autonomia.',
  },
  {
    q: 'Chi pubblica i post?',
    a: 'Noi, dopo la tua approvazione. Puoi chiederci modifiche prima che vengano programmati e pubblicati.',
  },
  {
    q: 'Posso disdire? E se non sono soddisfatto?',
    a: 'Puoi disdire quando vuoi, senza vincoli. E se i primi post non ti suonano tuoi, hai 10 giorni dalla loro consegna per chiedere il rimborso del primo mese, senza domande.',
  },
];
