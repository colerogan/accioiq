// Contact.jsx — CTA section with form
function Contact({ darkBg = 'deep' }) {
  const bg = darkBg === 'forest' ? 'var(--aq-forest)' : 'var(--aq-deep)';
  const panelBg = darkBg === 'forest' ? 'var(--aq-deep)' : 'var(--aq-forest)';
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', org: '', email: '', focus: 'Leadership', msg: '' });
  const isMobile = useIsMobile();
  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  return (
    <section id="contact" className="aq-on-dark" style={{ background: bg, padding: isMobile ? '72px 20px' : '128px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.1fr',
          gap: isMobile ? 48 : 96, alignItems: 'start',
        }}>
          <div>
            <div className="aq-eyebrow" style={{ color: 'var(--aq-teal)', marginBottom: 20 }}>Request a consultation</div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: isMobile ? 32 : 52,
              lineHeight: 1.05, color: 'var(--aq-parchment)', letterSpacing: '-0.01em', margin: 0, maxWidth: 14 + 'ch',
            }}>
              A first conversation is a working session — not a pitch.
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: isMobile ? 15 : 17,
              lineHeight: 1.65, color: 'var(--aq-sage)', margin: '32px 0 0', maxWidth: 46 + 'ch',
            }}>
              We'll map where AI is realistic inside your organization, and what it takes to make it stick. A paragraph is plenty — tell us what you're trying to figure out.
            </p>
            <div style={{
              marginTop: 56, paddingTop: 28, borderTop: '1px solid rgba(216,228,220,.18)',
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32,
            }}>
              <div>
                <div className="aq-eyebrow" style={{ color: 'var(--aq-sage)', marginBottom: 8 }}>Direct</div>
                <a href="mailto:team@accioiq.com" style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? 15 : 18, color: 'var(--aq-parchment)', textDecoration: 'none' }}>team@accioiq.com</a>
              </div>
              <div>
                <div className="aq-eyebrow" style={{ color: 'var(--aq-sage)', marginBottom: 8 }}>Response</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? 15 : 18, color: 'var(--aq-parchment)' }}>One business day</div>
              </div>
            </div>
          </div>

          {sent ? (
            <div style={{
              background: 'var(--aq-forest)', border: '1px solid rgba(216,228,220,.18)',
              padding: isMobile ? '40px 28px' : '56px 48px', display: 'flex', flexDirection: 'column', gap: 20,
            }}>
              <div className="aq-eyebrow" style={{ color: 'var(--aq-teal)' }}>Received</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? 24 : 32, color: 'var(--aq-parchment)', lineHeight: 1.2 }}>
                Thanks, {form.name || 'we got it'} — we'll reply within a business day.
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 15, color: 'var(--aq-sage)', margin: 0 }}>
                A partner will read this personally. No autoresponder after this one.
              </p>
              <button onClick={() => setSent(false)} className="aq-btn aq-btn--ghost"
                style={{ alignSelf: 'flex-start', marginTop: 16, color: 'var(--aq-parchment)', borderColor: 'rgba(216,228,220,.35)' }}>
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={(e) => {
              e.preventDefault();
              const subject = `AccioIQ consultation request — ${form.name || 'New inquiry'}`;
              const body = `Name: ${form.name}\nOrganization: ${form.org}\nEmail: ${form.email}\nPrimary focus: ${form.focus}\n\nWhat they're trying to figure out:\n${form.msg}\n`;
              const mailto = `mailto:team@accioiq.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              window.open(mailto, '_blank');
              setTimeout(() => { window.location.href = mailto; }, 100);
              setSent(true);
            }} style={{
              background: 'var(--aq-forest)', border: '1px solid rgba(216,228,220,.18)',
              padding: isMobile ? '28px 24px 32px' : '40px 40px 44px',
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20,
            }}>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span className="aq-eyebrow" style={{ color: 'var(--aq-sage)' }}>Name</span>
                <input className="aq-field" value={form.name} onChange={set('name')} placeholder="Your name" required
                  style={{ background: 'var(--aq-deep)', color: 'var(--aq-parchment)', borderColor: 'rgba(216,228,220,.18)' }} />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span className="aq-eyebrow" style={{ color: 'var(--aq-sage)' }}>Organization</span>
                <input className="aq-field" value={form.org} onChange={set('org')} placeholder="Company or foundation"
                  style={{ background: 'var(--aq-deep)', color: 'var(--aq-parchment)', borderColor: 'rgba(216,228,220,.18)' }} />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 8, gridColumn: '1 / -1' }}>
                <span className="aq-eyebrow" style={{ color: 'var(--aq-sage)' }}>Work email</span>
                <input type="email" className="aq-field" value={form.email} onChange={set('email')} placeholder="you@organization.org" required
                  style={{ background: 'var(--aq-deep)', color: 'var(--aq-parchment)', borderColor: 'rgba(216,228,220,.18)' }} />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 8, gridColumn: '1 / -1' }}>
                <span className="aq-eyebrow" style={{ color: 'var(--aq-sage)' }}>Primary focus</span>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {['Leadership', 'Labs', 'Teams', 'All three', 'Not sure yet'].map(f => (
                    <button type="button" key={f} onClick={() => setForm(x => ({ ...x, focus: f }))} style={{
                      padding: '10px 18px', borderRadius: 999, fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 11,
                      textTransform: 'uppercase', letterSpacing: '0.2em',
                      background: form.focus === f ? 'var(--aq-teal)' : 'transparent',
                      color: form.focus === f ? 'var(--aq-deep)' : 'var(--aq-sage)',
                      border: `1px solid ${form.focus === f ? 'var(--aq-teal)' : 'rgba(216,228,220,.25)'}`,
                      cursor: 'pointer', transition: 'all 320ms var(--ease-out)',
                    }}>{f}</button>
                  ))}
                </div>
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 8, gridColumn: '1 / -1' }}>
                <span className="aq-eyebrow" style={{ color: 'var(--aq-sage)' }}>What are you trying to figure out?</span>
                <textarea className="aq-field" rows={5} value={form.msg} onChange={set('msg')}
                  placeholder="A sentence or a paragraph is plenty. No NDA required." required
                  style={{ background: 'var(--aq-deep)', color: 'var(--aq-parchment)', borderColor: 'rgba(216,228,220,.18)', resize: 'vertical' }} />
              </label>
              <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: 20, marginTop: 4, flexWrap: 'wrap' }}>
                <button type="submit" className="aq-btn aq-btn--primary"
                  style={{ background: 'var(--aq-teal)', color: 'var(--aq-deep)', borderColor: 'transparent' }}>
                  Start the conversation →
                </button>
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 12, color: 'var(--aq-sage)' }}>We'll never share your details.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
window.Contact = Contact;
