// Philosophy.jsx
function Philosophy() {
  const isMobile = useIsMobile();
  const phases = [
    {
      tag: 'Phase one',
      t: 'Learn the work',
      b: 'We embed within your teams to learn culture and workflows from the ground floor. Not from a conference room. Not from a discovery deck. From inside.',
      detail: 'We shadow. We sit in meetings. We ask obvious questions. Before we propose anything, we understand how the work actually gets done — including the parts that never make it into a process doc.',
    },
    {
      tag: 'Phase two',
      t: 'Build with you',
      b: 'We co-build solutions that feel native to your organization — not forced upon it. Tools your people helped design, on workflows they actually run.',
      detail: 'Co-design is the method. Your team owns the problem and the artifact. We bring AI fluency, prompt design, and the discipline of keeping things small until they work.',
    },
    {
      tag: 'Phase three',
      t: 'Leave it yours',
      b: 'We stay until the capability is fully yours. Internal champions lead. External consultants leave. The change is permanent — or it was not change.',
      detail: 'Success is measured by what happens after we are gone. Champions keep building. Playbooks keep circulating. The organization gets better at AI without us in the room.',
    },
  ];

  return (
    <section id="philosophy" style={{
      background: 'var(--aq-parchment)', padding: isMobile ? '72px 20px' : '128px 40px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: isMobile ? 40 : 64 }}>
          <div className="aq-eyebrow" style={{ color: 'var(--aq-teal-dark)', marginBottom: 20 }}>
            Core philosophy
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: isMobile ? 36 : 52,
            lineHeight: 1.08, color: 'var(--aq-deep)', letterSpacing: '-0.01em', margin: '0 0 24px',
          }}>
            The Inside Out Method.
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: isMobile ? 15 : 18,
            lineHeight: 1.65, color: 'var(--aq-slate)', margin: 0, maxWidth: 52 + 'ch',
          }}>
            Three phases, in order, across a single engagement. The sequence matters — skip a phase and the capability does not stick.
          </p>
        </div>

        <div style={{ borderTop: '1px solid var(--aq-rule)' }}>
          {phases.map((p) => (
            <div key={p.t} style={{
              borderBottom: '1px solid var(--aq-rule)',
              padding: isMobile ? '32px 0' : '48px 0',
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '220px 1fr',
              gap: isMobile ? 16 : 80,
              alignItems: 'start',
            }}>
              <div>
                <div className="aq-eyebrow" style={{ color: 'var(--aq-sage)', marginBottom: 10 }}>{p.tag}</div>
                <div style={{
                  fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: isMobile ? 22 : 28,
                  color: 'var(--aq-deep)', lineHeight: 1.15,
                }}>{p.t}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <p style={{
                  fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: isMobile ? 15 : 17,
                  lineHeight: 1.65, color: 'var(--aq-slate)', margin: 0,
                }}>{p.b}</p>
                <p style={{
                  fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 14,
                  lineHeight: 1.6, color: 'var(--aq-sage)', margin: 0,
                }}>{p.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Philosophy = Philosophy;
