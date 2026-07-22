// Cases.jsx — Three case studies, expandable details
function Cases({ layout = 'list' }) {
  const [open, setOpen] = React.useState(0);
  const isMobile = useIsMobile();
  const cases = [
    {
      n: '01', sector: 'Enterprise Sales', client: 'Global Software Company',
      headline: 'From "what is this tool?" to 16 agents shipped in six months.',
      stat: '16+', statLabel: 'agents shipped across robotics, automotive & healthcare',
      detail: 'A global software company across robotics, automotive, and healthcare had leadership commit to AI before the organization understood it. We embedded across six cohorts, co-built 16+ working agents, and grew active users to 48 — with team confidence rising from 6.4 to 8.0 out of 10 and prompt usage growing over 300%. Leadership committed first. That is what made it stick.',
    },
    {
      n: '02', sector: 'Due Diligence', client: 'Private Equity Consultancy',
      headline: 'AI-generated first drafts of category scorecards, trusted by the team.',
      stat: '20 yrs', statLabel: 'of proprietary IP encoded into custom assistants',
      detail: 'A PE diligence firm sat on two decades of scorecard IP — locked in PDFs and analysts\' heads. We co-designed custom assistants trained on that corpus, and worked with senior analysts until they trusted the AI first drafts enough to build on them. The edit, not the blank page, became the starting point.',
    },
    {
      n: '03', sector: 'Enterprise SaaS', client: 'Global SaaS Leader',
      headline: 'Technical RFP drafting accelerated by 60–80% through CRM-integrated recaps.',
      stat: '60–80%', statLabel: 'reduction in technical RFP drafting time',
      detail: 'RFPs were an all-hands fire drill that burned out the strongest sellers. We integrated AI-generated account recaps directly with the CRM, pre-filling the technical sections that sales engineers used to rebuild from scratch. Drafting time dropped 60–80%, and the sellers spent their hours where they actually mattered.',
    },
    {
      n: '04', sector: 'Nonprofit', client: 'Performing Arts Organization',
      headline: 'The same methodology that works at global scale also works for a 60-year-old nonprofit.',
      stat: '4', statLabel: 'custom Learning Labs built in a single 90-day engagement',
      detail: 'A performing arts nonprofit with a small team and a mission that mattered came to us not because they had an AI budget but because they were running out of capacity. We right-sized the Leadership, Labs, and Teams approach — four custom Learning Labs, real workflows, real tools. The result was not a deployment. It was a team that knew how to keep going.',
    },
  ];

  const showCards = layout === 'cards' || isMobile;

  return (
    <section id="work" style={{ background: 'var(--aq-parchment)', padding: isMobile ? '72px 20px' : '128px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: isMobile ? 40 : 64 }}>
          <div className="aq-eyebrow" style={{ color: 'var(--aq-teal-dark)', marginBottom: 20 }}>Use cases · Selected engagements</div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: isMobile ? 36 : 52,
            lineHeight: 1.08, color: 'var(--aq-deep)', letterSpacing: '-0.01em', margin: 0, maxWidth: 22 + 'ch',
          }}>
            What <em style={{ color: 'var(--aq-teal-dark)' }}>staying</em> looks like, in practice.
          </h2>
        </div>

        {showCards ? (
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? 16 : 20 }}>
            {cases.map((c) => (
              <article key={c.n} style={{
                background: 'var(--aq-white)', border: '1px solid var(--aq-rule)',
                padding: isMobile ? '28px 24px 32px' : '36px 32px 40px',
                display: 'flex', flexDirection: 'column', gap: 18, minHeight: isMobile ? 'auto' : 420,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 400, color: 'var(--aq-teal-dark)', lineHeight: 1 }}>{c.n}</span>
                  <span className="aq-eyebrow" style={{ color: 'var(--aq-slate)' }}>{c.sector}</span>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 20, color: 'var(--aq-deep)', lineHeight: 1.3 }}>{c.headline}</div>
                <div style={{ paddingTop: 16, borderTop: '1px solid var(--aq-rule)', fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 400, color: 'var(--aq-deep)', letterSpacing: '-0.01em' }}>{c.stat}</div>
                <div className="aq-eyebrow" style={{ color: 'var(--aq-teal-dark)' }}>{c.statLabel}</div>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 14, lineHeight: 1.65, color: 'var(--aq-slate)', margin: '8px 0 0' }}>{c.detail}</p>
                <div style={{ marginTop: 'auto', paddingTop: 16 }}>
                  <span className="aq-eyebrow" style={{ color: 'var(--aq-slate)' }}>{c.client}</span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div style={{ borderTop: '1px solid var(--aq-rule)' }}>
            {cases.map((c, i) => (
              <div key={c.n} style={{
                borderBottom: '1px solid var(--aq-rule)',
                background: open === i ? 'var(--aq-white)' : 'transparent',
                transition: 'background 320ms var(--ease-out)',
              }}>
                <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                  all: 'unset', cursor: 'pointer', width: '100%', boxSizing: 'border-box',
                  padding: '32px 8px', display: 'grid',
                  gridTemplateColumns: '72px 160px 1fr 180px 24px', gap: 32, alignItems: 'center',
                }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 400, color: 'var(--aq-teal-dark)', lineHeight: 1 }}>{c.n}</span>
                  <span className="aq-eyebrow" style={{ color: 'var(--aq-slate)' }}>{c.sector}</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 22, color: 'var(--aq-deep)', lineHeight: 1.3 }}>
                    <span style={{ color: 'var(--aq-slate)' }}>{c.client} — </span>{c.headline}
                  </span>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 32, color: 'var(--aq-deep)', textAlign: 'right', letterSpacing: '-0.01em' }}>{c.stat}</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 20, color: 'var(--aq-teal-dark)', transform: open === i ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 320ms var(--ease-out)', textAlign: 'center' }}>→</span>
                </button>
                <div style={{ maxHeight: open === i ? 600 : 0, opacity: open === i ? 1 : 0, overflow: 'hidden', transition: 'max-height 480ms var(--ease-out), opacity 320ms var(--ease-out)' }}>
                  <div style={{ padding: '0 8px 40px', display: 'grid', gridTemplateColumns: '72px 160px 1fr 180px 24px', gap: 32 }}>
                    <div />
                    <div>
                      <div className="aq-eyebrow" style={{ color: 'var(--aq-teal-dark)', marginBottom: 8 }}>Outcome</div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--aq-slate)' }}>{c.statLabel}</div>
                    </div>
                    <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 16, lineHeight: 1.7, color: 'var(--aq-slate)', margin: 0, maxWidth: 64 + 'ch' }}>{c.detail}</p>
                    <div /><div />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
window.Cases = Cases;
