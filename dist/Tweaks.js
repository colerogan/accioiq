function Tweaks({ state, setState }) {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === "__activate_edit_mode") setVisible(true);
      if (e.data?.type === "__deactivate_edit_mode") setVisible(false);
    };
    window.addEventListener("message", handler);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", handler);
  }, []);
  const update = (k, v) => {
    const next = { ...state, [k]: v };
    setState(next);
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [k]: v } }, "*");
  };
  if (!visible) return null;
  return /* @__PURE__ */ React.createElement("div", { style: {
    position: "fixed",
    right: 20,
    bottom: 20,
    width: 300,
    zIndex: 1e3,
    background: "var(--aq-deep)",
    border: "1px solid rgba(216,228,220,.18)",
    padding: 20,
    fontFamily: "var(--font-body)",
    boxShadow: "0 12px 48px rgba(0,0,0,.3)"
  } }, /* @__PURE__ */ React.createElement("div", { className: "aq-eyebrow", style: { color: "var(--aq-teal)", marginBottom: 14 } }, "Tweaks"), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { color: "var(--aq-sage)", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 8 } }, "Hero emphasis"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6, flexWrap: "wrap" } }, ["teal", "parchment", "italic-only"].map((o) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: o,
      onClick: () => update("heroAccent", o),
      style: {
        padding: "6px 12px",
        fontSize: 10,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        borderRadius: 999,
        cursor: "pointer",
        background: state.heroAccent === o ? "var(--aq-teal)" : "transparent",
        color: state.heroAccent === o ? "var(--aq-deep)" : "var(--aq-sage)",
        border: `1px solid ${state.heroAccent === o ? "var(--aq-teal)" : "rgba(216,228,220,.25)"}`
      }
    },
    o
  )))), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { color: "var(--aq-sage)", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 8 } }, "Cases layout"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, ["list", "cards"].map((o) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: o,
      onClick: () => update("casesLayout", o),
      style: {
        padding: "6px 12px",
        fontSize: 10,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        borderRadius: 999,
        cursor: "pointer",
        background: state.casesLayout === o ? "var(--aq-teal)" : "transparent",
        color: state.casesLayout === o ? "var(--aq-deep)" : "var(--aq-sage)",
        border: `1px solid ${state.casesLayout === o ? "var(--aq-teal)" : "rgba(216,228,220,.25)"}`
      }
    },
    o
  )))), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { color: "var(--aq-sage)", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 8 } }, "Dark section"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, ["deep", "forest"].map((o) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: o,
      onClick: () => update("darkBg", o),
      style: {
        padding: "6px 12px",
        fontSize: 10,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        borderRadius: 999,
        cursor: "pointer",
        background: state.darkBg === o ? "var(--aq-teal)" : "transparent",
        color: state.darkBg === o ? "var(--aq-deep)" : "var(--aq-sage)",
        border: `1px solid ${state.darkBg === o ? "var(--aq-teal)" : "rgba(216,228,220,.25)"}`
      }
    },
    o
  )))), /* @__PURE__ */ React.createElement("div", { style: {
    paddingTop: 12,
    borderTop: "1px solid rgba(216,228,220,.18)",
    fontSize: 10,
    color: "var(--aq-sage)",
    letterSpacing: "0.04em"
  } }, "Changes are persisted to the file."));
}
window.Tweaks = Tweaks;
