// Hero.jsx — Deep surface hero with marquee of WE SAY vocabulary
function Hero({ accent = 'teal' }) {
  const isMobile = useIsMobile();
  const emColor = accent === 'parchment' ? 'var(--aq-parchment)' : accent === 'italic-only' ? 'var(--aq-parchment)' : 'var(--aq-teal)';
  const emStyle = accent === 'italic-only' ? { fontStyle: 'italic', color: emColor, borderBottom: '1px solid var(--aq-teal)', paddingBottom: 2 } : { fontStyle: 'italic', color: emColor };
  const vocab = [
    'Inside out', 'Co-build', 'Co-design', 'Co-implement',
    'Sticky workflows', 'Realistic limits', 'Until the capability is yours',
    'Inside your organization',
  ];

  return (
    <section id="top" style={{
      background: 'var(--aq-deep)',
      padding: isMobile ? '64px 20px 72px' : '112px 40px 120px',
      borderBottom: '1px solid rgba(216,228,220,.10)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'flex', alignItems: 'baseline', gap: isMobile ? 12 : 20, flexWrap: 'wrap',
          marginBottom: isMobile ? 40 : 64, paddingBottom: isMobile ? 20 : 28,
          borderBottom: '1px solid rgba(216,228,220,.14)',
        }}>
          <div style={{
            fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: isMobile ? 48 : 72,
            color: 'var(--aq-parchment)', letterSpacing: '-0.025em', lineHeight: 1,
          }}>
            Accio<span style={{
              fontFamily: 'var(--font-body)', fontWeight: 500,
              color: 'var(--aq-teal)', letterSpacing: '-0.01em',
            }}>IQ</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{
              fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400,
              fontSize: isMobile ? 16 : 22, color: 'var(--aq-sage)', letterSpacing: '-0.005em',
            }}>
              AI from the inside out.
            </div>
            <div style={{
              fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400,
              fontSize: isMobile ? 14 : 18, color: 'var(--aq-teal)', letterSpacing: '-0.005em',
            }}>
              Creating value through the human advantage.
            </div>
          </div>
        </div>

        <div style={{
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8,
          marginBottom: isMobile ? 32 : 56,
        }}>
          <div style={{
            fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 11,
            letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--aq-teal)',
          }}>
            AccioIQ · AI Consulting
          </div>
          <div style={{
            fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 12,
            color: 'var(--aq-sage)', letterSpacing: '0.04em',
          }}>
            Est. 2024
          </div>
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 400,
          fontSize: isMobile ? 52 : 92,
          lineHeight: 1.0, letterSpacing: '-0.018em',
          color: 'var(--aq-parchment)', margin: 0, maxWidth: '15ch',
        }}>
          Most AI consulting hands you a roadmap and <em style={emStyle}>leaves.</em>
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1.1fr 1fr',
          gap: isMobile ? 40 : 96,
          marginTop: isMobile ? 40 : 72, alignItems: 'start',
        }}>
          <p style={{
            fontFamily: 'var(--font-body)', fontWeight: 300,
            fontSize: isMobile ? 16 : 19,
            lineHeight: 1.6, color: 'var(--aq-parchment)', margin: 0, maxWidth: 560,
          }}>
            <span style={{ color: 'var(--aq-teal)' }}>We stay until the capability is genuinely yours.</span> We embed with your teams, learn your workflows, and solve the social and organizational change problems that prevent AI adoption. And as AI takes on more of the drafting and analysis, we build the two capabilities that matter most: critical thinking and creative thought.
          </p>
          <div style={{
            borderLeft: isMobile ? 'none' : '1px solid rgba(216,228,220,.25)',
            borderTop: isMobile ? '1px solid rgba(216,228,220,.18)' : 'none',
            paddingLeft: isMobile ? 0 : 32,
            paddingTop: isMobile ? 24 : 0,
          }}>
            <div className="aq-eyebrow" style={{ color: 'var(--aq-sage)', marginBottom: 16 }}>
              Three registers, one engagement
            </div>
            <ul style={{
              listStyle: 'none', padding: 0, margin: 0,
              fontFamily: 'var(--font-display)', fontSize: isMobile ? 18 : 22, lineHeight: 1.4,
              color: 'var(--aq-parchment)',
            }}>
              {['Leadership', 'Labs', 'Teams'].map((r, i) => (
                <li key={r} style={{
                  display: 'flex', alignItems: 'baseline', gap: 16, padding: '10px 0',
                  borderBottom: i < 2 ? '1px solid rgba(216,228,220,.12)' : 'none',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 400,
                    letterSpacing: '0.22em', color: 'var(--aq-teal)', width: 28,
                  }}>0{i+1}</span>
                  <span style={{ fontStyle: i === 1 ? 'italic' : 'normal' }}>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: isMobile ? 40 : 64 }}>
          <a href="#contact" className="aq-btn aq-btn--primary"
             style={{ background: 'var(--aq-teal)', color: 'var(--aq-deep)', borderColor: 'transparent' }}>
            Request a consultation →
          </a>
          <a href="#method" className="aq-btn aq-btn--ghost"
             style={{ color: 'var(--aq-parchment)', borderColor: 'rgba(216,228,220,.35)' }}>
            How we work
          </a>
        </div>

        <div style={{
          marginTop: isMobile ? 56 : 112, paddingTop: 28,
          borderTop: '1px solid rgba(216,228,220,.12)',
          display: 'flex', flexWrap: 'wrap', gap: '8px 20px',
        }}>
          <span className="aq-eyebrow" style={{ color: 'var(--aq-sage)', marginRight: 12 }}>We say —</span>
          {vocab.map((v, i) => (
            <span key={v} style={{
              fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 12,
              color: i % 3 === 0 ? 'var(--aq-teal)' : 'var(--aq-sage)',
              letterSpacing: '0.02em',
            }}>
              {v}{i < vocab.length - 1 && <span style={{ opacity: 0.4, marginLeft: 20 }}>·</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
