import type { CSSProperties } from "react";

const communities = [
  {
    index: "01",
    name: "RYN",
    label: "eSport Community",
    description:
      "Competizione, crescita e identità. Entra nell'ecosistema RYN e scopri roster, team e progetti della community.",
    href: "https://ryn.yourcommunity.it",
    status: "Online",
    accent: "#ff4655",
    tags: ["League of Legends", "Competitive", "Community"],
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="YourCommunity, torna all'inizio">
          <span className="brand-mark">YC</span>
          <span className="brand-name">YourCommunity</span>
        </a>
        <nav aria-label="Navigazione principale">
          <a href="#community">Community</a>
          <a className="nav-cta" href="mailto:info@yourcommunity.it">Porta il tuo team</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow"><span /> Il punto di accesso alle community eSport</p>
          <h1>Scegli la tua<span>community.</span></h1>
          <p className="hero-copy">
            Identità diverse, un unico spazio. Scopri i team che ospitiamo e scegli la
            community che vuoi seguire.
          </p>
          <a className="primary-button" href="#community">
            Esplora i team <span aria-hidden="true">↘</span>
          </a>
        </div>
        <div className="hero-aside" aria-hidden="true">
          <span className="aside-index">YC / 001</span>
          <div className="monogram">Y</div>
          <span className="aside-copy">Connect · Compete · Belong</span>
        </div>
        <div className="hero-foot">
          <span>Community indipendenti</span>
          <span>Infrastruttura condivisa</span>
          <span>Un solo hub</span>
        </div>
      </section>

      <section className="directory" id="community">
        <div className="section-heading">
          <div><p className="eyebrow"><span /> Directory</p><h2>Trova il tuo team.</h2></div>
          <p>
            Ogni community mantiene il proprio carattere, il proprio spazio e la propria
            storia. YourCommunity le rende semplici da trovare.
          </p>
        </div>

        <div className="community-grid">
          {communities.map((community) => (
            <a
              className="community-card"
              href={community.href}
              key={community.name}
              style={{ "--accent": community.accent } as CSSProperties}
            >
              <div className="card-topline">
                <span>{community.index}</span>
                <span className="status"><i /> {community.status}</span>
              </div>
              <div className="community-symbol" aria-hidden="true"><span>R</span></div>
              <div className="community-body">
                <p>{community.label}</p>
                <h3>{community.name}</h3>
                <p className="card-description">{community.description}</p>
                <div className="tag-list">
                  {community.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              <span className="card-arrow" aria-hidden="true">↗</span>
            </a>
          ))}

          <article className="community-card future-card">
            <div className="card-topline">
              <span>{String(communities.length + 1).padStart(2, "0")}</span>
              <span className="status muted"><i /> Prossimamente</span>
            </div>
            <div className="future-plus" aria-hidden="true">+</div>
            <div className="community-body">
              <p>La prossima community</p>
              <h3>Potrebbe essere la tua.</h3>
              <p className="card-description">
                Cerchiamo realtà con una forte identità e la voglia di costruire qualcosa
                che duri.
              </p>
              <a className="text-link" href="mailto:info@yourcommunity.it">
                Parliamone <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="manifesto">
        <p className="manifesto-kicker">Il modello YourCommunity</p>
        <h2>Identità autonome.<br /><span>Infrastruttura condivisa.</span></h2>
        <div className="manifesto-copy">
          <p>
            Non uniformiamo le community: diamo loro un posto in cui essere riconoscibili,
            raggiungibili e libere di crescere.
          </p>
          <div className="steps">
            <div><span>01</span><strong>Scopri</strong><p>Esplora le realtà ospitate.</p></div>
            <div><span>02</span><strong>Scegli</strong><p>Trova quella che ti rappresenta.</p></div>
            <div><span>03</span><strong>Segui</strong><p>Entra nel suo spazio dedicato.</p></div>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand" href="#top">
          <span className="brand-mark">YC</span><span className="brand-name">YourCommunity</span>
        </a>
        <p>Community eSport, un unico punto di accesso.</p>
        <a href="mailto:info@yourcommunity.it">info@yourcommunity.it</a>
      </footer>
    </main>
  );
}
