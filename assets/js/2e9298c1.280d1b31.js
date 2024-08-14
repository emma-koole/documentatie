'use strict';
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [30059],
 {
  54840: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => u, contentTitle: () => h, default: () => j, frontMatter: () => k, metadata: () => p, toc: () => g });
   var s = i(52676),
    a = i(24785),
    t = i(87359),
    r = i(51515),
    l = i(91410),
    o = i(88435);
   function d(e) {
    const n = { p: 'p', ...(0, a.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.p, { children: 'Geef gebruikers van hulpmiddelen de mogelijkheid om binnen een pagina snel te navigeren door onderdelen, zoals een menu, te kunnen overslaan.' }), '\n', (0, s.jsx)(n.p, { children: 'Gebruikers die de website van boven naar beneden doornemen moeten makkelijk grote stukken content kunnen overslaan om bijvoorbeeld direct naar de hoofdinhoud kunnen gaan. Het gaat hierbij om grote stukken content die op elke pagina herhaald wordt, zoals de hoofdnavigatie en een filter.' }), '\n', (0, s.jsx)(n.p, { children: 'Dan voorkom je dat een toetsenbordgebruiker eerst door een menu of filter moet tabben om bij een link in de hoofdinhoud te komen.' })] });
   }
   function c(e = {}) {
    const { wrapper: n } = { ...(0, a.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(d, { ...e }) }) : d(e);
   }
   const k = { title: 'WCAG-succescriterium 2.4.1 Blokken omzeilen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.4.1 Blokken omzeilen', pagination_label: 'WCAG-succescriterium 2.4.1 Blokken omzeilen', description: 'Geef toetsenbordgebruikers de mogelijkheid om binnen een pagina sneller te navigeren door onderdelen te kunnen overslaan.', slug: '2.4.1', keywords: ['WCAG'] },
    h = void 0,
    p = { id: 'wcag/2.4.01', title: 'WCAG-succescriterium 2.4.1 Blokken omzeilen', description: 'Geef toetsenbordgebruikers de mogelijkheid om binnen een pagina sneller te navigeren door onderdelen te kunnen overslaan.', source: '@site/docs/wcag/2.4.01.mdx', sourceDirName: 'wcag', slug: '/wcag/2.4.1', permalink: '/wcag/2.4.1', draft: !1, unlisted: !1, editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/docs/wcag/2.4.01.mdx', tags: [], version: 'current', frontMatter: { title: 'WCAG-succescriterium 2.4.1 Blokken omzeilen', hide_title: !0, hide_table_of_contents: !1, sidebar_label: '2.4.1 Blokken omzeilen', pagination_label: 'WCAG-succescriterium 2.4.1 Blokken omzeilen', description: 'Geef toetsenbordgebruikers de mogelijkheid om binnen een pagina sneller te navigeren door onderdelen te kunnen overslaan.', slug: '2.4.1', keywords: ['WCAG'] }, sidebar: 'richtlijnen', previous: { title: 'WCAG-succescriterium 2.3.1 Drie flitsen of beneden drempelwaarde', permalink: '/wcag/2.3.1' }, next: { title: 'WCAG-succescriterium 2.4.2 Paginatitel', permalink: '/wcag/2.4.2' } },
    u = {},
    g = [
     { value: 'W3C referenties', id: 'w3c-referenties', level: 2 },
     { value: 'Uitleg', id: 'uitleg', level: 2 },
     { value: 'Demo skiplink op de website van de gemeente Den Haag', id: 'demo-skiplink-op-de-website-van-de-gemeente-den-haag', level: 3 },
     { value: 'Hoe werkt een skiplink?', id: 'hoe-werkt-een-skiplink', level: 3 },
     { value: 'tabindex=&quot;-1&quot;', id: 'tabindex-1', level: 3 },
     { value: 'Codevoorbeelden van een skiplink', id: 'codevoorbeelden-van-een-skiplink', level: 3 },
     { value: 'Bronnen', id: 'bronnen', level: 2 },
     { value: 'Gebruikersonderzoek', id: 'gebruikersonderzoek', level: 2 },
     { value: 'Hoe te testen', id: 'hoe-te-testen', level: 2 },
     { value: 'Veelgemaakte fouten', id: 'veelgemaakte-fouten', level: 2 },
     { value: 'Fout: de toetsenbordfocus verplaatst zich niet na aanklikken skiplink', id: 'fout-de-toetsenbordfocus-verplaatst-zich-niet-na-aanklikken-skiplink', level: 3 },
     { value: 'Fout: het linkdoel van de skiplink bestaat niet', id: 'fout-het-linkdoel-van-de-skiplink-bestaat-niet', level: 3 },
     { value: 'Fout: de skiplink verwijst naar een name-attribuut', id: 'fout-de-skiplink-verwijst-naar-een-name-attribuut', level: 3 },
    ];
   function b(e) {
    const n = { a: 'a', code: 'code', em: 'em', h2: 'h2', h3: 'h3', li: 'li', p: 'p', pre: 'pre', strong: 'strong', ul: 'ul', ...(0, a.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: ['\n', '\n', '\n', '\n', (0, s.jsx)(r.j, { level: 1, conformanceLevel: 'Niveau A', children: 'WCAG-succescriterium 2.4.1 Blokken omzeilen' }), '\n', (0, s.jsx)(n.h2, { id: 'w3c-referenties', children: 'W3C referenties' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: ['Engelse tekst van het WCAG-succescriterium: ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/TR/WCAG22/#bypass-blocks', children: (0, s.jsx)('span', { lang: 'en', children: '2.4.1 Bypass Blocks' }) }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Nederlandse vertaling van het WCAG-succescriterium: ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/Translations/WCAG22-nl/#blokken-omzeilen', children: '2.4.1 Blokken omzeilen' }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Engelstalige informatie op ', (0, s.jsx)('span', { lang: 'en', children: 'How to Meet WCAG' }), ': ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/quickref/#bypass-blocks', children: (0, s.jsx)('span', { lang: 'en', children: 'Quick Reference 2.4.1 Bypass Blocks' }) }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: ['Engelstalige toelichting: ', (0, s.jsx)(n.a, { href: 'https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html', children: (0, s.jsx)('span', { lang: 'en', children: 'Understanding SC 2.4.1 Bypass Blocks' }) }), '.'] }), '\n'] }), '\n', (0, s.jsx)(n.h2, { id: 'uitleg', children: 'Uitleg' }), '\n', (0, s.jsx)(c, {}), '\n', (0, s.jsx)(n.p, { children: 'Er zijn verschillende manieren om met hulptechnologie snel door een webpagina te navigeren. Zo kan een screenreadergebruiker een lijst van links, koppen of landmarks oproepen en daar een keuze uit maken. Maar de skiplink is ook voor screenreadergebruikers handig.' }), '\n', (0, s.jsx)(n.p, { children: 'Om zo gebruikersvriendelijk en consistent mogelijk te werken is een skiplink de eerste link op een pagina. Plaats deze link binnen de header-landmark. Als eerste focusable element, bovenaan de pagina, op een vaste plek.' }), '\n', (0, s.jsx)(n.p, { children: 'Een uitzondering wordt gemaakt als er eerst een cookiebanner verschijnt. Dan krijgen de links en buttons in deze banner als eerste de toetsenbordfocus.' }), '\n', (0, s.jsx)(n.p, { children: 'Je hoeft je niet te beperken tot alleen een skiplink naar de hoofdinhoud.' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsx)(n.li, { children: 'Een skiplink naar het zoekformulier kan zinvol zijn.' }), '\n', (0, s.jsx)(n.li, { children: 'Je kunt binnen de webpagina interne skiplinks plaatsen vlak boven advertenties of carousels om de gebruiker ook snel deze componenten te laten overslaan.' }), '\n'] }), '\n', (0, s.jsx)(n.h3, { id: 'demo-skiplink-op-de-website-van-de-gemeente-den-haag', children: 'Demo skiplink op de website van de gemeente Den Haag' }), '\n', (0, s.jsxs)(n.p, { children: ['Deze video laat zien hoe een skiplink werkt op de website van de ', (0, s.jsx)(n.a, { href: 'https://www.denhaag.nl/nl/', children: 'gemeente Den Haag' }), '.'] }), '\n', (0, s.jsx)(t.Y, { videoId: 'CULH5Iq9Tr8' }), '\n', (0, s.jsx)(n.h3, { id: 'hoe-werkt-een-skiplink', children: 'Hoe werkt een skiplink?' }), '\n', (0, s.jsx)(n.p, { children: 'Een skiplink is een interne link naar bijvoorbeeld het begin van de inhoud. Als een gebruiker deze link aanklikt, verplaats de focus naar een punt vlak boven de hoofdinhoud.' }), '\n', (0, s.jsx)(n.p, { children: 'De skiplink kan altijd zichtbaar zijn, of alleen zichtbaar worden als de link toetsenbordfocus krijgt. Beide opties zijn goed.' }), '\n', (0, s.jsxs)(n.p, { children: ['Je kunt bijvoorbeeld naar het ', (0, s.jsx)(n.code, { children: '<main>' }), '-element linken, als dit de hoofdinhoud van een webpagina bevat.'] }), '\n', (0, s.jsx)(n.p, { children: 'Consistentie is belangrijk. Zet de skiplink altijd op dezelfde plek binnen een website en laat deze dezelfde plek linken.' }), '\n', (0, s.jsx)(n.h3, { id: 'tabindex-1', children: 'tabindex="-1"' }), '\n', (0, s.jsx)(n.p, { children: 'Om een skiplink in alle browsers goed te laten werken is het belangrijk dat de focus zich goed verplaatst naar het doelelement.' }), '\n', (0, s.jsxs)(n.p, { children: ['Als dit element van nature geen focus kan krijgen, zoals een ', (0, s.jsx)(n.code, { children: '<main>' }), ' landmark, kan het zijn dat de focus niet goed wordt verplaatst voor een screenreader. Voeg daarom ', (0, s.jsx)(n.code, { children: 'tabindex="-1"' }), ' toe aan het element dat de focus moet krijgen.'] }), '\n', (0, s.jsxs)(n.p, { children: ['Het voordeel van ', (0, s.jsx)(n.code, { children: 'tabindex="-1"' }), ' in plaats van ', (0, s.jsx)(n.code, { children: 'tabindex="0"' }), ' is dat het element niet in de natuurlijke tabvolgorde wordt opgenomen, maar het wel focus kan krijgen. Gebruik nooit een positieve tabindex om een element toetsenbordfocus te geven. Waarom, staat uitgelegd bij de richtlijn ', (0, s.jsx)(n.a, { href: 'richtlijnen/formulieren/toetsenbord/#gebruik-geen-positieve-tabindex', children: 'Gebruik geen positieve tabindex' }), '.'] }), '\n', (0, s.jsxs)(n.p, { children: ['Lees ook: ', (0, s.jsx)(n.a, { href: 'https://hidde.blog/where-focus-goes-when-following-in-page-links/', children: (0, s.jsx)('span', { lang: 'en', children: 'Where focus goes when following in page links' }) }), ' van Hidde de Vries.'] }), '\n', (0, s.jsx)(n.h3, { id: 'codevoorbeelden-van-een-skiplink', children: 'Codevoorbeelden van een skiplink' }), '\n', (0, s.jsx)(n.p, { children: 'In de HTML:' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '\x3c!-- De skiplink, geplaatst als eerste focusable element op de webpagina --\x3e\n<a class="sr-only-focusable" href="#site-content">Naar de hoofdinhoud</a>\n' }) }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '\x3c!-- Het doel van de skiplink, waar de hoofdinhoud begint --\x3e\n<main id="site-content" class="content" tabindex="-1">[...]</main>\n' }) }), '\n', (0, s.jsx)(n.p, { children: 'In de CSS. Dit is een voorbeeld, er zijn meerdere technieken om hetzelfde effect te bereiken.' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-css', children: '.sr-only-focusable {\n  inset-block-start: 5%;\n  inset-inline-start: -100%;\n  position: absolute;\n}\n\n.sr-only-focusable:focus {\n  background-color: #ffeb85;\n  color: #1e357e;\n  inset-inline-start: 0;\n  outline: 2px solid #2b0000;\n  outline-offset: 0;\n  padding: 10px;\n  text-decoration: none;\n  z-index: 1;\n}\n' }) }), '\n', (0, s.jsxs)(n.p, { children: ['Tip: ', (0, s.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline-start', children: 'inset-inline-start' }), ' zorgt ervoor dat de skiplink zich aanpast aan de leesrichting ', (0, s.jsx)(n.a, { href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#dir', children: 'dir' }), ' van een pagina.\nVoor ', (0, s.jsx)(n.code, { children: '<html lang="nl" dir="rtl">' }), ' staat de skiplink dan aan de rechterkant in plaats van de linkerkant.'] }), '\n', (0, s.jsx)(n.h2, { id: 'bronnen', children: 'Bronnen' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://www.accessibility.nl/kennis/zo-zet-je-skiplinks-voor-een-optimale-navigatie', children: 'Zo zet je skiplinks in voor een optimale navigatie' }), ' van Stichting Accessibility.'] }), '\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://tatiana-fokina-blog.ru/en/articles/understanding-a-skip-link/', children: (0, s.jsx)('span', { lang: 'en', children: 'Understanding skip link' }) }), ' van Tatiana Fokina.'] }), '\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://www.tpgi.com/how-to-avoid-breaking-web-pages-for-keyboard-users/', children: (0, s.jsx)('span', { lang: 'en', children: 'How To Avoid Breaking Web Pages For Keyboard Users' }) }), ' van Andrew Nevins.'] }), '\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://design-system.service.gov.uk/components/skip-link/', children: 'Skip link component op Gov.UK' }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://designsystem.cibg.nl/componenten/skiplink/', children: 'Skip link component van het CIBG' }), '.'] }), '\n', (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: 'https://make.wordpress.org/accessibility/handbook/markup/the-css-class-screen-reader-text/', children: (0, s.jsx)('span', { lang: 'en', children: 'The CSS class screen-reader-text' }) }), ' in het Make WordPress Accessible Handbook.'] }), '\n'] }), '\n', (0, s.jsx)(n.h2, { id: 'gebruikersonderzoek', children: 'Gebruikersonderzoek' }), '\n', (0, s.jsxs)(n.p, { children: ['WebAIM publiceert elk jaar de ', (0, s.jsx)(n.a, { href: 'https://webaim.org/projects/screenreadersurvey10/', children: (0, s.jsx)('span', { lang: 'en', children: 'Screen Reader User Survey' }) }), '. In 2024 staat het ontbreken van een skiplink in de ', (0, s.jsx)(n.a, { href: 'https://webaim.org/projects/screenreadersurvey10/#problematic', children: 'top 12 van problemen' }), '.'] }), '\n', (0, s.jsx)(l.ZP, {}), '\n', (0, s.jsx)(n.h2, { id: 'hoe-te-testen', children: 'Hoe te testen' }), '\n', (0, s.jsx)(n.p, { children: 'Bepaal eerst of er een skiplink nodig is. Als er bijvoorbeeld geen navigatieblokken bovenaan de webpagina staan en de pagina meteen met de hoofdinhoud begint is een skiplink zinloos.' }), '\n', (0, s.jsx)(n.p, { children: 'Dit succescriteria gaat specifiek over blokken content die op elke pagina worden herhaald. Bevat de website maar \xe9\xe9n pagina, dan is dit succescriterium niet van toepassing. Wat niet wegneemt dat gebruik van een skiplink ook in dat geval gebruikersvriendelijk kan zijn.' }), '\n', (0, s.jsx)(n.p, { children: 'Als een skiplink van toepassing is voor een webpagina:' }), '\n', (0, s.jsxs)(n.ul, { children: ['\n', (0, s.jsxs)(n.li, { children: ['Controleer of een skiplink niet verborgen wordt met de CSS ', (0, s.jsx)(n.code, { children: 'display: none;' }), ' De skiplink moet voor screenreadergebruikers ook zonder focus te herkennen zijn in de lijst met links.'] }), '\n', (0, s.jsx)(n.li, { children: 'Controleer of een verborgen skiplink zichtbaar wordt op toetsenbordfocus.' }), '\n', (0, s.jsx)(n.li, { children: 'Controleer ook het kleurcontrast van de zichtbare skiplink, dit wordt vaak vergeten.' }), '\n', (0, s.jsx)(n.li, { children: 'Controleer of na het aanklikken van de link, de toetsenbordfocus zich ook echt verplaats naar het linkdoel.' }), '\n'] }), '\n', (0, s.jsxs)(n.p, { children: ['Het plaatsen van een skiplink binnen de header-landmark is ', (0, s.jsx)(n.em, { children: 'best practice' }), '. Maar, staat de skiplink bovenaan de pagina als eerste focusable element en buiten een landmark, dat is dit ', (0, s.jsx)(n.strong, { children: 'geen' }), ' overtreding van dit WCAG-succescriterium.'] }), '\n', (0, s.jsx)(n.h2, { id: 'veelgemaakte-fouten', children: 'Veelgemaakte fouten' }), '\n', (0, s.jsx)(n.h3, { id: 'fout-de-toetsenbordfocus-verplaatst-zich-niet-na-aanklikken-skiplink', children: 'Fout: de toetsenbordfocus verplaatst zich niet na aanklikken skiplink' }), '\n', (0, s.jsxs)(n.p, { children: ['Als een skiplink met alleen JavaScript wordt gebouwd, via bijvoorbeeld een ', (0, s.jsx)(n.code, { children: 'scrollIntoView()' }), ' method, verandert alleen de zichtbare focus, maar niet de toetsenbordfocus.\nVoeg tabindex="-1" toe aan het doelelement om het de focus te kunnen geven met ', (0, s.jsx)(n.code, { children: 'tabIndex = -1' }), '. Zorg ervoor dat ook de toetsenbordfocus zich verplaatst met ', (0, s.jsx)(n.code, { children: 'focus()' }), '.'] }), '\n', (0, s.jsx)(n.h3, { id: 'fout-het-linkdoel-van-de-skiplink-bestaat-niet', children: 'Fout: het linkdoel van de skiplink bestaat niet' }), '\n', (0, s.jsx)(n.p, { children: 'Controleer altijd of het doel waar de skiplink naar toe gaat ook inderdaad bestaat. Bij aanpassingen aan een template kan dit wel eens over het hoofd gezien worden.' }), '\n', (0, s.jsx)(n.p, { children: 'Als het ID, waar in de skiplink naar verwijst niet bestaat, werkt de skiplink niet.' }), '\n', (0, s.jsx)(n.h3, { id: 'fout-de-skiplink-verwijst-naar-een-name-attribuut', children: 'Fout: de skiplink verwijst naar een name-attribuut' }), '\n', (0, s.jsxs)(n.p, { children: ['In HTML5 wordt het gebruik van het ', (0, s.jsx)(n.code, { children: 'name' }), ' attribuut in een interne link ', (0, s.jsx)(n.a, { href: 'https://html.spec.whatwg.org/multipage/obsolete.html#obsolete-but-conforming-features', children: 'niet ondersteund' }), '.'] }), '\n', (0, s.jsx)(n.p, { children: 'Wat vroeger een goede opzet was in HTML4, is nu in HTML5 niet meer geldig.' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '\x3c!-- Niet gebruiken, code is niet geldig in HTML5 --\x3e\n<a href="#site-content">Naar de hoofdinhoud</a>\n[...]\n<main>\n  <a name="site-content"></a>\n  [...]\n</main>\n' }) }), '\n', (0, s.jsx)(n.p, { children: 'Correcte code: verwijs naar een element met een id.' }), '\n', (0, s.jsx)(n.pre, { children: (0, s.jsx)(n.code, { className: 'language-html', children: '\x3c!-- Correcte opzet van een skiplink --\x3e\n<a href="#site-content">Naar de hoofdinhoud</a>\n[...]\n<main id="site-content" tabindex="-1">[...]</main>\n' }) }), '\n', (0, s.jsx)(o.ZP, {})] });
   }
   function j(e = {}) {
    const { wrapper: n } = { ...(0, a.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(b, { ...e }) }) : b(e);
   }
  },
  91410: (e, n, i) => {
   i.d(n, { ZP: () => r });
   var s = i(52676),
    a = i(24785);
   function t(e) {
    const n = { a: 'a', p: 'p', ...(0, a.a)(), ...e.components };
    return (0, s.jsxs)(n.p, { children: ['Heb je gebruikersonderzoek gedaan dat betrekking heeft op dit succescriterium en wil je dit delen? Kijk eens bij ', (0, s.jsx)(n.a, { href: 'https://gebruikersonderzoeken.nl/docs/onderzoek-delen/', children: 'Gebruikersonderzoeken delen' }), ' op gebruikersonderzoeken.nl.'] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, a.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(t, { ...e }) }) : t(e);
   }
  },
  88435: (e, n, i) => {
   i.d(n, { ZP: () => r });
   var s = i(52676),
    a = i(24785);
   function t(e) {
    const n = { a: 'a', h2: 'h2', p: 'p', ...(0, a.a)(), ...e.components };
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n.h2, { id: 'aanvullingen-of-opmerkingen', children: 'Aanvullingen of opmerkingen?' }), '\n', (0, s.jsxs)(n.p, { children: ["Deze pagina's over WCAG worden onderhouden door het NL Design System. Heb je aanvullingen of opmerkingen? ", (0, s.jsx)(n.a, { href: 'https://github.com/nl-design-system/documentatie/issues', children: 'Deel je mening op GitHub' }), '.'] })] });
   }
   function r(e = {}) {
    const { wrapper: n } = { ...(0, a.a)(), ...e.components };
    return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(t, { ...e }) }) : t(e);
   }
  },
  66120: (e, n, i) => {
   i.d(n, { V: () => r });
   var s = i(4814);
   i(75271);
   const a = { 'nlds-inline-heading-group__heading': 'nlds-inline-heading-group__heading_bHAJ', 'nlds-inline-heading-group__suffix': 'nlds-inline-heading-group__suffix_ioH2' };
   var t = i(52676);
   const r = (e) => {
    let { children: n, className: i, level: r = 1, suffix: l, ...o } = e;
    return (0, t.jsxs)('hgroup', { className: (0, s.Z)(a['nlds-inline-heading-group'], `utrecht-heading-${r}`, i), ...o, children: [(0, t.jsx)('h1', { className: (0, s.Z)(a['nlds-inline-heading-group__heading']), children: n }), l && (0, t.jsxs)('p', { className: (0, s.Z)(a['nlds-inline-heading-group__suffix']), children: [l ? ' ' : '', l] })] });
   };
  },
  87359: (e, n, i) => {
   i.d(n, { Y: () => o });
   var s = i(4814),
    a = (i(75271), i(95110)),
    t = i.n(a);
   const r = { 'video-player': 'video-player__6fg' };
   var l = i(52676);
   const o = (e) => {
    let { videoId: n, className: i, ...a } = e;
    return (0, l.jsx)(t(), { url: `https://youtube.com/watch?v=${n}`, className: `${(0, s.Z)(r['video-player'])} ${i}`, width: '100%', height: '100%', controls: !0, ...a, config: { youtube: { playerVars: { disablekb: 1 } } } });
   };
  },
  51515: (e, n, i) => {
   i.d(n, { j: () => o });
   var s = i(46506),
    a = (i(75271), i(66120));
   const t = 'nlds-inline-heading-group--wcag-heading-group_hVFN',
    r = 'nlds-inline-heading-group__badge_TgvT';
   var l = i(52676);
   const o = (e) => {
    let { children: n, conformanceLevel: i, ...o } = e;
    return (0, l.jsx)(a.V, { className: t, suffix: i && (0, l.jsx)(s.Ou, { className: r, children: i }), ...o, children: n });
   };
  },
 },
]);
