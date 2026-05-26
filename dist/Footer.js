function Footer() {
  const isMobile = useIsMobile();
  return /* @__PURE__ */ React.createElement("footer", { style: {
    background: "var(--aq-deep)",
    padding: isMobile ? "48px 20px 32px" : "72px 40px 48px",
    borderTop: "1px solid rgba(216,228,220,.14)"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr 1fr" : "1.4fr 1fr 1fr 1fr",
    gap: isMobile ? 32 : 48,
    alignItems: "start"
  } }, /* @__PURE__ */ React.createElement("div", { style: { gridColumn: isMobile ? "1 / -1" : "auto" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 28, color: "var(--aq-parchment)", letterSpacing: "-0.01em" } }, "Accio", /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-body)", fontWeight: 500, color: "var(--aq-teal)" } }, "IQ")), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 18, color: "var(--aq-sage)", marginTop: 10, maxWidth: "28ch" } }, "AI from the inside out \u2014 until the capability is yours.")), [
    { h: "Philosophy", links: ["Inside Out Method", "Core beliefs", "Honest limits"] },
    { h: "Engagement", links: ["90-day engagement", "Six elements of prompting", "Learning labs"] },
    { h: "Firm", links: ["Team", "Use cases", "Request a consultation"] }
  ].map((col) => /* @__PURE__ */ React.createElement("div", { key: col.h }, /* @__PURE__ */ React.createElement("div", { className: "aq-eyebrow", style: { color: "var(--aq-teal)", marginBottom: 16 } }, col.h), /* @__PURE__ */ React.createElement("ul", { style: { listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 } }, col.links.map((l) => /* @__PURE__ */ React.createElement("li", { key: l }, /* @__PURE__ */ React.createElement("a", { href: "#", style: { fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 14, color: "var(--aq-parchment)", textDecoration: "none" } }, l))))))), /* @__PURE__ */ React.createElement("div", { style: {
    maxWidth: 1200,
    margin: "48px auto 0",
    borderTop: "1px solid rgba(216,228,220,.14)",
    paddingTop: 24,
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "space-between",
    alignItems: isMobile ? "flex-start" : "center",
    gap: isMobile ? 12 : 0,
    fontFamily: "var(--font-body)",
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--aq-sage)"
  } }, /* @__PURE__ */ React.createElement("div", null, "\xA9 2026 AccioIQ \xB7 Confidential"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 28 } }, /* @__PURE__ */ React.createElement("a", { href: "#", style: { color: "var(--aq-sage)", textDecoration: "none" } }, "LinkedIn"), /* @__PURE__ */ React.createElement("a", { href: "#", style: { color: "var(--aq-sage)", textDecoration: "none" } }, "Privacy"), /* @__PURE__ */ React.createElement("a", { href: "mailto:hello@accioiq.com", style: { color: "var(--aq-sage)", textDecoration: "none" } }, "hello@accioiq.com"))));
}
window.Footer = Footer;
