(() => {
  function Workflows() {
    const isMobile = useIsMobile();
    const [active, setActive] = React.useState(null);
    const principles = [
      { t: "A person signs every gate.", b: "AI proposes; a named person confirms. Nothing moves to the next step without that signature." },
      { t: "Prompts first, agents second.", b: "We build the agent the second time a prompt is run by hand, and someone who did not build it tests it before it ships." },
      { t: "Evidence has a date and a source.", b: "Fact, team view and vendor claim are kept apart. Gaps are named, never filled." },
      { t: "Every action has an owner, a date and a measure.", b: "An action with no owner is a wish. Done is not a result; the number is." },
      { t: "The loop closes.", b: "This cycle's results are the first thing the next cycle reads." },
      { t: "Built to be handed over.", b: "Your team runs it, your experts validate it, and the last gate is the one where AccioIQ steps back from the keyboard." }
    ];
    const workflows = [
      {
        tag: "Sales",
        name: "Account Planning",
        shape: "Six steps, six gates",
        cadence: "Annual plan, monthly dashboard update, quarterly check",
        ends: "An executive-ready account plan deck plus a living account dashboard that next year's plan starts from.",
        hook: "An action with no owner is a wish.",
        what_people: "Name the account, the review date and the data sources. Set the health rating, draw the relationship map, correct the technology landscape. Choose the strategy, the scenario and the ask. Write the one-sentence vision line by hand.",
        what_ai: "Four research lanes with every source dated and every gap registered. Draft chapters marked sourced, team-supplied or hypothesis. Scenario modelling that shows every calculation. Question prediction, meeting capture and a scheduled quarterly change scan."
      },
      {
        tag: "Product Marketing",
        name: "Content Engine",
        shape: "Four steps, four gates",
        cadence: "Per category, refreshed quarterly or twice a year",
        ends: "A folder of four to six documents that web, PR, social, sales and field teams can build from without coming back to ask.",
        hook: "We fill the folder that everyone else builds from. The engine ends the moment that folder is full.",
        what_people: "Set the topic and say why it is needed. Decide what the company will not claim, before the draft exists. Lock the buyer profiles in priority order. Approve the claim set. Declare the folder complete only when a newcomer could build from it without asking.",
        what_ai: "Outside-in research with every source dated and competitor advantages left unsoftened. A value proposition that opens with the buyer's problem, not the company. A claim library where every row is quotable, needs conditions, needs approval or is not yet quotable. Channel briefs that recombine approved claims and never introduce new proof."
      },
      {
        tag: "Marketing Leadership",
        name: "Monthly Decision Cycle",
        shape: "Five steps, five gates, five data engines",
        cadence: "Monthly, with a quarterly executive roll-up",
        ends: "A monthly summary and top-ten pack three days before the leadership meeting, a decision record with success measures, and a run log that makes next month's cycle credible.",
        hook: "A recommendation with no cost is an opinion. Ten recommendations nobody decided on is a report, not a cycle.",
        what_people: "Supply the context the data cannot see: what was paused, what was underfunded, what sales already knew. Name one alternative explanation for every movement. Rank the ten and say which three you would fund if only three were funded. Name a dissenter whose job is to argue the other side.",
        what_ai: "Reads raw exports at a monthly altitude without rebuilding the dashboard. Returns every stream in the same shape so the five can be compared. Separates drivers from covariates and names the null case. Keeps the run log across cycles and reports the hit rate honestly, including decisions that were never measured."
      },
      {
        tag: "Marketing, Web and PR",
        name: "AI Engine Visibility",
        shape: "Six steps, six gates",
        cadence: "Quarterly per industry, every other month under active push",
        ends: "Page fixes, proof asks, outreach targets, owned passages, earned artifacts, a citable claim library, and a readout that opens with the number. Second run takes roughly half the time because the agents exist.",
        hook: "We applied the same four gates to the page you are reading.",
        what_people: "Agree the five buyer questions in the buyer's own language. Confirm the blocking gate on every page and approve the proof asks. Name an owner for every target; log a gap rather than force the wrong lane. Rewrite every AI draft in a human hand.",
        what_ai: "Scores engine transcripts and quotes the evidence for every score. Audits a page on four gates and names the one defect to fix first. Classifies sources on tier, control, standing, sentiment and access. Merges baseline, defects and sources into one ranked queue of work, cut to what the team can actually publish."
      }
    ];
    return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--aq-rule)", padding: isMobile ? "72px 20px" : "128px 40px" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1200, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("div", { style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1.4fr",
      gap: isMobile ? 24 : 96,
      alignItems: "start",
      marginBottom: isMobile ? 48 : 80
    } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "aq-eyebrow", style: { color: "var(--aq-teal-dark)", marginBottom: 20 } }, "AccioIQ Workflows"), /* @__PURE__ */ React.createElement("h2", { style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: isMobile ? 32 : 48,
      lineHeight: 1.1,
      color: "var(--aq-deep)",
      letterSpacing: "-0.01em",
      margin: 0
    } }, "The tool is not the difference. The workflow is.")), /* @__PURE__ */ React.createElement("div", { style: { paddingTop: isMobile ? 0 : 8 } }, /* @__PURE__ */ React.createElement("p", { style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: isMobile ? 15 : 17,
      lineHeight: 1.65,
      color: "var(--aq-slate)",
      margin: "0 0 24px"
    } }, "AccioIQ builds AI workflows inside organizations: repeatable, step-by-step processes where AI gathers, drafts and checks, and a named person decides at every gate. Each workflow ends with a defined output, an owner for every action, and a loop that feeds the next cycle. AccioIQ builds them in the client's own tools and hands them over to run without us."), /* @__PURE__ */ React.createElement("p", { style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: isMobile ? 14 : 15,
      lineHeight: 1.65,
      color: "var(--aq-sage)",
      margin: 0,
      paddingTop: 20,
      borderTop: "1px solid var(--aq-rule)"
    } }, "Eight in ten people say AI has improved their own productivity. Fewer than four in ten companies can see it in their financial results, and that number has not moved in a year. McKinsey's 2026 State of AI survey finds one thing separates the companies that can: nearly three-quarters of them fundamentally redesigned their workflows around AI, compared with one-quarter of everyone else.", " ", /* @__PURE__ */ React.createElement("span", { style: { fontStyle: "italic" } }, "McKinsey & Company, The state of AI in 2026: On the road to ROI, August 2026.")))), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: isMobile ? 48 : 80 } }, /* @__PURE__ */ React.createElement("div", { className: "aq-eyebrow", style: { color: "var(--aq-teal-dark)", marginBottom: 24 } }, "What makes an AccioIQ workflow"), /* @__PURE__ */ React.createElement("div", { style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
      gap: 0,
      borderTop: "1px solid var(--aq-rule)",
      borderLeft: "1px solid var(--aq-rule)"
    } }, principles.map((p) => /* @__PURE__ */ React.createElement("div", { key: p.t, style: {
      padding: isMobile ? "24px 0 28px" : "32px 36px 36px",
      borderRight: "1px solid var(--aq-rule)",
      borderBottom: "1px solid var(--aq-rule)",
      display: "flex",
      flexDirection: "column",
      gap: 10
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: isMobile ? 18 : 22,
      lineHeight: 1.2,
      color: "var(--aq-deep)"
    } }, p.t), /* @__PURE__ */ React.createElement("p", { style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: 14,
      lineHeight: 1.6,
      color: "var(--aq-slate)",
      margin: 0
    } }, p.b))))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "aq-eyebrow", style: { color: "var(--aq-teal-dark)", marginBottom: 24 } }, "Workflows in practice"), /* @__PURE__ */ React.createElement("div", { style: { borderTop: "1px solid var(--aq-rule)" } }, workflows.map((w, i) => /* @__PURE__ */ React.createElement("div", { key: w.name, style: { borderBottom: "1px solid var(--aq-rule)" } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setActive(active === i ? null : i),
        style: {
          all: "unset",
          cursor: "pointer",
          width: "100%",
          boxSizing: "border-box",
          padding: isMobile ? "24px 0" : "32px 0",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr 24px" : "200px 1fr 1fr 24px",
          gap: isMobile ? 12 : 32,
          alignItems: "center"
        }
      },
      /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "aq-eyebrow", style: { color: "var(--aq-teal-dark)", marginBottom: 6 } }, w.tag), /* @__PURE__ */ React.createElement("div", { style: {
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: isMobile ? 20 : 26,
        color: "var(--aq-deep)",
        lineHeight: 1.2
      } }, w.name)),
      !isMobile && /* @__PURE__ */ React.createElement("div", { style: {
        fontFamily: "var(--font-body)",
        fontWeight: 300,
        fontSize: 14,
        color: "var(--aq-slate)",
        lineHeight: 1.5
      } }, w.shape),
      !isMobile && /* @__PURE__ */ React.createElement("div", { style: {
        fontFamily: "var(--font-display)",
        fontStyle: "italic",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 1.4,
        color: "var(--aq-sage)"
      } }, w.cadence),
      /* @__PURE__ */ React.createElement("div", { style: {
        fontFamily: "var(--font-body)",
        fontSize: 20,
        color: "var(--aq-teal-dark)",
        transform: active === i ? "rotate(90deg)" : "rotate(0deg)",
        transition: "transform 320ms var(--ease-out)",
        textAlign: "center"
      } }, "\u2192")
    ), /* @__PURE__ */ React.createElement("div", { style: {
      maxHeight: active === i ? 800 : 0,
      opacity: active === i ? 1 : 0,
      overflow: "hidden",
      transition: "max-height 480ms var(--ease-out), opacity 320ms var(--ease-out)"
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      background: "var(--aq-white)",
      border: "1px solid var(--aq-rule)",
      padding: isMobile ? "28px 24px 36px" : "40px 48px 48px",
      marginBottom: 24,
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1.2fr 1fr",
      gap: isMobile ? 28 : 56
    } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "aq-eyebrow", style: { color: "var(--aq-teal-dark)", marginBottom: 12 } }, w.tag, " \xB7 ", w.name), /* @__PURE__ */ React.createElement("div", { style: {
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontWeight: 400,
      fontSize: isMobile ? 16 : 20,
      lineHeight: 1.35,
      color: "var(--aq-slate)",
      margin: "0 0 20px"
    } }, w.hook), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 16 } }, /* @__PURE__ */ React.createElement("div", { className: "aq-eyebrow", style: { color: "var(--aq-sage)", marginBottom: 8 } }, "What you are holding at the end"), /* @__PURE__ */ React.createElement("p", { style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: isMobile ? 14 : 15,
      lineHeight: 1.65,
      color: "var(--aq-slate)",
      margin: 0
    } }, w.ends))), /* @__PURE__ */ React.createElement("div", { style: {
      borderTop: isMobile ? "1px solid var(--aq-rule)" : "none",
      borderLeft: !isMobile ? "1px solid var(--aq-rule)" : "none",
      paddingTop: isMobile ? 24 : 0,
      paddingLeft: !isMobile ? 40 : 0,
      display: "flex",
      flexDirection: "column",
      gap: 24
    } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "aq-eyebrow", style: { color: "var(--aq-sage)", marginBottom: 8 } }, "What people do"), /* @__PURE__ */ React.createElement("p", { style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: 14,
      lineHeight: 1.65,
      color: "var(--aq-slate)",
      margin: 0
    } }, w.what_people)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "aq-eyebrow", style: { color: "var(--aq-sage)", marginBottom: 8 } }, "What AI does"), /* @__PURE__ */ React.createElement("p", { style: {
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: 14,
      lineHeight: 1.65,
      color: "var(--aq-slate)",
      margin: 0
    } }, w.what_ai))))))))), /* @__PURE__ */ React.createElement("div", { style: {
      marginTop: isMobile ? 48 : 72,
      padding: isMobile ? "32px 0" : "40px 48px",
      borderTop: "1px solid var(--aq-rule)",
      borderBottom: "1px solid var(--aq-rule)",
      display: "flex",
      alignItems: isMobile ? "flex-start" : "center",
      justifyContent: "space-between",
      flexDirection: isMobile ? "column" : "row",
      gap: isMobile ? 24 : 48
    } }, /* @__PURE__ */ React.createElement("p", { style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: isMobile ? 20 : 26,
      lineHeight: 1.3,
      color: "var(--aq-deep)",
      margin: 0,
      maxWidth: "48ch"
    } }, "Bring us one process your team repeats every month. We will show you what it looks like as a workflow, who decides what, and what you would be holding at the end."), /* @__PURE__ */ React.createElement("a", { href: "#contact", className: "aq-btn aq-btn--primary", style: {
      background: "var(--aq-deep)",
      color: "var(--aq-parchment)",
      borderColor: "transparent",
      flexShrink: 0
    } }, "Start the conversation \u2192"))));
  }
  window.Workflows = Workflows;
})();
