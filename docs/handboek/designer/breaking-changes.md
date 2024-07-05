---
title: Breaking changes
---

## Inleiding

Design tokens komen uiteindelijk terecht in een package. Een package is een pakketje van code dat gebruikt kan worden door ontwikkelaars. Denk daarbij aan CSS variabelen.

Deze packages worden geüpload naar een package registry. Een package registry is een database van alle packages die ooit zijn geüpload.

Alle packages in een registry hebben een versienummer. Als er een nieuwe versie van een package wordt geüpload wordt daarvoor het versienummer van het package opgehoogd.

## Semantic versioning in een notendop

Bij NL Design System maken we voor het ophogen van versienummers gebruik van ‘semantic versioning’ ook wel bekend als semver. Binnen semver bestaat een versienummer uit drie delen: `major.minor.patch` (bijvoorbeeld `1.0.0`).

### Major

Het ophogen van het major deel van het versienummer gebeurt als er veranderingen zijn doorgevoerd die _niet_ achterwaarts compatibel zijn. Deze veranderingen heten ook wel [breaking changes](#wat-zijn-breaking-changes). Bij het verhogen van het major deel van het versienummer springen het minor en patch deel beide terug naar 0.

### Minor

Het ophogen van het minor deel van het versienummer gebeurt als er veranderingen zijn doorgevoerd die _wel_ achterwaarts compatibel zijn. Denk daarbij aan nieuwe features, of nog specifieker nieuwe design tokens. Bij het verhogen van het minor deel van het versienummer blijft het major deel hetzelfde en springt alleen het patch deel terug naar 0.

### Patch

Het ophogen van het patch deel van het versienummer gebeurt in de regel als er bugs zijn opgelost. Deze veranderingen zijn altijd achterwaarts compatibel. Bij het verhogen van het patch deel van het versienummer blijven het major en minor deel hetzelfde.

Een versienummer alleen zegt niet zo veel. Door de versienummers met elkaar te vergelijken kun je als afnemer van een package zien wat de impact is van de veranderingen op code die gebruik maakt van het package.

## Hoe bepaal je het type van je verandering?

### Breaking changes

Breaking changes in design tokens zijn veranderingen die voor afnemers van je package negatieve gevolgen kunnen hebben. Het zijn veranderingen die niet achterwaarts compatibel zijn waardoor bestaande code niet meer werkt zoals voorheen.

Het resultaat hiervan is op de een of andere manier kapot. Soms is dit heel duidelijk, bijvoorbeeld spacing die helemaal is verdwenen. Soms is het subtieler en misschien niet meteen zichtbaar, een hover kleur die is aangepast.

Breaking changes zijn zoals [hierboven uitgelegd](#major), veranderingen die ervoor zorgen dat het **major** deel van het versienummer opgehoogd moet worden.

#### Voorbeelden van breaking changes in design tokens

De eenvoudigste soort breaking change van een design token ontstaat als je een design token verwijdert. Gebruikers die dit verwijderde design token in hun code gebruiken zien bij het gebruik van een nieuwe versie dat hun code niet meer werkt zoals voorheen.

**Voorbeeld 1**: Het verwijderen van de design token `example.button.icon.space` zou ervoor zorgen dat de ruimte tussen het icoon en de tekst van een button komt te vervallen. De button gaat door deze verandering kapot.

Een ander soort breaking change die hier op lijkt is als je de naam van een design token verandert. Dit lijkt misschien een minder grote verandering dan het verwijderen van een design token maar in feite komt het neer op:

1. Het verwijderen van een design token.
1. Het toevoegen van een nieuw design token.

**Voorbeeld 2**: Het hernoemen van de design token `example.button.icon.space` naar `example.button.column-gap` zorgt ervoor dat de design token `example.button.icon.space` niet meer bestaat. Net als in het vorige voorbeeld gaat de button door deze verandering kapot als een afnemer van het package gebruik maakt van de verwijderde design token.

**Voorbeeld 3**: Het aanpassen van zelfs maar 1 karakter in de naam van een design token, bijvoorbeeld het corrigeren van een typfout `colour` naar `color`, kan al een breaking change zijn.

Breaking changes zijn, ondanks dat hun naam het doet vermoeden, niet per se erg. Het is alleen heel belangrijk om er duidelijk over te communiceren. Daarover later meer.

### Nieuwe features

Nieuwe features, voor designers hoofdzakelijk nieuwe design tokens, zijn veranderingen die ervoor zorgen dat het **minor** deel van het versienummer opgehoogd moet worden.

**Voorbeeld**: Je maakt een nieuw design token `example.button.box-shadow` aan dat gebruikt kan worden een button een drop shadow te geven.

### Bug fixes

In Tokens Studio kun je aan design tokens beschrijvingen toevoegen. Als je in de beschrijving van een design token een spelfout corrigeert heeft dat geen gevolgen voor afnemers van de design token. Deze veranderingen lijken nog het meest op een bug fix maar zullen waarschijnlijk in de praktijk weinig voorkomen.

## Breaking changes uitstellen

Om te voorkomen dat een wijziging meteen een breaking change is kun je ervoor kiezen om een nieuw design token naast een te verwijderen design te laten bestaan. Hierbij wordt het te verwijderen token eerst gemarkeerd als achterhaald (in het Engels ‘deprecated’) en niet meteen helemaal verwijderd.

**Voorbeeld**: De naam van de design token `example.button.icon.space` moet veranderen in `example.button.column-gap`.

1. Maak eerst de nieuwe design token `example.button.column-gap` aan.
1. Laat het oude design token `example.button.icon.space` verwijzen naar de waarde van de nieuwe design token: `{example.button.column-gap}`.
1. Markeer de oude design token `example.button.icon.space` als ‘deprecated’ bijvoorbeeld door er een sticker bij te zetten of door de beschrijving aan te passen.

Doordat je de oude token niet verwijdert maar markeert als ‘deprecated’ vertel je gebruikers die de design token al gebruiken dat ze voor nieuwe code de design token niet meer moeten gebruiken en dat ze bestaande code zullen moeten aanpassen. Hoe code moet worden aangepast geef je aan in een changelog. Meer daarover hieronder.

Stel de huidige versie van je package is 1.x.x en je wilt op termijn een design token verwijderen. Afnemers van het package die nu versie 1.x.x gebruiken zien

## Communiceer over je veranderingen

Als je een [pull request hebt aangemaakt](/handboek/designer/stappenplan/#verstuur-aanpassingen-naar-github) geef je daar met een extra commit aan wat je precies veranderd hebt. De beschrijving die je hierbij opgeeft komt terecht in de changelog van het package.

### Situatie A: in het NL Design System “themes” repository

Ga naar de lijst met [pull requests](https://github.com/nl-design-system/themes/pulls) en zoek je eigen pull request op.

<!-- screenshot pull requests -->

1. Klik boven in de pagina op de lichtblauwe naam van de branch die je hebt opgegeven.
1. Op de volgende pagina navigeer je naar de folder `.changesets`.
1. Kopieer het sjabloon uit het `README.md` bestand op deze pagina naar je klembord.
1. Klik rechtsboven op ‘Add a file’ en kies voor ‘Create new file’.
1. Geef je bestand een willekeurige naam en de extensie `.md`, bijvoorbeeld `aap-noot-mies.md`.
1. Plak het gekopieerde sjabloon in het veld met ‘Enter file contents here’ en pas de inhoud aan.
1. Gebruik de juiste naam voor het package, namelijk `"@nl-design-system-unstable/{organisatie}-design-tokens"`.
1. Geef het type van je verandering(en) aan `major`, `minor`, of `patch`.
1. Geef een duidelijke beschrijving van je veranderingen.
1. Klik rechtsboven op ‘Commit changes…’.
1. Geef een commit message op, bijvoorbeeld ‘Changeset toegevoegd’.
1. Kies onderaan voor ‘Commit directly to the `{naam-van-je-branch}`’ branch.
1. Klik op ‘Commit changes’. Als je hier een foutmelding krijgt dat het bestand al bestaat kies je een andere willekeurige naam.

Hieronder een voorbeeld van de inhoud van het bestand met de beschrijving van een verandering met breaking changes voor de ‘voorbeeld’ organisatie.

```markdown
---
"@nl-design-system-unstable/voorbeeld-design-tokens": major
---

Deprecated design token example.button.icon.spacing verwijderd
```

### Situatie B: in je eigen repository

Ga naar de lijst met pull requests en zoek je eigen pull request op.

<!-- screenshot pull requests -->

1. Klik boven in de pagina op de lichtblauwe naam van de branch die je in hebt opgegeven.
1. Op de volgende pagina navigeer je naar de folder `.changesets`.
1. Kopieer het sjabloon uit het `README.md` bestand op deze pagina naar je klembord.
1. Klik rechtsboven op ‘Add a file’ en kies voor ‘Create new file’.
1. Geef je bestand een willekeurige naam en de extensie `.md`, bijvoorbeeld `aap-noot-mies.md`.
1. Plak het gekopieerde sjabloon in het veld met ‘Enter file contents here’ en pas de inhoud aan.
1. Geef het type van je verandering(en) aan `major`, `minor`, of `patch`.
1. Geef een duidelijke beschrijving van je veranderingen.
1. Klik rechtsboven op ‘Commit changes…’.
1. Geef een commit message op, bijvoorbeeld ‘Changeset toegevoegd’.
1. Kies onderaan voor ‘Commit directly to the `{naam-van-je-branch}`’ branch.
1. Klik op ‘Commit changes’. Als je hier een foutmelding krijgt dat het bestand al bestaat kies je een andere willekeurige naam.

## Hoe verder?

Nadat je pull request met veranderingen is goedgekeurd zal er op GitHub een nieuwe pull request worden aangemaakt die ervoor zorgt dat je veranderingen gepublicieerd worden naar het registry.
