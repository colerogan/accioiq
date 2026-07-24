(() => {
  function Beliefs({ darkBg = "forest" }) {
    const bg = darkBg === "deep" ? "var(--aq-deep)" : "var(--aq-forest)";
    const isMobile = useIsMobile();
    const beliefs = [
      { t: "Capability over product.", b: "AI is an organizational skill to be developed \u2014 not just a tool to be bought. The spend follows the capability, not the other way around." },
      { t: "The hard part is human.", b: "AI failures happen when the human side is an afterthought. Most of the hard work is social, not technical." },
      { t: "Honest limits.", b: "Naming AI's constraints and risks transparently is required for trust. We tell leaders what AI cannot do as readily as what it can." },
      { t: "Co-design.", b: "Only co-built solutions actually stick. If your team did not help design it, they will not defend it when it breaks." },
      { t: "The human advantage.", b: "AI should not turn your people into passive reviewers of machine output. It should help them think better, decide better, and create better work. That is what we protect." }
    ];
    return /* @__PURE__ */ React.createElement("section", { className: "aq-on-dark", style: { background: bg, padding: isMobile ? "72px 20px" : "128px 40px" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1200, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("div", { style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1.4fr",
      gap: isMobile ? 24 : 96,
      alignItems: "start",
      marginBottom: isMobile ? 40 : 72
    } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "aq-eyebrow", style: { color: "var(--aq-teal)", marginBottom: 20 } }, "Core beliefs"), /* @__PURE__ */ React.createElement("h2", { style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: isMobile ? 32 : 48,
      lineHeight: 1.1,
      color: "var(--aq-parchment)",
      letterSpacing: "-0.01em",
      margin: 0
    } }, "Five things we will not compromise on.")), /* @__PURE__ */ React.createElement("p", { style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: isMobile ? 15 : 17,
      lineHeight: 1.6,
      color: "var(--aq-sage)",
      margin: 0,
      paddingTop: 24,
      borderTop: "1px solid rgba(216,228,220,.18)"
    } }, "These are not positioning statements. They are the beliefs that decide whether we take an engagement, how we scope it, and when we tell a client something they do not want to hear.")), /* @__PURE__ */ React.createElement("div", { style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
      gap: 0,
      borderTop: "1px solid rgba(216,228,220,.18)",
      borderLeft: "1px solid rgba(216,228,220,.18)"
    } }, beliefs.map((b, idx) => /* @__PURE__ */ React.createElement("div", { key: b.t, style: {
      padding: isMobile ? "32px 0 40px" : "48px 40px 56px",
      borderRight: "1px solid rgba(216,228,220,.18)",
      borderBottom: "1px solid rgba(216,228,220,.18)",
      gridColumn: !isMobile && idx === 4 ? "1 / -1" : "auto",
      display: "flex",
      flexDirection: "column",
      gap: 16
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: isMobile ? 24 : 34,
      lineHeight: 1.2,
      color: "var(--aq-parchment)",
      letterSpacing: "-0.005em",
      maxWidth: "22ch"
    } }, b.t), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 15, lineHeight: 1.6, color: "var(--aq-sage)", margin: 0, maxWidth: "44ch" } }, b.b))))));
  }
  window.Beliefs = Beliefs;
})();
