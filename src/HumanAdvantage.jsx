// HumanAdvantage.jsx
function HumanAdvantage() {
  const isMobile = useIsMobile();
  const capabilities = [
    {
      n: '01',
      t: 'Critical Thinking',
      b: 'Question assumptions, evaluate AI outputs, weigh evidence, recognize bias, and decide what is good enough to act on.',
      stat: '69%',
      statLabel: 'of employers rank analytical thinking as the most essential skill — WEF, 2025',
    },
    {
      n: '02',
      t: 'Creative Thought',
      b: 'Reframe problems, generate stronger options, combine ideas in useful ways, and move past the first obvious answer.',
      stat: '57%',
      statLabel: 'say creative thinking is essential and rising through 2030 — WEF, 2025',
    },
  ];

  return (
    <section style={{ background: 'var(--aq-parchment)', padding: isMobile ? '72px 20px' : '128px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <div style={{
          display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.4fr',
          gap: isMobile ? 24 : 96, alignItems: 'start', marginBottom: isMobile ? 40 : 72,
        }}>
          <div>
            <div className="aq-eyebrow" style={{ color: 'var(--aq-teal-dark)', marginBottom: 20 }}>
              The Human Advantage
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: isMobile ? 36 : 52,
              lineHeight: 1.08, color: 'var(--aq-deep)', letterSpacing: '-0.01em', margin: 0,
            }}>
              AI can generate answers. Your organization still has to <em style={{ color: 'var(--aq-teal-dark)' }}>know which ones to trust.</em>
            </h2>
          </div>
          <div style={{ paddingTop: isMobile ? 0 : 8 }}>
            <p style={{
              fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: isMobile ? 15 : 18,
              lineHeight: 1.65, color: 'var(--aq-slate)', margin: '0 0 24px',
            }}>
              Most AI promises are about cutting costs or saving time. The real shift is different. As AI takes on more of the drafting, summarizing, and analysis, two human capabilities become more valuable — not less. We build both into how your organization adopts AI.
            </p>
            <p style={{
              fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: isMobile ? 15 : 18,
              lineHeight: 1.65, color: 'var(--aq-slate)', margin: 0,
              paddingTop: 24, borderTop: '1px solid var(--aq-rule)',
            }}>
              <em style={{ color: 'var(--aq-deep)', fontStyle: 'normal', fontWeight: 400 }}>The risk is not faster output.</em> The risk is weaker judgment behind it. Careless AI use can narrow the range of ideas people generate and reduce the effort they put into thinking critically. AccioIQ closes that gap.
            </p>
          </div>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 0,
          borderTop: '1px solid var(--aq-rule)',
        }}>
          {capabilities.map((c, i) => (
            <div key={c.n} style={{
              padding: isMobile ? '40px 0' : '56px 56px 64px',
              borderRight: !isMobile && i === 0 ? '1px solid var(--aq-rule)' : 'none',
              borderBottom: isMobile && i === 0 ? '1px solid var(--aq-rule)' : 'none',
              display: 'flex', flexDirection: 'column', gap: 20,
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
                <span style={{
                  fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 400,
                  letterSpacing: '0.22em', color: 'var(--aq-teal-dark)',
                }}>{c.n}</span>
                <span style={{
                  fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: isMobile ? 28 : 36,
                  color: 'var(--aq-deep)', lineHeight: 1.1,
                }}>{c.t}</span>
              </div>
              <p style={{
                fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: isMobile ? 15 : 17,
                lineHeight: 1.65, color: 'var(--aq-slate)', margin: 0, maxWidth: 44 + 'ch',
              }}>{c.b}</p>
              <div style={{
                marginTop: 8, paddingTop: 24, borderTop: '1px solid var(--aq-rule)',
                display: 'flex', alignItems: 'baseline', gap: 16, flexWrap: 'wrap',
              }}>
                <span style={{
                  fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: isMobile ? 40 : 56,
                  color: 'var(--aq-teal-dark)', letterSpacing: '-0.02em', lineHeight: 1,
                }}>{c.stat}</span>
                <span style={{
                  fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 13,
                  color: 'var(--aq-sage)', lineHeight: 1.5, maxWidth: 28 + 'ch',
                }}>{c.statLabel}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: isMobile ? 40 : 64, padding: isMobile ? '32px 0' : '40px 56px',
          borderTop: '1px solid var(--aq-rule)', borderBottom: '1px solid var(--aq-rule)',
          display: 'flex', alignItems: isMobile ? 'flex-start' : 'center',
          gap: isMobile ? 16 : 32, flexDirection: isMobile ? 'column' : 'row',
        }}>
          <div style={{
            fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400,
            fontSize: isMobile ? 20 : 26, color: 'var(--aq-deep)', lineHeight: 1.3,
            maxWidth: 36 + 'ch', flexShrink: 0,
          }}>
            "AI should not turn your people into passive reviewers of machine output."
          </div>
          <div style={{
            width: isMobile ? '100%' : 1, height: isMobile ? 1 : 64,
            background: 'var(--aq-rule)', flexShrink: 0,
          }} />
          <p style={{
            fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: isMobile ? 14 : 16,
            lineHeight: 1.65, color: 'var(--aq-slate)', margin: 0,
          }}>
            It should help them think better, decide better, and create better work. That is what the human advantage protects — and what makes the capability genuinely yours.
          </p>
        </div>

      </div>
    </section>
  );
}
window.HumanAdvantage = HumanAdvantage;
