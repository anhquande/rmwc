(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{156:function(e,a,t){"use strict";function n(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}t.d(a,"a",function(){return n})},157:function(e,a,t){"use strict";function n(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,a,t){return a&&n(e.prototype,a),t&&n(e,t),e}t.d(a,"a",function(){return s})},158:function(e,a,t){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}t.d(a,"a",function(){return n})},159:function(e,a,t){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){return(s="function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)})(e)}function o(e,a){return!a||"object"!==s(a)&&"function"!==typeof a?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):a}t.d(a,"a",function(){return o})},160:function(e,a,t){"use strict";function n(e,a){return(n=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function s(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&n(e,a)}t.d(a,"a",function(){return s})},216:function(e,a,t){"use strict";t.r(a),t.d(a,"attributes",function(){return i}),t.d(a,"default",function(){return u});var n=t(156),s=t(157),o=t(159),c=t(158),l=t(160),r=t(0),m=t.n(r),i={},u=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(o.a)(this,Object(c.a)(a).call(this,e))).state={},t}return Object(l.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("h1",null,"Methodology"),m.a.createElement("blockquote",null,m.a.createElement("p",null,"RMWC is intended to be an un-opinionated React wrapper around ",m.a.createElement("a",{href:"https://github.com/material-components/material-components-web/"},"material-components-web"))),m.a.createElement("h2",null,"Project Goals"),m.a.createElement("ul",null,m.a.createElement("li",null,"To create the thinnest, lightest, and spec compliant wrapper around Google Material Design Components for the Web",m.a.createElement("a",{href:"https://material.io/components/web/"},"https://material.io/components/web/")),m.a.createElement("li",null,"To utilize the Foundation javascript classes from material-components-web"),m.a.createElement("li",null,"To be as unobtrusive and sensible as possible."),m.a.createElement("li",null,"To fill the gaps in material-components-web with custom React community driven components.")),m.a.createElement("h2",null,"Why?"),m.a.createElement("p",null,"There are many different Material UI implementations in both Angular and React. The last thing we need is another one... In React land there has been a lot of great work done, but you eventually end up in one of the following situations:"),m.a.createElement("ul",null,m.a.createElement("li",null,"The library is heavy or extremely inflexible (crazy api, opinionated styling)"),m.a.createElement("li",null,"The library is an opinionated representation of material or it isn't very polished"),m.a.createElement("li",null,"The library has been abandoned")),m.a.createElement("p",null,"RMWC's goal is to use the Google sanctioned javascript Material Design Components which are designed, developed, and maintained by Google. Where Google doesn't provide a component, RMWC will include its own React driven components. These will be denoted with an \"RMWC Addon\" label."),m.a.createElement("h2",null,"Breaking Changes"),m.a.createElement("p",null,'As stated in "Why?", the goal of this library is to be un-opinionated, and that includes opinions about breaking changes that come downstream from material-components-web. While RMWC goes to great lengths to insulate you from  breaking changes through deprecations and warning messages, unfortunately not every breaking change is a candidate for a deprecation.'),m.a.createElement("p",null,"With that said, you can each release of RMWC is bound to a specific release of material-components-web, so you can safely continue running your current version without upgrading. As of 2.0.0, components are also individually packaged and released. If you have a large code base and want to insulate yourself from change, it is recommended you install one component at a time."),m.a.createElement("h2",null,"Basic Layout"),m.a.createElement("p",null,"Material Components web uses BEM syntax to style and script their components. RMWC directly inherits MDC's naming conventions, so if you can read one, you can infer the other."),m.a.createElement("p",null,"Block -> Component Element -> Components / Children Modifier -> Props"),m.a.createElement("p",null,"Here's a TextField example in raw MDC and with RMWC."),m.a.createElement("div",{className:"example code-only"},m.a.createElement("div",{className:"source"},m.a.createElement("pre",{className:"language-jsx"},m.a.createElement("code",{className:"language-jsx"},m.a.createElement("span",{className:"token comment"},"// The example is from material-components-web"),"\n",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"ul")," ",m.a.createElement("span",{className:"token attr-name"},"class"),m.a.createElement("span",{className:"token attr-value"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},'"'),"mdc-list")," ",m.a.createElement("span",{className:"token attr-name"},'mdc-list--two-line"'),m.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"li")," ",m.a.createElement("span",{className:"token attr-name"},"class"),m.a.createElement("span",{className:"token attr-value"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},'"'),"mdc-list-item",m.a.createElement("span",{className:"token punctuation"},'"')),m.a.createElement("span",{className:"token punctuation"},">")),"\n","    ",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"span")," ",m.a.createElement("span",{className:"token attr-name"},"class"),m.a.createElement("span",{className:"token attr-value"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},'"'),"mdc-list-item__text",m.a.createElement("span",{className:"token punctuation"},'"')),m.a.createElement("span",{className:"token punctuation"},">")),"\n","      Two",m.a.createElement("span",{className:"token operator"},"-"),"line item","\n","      ",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"span")," ",m.a.createElement("span",{className:"token attr-name"},"class"),m.a.createElement("span",{className:"token attr-value"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},'"'),"mdc-list-item__secondary-text",m.a.createElement("span",{className:"token punctuation"},'"')),m.a.createElement("span",{className:"token punctuation"},">")),"Secondary text",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"</"),"span"),m.a.createElement("span",{className:"token punctuation"},">")),"\n","    ",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"</"),"span"),m.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"</"),"li"),m.a.createElement("span",{className:"token punctuation"},">")),"\n",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"</"),"ul"),m.a.createElement("span",{className:"token punctuation"},">")),"\n")))),m.a.createElement("div",{className:"example code-only"},m.a.createElement("div",{className:"source"},m.a.createElement("pre",{className:"language-jsx"},m.a.createElement("code",{className:"language-jsx"},m.a.createElement("span",{className:"token comment"},"// This is the RMWC version"),"\n",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"List")," ",m.a.createElement("span",{className:"token attr-name"},"twoLine"),m.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"ListItem"),m.a.createElement("span",{className:"token punctuation"},">")),"\n","    ",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"ListItemPrimaryText"),m.a.createElement("span",{className:"token punctuation"},">")),"\n","      Two",m.a.createElement("span",{className:"token operator"},"-"),"line item","\n","    ",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"</"),"ListItemPrimaryText"),m.a.createElement("span",{className:"token punctuation"},">")),"\n","    ",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"ListItemSecondaryText"),m.a.createElement("span",{className:"token punctuation"},">")),"Secondary text",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"</"),"ListItemSecondaryText"),m.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"</"),"ListItem"),m.a.createElement("span",{className:"token punctuation"},">")),"\n",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"</"),"List"),m.a.createElement("span",{className:"token punctuation"},">")),"\n")))),m.a.createElement("h2",null,"Convenience"),m.a.createElement("p",null,"Even though this is meant to be an un-opinionated wrapper, in some areas decisions had to be made to improve utility and the overall developer experience. At the end of the day, if it doesn't make your life easier, what's the point?"),m.a.createElement("h2",null,"Something missing from RMWC?"),m.a.createElement("p",null,"RMWC wraps the entire ",m.a.createElement("a",{href:"https://github.com/material-components/material-components-web"},"material-components-web")," package in React, but because they are different projects with different maintainers, sometimes things can be missed. A lot of components from ",m.a.createElement("a",{href:"https://github.com/material-components/material-components-web"},"material-components-web")," don't require javascript. For these, you can simply use the classNames in your own project. Of course, RMWC wants to cover the entire codebase, so if you see something missing or incorrect, please ",m.a.createElement("a",{href:"https://github.com/jamesmfriedman/rmwc/issues/new"},"file an issue"),"."),m.a.createElement("div",{className:"example code-only"},m.a.createElement("div",{className:"source"},m.a.createElement("pre",{className:"language-jsx"},m.a.createElement("code",{className:"language-jsx"},m.a.createElement("span",{className:"token comment"},"/** This will give you a CSS only button and skip RMWC all together */"),"\n",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"button")," ",m.a.createElement("span",{className:"token attr-name"},"className"),m.a.createElement("span",{className:"token attr-value"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},'"'),"mdc-button",m.a.createElement("span",{className:"token punctuation"},'"'))," ",m.a.createElement("span",{className:"token punctuation"},"/>")),"\n")))))}}]),a}(m.a.Component)}}]);
//# sourceMappingURL=41.fb06c024.chunk.js.map