/*! For license information please see component---src-templates-index-template-index-template-tsx-36c911506341de52271e.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_lumen=self.webpackChunkgatsby_starter_lumen||[]).push([[574],{5900:function(e,t){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)){if(a.length){var l=r.apply(null,a);l&&e.push(l)}}else if("object"===i){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var o in a)n.call(a,o)&&a[o]&&e.push(o)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},7919:function(e,t,a){"use strict";a.d(t,{f:function(){return l}});var n=a(7294),r=a(1082),i="Feed-module--link--6123b",l=function(e){var t=e.edges;return n.createElement("div",{className:"Feed-module--feed--a6204"},t.map((function(e){return n.createElement("div",{className:"Feed-module--item--c7a63",key:e.node.fields.slug},n.createElement("div",{className:"Feed-module--meta--250c2"},n.createElement("time",{className:"Feed-module--time--72864",dateTime:new Date(e.node.frontmatter.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})},new Date(e.node.frontmatter.date).toLocaleDateString("en-US",{year:"numeric",month:"long"})),n.createElement("span",{className:"Feed-module--divider--81a18"}),n.createElement("span",{className:"Feed-module--category--59f58"},n.createElement(r.Link,{to:e.node.fields.categorySlug,className:i},e.node.frontmatter.category))),n.createElement("h2",{className:"Feed-module--title--f252f"},n.createElement(r.Link,{className:i,to:e.node.fields.slug},e.node.frontmatter.title)),n.createElement("p",{className:"Feed-module--description--57348"},e.node.frontmatter.description),n.createElement(r.Link,{className:"Feed-module--more--51a4e",to:e.node.fields.slug},"Read"))})))}},9388:function(e,t,a){"use strict";a.d(t,{t:function(){return c}});var n=a(7294),r=a(5900),i=a.n(r),l=a(1082),o=a(100),s="Pagination-module--disable--7e105",c=function(e){var t,a,r=e.prevPagePath,c=e.nextPagePath,m=e.hasNextPage,d=e.hasPrevPage,u=i()("Pagination-module--previousLink--5590d",((t={})[s]=!d,t)),g=i()("Pagination-module--nextLink--532ff",((a={})[s]=!m,a));return n.createElement("div",{className:"Pagination-module--pagination--d61cb"},n.createElement("div",{className:"Pagination-module--previous--4a76b"},n.createElement(l.Link,{rel:"prev",to:d?r:"/",className:u},o.X.PREV_PAGE)),n.createElement("div",{className:"Pagination-module--next--1cab8"},n.createElement(l.Link,{rel:"next",to:m?c:"/",className:g},o.X.NEXT_PAGE)))}},5886:function(e,t,a){"use strict";a.r(t);var n=a(7294),r=a(7919),i=a(5612),l=a(7989),o=a(9388),s=a(6631),c=a(7783);t.default=function(e){var t=e.data,a=e.pageContext,m=(0,c.$W)(),d=m.title,u=m.subtitle,g=a.pagination,f=g.currentPage,p=g.hasNextPage,P=g.hasPrevPage,v=g.prevPagePath,h=g.nextPagePath,E=t.allMarkdownRemark.edges,N=f>0?"Posts - Page "+f+" - "+d:d;return n.createElement(i.A,{title:N,description:u},n.createElement(s.Y,{isIndex:!0}),n.createElement(l.T,null,n.createElement(r.f,{edges:E}),n.createElement(o.t,{prevPagePath:v,nextPagePath:h,hasPrevPage:P,hasNextPage:p})))}}}]);
//# sourceMappingURL=component---src-templates-index-template-index-template-tsx-36c911506341de52271e.js.map