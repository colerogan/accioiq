// Clients.jsx — Who we work with, combined with use cases
function Clients({ darkBg = 'deep' }) {
  const bg = darkBg === 'forest' ? 'var(--aq-forest)' : 'var(--aq-deep)';
  const panelBg = darkBg === 'forest' ? 'var(--aq-deep)' : 'var(--aq-forest)';
  const [active, setActive] = React.useState(null);
  const isMobile = useIsMobile();

  const items = [
    {
      t: 'Global Brands',
      b: 'Household names whose AI decisions show up in their customer experience.',
      sector: 'Enterprise Sales',
      client: 'Global Software Company',
      headline: 'From "what is this tool?" to 16 agents shipped in six months.',
      stat: '16+', statLabel: 'agents shipped across robotics, automotive and healthcare',
      detail: 'A global software company across robotics, automotive, and healthcare had leadership commit to AI before the organization understood it. We embedded across six cohorts, co-built 16+ working agents, and grew active users to 48 — with team confidence rising from 6.4 to 8.0 out of 10 and prompt usage growing over 300%. Leadership committed first. That is what made it stick.',
    },
    {
      t: 'Regional Leaders',
      b: 'Operators in regional markets with complex local workflows to preserve.',
      sector: 'Due Diligence',
      client: 'Private Equity Consultancy',
      headline: 'AI-generated first drafts of category scorecards, trusted by the team.',
      stat: '20 yrs', statLabel: 'of proprietary IP encoded into custom assistants',
      detail: 'A PE diligence firm sat on two decades of scorecard IP — locked in PDFs and analysts\' heads. We co-designed custom assistants trained on that corpus, and worked with senior analysts until they trusted the AI first drafts enough to build on them. The edit, not the blank page, became the starting point.',
    },
    {
      t: 'Impact Foundations',
      b: 'Mission-driven organizations where AI literacy protects trust and outcomes.',
      sector: 'Nonprofit',
      client: 'Performing Arts Organization',
      headline: 'The same methodology that works at global scale also works for a 60-year-old nonprofit.',
      stat: '4', statLabel: 'custom Learning Labs built in a single 90-day engagement',
      detail: 'A performing arts nonprofit with a small team came to us not because they had an AI budget but because they were running out of capacity. We right-sized the Leadership, Labs, and Teams approach — four custom Learning Labs, real workflows, real tools. The result was not a deployment. It was a team that knew how to keep going.',
    },
    {
      t: 'Product Builders',
      b: 'Teams shipping AI-native products who need internal fluency to match.',
      sector: 'Enterprise SaaS',
      client: 'Global SaaS Leader',
      headline: 'Technical RFP drafting accelerated by 60-80% through CRM-integrated recaps.',
      stat: '60-80%', statLabel: 'reduction in technical RFP drafting time',
      detail: 'RFPs were an all-hands fire drill that burned out the strongest sellers. We integrated AI-generated account recaps directly with the CRM, pre-filling the technical sections that sales engineers used to rebuild from scratch. Drafting time dropped 60-80%, and the sellers spent their hours where they actually mattered.',
    },
  ];

  return (
    <section className="aq-on-dark" style={{ background: bg, padding: isMobile ? '72px 20px' : '128px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.6fr',
          gap: isMobile ? 32 : 80, alignItems: 'start', marginBottom: isMobile ? 40 : 64,
        }}>
          <div>
            <div className="aq-eyebrow" style={{ color: 'var(--aq-teal)', marginBottom: 20 }}>Who we work with</div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: isMobile ? 30 : 44,
              lineHeight: 1.1, color: 'var(--aq-parchment)', letterSpacing: '-0.01em', margin: 0,
            }}>
              Organizations that have decided the usual options are not enough.
            </h2>
          </div>
          <p style={{
            fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: isMobile ? 15 : 17,
            lineHeight: 1.65, color: 'var(--aq-sage)', margin: 0,
            paddingTop: isMobile ? 0 : 24,
          }}>
            Select a client type below to see a real example of how we work with them.
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(216,228,220,.18)' }}>
          {items.map((item, i) => (
            <div key={item.t} style={{ borderBottom: '1px solid rgba(216,228,220,.18)' }}>
              <button
                onClick={() => setActive(active === i ? null : i)}
                style={{
                  all: 'unset', cursor: 'pointer', width: '100%', boxSizing: 'border-box',
                  padding: isMobile ? '24px 0' : '32px 0',
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr 24px' : '1fr 1.4fr 24px',
                  gap: isMobile ? 16 : 32, alignItems: 'center',
                }}>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontWeight: 400,
                    fontSize: isMobile ? 20 : 26, color: 'var(--aq-parchment)', lineHeight: 1.2,
                  }}>{item.t}</div>
                  {isMobile && (
                    <div style={{
                      fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 13,
                      lineHeight: 1.5, color: 'var(--aq-sage)', marginTop: 4,
                    }}>{item.b}</div>
                  )}
                </div>
                {!isMobile && (
                  <div style={{
                    fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 15,
                    lineHeight: 1.6, color: 'var(--aq-sage)',
                  }}>{item.b}</div>
                )}
                <div style={{
                  fontFamily: 'var(--font-body)', fontSize: 20,
                  color: 'var(--aq-teal)',
                  transform: active === i ? 'rotate(90deg)' : 'rotate(0deg)',
                  transition: 'transform 320ms var(--ease-out)',
                  textAlign: 'center',
                }}>&#8594;</div>
              </button>

              <div style={{
                maxHeight: active === i ? 600 : 0,
                opacity: active === i ? 1 : 0,
                overflow: 'hidden',
                transition: 'max-height 480ms var(--ease-out), opacity 320ms var(--ease-out)',
              }}>
                <div style={{
                  background: panelBg,
                  border: '1px solid rgba(216,228,220,.18)',
                  padding: isMobile ? '28px 24px 36px' : '40px 48px 48px',
                  marginBottom: 24,
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : '1.2fr 1fr',
                  gap: isMobile ? 28 : 56,
                }}>
                  <div>
                    <div className="aq-eyebrow" style={{ color: 'var(--aq-teal)', marginBottom: 12 }}>{item.sector} · {item.client}</div>
                    <div style={{
                      fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400,
                      fontSize: isMobile ? 18 : 24, lineHeight: 1.3, color: 'var(--aq-parchment)',
                      margin: '0 0 24px', maxWidth: 32 + 'ch',
                    }}>{item.headline}</div>
                    <p style={{
                      fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: isMobile ? 14 : 15,
                      lineHeight: 1.7, color: 'var(--aq-sage)', margin: 0,
                    }}>{item.detail}</p>
                  </div>
                  <div style={{
                    borderTop: isMobile ? '1px solid rgba(216,228,220,.18)' : 'none',
                    borderLeft: !isMobile ? '1px solid rgba(216,228,220,.18)' : 'none',
                    paddingTop: isMobile ? 24 : 0,
                    paddingLeft: !isMobile ? 40 : 0,
                    display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8,
                  }}>
                    <div style={{
                      fontFamily: 'var(--font-display)', fontWeight: 400,
                      fontSize: isMobile ? 44 : 60, color: 'var(--aq-teal)',
                      letterSpacing: '-0.02em', lineHeight: 1,
                    }}>{item.stat}</div>
                    <div style={{
                      fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 13,
                      color: 'var(--aq-sage)', lineHeight: 1.5, maxWidth: 24 + 'ch',
                    }}>{item.statLabel}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Clients = Clients;
