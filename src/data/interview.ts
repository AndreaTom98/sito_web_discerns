/**
 * Estratto dell'intervista mostrato nella sezione "L’intervista" (03/2026).
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
    speaker: 'Intervistatore',
    interviewer: true,
    fragments: [
      { text: 'Usi Claude da mesi, perché ci hai messo tanto a lasciare ChatGPT del tutto?' },
    ],
  },
  {
    speaker: 'Andrea',
    fragments: [
      { text: 'Per una cosa sola, la memoria. ' },
      {
        text: 'Avevo anni di conversazioni là dentro, come il contesto sul mio lavoro, e sui progetti e anche sul modo in cui ragiono.',
        highlight: true,
      },
      {
        text: ' Ricominciare da zero su Claude voleva dire rispiegare tutto ogni volta, quindi tenevo aperti tutti e due, uno per il modello e uno per la memoria.',
      },
    ],
  },
  {
    speaker: 'Intervistatore',
    interviewer: true,
    fragments: [{ text: 'E cosa è cambiato di preciso?' }],
  },
  {
    speaker: 'Andrea',
    fragments: [
      {
        text: 'Anthropic ha messo l’import della memoria… ti danno un prompt, lo incolli in ChatGPT e lui ti tira fuori tutto quello che sa di te, e poi lo incolli in Claude, è un processo da 30 secondi.',
      },
    ],
  },
  {
    speaker: 'Intervistatore',
    interviewer: true,
    fragments: [
      { text: 'Perché per te è una cosa da raccontare e non solo una funzione in più?' },
    ],
  },
  {
    speaker: 'Andrea',
    fragments: [
      {
        text: 'Perché la memoria è il vero lock-in dei tool AI. Più un modello ti conosce, più è utile, e più è utile, più diventa difficile cambiare.',
        highlight: true,
      },
      {
        text: ' La gente spesso confronta i modelli, ma quello che ti tiene legato è quanto ti conoscono.',
      },
    ],
  },
];
