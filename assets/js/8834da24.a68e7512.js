"use strict";(self.webpackChunk_nl_design_system_documentatie=self.webpackChunk_nl_design_system_documentatie||[]).push([[3028],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return u},MDXProvider:function(){return m},mdx:function(){return f},useMDXComponents:function(){return c},withMDXComponents:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),d=function(e){return function(n){var t=c(n.components);return r.createElement(e,o({},n,{components:t}))}},c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,g=d["".concat(a,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(g,s(s({ref:n},u),{},{components:t})):r.createElement(g,s({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},7480:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],s={title:"Bestandsstructuur in Figma",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"Bestandsstructuur",pagination_label:"Bestandsstructuur",description:"NL Design System bestandsstructuur in Figma",keywords:["designer","figma","bestandsstructuur"]},l="Bestandsstructuur in Figma",u={unversionedId:"richtlijnen/figma/figma-file-structure",id:"richtlijnen/figma/figma-file-structure",title:"Bestandsstructuur in Figma",description:"NL Design System bestandsstructuur in Figma",source:"@site/docs/richtlijnen/03-figma/03-figma-file-structure.md",sourceDirName:"richtlijnen/03-figma",slug:"/richtlijnen/figma/figma-file-structure",permalink:"/docs/richtlijnen/figma/figma-file-structure",editUrl:"https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/03-figma/03-figma-file-structure.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Bestandsstructuur in Figma",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"Bestandsstructuur",pagination_label:"Bestandsstructuur",description:"NL Design System bestandsstructuur in Figma",keywords:["designer","figma","bestandsstructuur"]},sidebar:"richtlijnen",previous:{title:"Naamgeving",permalink:"/docs/richtlijnen/figma/figma-naming"},next:{title:"Design tokens",permalink:"/docs/richtlijnen/figma/figma-design-tokens"}},d=[{value:"Groeperen",id:"groeperen",children:[{value:"Groups",id:"groups",children:[],level:3},{value:"Frames",id:"frames",children:[],level:3}],level:2},{value:"Emojis helpen snel visueel scannen",id:"emojis-helpen-snel-visueel-scannen",children:[],level:2},{value:"Nesting",id:"nesting",children:[],level:2}],c={toc:d};function m(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.mdx)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"bestandsstructuur-in-figma"},"Bestandsstructuur in Figma"),(0,o.mdx)("p",null,"Een goede bestandsstructuur helpt bij het scannen en navigeren door Figma bestanden. Sectie-indeling (zoals componentgroepen, componenten, componentspecificaties of voorbeelden) helpt om snel naar deze secties te navigeren."),(0,o.mdx)("p",null,"Met de sneltoetsen ",(0,o.mdx)("inlineCode",{parentName:"p"},"1")," en ",(0,o.mdx)("inlineCode",{parentName:"p"},"2")," kan snel worden ingezoomd op respectievelijk de hele pagina of een selectie."),(0,o.mdx)("p",null,"Met juiste secties en lagen, kan je makkelijk inzoomen op een sectie of layer door deze te selecteren in het layer paneel en in te zoomen door op ",(0,o.mdx)("inlineCode",{parentName:"p"},"2")," te drukken. Terug zoomen naar de pagina of 100% van de huidige weergave kan door respectievelijk op ",(0,o.mdx)("inlineCode",{parentName:"p"},"1")," en ",(0,o.mdx)("inlineCode",{parentName:"p"},"0")," te drukken."),(0,o.mdx)("h2",{id:"groeperen"},"Groeperen"),(0,o.mdx)("p",null,"Groeperen in Figma wordt gedaan door ofwel een groep of een frame te maken. Frames bieden hierbij de meeste flexibiliteit."),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"/docs/richtlijnen/figma/figma-components"},"Componenten kunnen worden beschouwd als een vorm van groepering"),"."),(0,o.mdx)("h3",{id:"groups"},"Groups"),(0,o.mdx)("p",null,"Groups groeperen eenvoudigweg meerdere objecten samen. Door de grootte van een group te wijzigen, worden de objecten die het bevat mee geschaald."),(0,o.mdx)("p",null,"Eigenschappen die op een groep kunnen worden ingesteld zijn positie, dimensie, blending mode en opacity. Fill, stroke en effecten hebben invloed op alle objecten in een groep."),(0,o.mdx)("h3",{id:"frames"},"Frames"),(0,o.mdx)("p",null,"Het veranderen van de grootte van een frame zorgt ervoor dat objecten binnen het frame reageren op hun individuele \u2018constraints\u2019. Objecten kunnen op een vaste positie worden gezet, of zo worden ingesteld dat ze de breedte en/of hoogte van het parent frame vullen."),(0,o.mdx)("p",null,"Een ander voordeel van frames is dat je vaak geen genest vector-object nodig hebt om een element te maken; d.w.z. eigenschappen voor een knop zoals achtergrond of rand-radius, breedte en kleur kunnen direct op het frame zelf worden ingesteld. Hiervoor is geen achtergrond vector nodig en komt daardoor overeen met hoe dit in de front-end code geimplementeerd wordt."),(0,o.mdx)("p",null,"Auto layout kan alleen op frames toegepast worden. Auto-layout toepassen op een group zal deze automatisch omzetten in een frame."),(0,o.mdx)("h2",{id:"emojis-helpen-snel-visueel-scannen"},"Emojis helpen snel visueel scannen"),(0,o.mdx)("p",null,"Emojis in de naamgeving van pagina's en layers helpen om snel te scannen of om snel een status te controleren."),(0,o.mdx)("p",null,(0,o.mdx)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/248921/140959174-76e45980-73df-43c1-b918-f6cd14af3a29.png",alt:"Emojis in pagina en component namen"})),(0,o.mdx)("h2",{id:"nesting"},"Nesting"),(0,o.mdx)("p",null,"Vermijd onnodig \u2018nesting\u2019 in mappen, maar gebruik nesting wel om verwante elementen opzettelijk te groeperen."),(0,o.mdx)("p",null,(0,o.mdx)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/248921/140959366-05df035f-3255-4346-8c65-f06056b241f0.png",alt:"Voorbeelden van onopzettelijke en opzettelijke nesting"})))}m.isMDXComponent=!0}}]);