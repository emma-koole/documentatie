"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [8030],
 {
  8793: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => p, contentTitle: () => d, default: () => c, frontMatter: () => o, metadata: () => s, toc: () => l });
   var a = t(52676),
    i = t(24785);
   const o = { title: "Candidate stappenplan", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Candidate componenten", sidebar_position: 3, pagination_label: "Candidate", description: "Stappen voor de Candidate fase van Definition of Done", keywords: ["componenten", "design system", "estafettemodel", "definition of done", "candidate"] },
    d = "Stappenplan: Candidate",
    s = { id: "handboek/candidate-stappenplan", title: "Candidate stappenplan", description: "Stappen voor de Candidate fase van Definition of Done", source: "@site/docs/handboek/candidate-stappenplan.mdx", sourceDirName: "handboek", slug: "/handboek/candidate-stappenplan", permalink: "/en/handboek/candidate-stappenplan", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/candidate-stappenplan.mdx", tags: [], version: "current", sidebarPosition: 3, frontMatter: { title: "Candidate stappenplan", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Candidate componenten", sidebar_position: 3, pagination_label: "Candidate", description: "Stappen voor de Candidate fase van Definition of Done", keywords: ["componenten", "design system", "estafettemodel", "definition of done", "candidate"] }, sidebar: "handboek", previous: { title: "Community", permalink: "/en/handboek/community-stappenplan" }, next: { title: "Hall of Fame", permalink: "/en/handboek/hall-of-fame-stappenplan" } },
    p = {},
    l = [];
   function r(e) {
    const n = { h1: "h1", p: "p", ...(0, i.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h1, { id: "stappenplan-candidate", children: "Stappenplan: Candidate" }), "\n", (0, a.jsx)(n.p, { children: "Dit stappenplan is nog in ontwikkeling." })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(r, { ...e }) }) : r(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => s, a: () => d });
   var a = t(75271);
   const i = {},
    o = a.createContext(i);
   function d(e) {
    const n = a.useContext(o);
    return a.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(i) : e.components || i) : d(e.components)), a.createElement(o.Provider, { value: n }, e.children);
   }
  },
 },
]);
