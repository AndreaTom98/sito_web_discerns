# Discerns — Home

Implementazione della home Discerns a partire dal prototipo Claude Design
`Discerns Home Nocturne.dc.html`, sul design system **Nocturne**.

Sito statico in **Astro**: nessun runtime lato server, nessuna dipendenza
esterna a parte i font. La build produce un `dist/` pubblicabile ovunque.

## Comandi

```bash
npm install      # una volta
npm run dev      # sviluppo su http://localhost:4321
npm run build    # build statica in dist/
npm run preview  # anteprima della build
```

> Node: il progetto è su **Astro 4** perché questa macchina ha Node 18.15 e
> Astro 5 richiede Node ≥ 18.17. Aggiornando Node si può passare ad Astro 5
> con `npm install astro@latest`; l'API usata qui è identica nelle due major.

## Cosa resta da compilare

Tutti i dati mancanti stanno in un unico file: **`src/config/site.ts`**.
Sono i valori che nel prototipo erano props ancora vuote, marcati `TODO`:

| Campo | Stato |
| --- | --- |
| `WHATSAPP_NUMBER`, `WHATSAPP_MESSAGE`, `WHATSAPP_URL` | Compilati: il link di tutti i bottoni WhatsApp, in un solo punto |
| `linkedinPostUrl` | **Da compilare**: URL del post mostrato nella sezione "L’intervista" |
| `ogImage` | **Da compilare**: immagine di anteprima dei link, es. `/assets/og-discerns.png` (1200×630). Vuota = nessun tag `og:image` |
| `availabilityLine` | Compilato ("5 posti disponibili per settembre"): va tenuto vero, stringa vuota lo nasconde |
| `founderPortrait` | Compilato: `public/assets/andrea-tomasello.jpg` |
| `companyName`, `vatNumber`, `companyAddress`, `contactEmail` | Compilati: dati aziendali del footer |
| `termsUrl`, `privacyUrl`, `cookieUrl` | Compilati: link legali del footer (Iubenda e app) |

Finché restano vuoti **il sito funziona lo stesso**: i link non configurati
puntano all'ancora `#contatto`. Nessun link morto in pagina.

Altri punti:

- **Trascrizione dell'intervista** (`src/data/interview.ts`): è quella reale
  del 03/2026. I passaggi con `highlight: true` sono quelli evidenziati.
- **Dicitura IVA** — nella sezione prezzo va confermato se i €199 sono IVA
  inclusa o esclusa (vedi TODO in `src/components/Offer.astro`).

## Struttura

```
src/
  config/site.ts        ← unico file da compilare
  data/faq.ts           ← le 6 domande
  data/interview.ts     ← estratto dell'intervista (provvisorio)
  layouts/Base.astro    ← <head>, meta, script delle animazioni
  components/           ← una per sezione del design
  styles/
    nocturne.css        ← design system, copia intatta dal bundle
    nocturne.readme.md  ← guida del design system
    page.css            ← layout e movimento della home
  pages/index.astro
public/assets/          ← immagini
istruzioni-per-il-sito/ ← bundle originale di Claude Design (riferimento)
```

## Regole del design system

`src/styles/nocturne.css` è la fonte di verità del look ed è una copia
intatta del bundle: **non modificarlo a mano** per cambiare la resa di una
sezione. Colori, font, spazi, raggi e ombre si prendono sempre dalle
variabili (`var(--color-*)`, `var(--font-*)`, `var(--radius-*)`,
`var(--shadow-*)`), mai come valori scritti a mano. La guida completa è in
`src/styles/nocturne.readme.md`.

Convenzioni che la pagina rispetta e che vale la pena non rompere:

- I filetti orizzontali **sfumano agli estremi** (classi `.rule` / `.rule-top`).
  Le marche corte d'accento, invece, restano piene.
- Il pulsante primario è **pieno** (`.btn-solid`): deviazione deliberata dal
  contorno di Nocturne, chiesta per dare più stacco alle CTA.
- Le uniche aree accentate sono la fascia dell'offerta (`--color-section`),
  la colonna Discerns del confronto (stessa tinta, per legarla al prezzo che
  la segue) e il riquadro del cervello digitale (rampa scura dell'accento).
- Prezzi con l'euro davanti e senza spazio (`€199/mese`), e niente trattini
  lunghi nei testi visibili: si usano virgola, punto o "·".

## Accessibilità e comportamento senza JavaScript

La pagina resta completamente leggibile e usabile con JS disattivato:

- Le FAQ sono `<details>`/`<summary>` native — si aprono senza JS. Il
  JavaScript aggiunge solo il comportamento "una alla volta" dove
  l'attributo `name` non è ancora supportato.
- Le animazioni di ingresso si attivano solo quando il JS aggiunge
  `data-anim` al `<body>`. Senza JS nessun blocco resta a opacità 0.
- `prefers-reduced-motion` disattiva movimento e scroll animato.
- Focus da tastiera con il ring d'accento del design system; link "Vai al
  contenuto" in testa alla pagina.
