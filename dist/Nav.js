function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const isMobile = useIsMobile();
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const items = [
    { href: "#philosophy", label: "Philosophy" },
    { href: "#method", label: "Method" },
    { href: "#work", label: "Work" },
    { href: "#team", label: "Team" }
  ];
  return /* @__PURE__ */ React.createElement("nav", { style: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: scrolled ? "rgba(11,28,18,0.92)" : "var(--aq-deep)",
    borderBottom: scrolled ? "1px solid rgba(216,228,220,.18)" : "1px solid rgba(216,228,220,.10)",
    padding: isMobile ? "16px 20px" : "22px 40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "background 320ms var(--ease-out), border-color 320ms var(--ease-out)"
  } }, /* @__PURE__ */ React.createElement("a", { href: "#top", style: {
    fontFamily: "var(--font-display)",
    fontWeight: 400,
    fontSize: isMobile ? 20 : 24,
    color: "var(--aq-parchment)",
    letterSpacing: "-0.01em",
    textDecoration: "none"
  } }, "Accio", /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-body)", fontWeight: 500, color: "var(--aq-teal)" } }, "IQ")), isMobile ? /* @__PURE__ */ React.createElement(
    "a",
    {
      href: "#contact",
      className: "aq-btn aq-btn--primary",
      style: { background: "var(--aq-teal)", color: "var(--aq-deep)", borderColor: "transparent", fontSize: 9, padding: "10px 14px" }
    },
    "Get in touch \u2192"
  ) : /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 40, alignItems: "center" } }, items.map((it) => /* @__PURE__ */ React.createElement(
    "a",
    {
      key: it.href,
      href: it.href,
      className: "aq-nav-link",
      style: { color: "var(--aq-parchment)" }
    },
    it.label
  )), /* @__PURE__ */ React.createElement(
    "a",
    {
      href: "#contact",
      className: "aq-btn aq-btn--primary",
      style: { background: "var(--aq-teal)", color: "var(--aq-deep)", borderColor: "transparent" }
    },
    "Request a consultation \u2192"
  )));
}
window.Nav = Nav;
