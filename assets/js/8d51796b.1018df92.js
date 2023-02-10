(self.webpackChunk_nl_design_system_website=self.webpackChunk_nl_design_system_website||[]).push([[6558],{8813:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>k,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var a=t(7462),i=(t(7294),t(3905)),o=t(712),r=t.n(o);const s={title:"Design tokens",hide_title:!0,hide_table_of_contents:!1,sidebar_label:"Design tokens",sidebar_position:2,pagination_label:"Introductie",description:"NL Design System introductie",keywords:["design token","design tokens","introductie"]},l=void 0,d={unversionedId:"meedoen/design-tokens/README",id:"meedoen/design-tokens/README",title:"Design tokens",description:"NL Design System introductie",source:"@site/docs/meedoen/design-tokens/README.mdx",sourceDirName:"meedoen/design-tokens",slug:"/meedoen/design-tokens/",permalink:"/meedoen/design-tokens/",draft:!1,editUrl:"https://github.com/nl-design-system/documentatie/tree/main/docs/meedoen/design-tokens/README.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Design tokens",hide_title:!0,hide_table_of_contents:!1,sidebar_label:"Design tokens",sidebar_position:2,pagination_label:"Introductie",description:"NL Design System introductie",keywords:["design token","design tokens","introductie"]},sidebar:"meedoen",previous:{title:"Estafettemodel",permalink:"/meedoen/estafettemodel"},next:{title:"Introductie",permalink:"/meedoen/design-tokens/common-tokens"}},k={},m=[{value:"Thema&#39;s",id:"themas",level:2},{value:"Design token niveaus",id:"design-token-niveaus",level:2},{value:"Brand tokens",id:"brand-tokens",level:3},{value:"Common tokens",id:"common-tokens",level:3},{value:"Component tokens",id:"component-tokens",level:3},{value:"Naamgeving",id:"naamgeving",level:2},{value:"Design tokens in CSS",id:"design-tokens-in-css",level:2},{value:"Gebruik in Figma",id:"gebruik-in-figma",level:2},{value:"Huisstijl",id:"huisstijl",level:2},{value:"Je eigen thema maken met Design tokens",id:"je-eigen-thema-maken-met-design-tokens",level:2},{value:"Design tokens vastleggen",id:"design-tokens-vastleggen",level:3},{value:"Design tokens inzetten",id:"design-tokens-inzetten",level:3},{value:"Meer informatie",id:"meer-informatie",level:2},{value:"Links",id:"links",level:3},{value:"Help deze documentatie te verbeteren",id:"help-deze-documentatie-te-verbeteren",level:2},{value:"Vragen",id:"vragen",level:2}],u={toc:m};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"design-tokens"},"Design tokens"),(0,i.kt)("p",null,"NL Design System wil de beste componenten uit de community herbruikbaar maken voor de hele overheid. Daarom hebben de componenten van het NL Design System van zichzelf geen huisstijl. Iedere organisatie kan zijn eigen huisstijl op de componenten toepassen. Om dat voor elkaar te krijgen maken we gebruik van \u2018design tokens\u2019."),(0,i.kt)("p",null,"Design tokens zijn ontwerpkeuzes die je vastlegt als data. Denk bijvoorbeeld aan een kleur of lettertype."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Visueel voorbeeld")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen_design-tokens_example.png",alt:"Design tokens visueel weergegeven als blokjes. Een hex kleurcode met een neerwaartse pijl wijzend naar een design token blokje met het label 'red.500'. Font family naam Oswald met een pijl naar een design token blokje met het label 'primary.font-family'."})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Code voorbeeld")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "voorbeeld": {\n    "color": {\n      "red": {\n        "500": {\n          "value": "#FA5757"\n        }\n      }\n    },\n    "typography": {\n      "font-family": {\n        "primary": {\n          "value": "Oswald"\n        }\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Kleuren, afmetingen, afstanden, tekstopmaak, et cetera leg je op een centrale plek vast. Zo kunnen alle teams die data gebruiken om de ontwerpkeuzes consistent toe te passen op diverse producten en diensten van \xe9\xe9n organisatie."),(0,i.kt)("p",null,"Deze data beheer je vanuit een platform onafhankelijk bestand. Bij het NL Design System hebben we gekozen voor JSON. We gebruiken ",(0,i.kt)("a",{parentName:"p",href:"https://amzn.github.io/style-dictionary/"},"Style Dictionary")," om het JSON bestand te vertalen. Hierdoor zijn de design tokens door diverse technieken en tools te gebruiken. Denk aan CSS, React, Angular, maar ook Figma."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen_design-tokens_json.png",alt:"JSON bestand met vertakkingen naar Figma, CSS, Angular, React en Vue."})),(0,i.kt)("h2",{id:"themas"},"Thema's"),(0,i.kt)("p",null,"Elke organisatie maakt een eigen bestand met een 'thema' voor de huisstijl. Daarin staan uiteindelijk ontwerpkeuzes voor honderden design tokens. Componenten uit de NL Design System community kun je dus gelijk gebruiken, je hoeft alleen maar de thema te maken!"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen_design-tokens_no-style-and-style.png",alt:"Drie dezelfde interfaces. In het midden staan een interface zonder stijling. Links en rechts staan dezelfde interfaces maar ieder met een eigen huisstijl"})),(0,i.kt)("p",null,"En naast een standaard \u2018light-mode\u2019 thema kun je ook andere thema\u2019s cre\xebren. Denk bijvoorbeeld aan een \u2018dark-mode\u2019 of \u2018high-contrast\u2019 mode."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen_design-tokens_themes.png",alt:"Drie dezelfde interfaces. De eerste interface heeft een licht thema. De tweede interface heeft een donker thema. De derde interface heeft een thema voor hoog contrast."})),(0,i.kt)("p",null,"Bekijk bestaande thema's bij ",(0,i.kt)("a",{parentName:"p",href:"https://nl-design-system.github.io/themes/"},"NL Design System Themes Storybook"),"."),(0,i.kt)("h2",{id:"design-token-niveaus"},"Design token niveaus"),(0,i.kt)("p",null,"Bij het NL Design System verdelen we design tokens over drie niveaus."),(0,i.kt)("h3",{id:"brand-tokens"},"Brand tokens"),(0,i.kt)("p",null,"Dit zijn alle visuele \u2018opties\u2019 van een huisstijl. Met een waarde zoals bijvoorbeeld de kleur rood, groen of blauw of een serif dan wel sans-serif font-family. Een breed scala aan opties waaruit je kunt kiezen voor de andere niveaus. Kortom, geen 50 tinten grijs meer. In de naamgeving van Brand tokens ben je helemaal vrij. Zo kun je aansluiten bij naamgeving die binnen je organisatie al bestaat."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen_design-tokens_brand.png",alt:"Eerste design token niveau visueel weergegeven als blokje. Een hex kleurcode met een een neerwaartse pijl wijzend naar een design token blokje met het label 'color.red.500'. Voor dit blokje staat het label 'Brand'"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../../richtlijnen/stijl"},"Bekijk de richtlijnen voor stijl")),(0,i.kt)("h3",{id:"common-tokens"},"Common tokens"),(0,i.kt)("p",null,"Dit zijn vaak terugkerende visuele eigenschappen die niet aan \xe9\xe9n specifiek component gebonden zijn. Ze halen hun waarde uit de Brand tokens en hebben een semantische betekenis. Denk aan de font-familie voor kopteksten maar ook aan kleuren voor feedback of interactie. Die wil je consistent toepassen binnen je interface. Wat weer bijdraagt aan de toegankelijkheids richtlijn: ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/consistent-identification.html"},"Consistent Identificeren"),". Die beschrijft dat componenten met dezelfde functionaliteit zich over verschillende pagina\u2019s op dezelfde manier dienen te gedragen."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen_design-tokens_common.png",alt:"Twee design tokens niveaus visueel weergegeven als blokjes. Een hex kleurcode met een neerwaartse pijl wijzend naar een design token blokje met het label 'color.red.500'. Voor dit blokje staat het label 'Brand'. Daaronder een neerwaartse pijl wijzend naar een design token blokje met het label 'feedback.invalid.color'. Voor dit blokje staat het label 'Common'."})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../../richtlijnen/stijl"},"Bekijk de richtlijnen voor stijl")),(0,i.kt)("h3",{id:"component-tokens"},"Component tokens"),(0,i.kt)("p",null,"Dit zijn alle tokens die nodig zijn voor een component. Ze verkrijgen hun waarde vanuit het Common niveau maar soms ook direct vanuit de Brand token niveau. Denk aan de achtergrondkleur van een button of de border kleur van een textbox bij een foutmelding."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen_design-tokens_component.png",alt:"Drie design tokens niveaus visueel weergegeven als blokjes. Een hex kleurcode met een neerwaartse pijl wijzend naar een design token blokje met het label 'color.red.500'. Voor dit blokje staat het label 'Brand'. Daaronder een neerwaartse pijl wijzend naar een design token blokje met het label 'feedback.invalid.color'. Voor dit blokje staat het label 'Common'.Daaronder een neerwaartse pijl wijzend naar een design token blokje met het label 'textbox.invalid.border-color'. Voor dit blokje staat het label 'Component'."})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../../componenten"},"Bekijk het componenten overzicht")),(0,i.kt)("h2",{id:"naamgeving"},"Naamgeving"),(0,i.kt)("p",null,"Design tokens bestaan uit een 'naam' met een 'waarde'. Bijvoorbeeld: ",(0,i.kt)("inlineCode",{parentName:"p"},"link.color")," en ",(0,i.kt)("inlineCode",{parentName:"p"},"blue"),". Per thema kan de waarde veranderen, maar de naam blijft hetzelfde. Voor NL Design System maken we daarom afspraken voor duidelijke en voorspelbare namen. NL Design System componenten moeten deze standaard design tokens gebruiken, zodat het component herbruikbaar is voor alle verschillende thema's."),(0,i.kt)("p",null,"De naam van een design token voor componenten bestaat uit lagen, in een afgesproken volgorde:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"De ",(0,i.kt)("em",{parentName:"li"},"prefix")," van de organisatie die de design token maakt en documentatie schrijft. Verplicht, zodat je design tokens van meerdere organisaties kunt gebruiken zonder problemen."),(0,i.kt)("li",{parentName:"ol"},"De naam van de component. Verplicht."),(0,i.kt)("li",{parentName:"ol"},"De naam van een onderdeel van de component, voor de situatie dat het duidelijker is om het onderdeel te noemen. Dit is optioneel, en het advies is: houdt het simpel wanneer mogelijk."),(0,i.kt)("li",{parentName:"ol"},"De naam van de status van een component. Bijvoorbeeld: ",(0,i.kt)("inlineCode",{parentName:"li"},"disabled")," of ",(0,i.kt)("inlineCode",{parentName:"li"},"visited"),". Optioneel."),(0,i.kt)("li",{parentName:"ol"},"De naam van de interactie met het component. Bijvoorbeeld: ",(0,i.kt)("inlineCode",{parentName:"li"},"hover")," of ",(0,i.kt)("inlineCode",{parentName:"li"},"focus"),". Optioneel."),(0,i.kt)("li",{parentName:"ol"},"De naam van de visuele eigenschap waarvoor je een ontwerpkeuze kan maken. Bijvoorbeeld: ",(0,i.kt)("inlineCode",{parentName:"li"},"color")," of ",(0,i.kt)("inlineCode",{parentName:"li"},"font-weight"),". Dit is verplicht als de laatste laag, zodat je in design tokens JSON een andere ontwerpkeuze kan hebben voor elke status en elke interactie.")),(0,i.kt)("p",null,"Dat ziet er als design tokens JSON bijvoorbeeld zo uit:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "nl": {\n    "link": {\n      "color": { "$value": "blue" },\n      "visited": {\n        "color": { "$value": "purple" }\n      },\n      "hover": {\n        "color": { "$value": "red" }\n      },\n      "icon": {\n        "color": { "$value": "navy" }\n      }\n    }\n  }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nl")," is de prefix van de organisatie."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"link")," is de component."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"color")," is de laatste laag, de visuele eigenschap."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"visited")," is de staat van sommige links, die links hebben een ander kleur."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hover")," is de interactie-status."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"icon")," is een optioneel onderdeel van de link, die een andere kleur kan hebben dan de tekst.")),(0,i.kt)("p",null,"De prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"nl")," wordt alleen gebruikt door het NL Design System kernteam. Elk team kiest een eigen prefix, met alleen de letters ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," tot ",(0,i.kt)("inlineCode",{parentName:"p"},"z")," en zonder koppelstreepje: bijvoorbeeld ",(0,i.kt)("inlineCode",{parentName:"p"},"denhaag"),"."),(0,i.kt)("p",null,"Gebruik voor alle onderdelen alleen kleine letters, cijfers of een koppelstreepje."),(0,i.kt)("p",null,"Kies als het mogelijk is een naam voor de component (en voor delen van de component) die gebaseerd is op herkenbare termen uit webstandaarden, liever dan de naamgeving uit ",(0,i.kt)("em",{parentName:"p"},"UI frameworks")," die op het moment populair zijn. De meeste namen gebruiken nu termen uit HTML, CSS, SVG en WAI-ARIA."),(0,i.kt)("p",null,"Datzelfde geldt voor de staat en de interactie-staat van een component: vaak heeft CSS of ARIA daar een goede term voor, zoals ",(0,i.kt)("inlineCode",{parentName:"p"},"focus"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"active"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"current")," en ",(0,i.kt)("inlineCode",{parentName:"p"},"expanded"),"."),(0,i.kt)("p",null,"Let op dat je niet een herkenbare term gebruikt maar met een andere betekenis dan webstandaarden: een link naar de huidige pagina is bijvoorbeeld ",(0,i.kt)("inlineCode",{parentName:"p"},"current")," en niet ",(0,i.kt)("inlineCode",{parentName:"p"},"active"),". Een ingedrukte link is ",(0,i.kt)("inlineCode",{parentName:"p"},"active"),"."),(0,i.kt)("h2",{id:"design-tokens-in-css"},"Design tokens in CSS"),(0,i.kt)("p",null,"Front-end developers gebruiken design tokens als ",(0,i.kt)("em",{parentName:"p"},"CSS variable"),", bijvoorbeeld:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".dark-theme {\n  --nl-button-background-color: dimgray;\n  --nl-button-color: whitesmoke;\n}\n\n.btn {\n  background-color: var(--nl-button-background-color);\n  color: var(--nl-button-color);\n}\n")),(0,i.kt)("p",null,"We gebruiken JSON bestanden met design tokens als bron. We maken automatisch het CSS-bestand met het thema, daarvoor zijn verschillende tools die design tokens JSON vertalen naar onder andere CSS. Wij gebruiken nu ",(0,i.kt)("em",{parentName:"p"},"Style Dictionary")," om de design tokens te publiceren als CSS, SCSS, JSON, JavaScript, enzovoorts. Je kunt in de map ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nl-design-system/example/tree/main/proprietary/design-tokens"},(0,i.kt)("inlineCode",{parentName:"a"},"proprietary/design-tokens/")," van onze example repository")," zien hoe je Style Dictionary gebruikt."),(0,i.kt)("p",null,"Van organisaties die een thema onderhouden kun je een npm-pakketje installeren met daarin al deze bestandsformaten, zodat je makkelijk toegang hebt tot de laatste versie die werkt in jouw project. Ook als je bijvoorbeeld een website met PHP gebruikt, is op dit moment het npm-pakketje waarschijnlijk de handigste manier om de CSS te installeren. ",(0,i.kt)("a",{parentName:"p",href:"https://nl-design-system.github.io/themes/"},"NL Design System Themes Storybook")," is een goede plek om te vinden welke thema's er al zijn."),(0,i.kt)("h2",{id:"gebruik-in-figma"},"Gebruik in Figma"),(0,i.kt)("p",null,"Op dit moment biedt Figma, net als alle andere ontwerpprogramma's, geen ondersteuning voor design tokens. Daarom maken we gebruik van de ",(0,i.kt)("a",{parentName:"p",href:"https://tokens.studio/"},"Token Studio"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/meedoen/als-designer/figma-structuur"},"Meer informatie over Figma structuur en gebruik")),(0,i.kt)("h2",{id:"huisstijl"},"Huisstijl"),(0,i.kt)("p",null,"De ontwerpkeuzes van je huisstijl moeten consistent worden toegepast. Iedereen die verantwoordelijk is om je huisstijl te gebruiken moet daarom makkelijk de documentatie van je huisstijl kunnen vinden. Design tokens voor je huisstijl maken helpt interne teams en leveranciers om altijd de goede kleuren en lettertypes te gebruiken."),(0,i.kt)("p",null,"Je wilt voorkomen dat vaak kleuren en lettertypes worden gebruikt die niet bestaan in de huisstijl, of dat goede kleuren worden gebruikt voor een verkeerde situatie. Maak documentatie voor de belangrijste kleuren, vertel in welke situatie ze gebruikt moeten worden en wanneer niet. Maak een volledig overzicht: kies ook lichtere en donkere kleurtinten en grijstinten die gebruikt mogen worden als accentkleur en tekstkleur, zodat niet elke keer verschillende kleurvariaties worden gekozen."),(0,i.kt)("p",null,"Begin bijvoorbeeld met een ",(0,i.kt)("inlineCode",{parentName:"p"},"color.tokens.json")," te maken:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "rijkshuisstijl": {\n    "color": {\n      "hemelblauw": {\n        "40": { "value": "hsl(203, 100%, 39%)" }\n      },\n      "wit": { "value": "hsl(0, 0%, 100%)" }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Gebruik de ",(0,i.kt)("em",{parentName:"p"},"prefix")," van de organistatie voor je ",(0,i.kt)("em",{parentName:"p"},"brand design tokens"),". Voor ",(0,i.kt)("em",{parentName:"p"},"autocomplete")," is het handig om je kleuren te groeperen onder ",(0,i.kt)("inlineCode",{parentName:"p"},"color"),". Je mag helemaal zelf kiezen hoe je de kleuren en kleurtinten wilt noemen. Wij kiezen meestal een afgeronde ",(0,i.kt)("em",{parentName:"p"},"lightness")," waarde (zoals 40 voor 39%), zodat je in de praktijk makkelijk kan inschatten of twee tinten voldoende contrast hebben."),(0,i.kt)("p",null,"Niet gebruik maken van huisstijl design tokens in je CSS code gebruiken helpt om componenten herbruikbaar te maken voor onze open source community."),(0,i.kt)("p",null,"Doe bijvoorbeeld niet dit:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".rijkshuisstijl-button {\n  background-color: rgb(--rijkshuisstijl-color-hemelblauw-40);\n  color: var(--rijkshuisstijl-color-wit);\n}\n")),(0,i.kt)("p",null,"Maak in de design tokens JSON de link tussen jouw huisstijl en jouw component, dan is ook hergebruik van jouw component mogelijk met een andere huisstijl."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "rijkshuisstijl": {\n    "button": {\n      "background-color": { "value": "{rijkshuisstijl.color.hemelblauw.40}" },\n      "color": { "value": "{rijkshuisstijl.color.wit}" }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"De CSS thema wordt dan automatisch gemaakt met de JSON als bron:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".rijkshuisstijl-theme {\n  --rijkshuisstijl-color-hemelblauw-40: hsl(203, 100%, 39%);\n  --rijkshuisstijl-color-wit: hsl(0, 0%, 100%);\n  --rijkshuisstijl-button-background-color: rgb(--rijkshuisstijl-color-hemelblauw-40);\n  --rijkshuisstijl-button-color: rgb(--rijkshuisstijl-wit);\n}\n")),(0,i.kt)("p",null,"Gebruik alleen ",(0,i.kt)("em",{parentName:"p"},"component design tokens")," in je CSS om jouw component herbruikbaar te maken, in andere situaties en voor andere huisstijlen."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".rijkshuisstijl-button {\n  background-color: rgb(--rijkshuisstijl-button-background-color);\n  color: var(--rijkshuisstijl-button-color);\n}\n")),(0,i.kt)("h2",{id:"je-eigen-thema-maken-met-design-tokens"},"Je eigen thema maken met Design tokens"),(0,i.kt)("p",null,"We hebben twee opnames van de onboarding-week 2021 waarin we vertellen over design tokens en thema's:"),(0,i.kt)("h3",{id:"design-tokens-vastleggen"},"Design tokens vastleggen"),(0,i.kt)(r(),{url:"https://vimeo.com/648638044",controls:!0,mdxType:"VimeoPlayer"}),(0,i.kt)("h3",{id:"design-tokens-inzetten"},"Design tokens inzetten"),(0,i.kt)(r(),{url:"https://vimeo.com/649672645",controls:!0,mdxType:"VimeoPlayer"}),(0,i.kt)("h2",{id:"meer-informatie"},"Meer informatie"),(0,i.kt)("h3",{id:"links"},"Links"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://amzn.github.io/style-dictionary/"},"Style Dictionary"),(0,i.kt)("br",null),"\nHet systeem dat we gebruiken om design tokens te verhalen naar een taal die voor elk platform."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://design-tokens.github.io/community-group/format/"},"Design tokens specificatie (concept)"),(0,i.kt)("br",null),"\nSpecificatie gepubliceerd door de Design tokens Community Group."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://nl-design-system.github.io/themes/"},"NL Design System Themes Storybook"),(0,i.kt)("br",null),"\nStorybook omgeving om te laten zien hoe design tokens verschillende componenten kunnen stijlen."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"help-deze-documentatie-te-verbeteren"},"Help deze documentatie te verbeteren"),(0,i.kt)("p",null,"Om ervoor te zorgen dat deze documentatie nuttig, relevant en up-to-date is, kun je een wijziging voorstellen via ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nl-design-system/documentatie"},"Github"),"."),(0,i.kt)("h2",{id:"vragen"},"Vragen"),(0,i.kt)("p",null,"Heb je een vraag? Twijfel niet en ",(0,i.kt)("a",{parentName:"p",href:"/project/contact"},"neem contact op met het kernteam"),"."))}p.isMDXComponent=!0},712:(e,n,t)=>{var a=t(390).createReactPlayer,i=t(868).default;e.exports=a([{key:"vimeo",canPlay:i.canPlay,lazyPlayer:i}])}}]);