// Registers.jsx — Three registers: Leadership · Labs · Teams
function Registers() {
  const isMobile = useIsMobile();
  const items = [
    {
      n: '01', t: 'Leadership',
      sub: 'Clear-eyed AI literacy for executives — focused on live priorities.',
      b: 'We work with executives as peers. What AI can realistically do against the priorities on their desk right now — and what it can\'t. No hype. No horizon-scanning decks.',
      bullets: ['Baseline AI literacy', 'Live priority mapping', 'Honest limits, named'],
    },
    {
      n: '02', t: 'Labs',
      sub: 'Co-building working AI assistants for specific workflows.',
      b: 'Small, cross-functional teams with a real workflow problem. We co-build working assistants — forecasting, QBR prep, RFP drafting — tools people use on Monday.',
      bullets: ['Workflow diagnostics', 'Prompt and tool design', 'Measured adoption'],
    },
    {
      n: '03', t: 'Teams',
      sub: 'Scaling capability through internal champions and shared playbooks.',
      b: 'Organizational change is the real work. We identify internal champions, equip them with playbooks, and let the scaling happen through people your teams already trust.',
      bullets: ['Champion cohort', 'Shared playbooks', 'Firm-wide workshops'],
    },
  ];

  return (
    <section style={{ background: 'var(--aq-parchment)', padding: isMobile ? '72px 20px' : '128px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: isMobile ? 40 : 72 }}>
          <div className="aq-eyebrow" style={{ color: 'var(--aq-teal-dark)', marginBottom: 20 }}>
            Service framework · Three registers
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: isMobile ? 36 : 52,
            lineHeight: 1.08, color: 'var(--aq-deep)', letterSpacing: '-0.01em', margin: 0, maxWidth: 22 + 'ch',
          }}>
            Leadership · Labs · <em style={{ color: 'var(--aq-teal-dark)' }}>Teams.</em>
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: isMobile ? 15 : 17,
            lineHeight: 1.6, color: 'var(--aq-slate)', margin: '24px 0 0', maxWidth: 56 + 'ch',
          }}>
            Three registers running simultaneously, because they depend on each other. Leadership without labs produces decks. Labs without teams produces demos. Teams without leadership produces enthusiasm that dies on Monday.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 0,
          borderTop: '1px solid var(--aq-rule)', borderBottom: '1px solid var(--aq-rule)',
        }}>
          {items.map((it, i) => (
            <article key={it.n} style={{
              padding: isMobile ? '32px 0' : '48px 36px 56px',
              borderRight: !isMobile && i < 2 ? '1px solid var(--aq-rule)' : 'none',
              borderBottom: isMobile && i < 2 ? '1px solid var(--aq-rule)' : 'none',
              display: 'flex', flexDirection: 'column', gap: 20,
              background: 'transparent', transition: 'background 320ms var(--ease-out)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'var(--aq-white)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? 36 : 48, fontWeight: 400, color: 'var(--aq-teal-dark)', lineHeight: 1 }}>{it.n}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: isMobile ? 24 : 30, color: 'var(--aq-deep)' }}>{it.t}</span>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 17, lineHeight: 1.35, color: 'var(--aq-slate)' }}>{it.sub}</div>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 15, lineHeight: 1.6, color: 'var(--aq-slate)', margin: 0 }}>{it.b}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0', borderTop: '1px solid var(--aq-rule)' }}>
                {it.bullets.map((b) => (
                  <li key={b} style={{
                    padding: '12px 0', fontFamily: 'var(--font-body)', fontSize: 12,
                    letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--aq-slate)', fontWeight: 400,
                    borderBottom: '1px solid var(--aq-rule)',
                  }}>· {b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Registers = Registers;
