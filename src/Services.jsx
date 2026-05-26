// Services.jsx — The Three Registers, tabbed detail view
function Services() {
  const [active, setActive] = React.useState(0);
  const regs = [
    {
      k: 'Leadership',
      tag: 'For executives',
      t: 'Clear-eyed AI literacy for executives, focused on live priorities.',
      b: "Decision-makers need to know what's possible, what isn't, and what only they can decide. We cut through the hype cycle and focus on the AI questions actually in front of your organization this quarter.",
      items: [
        'Executive AI literacy sessions',
        'Board-level adoption briefings',
        'Risk and limits framing',
        'Vendor evaluation support',
      ],
    },
    {
      k: 'Labs',
      tag: 'For workflow owners',
      t: 'Co-building working AI assistants for specific workflows.',
      b: "Not demos. Not peripheral pilots. Working tools on workflows that matter — forecasting, QBR prep, RFP drafting, due diligence — built alongside the people who run them every day.",
      items: [
        'Forecasting & demand planning assistants',
        'QBR & account review drafting',
        'RFP & proposal acceleration',
        'Custom assistants trained on proprietary IP',
      ],
    },
    {
      k: 'Teams',
      tag: 'For the full org',
      t: 'Scaling capability through internal champions and shared playbooks.',
      b: "Adoption is organizational change. We train and resource internal champions — the people your colleagues actually listen to — and leave behind playbooks that keep the work moving after we're gone.",
      items: [
        'Champion cohort design',
        'Shared prompt libraries',
        'All-hands upskilling workshops',
        'Ongoing capability rhythm',
      ],
    },
  ];

  return (
    <section id="services" style={{
      background: 'var(--aq-parchment)', padding: '128px 40px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'end', marginBottom: 64 }}>
          <div>
            <div className="aq-eyebrow" style={{ color: 'var(--aq-teal-dark)', marginBottom: 20 }}>
              Service framework
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 52,
              lineHeight: 1.08, color: 'var(--aq-deep)',
              letterSpacing: '-0.01em', margin: 0,
            }}>
              Three registers, running <em style={{ color: 'var(--aq-teal-dark)' }}>simultaneously.</em>
            </h2>
          </div>
          <p style={{
            fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 17,
            lineHeight: 1.6, color: 'var(--aq-slate)', margin: 0, maxWidth: 52 + 'ch',
          }}>
            Leadership, Labs, and Teams are not a menu. They are three registers of a single engagement — because each one depends on the other two to actually stick.
          </p>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex', borderTop: '1px solid var(--aq-rule)',
          borderBottom: '1px solid var(--aq-rule)',
        }}>
          {regs.map((r, i) => (
            <button key={r.k}
              onClick={() => setActive(i)}
              style={{
                all: 'unset', cursor: 'pointer', flex: 1,
                padding: '28px 32px',
                borderRight: i < regs.length - 1 ? '1px solid var(--aq-rule)' : 'none',
                background: active === i ? 'var(--aq-white)' : 'transparent',
                transition: 'background 320ms var(--ease-out)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
              }}>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 400,
                color: active === i ? 'var(--aq-teal-dark)' : 'var(--aq-deep)',
                fontStyle: active === i ? 'italic' : 'normal',
              }}>{r.k}</div>
              <div className="aq-eyebrow" style={{ color: 'var(--aq-sage)' }}>{r.tag}</div>
            </button>
          ))}
        </div>

        {/* Panel */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 80,
          padding: '64px 48px', background: 'var(--aq-white)',
          borderLeft: '1px solid var(--aq-rule)', borderRight: '1px solid var(--aq-rule)',
          borderBottom: '1px solid var(--aq-rule)',
        }}>
          <div>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 34,
              lineHeight: 1.2, color: 'var(--aq-deep)', margin: 0,
              letterSpacing: '-0.005em',
            }}>
              {regs[active].t}
            </h3>
            <p style={{
              fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 17,
              lineHeight: 1.65, color: 'var(--aq-slate)',
              margin: '28px 0 0', maxWidth: 54 + 'ch',
            }}>
              {regs[active].b}
            </p>
          </div>
          <div>
            <div className="aq-eyebrow" style={{ color: 'var(--aq-teal-dark)', marginBottom: 18 }}>
              Engagements include
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {regs[active].items.map((it, i) => (
                <li key={it} style={{
                  padding: '16px 0',
                  borderTop: '1px solid var(--aq-rule)',
                  borderBottom: i === regs[active].items.length - 1 ? '1px solid var(--aq-rule)' : 'none',
                  display: 'flex', gap: 16, alignItems: 'baseline',
                  fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 15,
                  color: 'var(--aq-deep)',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.22em',
                    color: 'var(--aq-teal-dark)',
                  }}>0{i+1}</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Services = Services;
