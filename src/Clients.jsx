// Clients.jsx — Target clients as tracked-caps typographic list
function Clients({ darkBg = 'deep' }) {
  const bg = darkBg === 'forest' ? 'var(--aq-forest)' : 'var(--aq-deep)';
  const isMobile = useIsMobile();
  const groups = [
    { t: 'Global Brands',     b: 'Household names whose AI decisions show up in their customer experience.' },
    { t: 'Regional Leaders',  b: 'Operators in regional markets with complex local workflows to preserve.' },
    { t: 'Impact Foundations',b: 'Mission-driven organizations where AI literacy protects trust and outcomes.' },
    { t: 'Product Builders',  b: 'Teams shipping AI-native products who need internal fluency to match.' },
  ];
  return (
    <section className="aq-on-dark" style={{ background: bg, padding: isMobile ? '64px 20px' : '120px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.6fr',
          gap: isMobile ? 32 : 80, alignItems: 'start',
        }}>
          <div>
            <div className="aq-eyebrow" style={{ color: 'var(--aq-teal)', marginBottom: 20 }}>Who we work with</div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: isMobile ? 30 : 44,
              lineHeight: 1.1, color: 'var(--aq-parchment)', letterSpacing: '-0.01em', margin: 0,
            }}>
              Organizations that have decided <em style={{ color: 'var(--aq-teal)' }}>the usual options aren't enough.</em>
            </h2>
          </div>
          <div style={{ borderTop: '1px solid rgba(216,228,220,.18)' }}>
            {groups.map((g, i) => (
              <div key={g.t} style={{
                display: 'grid', gridTemplateColumns: isMobile ? '28px 1fr' : '40px 1fr 1.4fr',
                gap: isMobile ? 16 : 32, padding: '28px 0',
                borderBottom: '1px solid rgba(216,228,220,.18)', alignItems: 'start',
              }}>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.22em', color: 'var(--aq-teal)', paddingTop: 4 }}>0{i+1}</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: isMobile ? 20 : 26, color: 'var(--aq-parchment)', lineHeight: 1.2 }}>{g.t}</div>
                  {isMobile && <div style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 14, lineHeight: 1.6, color: 'var(--aq-sage)', marginTop: 6 }}>{g.b}</div>}
                </div>
                {!isMobile && <div style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 15, lineHeight: 1.6, color: 'var(--aq-sage)' }}>{g.b}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.Clients = Clients;
