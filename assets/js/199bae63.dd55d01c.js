'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [61383],
 {
  33984: (e, n, i) => {
   i.d(n, { ZP: () => s });
   var t = i(52676),
    r = i(24785);
   function l(e) {
    const n = { a: 'a', em: 'em', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h2, { id: 'over-deze-richtlijnen', children: 'Over deze richtlijnen' }), '\n', (0, t.jsxs)(n.p, { children: ['Deze richtlijnen worden onderhouden door het NL Design System en zijn op dit moment in ', (0, t.jsx)(n.em, { children: 'beta' }), '.'] }), '\n', (0, t.jsxs)(n.p, { children: ['We willen graag van de community horen of ze werkbaar en nuttig zijn. Heb je vragen, aanvullingen of opmerkingen? ', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/discussions/473', children: 'Deel je mening op GitHub' }), ' met je suggesties.'] })] });
   }
   function s(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e);
   }
  },
  55204: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => m, contentTitle: () => a, default: () => j, frontMatter: () => o, metadata: () => d, toc: () => u });
   var t = i(52676),
    r = i(24785),
    l = i(2334),
    s = i(21004),
    c = i(33984);
   const o = { title: 'Links in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie links', sidebar_position: 7, pagination_label: 'Links in een formulier', description: 'Richtlijnen voor het plaatsen van links binnen een formulier.', slug: '/richtlijnen/formulieren/links/', keywords: ['links', 'formulier', 'design', 'code'] },
    a = 'Links in een formulier',
    d = { id: 'richtlijnen/formulieren/link/README', title: 'Links in een formulier | Richtlijnen', description: 'Richtlijnen voor het plaatsen van links binnen een formulier.', source: '@site/docs/richtlijnen/formulieren/link/README.mdx', sourceDirName: 'richtlijnen/formulieren/link', slug: '/richtlijnen/formulieren/links/', permalink: '/richtlijnen/formulieren/links/', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/formulieren/link/README.mdx', tags: [], version: 'current', sidebarPosition: 7, frontMatter: { title: 'Links in een formulier | Richtlijnen', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Introductie links', sidebar_position: 7, pagination_label: 'Links in een formulier', description: 'Richtlijnen voor het plaatsen van links binnen een formulier.', slug: '/richtlijnen/formulieren/links/', keywords: ['links', 'formulier', 'design', 'code'] }, sidebar: 'richtlijnen', previous: { title: 'Duidelijke tekst label', permalink: '/richtlijnen/formulieren/labels/duidelijke-tekst' }, next: { title: 'Links in een formulier', permalink: '/richtlijnen/formulieren/links/' } },
    m = {},
    u = [{ value: 'Deze documentatie heeft nu een eigen pagina', id: 'deze-documentatie-heeft-nu-een-eigen-pagina', level: 2 }];
   function h(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', p: 'p', ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: ['\n', '\n', '\n', (0, t.jsx)(n.h1, { id: 'links-in-een-formulier', children: 'Links in een formulier' }), '\n', (0, t.jsx)(n.p, { children: 'Soms wil je binnen een formulier verwijzen naar een andere pagina, bijvoorbeeld de algemene voorwaarden of het privacybeleid. Zo\u2019n link kun je boven het formulier zetten, maar ook bij een specifieke vraag plaatsen.' }), '\n', (0, t.jsx)(s.l, { excludeDocIDs: ['richtlijnen/formulieren/link/README'] }), '\n', (0, t.jsx)(n.h2, { id: 'deze-documentatie-heeft-nu-een-eigen-pagina', children: 'Deze documentatie heeft nu een eigen pagina' }), '\n', (0, t.jsx)(l._, { id: 'plaats-de-link-boven-het-gerelateerde-formulierveld', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/links/plaatsing', children: 'Plaats de link boven het gerelateerde formulierveld' }), '.'] }) }), '\n', (0, t.jsx)(l._, { id: 'zet-geen-link-in-een-label', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/links/niet-in-label', children: 'Zet geen link in een label' }), '.'] }) }), '\n', (0, t.jsx)(l._, { id: 'geef-aan-als-een-link-in-een-nieuwe-tab-opent', children: (0, t.jsxs)(n.p, { children: [(0, t.jsx)(n.a, { href: '/richtlijnen/formulieren/links/nieuwe-tab', children: 'Geef aan als een link in een nieuwe tab opent' }), '.'] }) }), '\n', (0, t.jsx)(c.ZP, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e);
   }
  },
  2334: (e, n, i) => {
   i.d(n, { _: () => l });
   var t = i(4814),
    r = (i(75271), i(52676));
   const l = (e) => {
    let { children: n, className: i, ...l } = e;
    return (0, r.jsx)('div', { ...l, className: (0, t.Z)('nlds-fragment-redirect', i), children: n });
   };
  },
  21004: (e, n, i) => {
   i.d(n, { l: () => o });
   var t = i(62567),
    r = i(4814),
    l = (i(75271), i(32074)),
    s = i(52676);
   const c = (e, n) => e.reduce((e, i) => ('link' === i.type ? (n.includes(i.docId) ? e : [...e, i]) : 'category' === i.type ? [...e, { ...i, items: c(i.items, n) }] : e), []),
    o = (e) => {
     let { excludeDocIDs: n = [], className: i, ...o } = e;
     const a = (0, t.jA)();
     return (0, s.jsx)('div', { ...o, className: (0, r.Z)('margin-top--lg', i), children: (0, s.jsx)(l.Z, { items: c(a.items, n) }) });
    };
  },
  32074: (e, n, i) => {
   i.d(n, { Z: () => j });
   var t = i(62567),
    r = i(53450),
    l = i(56150),
    s = i(4814);
   i(75271);
   const c = { card: 'card_l9fv', cardLink: 'cardLink_MxSo', cardTitle: 'cardTitle_HoSo', cardDescription: 'cardDescription_c27F' };
   var o = i(52676);
   function a(e) {
    let { href: n, icon: i = '', title: t, description: l, children: a } = e;
    return (0, o.jsxs)('div', { className: (0, s.Z)('card', c.card), children: [n ? (0, o.jsx)(r.Z, { href: n, className: (0, s.Z)(c.cardLink, 'utrecht-link'), children: (0, o.jsxs)('h2', { className: (0, s.Z)(c.cardTitle), children: [i, ' ', t] }) }) : (0, o.jsxs)('h2', { className: (0, s.Z)(c.cardTitle), children: [i, ' ', t] }), l && (0, o.jsx)('p', { className: (0, s.Z)(c.cardDescription), children: l }), a] });
   }
   function d(e) {
    let { item: n } = e;
    return (0, o.jsx)(a, { title: n.label, description: n.description, children: (0, o.jsx)(l.QI, { children: n.items.filter((e) => 'link' === e.type || 'category' === e.type).map((e, n) => (0, o.jsx)(l.AS, { children: 'link' === e.type ? (0, o.jsx)(r.Z, { to: e.href, children: e.label }) : 'category' === e.type ? (0, o.jsxs)(r.Z, { to: e.href, children: [e.items.length, " pagina's voor ", e.label] }) : (0, o.jsx)(o.Fragment, {}) }, n)) }) });
   }
   function m(e) {
    let { item: n } = e;
    const i = (0, t.xz)(n.docId);
    return (0, o.jsx)(a, { linkDescription: n.label, href: n.href, title: n.label, description: n.description ?? i?.description });
   }
   function u(e) {
    let { item: n } = e;
    switch (n.type) {
     case 'link':
      return (0, o.jsx)(m, { item: n });
     case 'category':
      return (0, o.jsx)(d, { item: n });
     default:
      throw new Error(`unknown item type ${JSON.stringify(n)}`);
    }
   }
   function h(e) {
    let { className: n } = e;
    const i = (0, t.jA)();
    return (0, o.jsx)(j, { items: i.items, className: n });
   }
   function j(e) {
    const { items: n, className: i } = e;
    if (!n) return (0, o.jsx)(h, { ...e });
    const r = (0, t.MN)(n);
    return (0, o.jsx)('section', { className: (0, s.Z)('row', i), children: r.map((e, n) => (0, o.jsx)('article', { className: 'col col--12 margin-bottom--lg doc-card-list', children: (0, o.jsx)(u, { item: e }) }, n)) });
   }
  },
  24785: (e, n, i) => {
   i.d(n, { Z: () => c, a: () => s });
   var t = i(75271);
   const r = {},
    l = t.createContext(r);
   function s(e) {
    const n = t.useContext(l);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function c(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(r) : e.components || r) : s(e.components)), t.createElement(l.Provider, { value: n }, e.children);
   }
  },
 },
]);
