"use strict";(self.webpackChunk_nl_design_system_website=self.webpackChunk_nl_design_system_website||[]).push([[515],{3905:(e,n,t)=>{t.d(n,{Zo:()=>g,kt:()=>u});var i=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,s=function(e,n){if(null==e)return{};var t,i,s={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},g=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),p=d(t),m=s,u=p["".concat(l,".").concat(m)]||p[m]||c[m]||a;return t?i.createElement(u,r(r({ref:n},g),{},{components:t})):i.createElement(u,r({ref:n},g))}));function u(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,r=new Array(a);r[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[p]="string"==typeof e?e:s,r[1]=o;for(var d=2;d<a;d++)r[d]=t[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},53865:(e,n,t)=>{t.d(n,{Z:()=>i});var i=(0,t(30853).Z)("chevron-right","IconChevronRight",[["path",{d:"M9 6l6 6l-6 6",key:"svg-0"}]])},35580:(e,n,t)=>{t.d(n,{Z:()=>d});var i=t(67294),s=t(86010),a=t(39960);const r={"dsw-session":"dsw-session_O_Ah","dsw-session__title":"dsw-session__title_pfT2","dsw-session__subtitle":"dsw-session__subtitle_bOCn","dsw-session__speakers":"dsw-session__speakers_cUju","dsw-speaker":"dsw-speaker_gupO","dsw-speaker__image":"dsw-speaker__image_dA9g"};var o=t(53865),l=t(1761);const d=e=>{let{lang:n="nl",headingLevel:t=3,title:d,speakers:g,signupLink:p,organisation:c,children:m}=e;return i.createElement("article",{className:(0,s.Z)(r["dsw-session"]),id:d.toLowerCase().replace(/\s/gi,"-")},i.createElement(l.X6,{level:t,className:(0,s.Z)(r["dsw-session__title"])},d),i.createElement(l.nv,{className:(0,s.Z)(r["dsw-session__subtitle"]),lead:!0},g.map((e=>e.name)).join(" & ")," ","en"===n?"of":"van"," ",c),m,"nl"===n&&g.find((e=>{let{language:n}=e;return"nl"!==n}))&&i.createElement(l.nv,null,i.createElement("b",null,"Goed te weten:")," Deze sessie is in het Engels."),i.createElement("aside",{className:(0,s.Z)(r["dsw-session__speakers"])},g.map((e=>i.createElement("div",{className:(0,s.Z)(r["dsw-session__speaker"],r["dsw-speaker"])},i.createElement("img",{className:(0,s.Z)(r["dsw-speaker__image"]),src:e.image.src,alt:e.image.alt}),i.createElement(l.nv,{className:(0,s.Z)(r["dsw-speaker__description"])},e.description[n]))))),i.createElement(l.nv,{className:(0,s.Z)(r["homepage-hero__call-to-action"])},i.createElement(a.Z,{className:(0,s.Z)("utrecht-link",r["homepage-hero__call-to-action-link"]),to:p},"en"===n?"Sign up for":"Aanmelden voor"," \u201c",d,"\u201d",i.createElement(o.Z,{className:(0,s.Z)("utrecht-icon",r["homepage-hero__call-to-action-icon"]),style:{verticalAlign:"middle"}}))),i.createElement("div",{className:(0,s.Z)(r["homepage-hero__linear-gradient"])}))}},50436:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>k,frontMatter:()=>l,metadata:()=>g,toc:()=>c});var i=t(87462),s=(t(67294),t(3905)),a=t(35580),r=t(42857),o=t(1761);const l={title:"Program",description:"Program of all English talks for the Design Systems Week 2023",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"Program",pagination_label:"Program",slug:"/events/design-systems-week-2023/en/program"},d=void 0,g={unversionedId:"project/events/design-systems-week-2023/english/program",id:"project/events/design-systems-week-2023/english/program",title:"Program",description:"Program of all English talks for the Design Systems Week 2023",source:"@site/docs/project/events/design-systems-week-2023/english/1-program.md",sourceDirName:"project/events/design-systems-week-2023/english",slug:"/events/design-systems-week-2023/en/program",permalink:"/en/events/design-systems-week-2023/en/program",draft:!1,editUrl:"https://github.com/nl-design-system/documentatie/tree/main/docs/project/events/design-systems-week-2023/english/1-program.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Program",description:"Program of all English talks for the Design Systems Week 2023",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"Program",pagination_label:"Program",slug:"/events/design-systems-week-2023/en/program"},sidebar:"project",previous:{title:"English only",permalink:"/en/events/design-systems-week-2023/en/overview"},next:{title:"Timetable",permalink:"/en/events/design-systems-week-2023/en/timetable"}},p={},c=[{value:"Program",id:"program",level:2},{value:"Organisation",id:"organisation",level:2},{value:"Code of Conduct",id:"code-of-conduct",level:2}],m=(u="Paragraph",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)});var u;const h={toc:c},w="wrapper";function k(e){let{components:n,...t}=e;return(0,s.kt)(w,(0,i.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("div",{lang:"en"},(0,s.kt)("h1",{id:"design-systems-week-2023"},"Design Systems Week 2023"),(0,s.kt)(m,{lead:!0,mdxType:"Paragraph"},"From 2 to 5 October NL Design System organises the third edition of Design Systems Week. Speakers from various organisations will join us for short talks about the how and why of design systems. This year there will be talks both in Dutch and English."),(0,s.kt)("h2",{id:"program"},"Program"),(0,s.kt)("p",null,"These are all sessions that will be in English, with sign up links to each. You can also use the ",(0,s.kt)(o.rU,{href:"/events/design-systems-week-2023/en/timetable",mdxType:"Link"},"timetable")," to see when all sessions will be held."),(0,s.kt)("p",null,"All sessions can be joined online for free. You will receive a link after sign-up. This link is valid for all talks during the week. Each talk will take about 30 minutes, including time for questions."),(0,s.kt)(a.Z,{title:"The future of design decisions",speakers:[r.Hs,r.sI],organisation:"Token Studio",lang:"en",signupLink:"https://www.gebruikercentraal.nl/agenda/the-future-of-design-decisions/#event-booking",mdxType:"DSWSession"},(0,s.kt)("p",null,"Marco-Christian Krenn and Jan Six team up to present The future of design decisions. Delve into the transition from design tokens to dynamic design, impacting areas like accessibility, and revealing the profound implications of choices. This engaging discussion underscores the essential connection between internal decisions and the source of truth."),(0,s.kt)("p",null,"You get a glimpse into the future around design tokens and learn about all the possibilities.")),(0,s.kt)(a.Z,{title:"Design systems as public infrastructure",speakers:[r.FL],organisation:"Public Digital Innovation Space, Cabinet Office, Taiwan",lang:"en",signupLink:"https://www.gebruikercentraal.nl/agenda/design-systems-as-public-infrastructure#event-booking",mdxType:"DSWSession"},(0,s.kt)("p",null,"Government digital services should be treated as public infrastructure in this day and age. Taiwan is in a rare position where there is an urgency to ensure digital resilience for all government services."),(0,s.kt)("p",null,"The design system and especially the engineering of it plays a crucial part in digital resilience as modern warfare has become increasingly digital. In this talk Mu-An will share the initiative, the challenges, and the ambitions of the Taiwanese digital services, focusing on the design system aspect.")),(0,s.kt)(a.Z,{title:"The GOV.UK Prototype Kit",speakers:[r.te],lang:"en",organisation:"GOV.UK",signupLink:"https://www.gebruikercentraal.nl/agenda/the-gov-uk-prototype-kit#event-booking",mdxType:"DSWSession"},(0,s.kt)("p",null,"A set of components is one thing, but the true magic comes when they are put in use together. At GOV.UK they make it easier to prototype realistic digital services in HTML, with the GOV.UK Prototype Kit.\nDesigner Joe Lanman is involved in this project as a designer and tells you more about it!"),(0,s.kt)("p",null,"Joe Lanman is a Design Lead at the UK Government Digital Service, based in London. He\u2019s worked on projects including Register to Vote, Petition Parliament and the GOV.UK Prototype Kit \u2013 a way to rapidly prototype realistic services in HTML.")),(0,s.kt)(a.Z,{lang:"en",title:"Estonia Design System",speakers:[r.g],organisation:"Nortal",signupLink:"https://www.gebruikercentraal.nl/agenda/estland-design-system#event-booking",mdxType:"DSWSession"},(0,s.kt)("p",null,"Veera is a codename for a design system employed by many Estonian governmental agencies as a common UI language for the state of Estonia. Aleksandr will be talking about his and his colleagues' experiences setting up, maintaining, and supporting a component library that makes this design system breathe."),(0,s.kt)("p",null,"Attend if you are interested in learning from a complex real-life case study. This is a story from a country which is proud to be called the first digital society. It is also a story about managing expectations, importance of DX, self-restraint, and naming things.")),(0,s.kt)(a.Z,{title:"Design Systems & Web Components: what works & what doesn\u2019t",speakers:[r.x0],lang:"en",organisation:"Nordhealth",signupLink:"https://www.gebruikercentraal.nl/agenda/design-systems-web-components-what-works-what-doesnt#event-booking",mdxType:"DSWSession"},(0,s.kt)("p",null,"Nord is the design system of Nordhealth, a company that makes software for healthcare professionals. Design system lead David Darnes will tell you about their experience with Web Components and how they enable reuse of Nord components across a wide variety of contexts and technologies."),(0,s.kt)("p",null,"Ever since the first standards for Web Components were published, developers have pondered whether they are \u2018ready\u2019 to be used in production. Today they are used in real-world projects by a lot of different organisations. Design system teams even use them in tandem with rather than instead of tools like Vue, Angular, and React."),(0,s.kt)("p",null,"Of course, there is lots of nuance and there are some caveats and challenges. In his talk, Dave will go into what works well and doesn\u2019t.")),(0,s.kt)(a.Z,{title:"DesignOps: designing the API of design teams",speakers:[r.h6],lang:"en",organisation:"GitHub",signupLink:"https://www.gebruikercentraal.nl/agenda/designops-designing-the-api-of-design-teams#event-booking",mdxType:"DSWSession"},(0,s.kt)("p",null,"DesignOps is the glue that keeps a design org together, and the connective tissue that links design to other disciplines across the company, and beyond. Even if your company doesn\u2019t have a formal DesignOps team, this work is likely being done by someone."),(0,s.kt)("p",null,"At GitHub, we\u2019re thinking about our DesignOps practice as the API that connects designers to designers, and design to the wider company. Just like when designing APIs, we\u2019ve tried things that didn\u2019t work quite well, and have had to ship several breaking changes as we move towards a more stable release."),(0,s.kt)("p",null,"In this talk, you will learn:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"How to identify opportunities for DesignOps to be executed more intentionally"),(0,s.kt)("li",{parentName:"ul"},"How to see DesignOps as an opportunity to connect not just designers, but design to other disciplines, and design to the community"),(0,s.kt)("li",{parentName:"ul"},"Some things we\u2019ve tried at GitHub that didn\u2019t work so well \u2014 and some that did"))),(0,s.kt)("h2",{id:"organisation"},"Organisation"),(0,s.kt)("p",null,"Design Systems Week is organised by the NL Design System core team, thanks to the support of the Ministry of the Interior and Kingdom Relations (BZK) and ",(0,s.kt)(o.rU,{href:"https://international.gebruikercentraal.nl",mdxType:"Link"},"User Needs First"),". All sessions can also be found there ",(0,s.kt)(o.rU,{href:"https://international.gebruikercentraal.nl/design-systems-week-2023/",mdxType:"Link"},"Design Systems Week 2023")),(0,s.kt)("h2",{id:"code-of-conduct"},"Code of Conduct"),(0,s.kt)("p",null,"All participants of Design Systems Week are expected to abide by our ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/nl-design-system/.github/blob/main/CODE_OF_CONDUCT.md"},"NL Design System Code of Conduct"),". By signing up for one or more sessions you've agreed to these terms.")))}k.isMDXComponent=!0},42857:e=>{e.exports=JSON.parse('{"Z3":{"name":"Peter Berrevoets","organisation":"NL Design System","image":{"src":"https://www.gebruikercentraal.nl/wp-content/uploads/sites/4/2023/09/peter-berrevoets-edited-300x300.jpeg","alt":"Peter Berrevoets"},"description":{"nl":"Peter werkt als projectleider bij ICTU. Voorheen heeft hij tal van projecten binnen de overheid geleid. Op dit moment werkt hij als projectleider nauw samen met het kernteam van NL Design System."},"language":"nl"},"ew":{"name":"Martijn Rietveld","organisation":"OpenGemeenten","image":{"src":"https://www.gebruikercentraal.nl/wp-content/uploads/sites/4/2023/08/martijn-rietveld-edited-300x300.png","alt":"Martijn Rietveld"},"description":{"nl":"Martijn Rietveld is designer bij en mede-oprichter van OpenGemeenten. Deze leverancier wil overheidsinformatie begrijpelijk maken voor alle inwoners van Nederland. Het uitgangspunt van Martijn in zijn werk: goed ontwerp maakt gemeentelijke dienstverlening toegankelijk voor iedereen."},"language":"nl"},"pp":{"name":"Jeffrey Lauwers","organisation":"NL Design System","image":{"src":"https://www.gebruikercentraal.nl/wp-content/uploads/sites/4/2023/08/jeffrey-lauwers-150x150.png","alt":"Jeffrey Lauwers"},"description":{"nl":"Jeffrey Lauwers is designer bij NL Design System, met een focus op design systems en toegankelijkheid. Eerder realiseerde hij design systems voor de Nederlandse Spoorwegen, Nationale Nederlanden, Randstad en het Ministerie van VWS."},"language":"nl"},"bW":{"name":"H\xfclya Bozkurt","organisation":"Kamer van Koophandel","image":{"src":"https://www.gebruikercentraal.nl/wp-content/uploads/sites/4/2023/08/hulya-bozkurt-300x300.jpeg","alt":"H\xfclya Bozkurt"},"description":{"nl":"H\xfclya Bozkurt is sinds 3 jaar product owner bij de KVK. 8 jaar geleden is ze bij de KVK gestart als interaction designer. H\xfclya startte in de gaming-industrie als game designer. Ook was ze online producer bij een kinderomroep en interaction designer voor diverse websites, van uitgevers tot telefonie en internet."},"language":"nl"},"_j":{"name":"Joshua Grootveld","organisation":"Kamer van Koophandel","image":{"src":"https://www.gebruikercentraal.nl/wp-content/uploads/sites/4/2023/08/joshua_grootveld-edited-300x300.jpeg","alt":"Joshua Grootveld"},"description":{"nl":"Joshua Grootveld is nu ruim 1 jaar interaction designer bij de KVK. Voorheen werkte hij als UX-designer bij TransIP. Vervolgens werkte Joshua bij team.blue, waar hij heeft gewerkt aan het opzetten van een multi-brand white-label design system in Sketch/Figma, en product ontwikkeling op het gebied van UX/UI."},"language":"nl"},"dA":{"name":"Robbert Broersma","organisation":"NL Design System","image":{"src":"https://www.gebruikercentraal.nl/wp-content/uploads/sites/4/2023/08/robbert-broersma.png","alt":"Robbert Broersma"},"description":{"nl":"Robbert is design system lead bij NL Design System. Met zijn ervaring bij andere design systems kent hij zowel de valkuilen van een team overstijgend design system als de waarde van het hergebruik van stabiele, toegankelijke componenten."},"language":"nl"},"Nt":{"name":"Hidde de Vries","organisation":"NL Design System","image":{"src":"https://www.gebruikercentraal.nl/wp-content/uploads/sites/4/2023/08/hidde-de-vries-300x300.jpg","alt":"Hidde de Vries"},"description":{"nl":"Hidde is developer en toegankelijkheidsspecialist bij NL Design System. Hij heeft zich de afgelopen jaren intensief beziggehouden met design systems en digitale toegankelijkheid."},"language":"nl"},"te":{"name":"Joe Lanman","organisation":"GOV.UK","image":{"src":"https://www.gebruikercentraal.nl/wp-content/uploads/sites/4/2023/08/joe-lanman-square-1-150x150.png","alt":"Joe Lanman"},"description":{"nl":"Joe Lanman is design lead bij de UK Government Digital Service, in London. Hij werkte projecten als Register to Vote en Petition Parliament. En de GOV.UK Prototype Kit: een manier om snel in HTML realistische prototypes te maken van digitale overheidsdiensten en -producten.","en":"Joe Lanman is a Design Lead at the UK Government Digital Service, based in London. He\u2019s worked on projects including Register to Vote, Petition Parliament and the GOV.UK Prototype Kit - a way to rapidly prototype realistic services in HTML"},"language":"en"},"pq":{"name":"Dani\xeblle Rameau","organisation":"Sanoma Learning","image":{"src":"https://www.gebruikercentraal.nl/wp-content/uploads/sites/4/2023/08/danielle-rameau-edited-300x300.png","alt":"Dani\xeblle Rameau"},"description":{"nl":"Dani\xeblle Rameau is design systems lead bij Sanoma Learning. Sinds 2022 houdt ze zich samen met haar team bezig met de ontwikkeling van het design system. Het is een multi-brand design system dat wordt gebruikt in alle producten van Sanoma Learning."},"language":"nl"},"x0":{"name":"David Darnes","organisation":"Nordhealth","image":{"src":"https://www.gebruikercentraal.nl/wp-content/uploads/sites/4/2023/08/david-darnes-150x150.png","alt":"David Darnes"},"description":{"nl":"Dave is team lead van het Nord Design System bij Nordhealth. Al ruim 14 jaar ontwerpt, ontwikkelt en schrijft hij op het web.","en":"Dave is Team Lead on Nord Design System at Nordhealth and has been designing, building and writing on the web for over 14 years."},"language":"en"},"h6":{"name":"Inayaili Le\xf3n","organisation":"GitHub","image":{"src":"https://www.gebruikercentraal.nl/wp-content/uploads/sites/4/2023/08/inayaili-leon-e1691492604349-150x150.jpeg","alt":"Inayaili Le\xf3n"},"description":{"nl":"Inayaili Le\xf3n is Staff Design Program Manager bij GitHub. Hier houdt ze zich bezig met DesignOps. Daarvoor was ze Senior Designer bij Microsoft. Daar werkte ze aan design systems en DesignOps. Ook leidde Inayaili het team dat het Vanilla design system van Canonical ontwikkelde.","en":"Inayaili Le\xf3n is a Staff Design Program Manager at GitHub, where she focuses on design operations, documentation, and more. Previously, she was as a Senior Designer at Microsoft, working on design systems and design ops, and she led the team creating Canonical\'s Vanilla design system"},"language":"en"},"g":{"name":"Aleksandr Beliaev","organisation":"Nortal","image":{"src":"https://www.gebruikercentraal.nl/wp-content/uploads/sites/4/2023/09/aleksandr-beliaev-300x300.png","alt":"Aleksandr Beliaev"},"description":{"nl":"Aleksandr Beliaev is UI Development Lead bij Nortal, gespecialiseerd in UI engineering en design systems. Aleksandr heeft al meer dan 15 jaar ervaring met werken met UI en code. Hij houdt ervan als dingen mooi, opgeruimd maar werkbaar zijn.","en":" Aleksandr Beliaev is a UI Development Lead at Nortal. His main expertise revolves around UI engineering and design systems.  Aleksandr has been working with UI code for a bit more than 15 years. He likes his things shiny, tidied-up but liveable."}},"FL":{"name":"Mu-An Chiou","organisation":"Public Digital Innovation Space, Cabinet Office, Taiwan","image":{"src":"https://www.gebruikercentraal.nl/wp-content/uploads/sites/4/2023/09/mu-an-chiou-150x150.png","alt":"Mu-An Chiou"},"description":{"nl":"Mu-An Chiou is hoofd design systems bij de Public Digital Innovation Space, dat valt onder het Taiwanese Cabinet Office. Ze werkte eerder bij GitHub, waar ze werkte aan hun design system en initiatieven leidde rondom toegankelijkheid, front-end architectuur en Web Components.","en":"Mu-An Chiou is Head of Design Systems at Public Digital Innovation Space, under Taiwan\'s Cabinet Office. She used to work at GitHub, where she worked on their design system and led efforts on accessibility and Web Components."},"language":"en"},"Hs":{"name":"Marco-Christian Krenn","organisation":"GitHub","image":{"src":"https://www.gebruikercentraal.nl/wp-content/uploads/sites/4/2023/09/marco-christian-krenn-300x300.png","alt":"Marco-Christian Krenn"},"description":{"nl":"Marco-Christian Krenn is een design system architect uit Oostenrijk. Hij houdt zich graag bezig met het oplossen van ontwerpen met logische beslissingen, headless architecture en design tokens. Als onderdeel van Tokens Studio werkt hij intensief aan Generators en Resolvers en streeft hij naar innovatie en verbetering op het gebied van design systems.","en":"Marco-Christian Krenn is a Design System Architect from Austria who is passionate about solving design with logical decisions, headless architecture, and design tokens. As part of Tokens Studio, he\u2019s deeply involved in working on Generators and Resolvers, striving to innovate and enhance the field of design systems."},"language":"en"},"sI":{"name":"Jan Six","organisation":"GitHub","image":{"src":"https://www.gebruikercentraal.nl/wp-content/uploads/sites/4/2023/09/jan-six-300x300.png","alt":"Jan Six"},"description":{"nl":"Jan Six is een product designer bij GitHub. Hij heeft opensourcetools en plugins gebouwd die ontwerpers helpen om de vervelende en repetitieve onderdelen van hun werk te automatiseren. Met zijn opensourceproject Tokens Studio bouwt hij aan een open ecosysteem rond ontwerpbeslissingen, inclusief een Figma-plugin en een platform om ontwerpsystemen op schaal en geautomatiseerd te laten werken.","en":"Jan Six is a product designer at GitHub who has been building open-source tools and plugins that help designers automate the tedious and repetitive parts. With his open source project Tokens Studio he\u2019s building an open ecosystem around design decisions, including a Figma plugin and a platform to help make design systems work at scale and in automated ways."},"language":"en"},"Zg":{"name":"Jeffrey Klardie","organisation":"Gemeente Amsterdam","image":{"src":"https://media.licdn.com/dms/image/C4D03AQGre1V5ipaP2w/profile-displayphoto-shrink_400_400/0/1662580345994?e=1700092800&v=beta&t=LBuMfPSDzVTgCrQxY9zuaAjM4hQhrO2Si6rRqdQZ_0w","alt":"Jeffrey Klardie"},"description":{"nl":"Jeffrey Klardie is tech lead Vakgroep Software Ontwikkeling bij de gemeente Amsterdam"},"language":"nl"},"jr":{"name":"Roel Derksen","organisation":"RIVM","image":{"src":"https://media.licdn.com/dms/image/C4E03AQE966BerwDdKQ/profile-displayphoto-shrink_800_800/0/1574854722636?e=1700092800&v=beta&t=lugdDNZdQGbfRL9UjQJq-0JJIGxZuT4jNY_vorZ1utg","alt":"Roel Derksen"},"description":{"nl":"Roel Derksen is afdelingshoofd Ontwikkeling bij het Rijksinstituut voor Volksgezondheid en Milieu (RIVM)"},"language":"nl"},"Ln":{"name":"Vincent van Beek","organisation":"Gemeente Den Haag","image":{"src":"https://designsystem.gebruikercentraal.nl/wp-content/uploads/sites/26/2021/07/Vincent-van-Beek-Den-Haag-150x150.png","alt":"Vincent van Beek"},"description":{"nl":"Vincent van Beek is chief product owner Online bij de gemeente Den Haag"},"language":"nl"}}')}}]);