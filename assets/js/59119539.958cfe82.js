"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [8173],
 {
  91986: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => c, contentTitle: () => l, default: () => m, frontMatter: () => i, metadata: () => o, toc: () => r });
   var a = t(52676),
    s = t(24785);
   const i = { title: "Tabs", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Tabs", pagination_label: "Tabs", description: "UX richtlijnen voor Tabs component", slug: "/tabs", tags: ["Unknown"] },
    l = "Tabs",
    o = { id: "componenten/build/tabs", title: "Tabs", description: "UX richtlijnen voor Tabs component", source: "@site/docs/componenten/build/tabs.mdx", sourceDirName: "componenten/build", slug: "/tabs", permalink: "/tabs", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/tabs.mdx", tags: [{ label: "Unknown", permalink: "/tags/unknown" }], version: "current", frontMatter: { title: "Tabs", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Tabs", pagination_label: "Tabs", description: "UX richtlijnen voor Tabs component", slug: "/tabs", tags: ["Unknown"] }, sidebar: "componenten", previous: { title: "Table", permalink: "/table" }, next: { title: "Text input group", permalink: "/text-input-group" } },
    c = {},
    r = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "React", id: "react", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag", level: 4 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag-1", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ];
   function d(e) {
    const n = { a: "a", h1: "h1", h2: "h2", h3: "h3", h4: "h4", li: "li", p: "p", ul: "ul", ...(0, s.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: ["\n", "\n", (0, a.jsx)(n.h1, { id: "tabs", children: "Tabs" }), "\n", (0, a.jsx)(n.p, { children: 'Dit component heeft de "Unknown" status:' }), "\n", (0, a.jsx)(n.h2, { id: "implementaties", children: "Implementaties" }), "\n", (0, a.jsx)(n.h3, { id: "react", children: "React" }), "\n", (0, a.jsx)(n.h4, { id: "gemeente-den-haag", children: "Gemeente Den Haag" }), "\n", (0, a.jsxs)(n.ul, { children: ["\n", (0, a.jsxs)(n.li, { children: ["Implementatie: ", (0, a.jsx)(n.a, { href: "https://github.com/nl-design-system/denhaag/blob/main/components/Tab/src/Tabs.tsx", children: "Tabs React implementatie van Gemeente Den Haag" })] }), "\n", (0, a.jsxs)(n.li, { children: ["Storybook: ", (0, a.jsx)(n.a, { href: "https://nl-design-system.github.io/denhaag/?path=/story/react-navigation-tab--default", children: "Tabs React storybook van Gemeente Den Haag" })] }), "\n"] }), "\n", (0, a.jsx)(n.h3, { id: "figma", children: "Figma" }), "\n", (0, a.jsx)(n.h4, { id: "gemeente-den-haag-1", children: "Gemeente Den Haag" }), "\n", (0, a.jsxs)(n.ul, { children: ["\n", (0, a.jsxs)(n.li, { children: ["Implementatie: ", (0, a.jsx)(n.a, { href: "https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=5020%3A18454", children: "Tabs Figma implementatie van Gemeente Den Haag" })] }), "\n"] }), "\n", (0, a.jsx)(n.h2, { id: "levende-backlog", children: "Levende Backlog" }), "\n", (0, a.jsxs)(n.p, { children: ["De Tabs component staat bij NL Design System in de ", (0, a.jsx)(n.a, { href: "https://github.com/nl-design-system/backlog/issues/51", children: "levende backlog" }), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(d, { ...e }) }) : d(e);
   }
  },
  24785: (e, n, t) => {
   t.d(n, { Z: () => o, a: () => l });
   var a = t(75271);
   const s = {},
    i = a.createContext(s);
   function l(e) {
    const n = a.useContext(i);
    return a.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(s) : e.components || s) : l(e.components)), a.createElement(i.Provider, { value: n }, e.children);
   }
  },
 },
]);
