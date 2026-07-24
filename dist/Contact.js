(() => {
  function Contact({ darkBg = "deep" }) {
    const bg = darkBg === "forest" ? "var(--aq-forest)" : "var(--aq-deep)";
    const panelBg = darkBg === "forest" ? "var(--aq-deep)" : "var(--aq-forest)";
    const [sent, setSent] = React.useState(false);
    const [form, setForm] = React.useState({ name: "", org: "", email: "", focus: "Leadership", msg: "" });
    const isMobile = useIsMobile();
    const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
    return /* @__PURE__ */ React.createElement("section", { id: "contact", className: "aq-on-dark", style: { background: bg, padding: isMobile ? "72px 20px" : "128px 40px" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1200, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("div", { style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1.1fr",
      gap: isMobile ? 48 : 96,
      alignItems: "start"
    } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "aq-eyebrow", style: { color: "var(--aq-teal)", marginBottom: 20 } }, "Request a consultation"), /* @__PURE__ */ React.createElement("h2", { style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: isMobile ? 32 : 52,
      lineHeight: 1.05,
      color: "var(--aq-parchment)",
      letterSpacing: "-0.01em",
      margin: 0,
      maxWidth: "14ch"
    } }, "A first conversation is a working session \u2014 not a pitch."), /* @__PURE__ */ React.createElement("p", { style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: isMobile ? 15 : 17,
      lineHeight: 1.65,
      color: "var(--aq-sage)",
      margin: "32px 0 0",
      maxWidth: "46ch"
    } }, "We'll map where AI is realistic inside your organization, and what it takes to make it stick. A paragraph is plenty \u2014 tell us what you're trying to figure out."), /* @__PURE__ */ React.createElement("div", { style: {
      marginTop: 56,
      paddingTop: 28,
      borderTop: "1px solid rgba(216,228,220,.18)",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 32
    } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "aq-eyebrow", style: { color: "var(--aq-sage)", marginBottom: 8 } }, "Direct"), /* @__PURE__ */ React.createElement("a", { href: "mailto:team@accioiq.com", style: { fontFamily: "var(--font-display)", fontSize: isMobile ? 15 : 18, color: "var(--aq-parchment)", textDecoration: "none" } }, "team@accioiq.com")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "aq-eyebrow", style: { color: "var(--aq-sage)", marginBottom: 8 } }, "Response"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", fontSize: isMobile ? 15 : 18, color: "var(--aq-parchment)" } }, "One business day")))), sent ? /* @__PURE__ */ React.createElement("div", { style: {
      background: "var(--aq-forest)",
      border: "1px solid rgba(216,228,220,.18)",
      padding: isMobile ? "40px 28px" : "56px 48px",
      display: "flex",
      flexDirection: "column",
      gap: 20
    } }, /* @__PURE__ */ React.createElement("div", { className: "aq-eyebrow", style: { color: "var(--aq-teal)" } }, "Received"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", fontSize: isMobile ? 24 : 32, color: "var(--aq-parchment)", lineHeight: 1.2 } }, "Thanks, ", form.name || "we got it", " \u2014 we'll reply within a business day."), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 15, color: "var(--aq-sage)", margin: 0 } }, "A partner will read this personally. No autoresponder after this one."), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setSent(false),
        className: "aq-btn aq-btn--ghost",
        style: { alignSelf: "flex-start", marginTop: 16, color: "var(--aq-parchment)", borderColor: "rgba(216,228,220,.35)" }
      },
      "Send another"
    )) : /* @__PURE__ */ React.createElement("form", { onSubmit: (e) => {
      e.preventDefault();
      const subject = `AccioIQ consultation request \u2014 ${form.name || "New inquiry"}`;
      const body = `Name: ${form.name}
Organization: ${form.org}
Email: ${form.email}
Primary focus: ${form.focus}

What they're trying to figure out:
${form.msg}
`;
      const mailto = `mailto:team@accioiq.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailto, "_blank");
      setTimeout(() => {
        window.location.href = mailto;
      }, 100);
      setSent(true);
    }, style: {
      background: "var(--aq-forest)",
      border: "1px solid rgba(216,228,220,.18)",
      padding: isMobile ? "28px 24px 32px" : "40px 40px 44px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 20
    } }, /* @__PURE__ */ React.createElement("label", { style: { display: "flex", flexDirection: "column", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { className: "aq-eyebrow", style: { color: "var(--aq-sage)" } }, "Name"), /* @__PURE__ */ React.createElement(
      "input",
      {
        className: "aq-field",
        value: form.name,
        onChange: set("name"),
        placeholder: "Your name",
        required: true,
        style: { background: "var(--aq-deep)", color: "var(--aq-parchment)", borderColor: "rgba(216,228,220,.18)" }
      }
    )), /* @__PURE__ */ React.createElement("label", { style: { display: "flex", flexDirection: "column", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { className: "aq-eyebrow", style: { color: "var(--aq-sage)" } }, "Organization"), /* @__PURE__ */ React.createElement(
      "input",
      {
        className: "aq-field",
        value: form.org,
        onChange: set("org"),
        placeholder: "Company or foundation",
        style: { background: "var(--aq-deep)", color: "var(--aq-parchment)", borderColor: "rgba(216,228,220,.18)" }
      }
    )), /* @__PURE__ */ React.createElement("label", { style: { display: "flex", flexDirection: "column", gap: 8, gridColumn: "1 / -1" } }, /* @__PURE__ */ React.createElement("span", { className: "aq-eyebrow", style: { color: "var(--aq-sage)" } }, "Work email"), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "email",
        className: "aq-field",
        value: form.email,
        onChange: set("email"),
        placeholder: "you@organization.org",
        required: true,
        style: { background: "var(--aq-deep)", color: "var(--aq-parchment)", borderColor: "rgba(216,228,220,.18)" }
      }
    )), /* @__PURE__ */ React.createElement("label", { style: { display: "flex", flexDirection: "column", gap: 8, gridColumn: "1 / -1" } }, /* @__PURE__ */ React.createElement("span", { className: "aq-eyebrow", style: { color: "var(--aq-sage)" } }, "Primary focus"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, flexWrap: "wrap" } }, ["Leadership", "Labs", "Teams", "All three", "Not sure yet"].map((f) => /* @__PURE__ */ React.createElement("button", { type: "button", key: f, onClick: () => setForm((x) => ({ ...x, focus: f })), style: {
      padding: "10px 18px",
      borderRadius: 999,
      fontFamily: "var(--font-body)",
      fontWeight: 400,
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: "0.2em",
      background: form.focus === f ? "var(--aq-teal)" : "transparent",
      color: form.focus === f ? "var(--aq-deep)" : "var(--aq-sage)",
      border: `1px solid ${form.focus === f ? "var(--aq-teal)" : "rgba(216,228,220,.25)"}`,
      cursor: "pointer",
      transition: "all 320ms var(--ease-out)"
    } }, f)))), /* @__PURE__ */ React.createElement("label", { style: { display: "flex", flexDirection: "column", gap: 8, gridColumn: "1 / -1" } }, /* @__PURE__ */ React.createElement("span", { className: "aq-eyebrow", style: { color: "var(--aq-sage)" } }, "What are you trying to figure out?"), /* @__PURE__ */ React.createElement(
      "textarea",
      {
        className: "aq-field",
        rows: 5,
        value: form.msg,
        onChange: set("msg"),
        placeholder: "A sentence or a paragraph is plenty. No NDA required.",
        required: true,
        style: { background: "var(--aq-deep)", color: "var(--aq-parchment)", borderColor: "rgba(216,228,220,.18)", resize: "vertical" }
      }
    )), /* @__PURE__ */ React.createElement("div", { style: { gridColumn: "1 / -1", display: "flex", alignItems: "center", gap: 20, marginTop: 4, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "submit",
        className: "aq-btn aq-btn--primary",
        style: { background: "var(--aq-teal)", color: "var(--aq-deep)", borderColor: "transparent" }
      },
      "Start the conversation \u2192"
    ), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 12, color: "var(--aq-sage)" } }, "We'll never share your details."))))));
  }
  window.Contact = Contact;
})();
