// Method.jsx — 90-day engagement timeline + Six Elements of Prompting
function Method({ darkBg = 'deep' }) {
  const bg = darkBg === 'forest' ? 'var(--aq-forest)' : 'var(--aq-deep)';
  const panelBg = darkBg === 'forest' ? 'var(--aq-deep)' : 'var(--aq-forest)';
  const [month, setMonth] = React.useState(0);
  const isMobile = useIsMobile();
  const months = [
    {
      n: 'Month 01', t: 'Executive Leadership Kickoff',
      sub: 'Setting a common AI language and adoption baseline.',
      who: 'Executives · Operating leaders',
      out: ['Shared AI vocabulary', 'Baseline adoption audit', 'Live priorities mapped to AI leverage'],
    },
    {
      n: 'Month 02', t: 'Learning Labs',
      sub: 'Focused cross-functional teams co-building tools on high-friction workflows.',
      who: 'Internal champions · Workflow owners',
      out: ['2–3 working AI assistants', 'Prompt libraries per workflow', 'Measured time-saved on target tasks'],
    },
    {
      n: 'Month 03', t: 'All-Hands Upskilling',
      sub: 'High-energy workshops led by internal champions to scale capability firm-wide.',
      who: 'Full organization · Champion-led',
      out: ['Champion cohort established', 'Playbooks circulated firm-wide', 'Ongoing capability rhythm'],
    },
  ];

  const elements = [
    { k: 'Role',       b: 'Who the model is playing. Analyst, editor, translator.' },
    { k: 'Task',       b: 'The specific thing being asked. One verb, one object.' },
    { k: 'Context',    b: 'The situation, audience, and constraints that shape the answer.' },
    { k: 'Examples',   b: 'Two or three demonstrations of what good looks like.' },
    { k: 'Format',     b: 'Shape of the output. Bullets, table, two paragraphs.' },
    { k: 'Constraints',b: "What not to do. Tone to avoid. Length caps. Off-limits material." },
  ];

  return (
    <section id="method" className="aq-on-dark" style={{
      background: bg, padding: isMobile ? '72px 20px' : '128px 40px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? 24 : 96, alignItems: 'end', marginBottom: isMobile ? 40 : 72,
        }}>
          <div>
            <div className="aq-eyebrow" style={{ color: 'var(--aq-teal)', marginBottom: 20 }}>
              The 90-day engagement
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: isMobile ? 32 : 52,
              lineHeight: 1.08, color: 'var(--aq-parchment)', letterSpacing: '-0.01em', margin: 0,
            }}>
              A quarter to go from <em>scattered</em> to <em style={{ color: 'var(--aq-teal)' }}>shared</em>.
            </h2>
          </div>
          <p style={{
            fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: isMobile ? 15 : 17,
            lineHeight: 1.6, color: 'var(--aq-sage)', margin: 0, maxWidth: 52 + 'ch',
          }}>
            Ninety days is enough to move an organization from scattered AI experimentation to shared capability — if the work is sequenced, co-built, and led by the people who have to live with the result.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', marginBottom: 24 }}>
          {!isMobile && (
            <div style={{
              position: 'absolute', left: 0, right: 0, top: 22,
              height: 1, background: 'rgba(216,228,220,.18)',
            }} />
          )}
          <div style={{
            display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', position: 'relative',
          }}>
            {months.map((m, i) => (
              <button key={m.n} onClick={() => setMonth(i)} style={{
                all: 'unset', cursor: 'pointer',
                padding: isMobile ? '16px 0' : '0 8px',
                textAlign: 'left', position: 'relative',
                borderBottom: isMobile ? '1px solid rgba(216,228,220,.12)' : 'none',
                display: isMobile ? 'flex' : 'block', alignItems: isMobile ? 'center' : 'initial', gap: isMobile ? 16 : 0,
              }}>
                <div style={{
                  width: 14, height: 14, borderRadius: '50%', flexShrink: 0,
                  background: month === i ? 'var(--aq-teal)' : 'var(--aq-deep)',
                  border: `1px solid ${month === i ? 'var(--aq-teal)' : 'var(--aq-sage)'}`,
                  marginBottom: isMobile ? 0 : 20,
                  transition: 'background 320ms var(--ease-out)',
                }} />
                <div>
                  <div className="aq-eyebrow" style={{ color: month === i ? 'var(--aq-teal)' : 'var(--aq-sage)', marginBottom: 4 }}>{m.n}</div>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: isMobile ? 18 : 24,
                    color: 'var(--aq-parchment)', lineHeight: 1.2,
                  }}>{m.t}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Active panel */}
        <div style={{
          marginTop: isMobile ? 32 : 56,
          background: panelBg, border: '1px solid rgba(216,228,220,.18)',
          padding: isMobile ? '32px 24px 40px' : '48px 48px 56px',
          display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.2fr 1fr', gap: isMobile ? 32 : 64,
        }}>
          <div>
            <div className="aq-eyebrow" style={{ color: 'var(--aq-teal)', marginBottom: 16 }}>
              {months[month].n} · Focus
            </div>
            <p style={{
              fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400,
              fontSize: isMobile ? 20 : 26, lineHeight: 1.3, color: 'var(--aq-parchment)',
              margin: 0, maxWidth: 28 + 'ch',
            }}>
              {months[month].sub}
            </p>
            <div style={{ marginTop: 32 }}>
              <div className="aq-eyebrow" style={{ color: 'var(--aq-sage)', marginBottom: 10 }}>Who's in the room</div>
              <div style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 15, color: 'var(--aq-parchment)' }}>{months[month].who}</div>
            </div>
          </div>
          <div>
            <div className="aq-eyebrow" style={{ color: 'var(--aq-sage)', marginBottom: 16 }}>What you leave with</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {months[month].out.map((o, i) => (
                <li key={o} style={{
                  display: 'flex', gap: 16, padding: '14px 0',
                  borderTop: '1px solid rgba(216,228,220,.14)',
                  borderBottom: i === months[month].out.length - 1 ? '1px solid rgba(216,228,220,.14)' : 'none',
                  fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 15, color: 'var(--aq-parchment)',
                }}>
                  <span style={{ color: 'var(--aq-teal)', fontFamily: 'var(--font-body)', fontSize: 12, letterSpacing: '0.22em', paddingTop: 3 }}>0{i+1}</span>
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Six elements */}
        <div style={{ marginTop: isMobile ? 64 : 112 }}>
          <div style={{
            display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.6fr',
            gap: isMobile ? 32 : 80, alignItems: 'start',
          }}>
            <div>
              <div className="aq-eyebrow" style={{ color: 'var(--aq-teal)', marginBottom: 16 }}>Key framework</div>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: isMobile ? 26 : 34,
                lineHeight: 1.15, color: 'var(--aq-parchment)', letterSpacing: '-0.005em', margin: 0,
              }}>
                The Six Elements of <em>Effective Prompting.</em>
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 15,
                lineHeight: 1.6, color: 'var(--aq-sage)', margin: '20px 0 0', maxWidth: 34 + 'ch',
              }}>
                A shared grammar we teach in every engagement. Champions use it to write prompts. Teams use it to critique them.
              </p>
            </div>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0,
              borderTop: '1px solid rgba(216,228,220,.18)',
              borderLeft: '1px solid rgba(216,228,220,.18)',
            }}>
              {elements.map((e, i) => (
                <div key={e.k} style={{
                  padding: isMobile ? '20px 16px 24px' : '28px 24px 32px',
                  borderRight: '1px solid rgba(216,228,220,.18)',
                  borderBottom: '1px solid rgba(216,228,220,.18)',
                }}>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.22em', color: 'var(--aq-teal)', marginBottom: 12 }}>0{i+1}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? 17 : 22, fontWeight: 400, color: 'var(--aq-parchment)', marginBottom: 10 }}>{e.k}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 13, lineHeight: 1.55, color: 'var(--aq-sage)' }}>{e.b}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Method = Method;
