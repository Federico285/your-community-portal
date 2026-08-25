# YourCommunity Portal

Landing ufficiale di [yourcommunity.it](https://yourcommunity.it): un punto di accesso unico per scoprire e seguire community eSport indipendenti.

## Architettura dei domini

- `yourcommunity.it` — portale principale e directory delle community
- `ryn.yourcommunity.it` — sito dedicato alla community RYN
- `dev.ryn.yourcommunity.it` — ambiente di sviluppo RYN

## Sviluppo locale

```bash
npm install
npm run dev
```

Per verificare la versione di produzione:

```bash
npm run lint
npm run build
```

Le community mostrate nella landing sono definite nell'array `communities` in `app/page.tsx`.
