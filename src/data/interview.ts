/**
 * Estratto dell'intervista mostrato nella sezione "Esempio".
 *
 * NOTA — nel prototipo questo blocco era marcato "TRASCRIZIONE PROVVISORIA,
 * da sostituire con la trascrizione reale registrata". Il testo qui sotto è
 * quello del prototipo: va sostituito con la trascrizione vera.
 *
 * `highlight: true` applica l'evidenziazione .hl al passaggio: sono le parti
 * che, nella narrazione della pagina, sono poi diventate il post.
 */

export interface Fragment {
  text: string;
  highlight?: boolean;
}

export interface InterviewLine {
  /** Chi parla. */
  speaker: string;
  /** `true` per le battute dell'intervistatore (rese in tono più basso). */
  interviewer?: boolean;
  /** Il testo della battuta, spezzato per poter evidenziare i passaggi. */
  fragments: Fragment[];
}

export const interview: InterviewLine[] = [
  {
    speaker: 'Discerns',
    interviewer: true,
    fragments: [
      { text: 'Usi Claude da mesi. Perché ci hai messo tanto a lasciare ChatGPT del tutto?' },
    ],
  },
  {
    speaker: 'Andrea',
    fragments: [
      { text: 'Per una cosa sola, la memoria. ' },
      {
        text: 'Avevo anni di conversazioni là dentro: il contesto sul mio lavoro, sui progetti, sul modo in cui ragiono.',
        highlight: true,
      },
      {
        text: ' Ricominciare da zero su Claude voleva dire rispiegare tutto ogni volta. Quindi tenevo aperti tutti e due, uno per il modello e uno per la memoria.',
      },
    ],
  },
  {
    speaker: 'Discerns',
    interviewer: true,
    fragments: [{ text: 'E cosa è cambiato?' }],
  },
  {
    speaker: 'Andrea',
    fragments: [
      {
        text: 'Anthropic ha messo l’import della memoria. Ti danno un prompt, lo incolli in ChatGPT, lui ti tira fuori tutto quello che sa di te, e lo incolli in Claude. Trenta secondi.',
      },
    ],
  },
  {
    speaker: 'Discerns',
    interviewer: true,
    fragments: [
      { text: 'Perché per te è una cosa da raccontare e non solo una funzione in più?' },
    ],
  },
  {
    speaker: 'Andrea',
    fragments: [
      {
        text: 'Perché la memoria è il vero lock-in dei tool AI. Più un modello ti conosce, più è utile. E più è utile, più diventa difficile cambiare.',
        highlight: true,
      },
      {
        text: ' La gente confronta i modelli, ma quello che ti tiene legato è quanto ti conoscono.',
      },
    ],
  },
];
