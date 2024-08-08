'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [67064],
 {
  58249: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => r, default: () => k, frontMatter: () => o, metadata: () => d, toc: () => g });
   var a = t(52676),
    i = t(24785),
    s = t(87359);
   const o = { title: 'Thema maken', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Thema maken', pagination_label: 'Thema maken', description: 'NL Design System thema maken' },
    r = 'NL Design System thema maken',
    d = { id: 'handboek/developer/thema-maken', title: 'Thema maken', description: 'NL Design System thema maken', source: '@site/docs/handboek/developer/03-thema-maken.mdx', sourceDirName: 'handboek/developer', slug: '/handboek/developer/thema-maken', permalink: '/handboek/developer/thema-maken', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/developer/03-thema-maken.mdx', tags: [], version: 'current', sidebarPosition: 3, frontMatter: { title: 'Thema maken', hide_title: !0, hide_table_of_contents: !1, sidebar_label: 'Thema maken', pagination_label: 'Thema maken', description: 'NL Design System thema maken' }, sidebar: 'handboek', previous: { title: 'Architectuur', permalink: '/handboek/developer/architectuur' }, next: { title: 'Component kiezen', permalink: '/handboek/developer/samenwerken-aan-componenten' } },
    l = {},
    g = [
     { value: 'Design tokens vastleggen', id: 'design-tokens-vastleggen', level: 2 },
     { value: 'Algemeen', id: 'algemeen', level: 3 },
     { value: 'Componenten en variabelen', id: 'componenten-en-variabelen', level: 3 },
     { value: 'Meer over design tokens vastleggen', id: 'meer-over-design-tokens-vastleggen', level: 3 },
     { value: 'Design tokens inzetten', id: 'design-tokens-inzetten', level: 2 },
     { value: 'Werken met design tokens', id: 'werken-met-design-tokens', level: 3 },
    ];
   function c(e) {
    const n = { a: 'a', code: 'code', h1: 'h1', h2: 'h2', h3: 'h3', li: 'li', p: 'p', pre: 'pre', ul: 'ul', ...(0, i.a)(), ...e.components };
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(n.h1, { id: 'nl-design-system-thema-maken', children: 'NL Design System thema maken' }), '\n', (0, a.jsxs)(n.p, { children: ['Zoals beschreven in ', (0, a.jsx)(n.a, { href: '/handboek/developer/aan-de-slag#ontwikkel-een-thema-voor-jouw-organisatie', children: 'Ontwikkel een thema voor jouw organisatie' }), ": thema's zijn technisch JSON-bestanden waarin design tokens zijn gedefinieerd. Met tooling maken we ze beschikbaar als custom properties in CSS."] }), '\n', (0, a.jsx)(n.h2, { id: 'design-tokens-vastleggen', children: 'Design tokens vastleggen' }), '\n', (0, a.jsx)(n.p, { children: 'Design tokens kunnen allerlei ontwerpkeuzes bevatten: kleuren, lettergroottes, afstanden en meer. Om een thema te maken vanuit een bestaande website en/of huisstijl maken we vaak een inventarisatie, met als einddoel \xe9\xe9n of meer JSON-bestanden.' }), '\n', (0, a.jsx)(n.h3, { id: 'algemeen', children: 'Algemeen' }), '\n', (0, a.jsxs)(n.p, { children: ['Meestal begint een inventarisatie bij de kleuren. Bij een bestaande site kan dat bijvoorbeeld door individuele kleuren met de developer tools te inspecteren. Met een tool als ', (0, a.jsx)(n.a, { href: 'https://www.projectwallace.com/', children: 'Project Wallace' }), ' kun je in \xe9\xe9n keer de kleuren (en meer) uit een pagina in een overzicht krijgen.'] }), '\n', (0, a.jsx)(n.p, { children: 'Dat hoeft niet altijd \xe9\xe9n op \xe9\xe9n. Soms valt dan op dat sommige kleuren wel erg dicht bij elkaar liggen, dan kan bijvoorbeeld de meest voorkomende gekozen worden en de rest afgerond worden, de afwijking is dan vast eerder een foutje dan een keuze.' }), '\n', (0, a.jsxs)(n.p, { children: ['Het kan ook zijn dat er duidelijk meerdere varianten zijn van \xe9\xe9n kleur, bijvoorbeeld drie tinten rood. Je kunt tokens noemen hoe je wilt, het is vaak handig om er iets van een systeem in aan te brengen. Soms kan dat uit een huisstijlgids worden overgenomen. Als er geen bestaand systeem is in de namen, kun je ook de kleurwaarde naar ', (0, a.jsx)(n.a, { href: 'https://hslpicker.com', children: 'HSL' }), ' converteren en dan de lightness gebruiken (de \u201cL\u201d uit \u201cHSL\u201d), zodat je bv met ', (0, a.jsx)(n.code, { children: 'rood-30' }), ', ', (0, a.jsx)(n.code, { children: 'rood-50' }), ' en ', (0, a.jsx)(n.code, { children: 'rood-70' }), '. Rond gerust af op hele getallen.'] }), '\n', (0, a.jsxs)(n.p, { children: ['De kleuren zetten we uiteindelijk in een JSON-bestand (in het ', (0, a.jsx)(n.a, { href: 'https://tr.designtokens.org/format/', children: 'Design Tokens Format' }), '):'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-json', metastring: 'title="colors.tokens.json"', children: '{\n  "organisatie": {\n    "color": {\n      "red": {\n        "30": { "value": "#911808" },\n        "50": { "value": "#f2280d" },\n        "70": { "value": "#f77e6e" }\n      }\n    }\n  }\n}\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'Dat bestand kan bijvoorbeeld zo in de filestructuur staan:' }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-txt', children: '\u251c\u2500 src\n  \u251c\u2500 brand\n    \u251c\u2500 organisatie\n      \u251c\u2500 colors.tokens.json\n' }) }), '\n', (0, a.jsx)(n.p, { children: 'Binnen NL Design System gebruiken we ook design tokens voor andere designkeuzes, waaronder:' }), '\n', (0, a.jsxs)(n.ul, { children: ['\n', (0, a.jsx)(n.li, { children: 'typografie (lettertypes, groottes en gewichten)' }), '\n', (0, a.jsx)(n.li, { children: 'spacing' }), '\n', (0, a.jsx)(n.li, { children: 'focus styles' }), '\n'] }), '\n', (0, a.jsx)(n.h3, { id: 'componenten-en-variabelen', children: 'Componenten en variabelen' }), '\n', (0, a.jsxs)(n.p, { children: ['Als de algemene tokens zijn gemaakt, kan er ook per component een bestand met tokens worden toegevoegd, waarin ook naar de andere beschikbare tokens kan worden verwezen, zelfs in andere organisaties. In het volgende voorbeeld wordt bijvoorbeeld in de tokens voor de ', (0, a.jsx)(n.code, { children: 'link' }), ' component van ', (0, a.jsx)(n.code, { children: 'organisatie' }), ' verwezen naar een kleur rood van ', (0, a.jsx)(n.code, { children: 'andereOrganisatie' }), ', met de verwijzing in curly brackets:'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-json', metastring: 'title="link.tokens.json"', children: '{\n  "organisatie": {\n    "link": {\n      "color": { "value": "{andereOrganisatie.color.red.45}" }\n    }\n  }\n}\n' }) }), '\n', (0, a.jsx)(n.h3, { id: 'meer-over-design-tokens-vastleggen', children: 'Meer over design tokens vastleggen' }), '\n', (0, a.jsx)(s.Y, { videoId: 'jSvjnU7oY5Y' }), '\n', (0, a.jsx)(n.h2, { id: 'design-tokens-inzetten', children: 'Design tokens inzetten' }), '\n', (0, a.jsxs)(n.p, { children: ['Zoals genoemd kunnen deze JSON-bestanden in allerlei toepassingen worden gebruikt. Bij NL Design System zorgt ', (0, a.jsx)(n.a, { href: 'https://amzn.github.io/style-dictionary', children: 'Style Dictionary' }), ' dat de tokens bruikbaar worden in CSS, door een ', (0, a.jsx)(n.code, { children: 'design-tokens.css' }), ' te genereren. Die output kan er bijvoorbeeld zo uit zien:'] }), '\n', (0, a.jsx)(n.pre, { children: (0, a.jsx)(n.code, { className: 'language-css', metastring: 'title="dist/design-tokens.css"', children: '/**\n  * Do not edit directly\n  * Generated at [\u2026]\n  */\n.organisatie-theme {\n  --organisatie-color-red-30: #911808;\n  --organisatie-color-red-50: #f2280d;\n  --organisatie-color-red-70: #f77e6e;\n}\n' }) }), '\n', (0, a.jsxs)(n.p, { children: ["In dit bestand worden alle tokens die in het theme van deze organisatie bestaan vanuit verschillende plekken bij elkaar gezet, als custom properties. Nu kunnen ze in de CSS van deze organisatie worden gebruikt, op pagina's waar de ", (0, a.jsx)(n.code, { children: 'organisatie-theme' }), ' classname op de body staat. Er is ook een output setting waar de variabelen op ', (0, a.jsx)(n.code, { children: ':root' }), ' worden geplaatst, voor als de HTML niet makkelijk aanpasbaar is.'] }), '\n', (0, a.jsxs)(n.p, { children: [(0, a.jsx)(n.a, { href: 'https://github.com/amzn/style-dictionary/tree/main/examples/advanced/referencing_aliasing', children: 'Referencing/aliasing' }), ' is de feature in Style Dictionary die zorgt dat tokens als variabele kunnen worden ingezet, zoals we in het vorige voorbeeld deden met tokens uit een andere organisatie. In de NL Design System configuratie worden alle tokenbestanden meegenomen (met ', (0, a.jsx)(n.code, { children: '**/*' }), '). Ook worden de gebruikte verwijzingen opgenomen als verwijzingen naar CSS, wat extra handig is in het geval van updates.'] }), '\n', (0, a.jsx)(n.h3, { id: 'werken-met-design-tokens', children: 'Werken met design tokens' }), '\n', (0, a.jsx)(n.p, { children: 'Meer weten over werken met design tokens? In onderstaande video vertelt Yolijn meer over uitbreiden van bestaande design tokens met jouw designkeuzes.' }), '\n', (0, a.jsx)(s.Y, { videoId: '-guAi7Lvl6g' })] });
   }
   function k(e = {}) {
    const { wrapper: n } = { ...(0, i.a)(), ...e.components };
    return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(c, { ...e }) }) : c(e);
   }
  },
  87359: (e, n, t) => {
   t.d(n, { Y: () => d });
   var a = t(4814),
    i = (t(75271), t(95110)),
    s = t.n(i);
   const o = { 'video-player': 'video-player__6fg' };
   var r = t(52676);
   const d = (e) => {
    let { videoId: n, className: t, ...i } = e;
    return (0, r.jsx)(s(), { url: `https://youtube.com/watch?v=${n}`, className: `${(0, a.Z)(o['video-player'])} ${t}`, width: '100%', height: '100%', controls: !0, ...i, config: { youtube: { playerVars: { disablekb: 1 } } } });
   };
  },
 },
]);
