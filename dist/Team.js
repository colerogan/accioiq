function Team() {
  const [active, setActive] = React.useState(1);
  const isMobile = useIsMobile();
  const partners = [
    {
      name: "Matt Lucas",
      role: "Co-Founder & Partner",
      short: "Generative AI subject expert. Vice Chair for AI Strategy at Skidmore. Former global executive at Bose, Samsung, Coty.",
      bio: "Matt is a Co-Founder of AccioIQ and a generative-AI subject expert who translates frontier capability into commercial outcomes. He serves as Professor of Business and Vice Chair for AI Strategy at Skidmore College, where he holds the F. William Harder Chair of Business Administration and teaches Foundations with Generative AI and AI-Powered Selling. Matt brings two decades of senior executive leadership at global consumer brands \u2014 Global VP of Consumer Sales at Bose, SVP at Samsung U.S., SVP of Sales at Coty Beauty U.S., with earlier roles at Novartis Consumer Health and Procter & Gamble \u2014 and pairs that operator's instinct with a working command of how generative AI actually changes how teams sell, plan, and decide.",
      initials: "ML",
      stats: [
        { n: "AI Strategy", b: "Vice Chair for AI Strategy, Skidmore College." },
        { n: "GenAI SME", b: "Generative AI subject expert; teaches Foundations with Generative AI & AI-Powered Selling." },
        { n: "20+ yrs", b: "Global executive at Bose, Samsung, Coty, Novartis, P&G." }
      ]
    },
    {
      name: "Kris Covey",
      role: "Co-Founder & Partner",
      short: "Yale-trained applied ecologist. Co-Founder & CEO, The Soil Inventory Project. Associate Professor at Skidmore College.",
      bio: "Kris is Co-Founder of AccioIQ and a social entrepreneur with expertise in organizational development, launching mobile and web software, and leading AI integration across teams. A Yale-trained applied ecologist and biogeochemist, he is Co-Founder and CEO of The Soil Inventory Project, a nonprofit building public soil performance data infrastructure for agriculture, and an Associate Professor of Environmental Studies and Sciences at Skidmore College. His environmental-impact research crosses the globe: he designed the study that produced the first robust estimate of the number of trees on Earth, and led a team assembled by National Geographic that produced the first holistic accounting of the biogeochemistry of climate in the Amazon rainforest. His research has been cited more than 8,000 times.",
      initials: "KC",
      stats: [
        { n: "CEO", b: "Co-Founder & CEO, The Soil Inventory Project." },
        { n: "15+ yrs", b: "Leading high-impact global research teams." },
        { n: "$25M+", b: "In research and program funding." }
      ]
    },
    {
      name: "Cole Rogan",
      role: "Associate",
      short: "Skidmore '26 grad. Built CoachCole \u2014 AccioIQ's first product, used by NCAA D1\u2013D3 soccer programs.",
      bio: "Cole leads lab engagements at AccioIQ. A May 2026 Skidmore College graduate, he brings over a year of professional AI consulting experience at Selective Insurance, where he developed tools that have saved teams thousands of hours of repetitive work. Cole also built CoachCole \u2014 AccioIQ's first product \u2014 an elite NCAA soccer scouting tool actively used by head coaches competing in Divisions 1, 2, and 3. He's the partner who spends the most time inside the workflow, co-designing tools that feel native by the time they ship.",
      initials: "CR",
      stats: [
        { n: "1,000s", b: "Of hours of repetitive work eliminated for teams at Selective Insurance." },
        { n: "CoachCole", b: "Built AccioIQ\u2019s first product \u2014 a scouting tool used across NCAA D1\u2013D3 soccer." },
        { n: "Skidmore \u201926", b: "Recent graduate; over a year of professional AI consulting experience." }
      ]
    }
  ];
  return /* @__PURE__ */ React.createElement("section", { id: "team", style: { background: "var(--aq-parchment)", padding: isMobile ? "72px 20px" : "128px 40px" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1200, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: isMobile ? 40 : 64 } }, /* @__PURE__ */ React.createElement("div", { className: "aq-eyebrow", style: { color: "var(--aq-teal-dark)", marginBottom: 20 } }, "Leadership"), /* @__PURE__ */ React.createElement("h2", { style: {
    fontFamily: "var(--font-display)",
    fontWeight: 400,
    fontSize: isMobile ? 36 : 52,
    lineHeight: 1.08,
    color: "var(--aq-deep)",
    letterSpacing: "-0.01em",
    margin: 0,
    maxWidth: "22ch"
  } }, "Partners who ", /* @__PURE__ */ React.createElement("em", { style: { color: "var(--aq-teal-dark)" } }, "stay"), " in the room.")), /* @__PURE__ */ React.createElement("div", { style: {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1.4fr",
    gap: isMobile ? 0 : 56,
    borderTop: "1px solid var(--aq-rule)",
    paddingTop: 40
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 0 } }, partners.map((p, i) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: p.name,
      onClick: () => setActive(i),
      style: {
        all: "unset",
        cursor: "pointer",
        padding: "28px 0",
        borderBottom: "1px solid var(--aq-rule)",
        display: "flex",
        alignItems: "center",
        gap: 24
      }
    },
    /* @__PURE__ */ React.createElement("div", { style: {
      width: 64,
      height: 64,
      background: active === i ? "var(--aq-deep)" : "var(--aq-parchment)",
      border: "1px solid var(--aq-rule)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-display)",
      fontSize: 22,
      fontWeight: 400,
      color: active === i ? "var(--aq-teal)" : "var(--aq-slate)",
      transition: "all 320ms var(--ease-out)",
      flexShrink: 0
    } }, p.initials),
    /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 24,
      color: active === i ? "var(--aq-deep)" : "var(--aq-slate)",
      lineHeight: 1.15
    } }, p.name), /* @__PURE__ */ React.createElement("div", { className: "aq-eyebrow", style: {
      color: active === i ? "var(--aq-teal-dark)" : "var(--aq-sage)",
      marginTop: 6
    } }, p.role)),
    /* @__PURE__ */ React.createElement("div", { style: {
      fontFamily: "var(--font-body)",
      fontSize: 16,
      color: active === i ? "var(--aq-teal-dark)" : "var(--aq-sage)",
      transform: active === i ? "translateX(4px)" : "translateX(0)",
      transition: "transform 320ms var(--ease-out)"
    } }, "\u2192")
  ))), /* @__PURE__ */ React.createElement("div", { style: {
    background: "var(--aq-white)",
    border: "1px solid var(--aq-rule)",
    padding: isMobile ? "32px 24px 40px" : "48px 48px 56px",
    display: "flex",
    flexDirection: "column",
    gap: 24,
    marginTop: isMobile ? 24 : 0
  } }, /* @__PURE__ */ React.createElement("div", { className: "aq-eyebrow", style: { color: "var(--aq-teal-dark)" } }, partners[active].role), /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: "var(--font-display)",
    fontWeight: 400,
    fontSize: isMobile ? 30 : 40,
    lineHeight: 1.1,
    color: "var(--aq-deep)",
    letterSpacing: "-0.01em"
  } }, partners[active].name), /* @__PURE__ */ React.createElement("p", { style: {
    fontFamily: "var(--font-body)",
    fontWeight: 300,
    fontSize: isMobile ? 15 : 17,
    lineHeight: 1.65,
    color: "var(--aq-slate)",
    margin: 0,
    maxWidth: "52ch"
  } }, partners[active].bio), partners[active].stats && /* @__PURE__ */ React.createElement("div", { style: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 0,
    marginTop: 16,
    borderTop: "1px solid var(--aq-rule)"
  } }, partners[active].stats.map((s, i) => /* @__PURE__ */ React.createElement("div", { key: s.n, style: {
    padding: isMobile ? "16px 12px 8px" : "24px 20px 8px",
    borderRight: i < 2 ? "1px solid var(--aq-rule)" : "none"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: "var(--font-display)",
    fontWeight: 400,
    fontSize: isMobile ? 22 : 32,
    color: "var(--aq-teal-dark)",
    letterSpacing: "-0.01em"
  } }, s.n), /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: "var(--font-body)",
    fontWeight: 300,
    fontSize: 12,
    color: "var(--aq-slate)",
    marginTop: 8,
    lineHeight: 1.5
  } }, s.b))))))));
}
window.Team = Team;
