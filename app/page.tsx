"use client";

import { useEffect, useRef, type CSSProperties } from "react";

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
  const storyRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const story = storyRef.current;
    if (!story) return;

    const scenes = Array.from(story.querySelectorAll<HTMLElement>("[data-story-scene]"));
    const enterStart = [0, 0.18, 0.43, 0.69];
    const enterEnd = [0, 0.26, 0.51, 0.78];
    const exitStart = [0.18, 0.43, 0.69, 1];
    const exitEnd = [0.26, 0.51, 0.78, 1];
    let frame = 0;

    const smoothstep = (value: number) => {
      const clamped = Math.min(1, Math.max(0, value));
      return clamped * clamped * (3 - 2 * clamped);
    };

    const render = () => {
      frame = 0;
      const bounds = story.getBoundingClientRect();
      const distance = Math.max(1, bounds.height - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -bounds.top / distance));

      let motion = 1;
      if (progress < exitStart[0]) motion = 0;
      else if (progress < exitEnd[0]) motion = smoothstep((progress - exitStart[0]) / (exitEnd[0] - exitStart[0])) / 3;
      else if (progress < exitStart[1]) motion = 1 / 3;
      else if (progress < exitEnd[1]) motion = (1 + smoothstep((progress - exitStart[1]) / (exitEnd[1] - exitStart[1]))) / 3;
      else if (progress < exitStart[2]) motion = 2 / 3;
      else if (progress < exitEnd[2]) motion = (2 + smoothstep((progress - exitStart[2]) / (exitEnd[2] - exitStart[2]))) / 3;

      story.style.setProperty("--story-progress", progress.toFixed(4));
      story.style.setProperty("--story-motion", motion.toFixed(4));

      scenes.forEach((scene, index) => {
        const enter = index === 0
          ? 1
          : smoothstep((progress - enterStart[index]) / (enterEnd[index] - enterStart[index]));
        const exit = index === scenes.length - 1
          ? 1
          : 1 - smoothstep((progress - exitStart[index]) / (exitEnd[index] - exitStart[index]));
        const presence = Math.min(enter, exit);
        const direction = progress < enterEnd[index] ? 1 : progress > exitStart[index] ? -1 : 0;
        scene.style.setProperty("--scene-presence", presence.toFixed(4));
        scene.style.setProperty("--scene-direction", String(direction));
      });
    };

    const requestRender = () => {
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    render();
    window.addEventListener("scroll", requestRender, { passive: true });
    window.addEventListener("resize", requestRender);

    return () => {
      window.removeEventListener("scroll", requestRender);
      window.removeEventListener("resize", requestRender);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <main>
      <header className="site-header story-header">
        <a className="brand" href="#top" aria-label="YourCommunity, torna all'inizio">
          <span className="brand-mark">YC</span>
          <span className="brand-name">YourCommunity</span>
        </a>
        <nav aria-label="Navigazione principale">
          <a href="#community">Community</a>
          <a className="nav-cta" href="mailto:info@yourcommunity.it">Porta il tuo team</a>
        </nav>
      </header>

      <section className="scroll-story" id="top" ref={storyRef}>
        <div className="story-stage">
          <div className="story-grid" aria-hidden="true" />
          <div className="story-glow" aria-hidden="true" />
          <div className="story-orbit orbit-one" aria-hidden="true" />
          <div className="story-orbit orbit-two" aria-hidden="true" />
          <div className="story-monogram" aria-hidden="true"><span>Y</span><span>C</span></div>

          <div className="story-counter" aria-hidden="true">
            <span>SCROLL TO DISCOVER</span>
            <i><b /></i>
            <span>04</span>
          </div>

          <div className="story-scenes">
            <article className="story-scene scene-intro" data-story-scene>
              <p className="eyebrow"><span /> YourCommunity / 2026</p>
              <h1>Il tuo gioco.<strong>La tua gente.</strong></h1>
              <p>Community eSport indipendenti, connesse da un unico punto di accesso.</p>
            </article>

            <article className="story-scene scene-identity" data-story-scene>
              <p className="scene-number">01 / Identità</p>
              <h2>Non segui<br />soltanto un team.</h2>
              <p>Entri nel suo mondo. Ne condividi il linguaggio, le sfide e la storia.</p>
            </article>

            <article className="story-scene scene-ryn" data-story-scene>
              <div className="ryn-reveal" aria-hidden="true"><span>R</span></div>
              <div className="ryn-copy">
                <p className="scene-number">Prima destinazione / Online</p>
                <h2>RYN</h2>
                <p>Una community competitiva. Molteplici team. Un’identità riconoscibile.</p>
              </div>
            </article>

            <article className="story-scene scene-choice" data-story-scene>
              <p className="scene-number">Il prossimo passo è tuo</p>
              <h2>Scegli dove<br /><strong>appartenere.</strong></h2>
              <a className="primary-button" href="#community">Esplora le community <span>↓</span></a>
            </article>
          </div>

          <p className="story-caption">Connect · Compete · Belong</p>
        </div>
      </section>

      <section className="directory" id="community">
        <div className="section-heading">
          <div><p className="eyebrow"><span /> Directory</p><h2>Trova il tuo team.</h2></div>
          <p>Ogni community mantiene il proprio carattere, il proprio spazio e la propria storia. YourCommunity le rende semplici da trovare.</p>
        </div>

        <div className="community-grid">
          {communities.map((community) => (
            <a className="community-card" href={community.href} key={community.name} style={{ "--accent": community.accent } as CSSProperties}>
              <div className="card-topline"><span>{community.index}</span><span className="status"><i /> {community.status}</span></div>
              <div className="community-symbol" aria-hidden="true"><span>R</span></div>
              <div className="community-body">
                <p>{community.label}</p><h3>{community.name}</h3>
                <p className="card-description">{community.description}</p>
                <div className="tag-list">{community.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
              <span className="card-arrow" aria-hidden="true">↗</span>
            </a>
          ))}

          <article className="community-card future-card">
            <div className="card-topline"><span>02</span><span className="status muted"><i /> Prossimamente</span></div>
            <div className="future-plus" aria-hidden="true">+</div>
            <div className="community-body">
              <p>La prossima community</p><h3>Potrebbe essere la tua.</h3>
              <p className="card-description">Cerchiamo realtà con una forte identità e la voglia di costruire qualcosa che duri.</p>
              <a className="text-link" href="mailto:info@yourcommunity.it">Parliamone <span>→</span></a>
            </div>
          </article>
        </div>
      </section>

      <section className="manifesto">
        <p className="manifesto-kicker">Il modello YourCommunity</p>
        <h2>Identità autonome.<br /><span>Infrastruttura condivisa.</span></h2>
        <div className="manifesto-copy">
          <p>Non uniformiamo le community: diamo loro un posto in cui essere riconoscibili, raggiungibili e libere di crescere.</p>
          <div className="steps">
            <div><span>01</span><strong>Scopri</strong><p>Esplora le realtà ospitate.</p></div>
            <div><span>02</span><strong>Scegli</strong><p>Trova quella che ti rappresenta.</p></div>
            <div><span>03</span><strong>Segui</strong><p>Entra nel suo spazio dedicato.</p></div>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark">YC</span><span className="brand-name">YourCommunity</span></a>
        <p>Community eSport, un unico punto di accesso.</p>
        <a href="mailto:info@yourcommunity.it">info@yourcommunity.it</a>
      </footer>
    </main>
  );
}
