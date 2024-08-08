'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [17755],
 {
  49403: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => d, contentTitle: () => r, default: () => m, frontMatter: () => a, metadata: () => o, toc: () => l });
   var t = i(52676),
    s = i(24785);
   const a = { title: 'Figma structuur', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Figma structuur', sidebar_position: 2, pagination_label: 'Figma structuur', description: 'Handboek over de Figma structuur en hoe je hier gebruik van kunt maken.', keywords: ['designer', 'meedoen', 'figma', 'token studio'] },
    r = 'Figma structuur',
    o = { id: 'handboek/designer/figma-structuur', title: 'Figma structuur', description: 'Handboek over de Figma structuur en hoe je hier gebruik van kunt maken.', source: '@site/docs/handboek/designer/figma-structuur.mdx', sourceDirName: 'handboek/designer', slug: '/handboek/designer/figma-structuur', permalink: '/en/handboek/designer/figma-structuur', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/handboek/designer/figma-structuur.mdx', tags: [], version: 'current', sidebarPosition: 2, frontMatter: { title: 'Figma structuur', hide_title: !0, hide_table_of_contents: !0, sidebar_label: 'Figma structuur', sidebar_position: 2, pagination_label: 'Figma structuur', description: 'Handboek over de Figma structuur en hoe je hier gebruik van kunt maken.', keywords: ['designer', 'meedoen', 'figma', 'token studio'] }, sidebar: 'handboek', previous: { title: 'Index', permalink: '/en/handboek/designer/' }, next: { title: 'Stappenplan', permalink: '/en/handboek/designer/stappenplan' } },
    d = {},
    l = [
     { value: 'Figma', id: 'figma', level: 2 },
     { value: 'Waarom Figma?', id: 'waarom-figma', level: 3 },
     { value: 'Figma voordelen', id: 'figma-voordelen', level: 4 },
     { value: 'Structuur', id: 'structuur', level: 3 },
     { value: 'Gebruik', id: 'gebruik', level: 3 },
     { value: 'NL Design System Figma bibliotheek', id: 'nl-design-system-figma-bibliotheek', level: 4 },
     { value: 'Tokens Studio plugin', id: 'tokens-studio-plugin', level: 4 },
     { value: 'Voorbeeld thema', id: 'voorbeeld-thema', level: 5 },
     { value: 'Aan de slag', id: 'aan-de-slag', level: 3 },
     { value: 'Help deze documentatie te verbeteren', id: 'help-deze-documentatie-te-verbeteren', level: 2 },
     { value: 'Vragen', id: 'vragen', level: 2 },
    ];
   function g(e) {
    const n = { a: 'a', h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5', hr: 'hr', img: 'img', li: 'li', p: 'p', strong: 'strong', ul: 'ul', ...(0, s.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: 'figma-structuur', children: 'Figma structuur' }), '\n', (0, t.jsx)(n.h2, { id: 'figma', children: 'Figma' }), '\n', (0, t.jsx)(n.p, { children: 'Het kernteam, en reeds aangesloten organisaties hebben een voorkeur voor Figma.' }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen_designers_figma_figma-logo.png', alt: 'Logo Figma' }) }), '\n', (0, t.jsx)(n.h3, { id: 'waarom-figma', children: 'Waarom Figma?' }), '\n', (0, t.jsx)(n.p, { children: 'Figma sluit qua concept, architectuur en naamgeving goed aan bij de front-end implementatie. Daarnaast brengt Figma enkele voordelen met zich mee ten opzichte van andere ontwerptools.' }), '\n', (0, t.jsx)(n.h4, { id: 'figma-voordelen', children: 'Figma voordelen' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'Platform onafhankelijk. Je kunt zelfs vanuit de browser werken.' }), '\n', (0, t.jsx)(n.li, { children: 'Samenwerken. Je kunt met meerdere personen tegelijk in dezelfde file werken.' }), '\n', (0, t.jsx)(n.li, { children: 'Prototypen. Je kan binnen Figma zelf prototypes opzetten.' }), '\n', (0, t.jsx)(n.li, { children: 'Inspecteren. Developers kunnen binnen Figma zelf ontwerpen inspecteren.' }), '\n'] }), '\n', (0, t.jsxs)(n.p, { children: ['Meer informatie over Figma kun je vinden op ', (0, t.jsx)(n.a, { href: 'https://help.figma.com/', children: 'help.figma.com' }), ' en ', (0, t.jsx)(n.a, { href: 'https://forum.figma.com/', children: 'forum.figma.com' }), '.'] }), '\n', (0, t.jsx)(n.p, { children: 'Het NL Design System zit echter net even anders in elkaar als andere Design Systems. Dat heeft ook invloed op de Figma structuur en het gebruik.' }), '\n', (0, t.jsx)(n.h3, { id: 'structuur', children: 'Structuur' }), '\n', (0, t.jsx)(n.p, { children: 'Een organisatie heeft vaak zijn eigen Figma omgeving. Binnen die omgeving wordt een bibliotheek beheerd met de huisstijl en componenten. Andere design bestanden kunnen zich \u2018abonneren\u2019 op die bibliotheek waardoor concepten, flows en/of prototypes snel en consistent kunnen worden uitgewerkt.' }), '\n', (0, t.jsx)(n.p, { children: 'Wordt er een aanpassing gedaan in de bibliotheek? Dan is die aanpassing met een druk op de knop ook toegepast binnen alle design bestanden die op de bibliotheek geabonneerd zijn.' }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen_designers_figma_single-org-single-brand.png', alt: 'Schematische weergave van Figma inrichting voor 1 organisatie' }) }), '\n', (0, t.jsx)(n.p, { children: 'Bevat een organisatie meerdere \u2018huisstijlen\u2019? Ook dan kunnen design bestanden gebruik maken van \xe9\xe9n of meerdere bibliotheken.' }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen_designers_figma_single-org-multi-brand.png', alt: 'Schematische weergave van Figma inrichting voor 1 organisatie met 3 verschillende merken met ieder een eigen huisstijl' }) }), '\n', (0, t.jsxs)(n.p, { children: ['Maar dan is daar het NL Design System. Waarbij we ', (0, t.jsx)(n.strong, { children: 'wel' }), ' een bibliotheek aanbieden maar waar andere organisaties zich ', (0, t.jsx)(n.strong, { children: 'niet' }), ' op kunnen abonneren. Dat komt omdat iedere organisatie binnen een eigen Figma omgeving werkt. Hoe je toch van deze bibliotheek gebruik kunt maken, en je eigen huisstijl kunt toepassen, leggen we graag aan je uit.'] }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen_designers_figma_nlds-question.png', alt: 'Schematische weergave van Figma inrichting voor het NL Design System. Kader rond de Figma omgeving van het NL Design System. Drie kaders rond drie verschillende organisaties met ieder hun eigen Figma omgeving. Tussen de kaders staat een emoticon die nadenkt.' }) }), '\n', (0, t.jsx)(n.h3, { id: 'gebruik', children: 'Gebruik' }), '\n', (0, t.jsx)(n.p, { children: "Om vanuit Figma met het NL Design System te werken heb je 2 dingen nodig. De \u2018NL Design System bibliotheek' en de \u2018Tokens Studio plugin'." }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen_designers_figma_structuur-nlds-happy.png', alt: "Schematische weergave van Figma inrichting voor het NL Design System. Kader rond de Figma omgeving van het NL Design System. Drie kaders rond drie verschillende organisaties met ieder hun eigen Figma omgeving. In elk kader staan blokken met de tekst 'NLDS Bibliotheek' en 'Token Studio'. Tussen het kader van het NL Design System en de andere kaders loopt een stippenlijn. Op de stippellijn staat een emoticon die blij is." }) }), '\n', (0, t.jsx)(n.h4, { id: 'nl-design-system-figma-bibliotheek', children: 'NL Design System Figma bibliotheek' }), '\n', (0, t.jsx)(n.p, { children: "Vanuit het NL Design System bieden we een Figma bibliotheek aan. Op dit moment zijn we druk bezig om deze Figma bibliotheek te vullen met 'Community' componenten. Deze community componenten zijn een-op-een in code beschikbaar." }), '\n', (0, t.jsxs)(n.p, { children: ['Zodra een community component in meerdere organisaties succesvol ingezet is zal deze volgens het ', (0, t.jsx)(n.a, { href: '/en/handboek/estafettemodel', children: 'estafettemodel' }), " door het kernteam opgenomen worden als 'Candidate' en later 'Hall of Fame' component."] }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen_designers_figma_nlds-library.png', alt: "Voorblad van de NL Design System bibliotheek met de tekst 'Voorbeeld bibliotheek'." }) }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.strong, { children: 'Al een eigen Figma bibliotheek?' }) }), '\n', (0, t.jsx)(n.p, { children: 'Mooi! Die kun je gewoon blijven gebruiken.' }), '\n', (0, t.jsx)(n.p, { children: 'We adviseren je om de NL Design System bibliotheek naast de lokale bibliotheek van jouw organisatie te positioneren. Vervolgens kun je, geleidelijk aan, componenten die in beide bibliotheken aanwezig zijn uit de lokale bibliotheek van jouw organisatie inwisselen voor componenten uit de NL Design System bibliotheek.' }), '\n', (0, t.jsx)(n.p, { children: 'Zo houd je uiteindelijk een lokale bibliotheek over met componenten die alleen voor jouw organisatie nodig zijn.' }), '\n', (0, t.jsxs)(n.p, { children: ['Trouwens\u2026 misschien zitten daar wel componenten tussen die andere organisaties goed kunnen gebruiken. In dat geval kun je die componenten altijd aan onze ', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/backlog', children: 'backlog' }), ' toevoegen.'] }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.strong, { children: 'Nog geen eigen Figma bibliotheek?' }) }), '\n', (0, t.jsx)(n.p, { children: 'Start dan met de componenten in de NL Design System bibliotheek. Maak daarnaast een lokale bibliotheek aan voor overige componenten. Denk bijvoorbeeld aan een \u2018Pagina Header\u2019 of \u2018Pagina Footer\u2019. Componenten die specifiek voor jouw organisatie zijn noemen wij \u2018Snowflakes\u2019.' }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.strong, { children: 'Naamgeving Figma bibliotheken' }) }), '\n', (0, t.jsx)(n.p, { children: 'We houden de naamgeving van de Figma bibliotheken graag gelijk tussen de verschillende organisaties. Daarom hebben we als designers de volgende naamgeving afsproken:' }), '\n', (0, t.jsxs)(n.ul, { children: ['\n', (0, t.jsx)(n.li, { children: 'NLDS - [naam-organisatie] - Bibliotheek' }), '\n', (0, t.jsx)(n.li, { children: 'Local - [naam-organisatie] - Bibliotheek' }), '\n'] }), '\n', (0, t.jsx)(n.p, { children: 'Hierdoor is het meest onderscheidende deel nog leesbaar als je in Figma meerdere tabjes open hebt staan.' }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen_designers_figma_structuur-local.png', alt: 'Schematische weergave van Figma inrichting voor het NL Design System. Kader rond de Figma omgeving van het NL Design System. Drie kaders rond drie verschillende organisaties met ieder hun eigen Figma omgeving. In elk kader staan blokken met de tekst NLDS Bibliotheek, Token Studio en Lokale Bibliotheek. Tussen het kader van het NL Design System en de andere kaders loopt een stippenlijn. Op de stippellijn staat een emoticon die blij is.' }) }), '\n', (0, t.jsx)(n.h4, { id: 'tokens-studio-plugin', children: 'Tokens Studio plugin' }), '\n', (0, t.jsxs)(n.p, { children: ['De componenten van het NL Design System hebben van zichzelf geen huisstijl. Iedere organisatie kan zijn eigen huisstijl op de componenten toepassen. Om dat voor elkaar te krijgen maken we gebruik van ', (0, t.jsx)(n.a, { href: '/en/handboek/design-tokens/', children: 'design tokens' }), '.'] }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen_designers_figma_themas.png', alt: 'Drie dezelfde interfaces ieder met een eigen huisstijl' }) }), '\n', (0, t.jsxs)(n.p, { children: ['Alleen biedt Figma, net als alle andere ontwerpprogramma\u2019s, geen ondersteuning voor design tokens. Daarom maken we gebruik van de ', (0, t.jsx)(n.a, { href: 'https://tokens.studio/', children: 'Tokens Studio plugin' }), '.'] }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen_designers_figma_tokens-studio-logo.png', alt: 'Logo Token Studio' }) }), '\n', (0, t.jsx)(n.p, { children: 'Deze plugin zorgt ervoor dat je binnen Figma vanuit hetzelfde JSON bestand kunt werken als developers. Je put dus letterlijk uit dezelfde bron.' }), '\n', (0, t.jsx)(n.p, { children: (0, t.jsx)(n.img, { src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen_designers_figma_json.png', alt: "JSON bestand met aftakkingen naar verschillende programma's en technieken" }) }), '\n', (0, t.jsxs)(n.p, { children: ['Binnen de NL Design System bibliotheek houden we de Brand, Common en Component ', (0, t.jsx)(n.a, { href: '/en/handboek/design-tokens/', children: 'token niveaus' }), ' aan. Dat betreft de plugin maar ook de pagina-indeling van de bibliotheek.'] }), '\n', (0, t.jsx)(n.h5, { id: 'voorbeeld-thema', children: 'Voorbeeld thema' }), '\n', (0, t.jsxs)(n.p, { children: ['Het NL Design System heeft van zichzelf geen huisstijl. Maar om de werking en kracht van design tokens aan te tonen maken we wel gebruik van een ', (0, t.jsx)(n.a, { href: '/en/handboek/designer/voorbeeld-thema', children: '\u2018Voorbeeld\u2019 thema' }), '.'] }), '\n', (0, t.jsx)(n.h3, { id: 'aan-de-slag', children: 'Aan de slag' }), '\n', (0, t.jsxs)(n.p, { children: ['We hebben een ', (0, t.jsx)(n.a, { href: '/en/handboek/designer/stappenplan', children: 'stappenplan' }), ' uitgeschreven om uit te leggen hoe je gebruik kunt maken van de NL Design System bibliotheek en de Token Studio plugin.'] }), '\n', (0, t.jsx)(n.hr, {}), '\n', (0, t.jsx)(n.h2, { id: 'help-deze-documentatie-te-verbeteren', children: 'Help deze documentatie te verbeteren' }), '\n', (0, t.jsxs)(n.p, { children: ['Om ervoor te zorgen dat deze documentatie nuttig, relevant en up-to-date is, kun je een wijziging voorstellen via ', (0, t.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie', children: 'Github' }), '.'] }), '\n', (0, t.jsx)(n.h2, { id: 'vragen', children: 'Vragen' }), '\n', (0, t.jsxs)(n.p, { children: ['Heb je een vraag? Twijfel niet en ', (0, t.jsx)(n.a, { href: '/en/project/kernteam', children: 'neem contact op met het kernteam' }), '.'] })] });
   }
   function m(e = {}) {
    const { wrapper: n } = { ...(0, s.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(g, { ...e }) }) : g(e);
   }
  },
  24785: (e, n, i) => {
   i.d(n, { Z: () => o, a: () => r });
   var t = i(75271);
   const s = {},
    a = t.createContext(s);
   function r(e) {
    const n = t.useContext(a);
    return t.useMemo(
     function () {
      return 'function' == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function o(e) {
    let n;
    return (n = e.disableParentContext ? ('function' == typeof e.components ? e.components(s) : e.components || s) : r(e.components)), t.createElement(a.Provider, { value: n }, e.children);
   }
  },
 },
]);
