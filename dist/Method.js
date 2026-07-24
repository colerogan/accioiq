(() => {
  function Method({ darkBg = "deep" }) {
    const bg = darkBg === "forest" ? "var(--aq-forest)" : "var(--aq-deep)";
    const panelBg = darkBg === "forest" ? "var(--aq-deep)" : "var(--aq-forest)";
    const [month, setMonth] = React.useState(0);
    const isMobile = useIsMobile();
    const months = [
      {
        n: "Month 1",
        t: "Executive Alignment",
        sub: "Setting a common AI language and adoption baseline.",
        who: "Executives \xB7 Operating leaders",
        out: ["Shared AI vocabulary", "Baseline adoption audit", "Live priorities mapped to AI leverage"]
      },
      {
        n: "Month 2",
        t: "Learning Labs",
        sub: "Focused cross-functional teams co-building tools on high-friction workflows.",
        who: "Internal champions \xB7 Workflow owners",
        out: ["2\u20133 working AI assistants", "Prompt libraries per workflow", "Measured time-saved on target tasks"]
      },
      {
        n: "Month 3",
        t: "All-Hands Upskilling",
        sub: "High-energy workshops led by internal champions to scale capability firm-wide.",
        who: "Full organization \xB7 Champion-led",
        out: ["Champion cohort established", "Playbooks circulated firm-wide", "Ongoing capability rhythm"]
      }
    ];
    return /* @__PURE__ */ React.createElement("section", { id: "method", className: "aq-on-dark", style: {
      background: bg,
      padding: isMobile ? "72px 20px" : "128px 40px"
    } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1200, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("div", { style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: isMobile ? 24 : 96,
      alignItems: "end",
      marginBottom: isMobile ? 40 : 72
    } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "aq-eyebrow", style: { color: "var(--aq-teal)", marginBottom: 20 } }, "The 90-day engagement"), /* @__PURE__ */ React.createElement("h2", { style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: isMobile ? 32 : 52,
      lineHeight: 1.08,
      color: "var(--aq-parchment)",
      letterSpacing: "-0.01em",
      margin: 0
    } }, "A quarter to go from scattered to shared.")), /* @__PURE__ */ React.createElement("p", { style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: isMobile ? 15 : 17,
      lineHeight: 1.6,
      color: "var(--aq-sage)",
      margin: 0,
      maxWidth: "52ch"
    } }, "Ninety days is enough to move an organization from scattered AI experimentation to shared capability \u2014 if the work is sequenced, co-built, and led by the people who have to live with the result.")), /* @__PURE__ */ React.createElement("div", { style: { position: "relative", marginBottom: 24 } }, !isMobile && /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 22,
      height: 1,
      background: "rgba(216,228,220,.18)"
    } }), /* @__PURE__ */ React.createElement("div", { style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
      position: "relative"
    } }, months.map((m, i) => /* @__PURE__ */ React.createElement("button", { key: m.n, onClick: () => setMonth(i), style: {
      all: "unset",
      cursor: "pointer",
      padding: isMobile ? "16px 0" : "0 8px",
      textAlign: "left",
      position: "relative",
      borderBottom: isMobile ? "1px solid rgba(216,228,220,.12)" : "none",
      display: isMobile ? "flex" : "block",
      alignItems: isMobile ? "center" : "initial",
      gap: isMobile ? 16 : 0
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      width: 14,
      height: 14,
      borderRadius: "50%",
      flexShrink: 0,
      background: month === i ? "var(--aq-teal)" : "var(--aq-deep)",
      border: `1px solid ${month === i ? "var(--aq-teal)" : "var(--aq-sage)"}`,
      marginBottom: isMobile ? 0 : 20,
      transition: "background 320ms var(--ease-out)"
    } }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "aq-eyebrow", style: { color: month === i ? "var(--aq-teal)" : "var(--aq-sage)", marginBottom: 4 } }, m.n), /* @__PURE__ */ React.createElement("div", { style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: isMobile ? 18 : 24,
      color: "var(--aq-parchment)",
      lineHeight: 1.2
    } }, m.t)))))), /* @__PURE__ */ React.createElement("div", { style: {
      marginTop: isMobile ? 32 : 56,
      background: panelBg,
      border: "1px solid rgba(216,228,220,.18)",
      padding: isMobile ? "32px 24px 40px" : "48px 48px 56px",
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1.2fr 1fr",
      gap: isMobile ? 32 : 64
    } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "aq-eyebrow", style: { color: "var(--aq-teal)", marginBottom: 16 } }, months[month].n, " \xB7 Focus"), /* @__PURE__ */ React.createElement("p", { style: {
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontWeight: 400,
      fontSize: isMobile ? 20 : 26,
      lineHeight: 1.3,
      color: "var(--aq-parchment)",
      margin: 0,
      maxWidth: "28ch"
    } }, months[month].sub), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 32 } }, /* @__PURE__ */ React.createElement("div", { className: "aq-eyebrow", style: { color: "var(--aq-sage)", marginBottom: 10 } }, "Who's in the room"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 15, color: "var(--aq-parchment)" } }, months[month].who))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "aq-eyebrow", style: { color: "var(--aq-sage)", marginBottom: 16 } }, "What you leave with"), /* @__PURE__ */ React.createElement("ul", { style: { listStyle: "none", padding: 0, margin: 0 } }, months[month].out.map((o, i) => /* @__PURE__ */ React.createElement("li", { key: o, style: {
      display: "flex",
      gap: 16,
      padding: "14px 0",
      borderTop: "1px solid rgba(216,228,220,.14)",
      borderBottom: i === months[month].out.length - 1 ? "1px solid rgba(216,228,220,.14)" : "none",
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: 15,
      color: "var(--aq-parchment)"
    } }, /* @__PURE__ */ React.createElement("span", { style: { color: "var(--aq-teal)", fontFamily: "var(--font-body)", fontSize: 12, letterSpacing: "0.22em", paddingTop: 3 } }, "0", i + 1), /* @__PURE__ */ React.createElement("span", null, o))))))));
  }
  window.Method = Method;
})();
