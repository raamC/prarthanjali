"use strict";(self.webpackChunkprarthanjali=self.webpackChunkprarthanjali||[]).push([[922],{1977:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(1597),l=function(){var e=(0,n.useState)(!1),t=e[0],a=e[1];return n.createElement("nav",{class:"navbar is-warning",role:"navigation","aria-label":"main navigation"},n.createElement("div",{class:"navbar-brand"},n.createElement("div",{class:"navbar-item"},n.createElement(r.rU,{class:"navbar-link--custom",to:"/"},"Home")),n.createElement("a",{onClick:function(){return a(!t)},role:"button",class:"navbar-burger burger "+(t?"is-active":""),"data-target":"navMenu","aria-label":"menu","aria-expanded":"false"},n.createElement("span",{"aria-hidden":"true"}),n.createElement("span",{"aria-hidden":"true"}),n.createElement("span",{"aria-hidden":"true"}))),n.createElement("div",{id:"navMenu",class:"navbar-menu "+(t?"is-active":"")},n.createElement("div",{class:"navbar-start"},n.createElement("div",{class:"navbar-item"},n.createElement(r.rU,{class:"navbar-link--custom",to:"/bhajans"},"Bhajans")),n.createElement("div",{class:"navbar-item"},n.createElement(r.rU,{class:"navbar-link--custom",to:"/mantras"},"Mantras")))))},i=function(){return n.createElement("footer",{class:"footer"},n.createElement("div",{class:"content has-text-centered"},n.createElement("p",null,"Made by the family of Narottambhai and Gangaben Chauhan. For everybody.")))},s=function(e){var t=e.children;return n.createElement(n.Fragment,null,n.createElement(l,null),n.createElement("main",null,t),n.createElement(i,null))}},5754:function(e,t,a){a.r(t),a.d(t,{default:function(){return s}});var n=a(7294),r=function(e){var t=e.bhajanText,a=e.showTranslation;return n.createElement("div",{class:"notification"},t.map((function(e){return n.createElement("div",{class:"bhajan-section"},n.createElement("div",{class:"section-transliteration"},e.transliteration),n.createElement("div",{class:"section-translation",style:a?{}:{display:"none"}},e.translation))})))},l=a(1977),i=function(e){var t=e.youtubeLinksArray;return n.createElement("div",{class:"box"},n.createElement("h3",{class:"title"},"Videos"),t.map((function(e){return n.createElement("iframe",{width:"100%",src:e,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"})})))};function s(e){var t=e.pageContext.bhajanData,a=(0,n.useState)(!0),s=a[0],c=a[1];return n.createElement(l.Z,null,n.createElement("section",{class:"section"},n.createElement("div",{class:"container"},n.createElement("div",{class:""},n.createElement("div",{class:"notification page-title cursive-heading is-primary"},n.createElement("h1",{class:"title is-1"},t.title.transliteration))))),n.createElement("section",{class:"section"},n.createElement("div",{class:"container"},n.createElement("div",{class:"columns",style:{display:"flex","flex-wrap":"wrap-reverse"}},n.createElement("div",{class:"column is-two-thirds",style:{"min-width":"60%"}},n.createElement(r,{bhajanText:t.sections,showTranslation:s})),n.createElement("div",{class:"column is-one-third"},n.createElement(i,{youtubeLinksArray:t.youtubeLinks}),n.createElement("div",{class:"box notification is-warning"},n.createElement("h3",{class:"title"},"Display options"),n.createElement("button",{class:"button options-button",onClick:function(){return c(!s)}},s?"Hide":"Show"," translation")))))))}}}]);
//# sourceMappingURL=component---src-templates-bhajan-template-js-7b054bbca115bd3b311d.js.map