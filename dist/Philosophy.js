(() => {
  function Philosophy() {
    const [active, setActive] = React.useState(0);
    const isMobile = useIsMobile();
    const phases = [
      {
        n: "01",
        tag: "Phase one",
        t: "Learn the work",
        b: "We embed within your teams to learn culture and workflows from the ground floor. Not from a conference room. Not from a discovery deck. From inside.",
        detail: "We shadow. We sit in meetings. We ask obvious questions. Before we propose anything, we understand how the work actually gets done \u2014 including the parts that never make it into a process doc."
      },
      {
        n: "02",
        tag: "Phase two",
        t: "Build with you",
        b: "We co-build solutions that feel native to your organization \u2014 not forced upon it. Tools your people helped design, on workflows they actually run.",
        detail: "Co-design is the method. Your team owns the problem and the artifact. We bring AI fluency, prompt design, and the discipline of keeping things small until they work."
      },
      {
        n: "03",
        tag: "Phase three",
        t: "Leave it yours",
        b: "We stay until the capability is fully yours. Internal champions lead. External consultants leave. The change is permanent \u2014 or it wasn't change.",
        detail: "Success is measured by what happens after we're gone. Champions keep building. Playbooks keep circulating. The organization gets better at AI without us in the room."
      }
    ];
    return /* @__PURE__ */ React.createElement("section", { id: "philosophy", style: {
      background: "var(--aq-parchment)",
      padding: isMobile ? "72px 20px" : "128px 40px"
    } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1200, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("div", { style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1.4fr",
      gap: isMobile ? 24 : 96,
      alignItems: "start",
      marginBottom: isMobile ? 40 : 80
    } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "aq-eyebrow", style: { color: "var(--aq-teal-dark)", marginBottom: 20 } }, "Core philosophy"), /* @__PURE__ */ React.createElement("h2", { style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: isMobile ? 36 : 52,
      lineHeight: 1.08,
      color: "var(--aq-deep)",
      letterSpacing: "-0.01em",
      margin: 0
    } }, "The Inside ", /* @__PURE__ */ React.createElement("em", { style: { color: "var(--aq-teal-dark)" } }, "Out"), " Method.")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: isMobile ? 15 : 18,
      lineHeight: 1.65,
      color: "var(--aq-slate)",
      margin: 0,
      maxWidth: "52ch"
    } }, "Three phases, in order, across a single engagement. The sequence matters \u2014 skip a phase and the capability doesn't stick. It's the reason we call it inside out instead of top down."))), /* @__PURE__ */ React.createElement("hr", { style: { border: 0, borderTop: "1px solid var(--aq-rule)", margin: 0 } }), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 0 } }, phases.map((p, i) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: p.n,
        onMouseEnter: () => setActive(i),
        onFocus: () => setActive(i),
        onClick: () => setActive(i),
        style: {
          all: "unset",
          cursor: "pointer",
          padding: isMobile ? "32px 0" : "48px 40px 56px",
          borderRight: !isMobile && i < 2 ? "1px solid var(--aq-rule)" : "none",
          borderBottom: isMobile ? "1px solid var(--aq-rule)" : "none",
          background: active === i ? "var(--aq-white)" : "transparent",
          transition: "background 320ms var(--ease-out)",
          minHeight: isMobile ? "auto" : 360,
          display: "flex",
          flexDirection: "column",
          gap: 20
        }
      },
      /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("span", { style: {
        fontFamily: "var(--font-display)",
        fontSize: isMobile ? 40 : 56,
        fontWeight: 400,
        color: active === i ? "var(--aq-teal-dark)" : "var(--aq-deep)",
        letterSpacing: "-0.02em",
        lineHeight: 1,
        transition: "color 320ms var(--ease-out)"
      } }, p.n), /* @__PURE__ */ React.createElement("span", { className: "aq-eyebrow", style: { color: "var(--aq-sage)" } }, p.tag)),
      /* @__PURE__ */ React.createElement("h3", { style: {
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: isMobile ? 24 : 30,
        color: "var(--aq-deep)",
        margin: 0,
        lineHeight: 1.1
      } }, p.t),
      /* @__PURE__ */ React.createElement("p", { style: {
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 15,
        lineHeight: 1.6,
        color: "var(--aq-slate)",
        margin: 0
      } }, p.b),
      /* @__PURE__ */ React.createElement("div", { style: {
        marginTop: "auto",
        paddingTop: 20,
        borderTop: "1px dashed var(--aq-rule)",
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 13,
        lineHeight: 1.55,
        color: "var(--aq-sage)",
        fontStyle: "italic",
        maxHeight: active === i ? 120 : 0,
        opacity: active === i ? 1 : 0,
        overflow: "hidden",
        transition: "max-height 480ms var(--ease-out), opacity 320ms var(--ease-out), padding 320ms var(--ease-out)"
      } }, p.detail)
    ))), /* @__PURE__ */ React.createElement("hr", { style: { border: 0, borderTop: "1px solid var(--aq-rule)", margin: 0 } })));
  }
  window.Philosophy = Philosophy;
})();
