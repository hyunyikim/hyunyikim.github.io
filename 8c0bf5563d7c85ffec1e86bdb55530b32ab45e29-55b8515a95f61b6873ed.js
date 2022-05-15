"use strict";(self.webpackChunkgatsby_starter_lumen=self.webpackChunkgatsby_starter_lumen||[]).push([[247],{9230:function(e,t,a){a.d(t,{G:function(){return T},L:function(){return g},M:function(){return w},P:function(){return b},_:function(){return s},a:function(){return o},b:function(){return c},g:function(){return u},h:function(){return l}});var r=a(7294),n=(a(2369),a(5697)),i=a.n(n);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,a,r,n){return void 0===n&&(n={}),o({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,i,s,l){var c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);var u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}var d,m=["children"],p=function(e){var t=e.layout,a=e.width,n=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){var t=e.children,a=s(e,m);return r.createElement(r.Fragment,null,r.createElement(p,o({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],v=function(e){var t=e.src,a=e.srcSet,n=e.loading,i=e.alt,l=void 0===i?"":i,c=e.shouldLoad,u=s(e,h);return r.createElement("img",o({},u,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:l}))},y=function(e){var t=e.fallback,a=e.sources,n=void 0===a?[]:a,i=e.shouldLoad,l=void 0===i||i,c=s(e,f),u=c.sizes||(null==t?void 0:t.sizes),d=r.createElement(v,o({},c,t,{sizes:u,shouldLoad:l}));return n.length?r.createElement("picture",null,n.map((function(e){var t=e.media,a=e.srcSet,n=e.type;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,sizes:u})})),d):d};v.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var E=["fallback"],b=function(e){var t=e.fallback,a=s(e,E);return t?r.createElement(y,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",o({},a))};b.displayName="Placeholder",b.propTypes={fallback:n.string,sources:null==(d=y.propTypes)?void 0:d.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var w=function(e){return r.createElement(r.Fragment,null,r.createElement(y,o({},e)),r.createElement("noscript",null,r.createElement(y,o({},e,{shouldLoad:!0}))))};w.displayName="MainImage",w.propTypes=y.propTypes;var C,L,k=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),o=3;o<r;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},N={image:i().object.isRequired,alt:k},x=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],S=["style","className"],I=new Set,O=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,c=e.style,u=e.backgroundColor,d=e.className,m=e.class,p=e.onStartLoad,g=e.onLoad,h=e.onError,f=s(e,x),v=i.width,y=i.height,E=i.layout,b=function(e,t,a){var r={},n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(v,y,E),w=b.style,k=b.className,N=s(b,S),O=(0,r.useRef)(),T=(0,r.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);m&&(d=m);var A=function(e,t,a){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(E,v,y);return(0,r.useEffect)((function(){C||(C=Promise.all([a.e(774),a.e(36)]).then(a.bind(a,9036)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return L=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,r=O.current.querySelector("[data-gatsby-image-ssr]");return r&&l()?(r.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)})),void I.add(T)):L&&I.has(T)?void 0:(C.then((function(a){var r=a.renderImageToString,n=a.swapPlaceholderImage;O.current.innerHTML=r(o({isLoading:!0,isLoaded:I.has(T),image:i},f)),I.has(T)||(e=requestAnimationFrame((function(){O.current&&(t=n(O.current,T,I,c,p,g,h))})))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,r.useLayoutEffect)((function(){I.has(T)&&L&&(O.current.innerHTML=L(o({isLoading:I.has(T),isLoaded:I.has(T),image:i},f)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[i]),(0,r.createElement)(n,o({},N,{style:o({},w,c,{backgroundColor:u}),className:k+(d?" "+d:""),ref:O,dangerouslySetInnerHTML:{__html:A},suppressHydrationWarning:!0}))},T=(0,r.memo)((function(e){return e.image?(0,r.createElement)(O,e):null}));T.propTypes=N,T.displayName="GatsbyImage";var A,q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],_=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},M=new Set(["fixed","fullWidth","constrained"]),R={src:i().string.isRequired,alt:k,width:_,height:_,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!M.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},j=(A=T,function(e){var t=e.src,a=e.__imageData,n=e.__error,i=s(e,q);return n&&console.warn(n),a?r.createElement(A,o({image:a},i)):(console.warn("Image not loaded",t),null)});j.displayName="StaticImage",j.propTypes=R},2369:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,r=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},2391:function(e,t,a){a.d(t,{T:function(){return n}});var r=a(7294),n=function(e){var t=e.title,a=e.children,n=(0,r.useRef)(null);return(0,r.useEffect)((function(){n.current&&n.current.scrollIntoView()}),[]),r.createElement("div",{ref:n,className:"Page-module--page--JOA3M"},r.createElement("div",{className:"Page-module--inner--SzHbJ"},t&&r.createElement("h1",{className:"Page-module--title--kDOIG"},t),r.createElement("div",{className:"Page-module--body--VhxOl"},a)))}},3099:function(e,t,a){a.d(t,{Y:function(){return v}});var r=a(7294),n=a(1900),i=a(1597);var o=a(9230),s=["path"],l=function(e){var t=e.path,a=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,s);return r.createElement(i.StaticQuery,{query:"63107425",render:function(e){var n=e.images,i=(n=void 0===n?{}:n).edges,s=(void 0===i?[]:i).find((function(e){return e.node.absolutePath.includes(t)}));if(!s)return null;var l=s.node.childImageSharp;return r.createElement(o.G,Object.assign({},a,{image:l.gatsbyImageData}))}})},c="Author-module--link--CcF2i",u="Author-module--title--z35RG",d=function(e){var t=e.author,a=e.isIndex;return r.createElement("div",{className:"Author-module--author--y9MUW"},r.createElement(i.Link,{to:"/"},r.createElement(l,{alt:t.name,path:t.photo,className:"Author-module--photo--l4ewo"})),a?r.createElement("h1",{className:u},r.createElement(i.Link,{className:c,to:"/"},t.name)):r.createElement("h2",{className:u},r.createElement(i.Link,{className:c,to:"/"},t.name)),r.createElement("p",{className:"Author-module--subtitle--huxcU"},t.bio))},m=function(e){var t=e.name,a=e.icon;return r.createElement("svg",{className:"Icon-module--icon--HX2j3",viewBox:a.viewBox},r.createElement("title",null,t),r.createElement("path",{d:a.path}))},p=a(7185),g=function(e){var t=e.contacts;return r.createElement("div",{className:"Contacts-module--contacts--CReI-"},r.createElement("ul",{className:"Contacts-module--list--lnC5q"},Object.keys(t).map((function(e){return t[e]?r.createElement("li",{className:"Contacts-module--item--+csDa",key:e},r.createElement("a",{className:"Contacts-module--link--3h4H4",href:(0,p.KA)(e,t[e]),rel:"noopener noreferrer",target:"_blank"},r.createElement(m,{name:e,icon:(0,p.q7)(e)}))):null}))))},h=function(e){var t=e.copyright;return r.createElement("div",{className:"Copyright-module--copyright--LGAkk"},t)},f=function(e){var t=e.menu;return r.createElement("nav",{className:"Menu-module--menu--ETqdK"},r.createElement("ul",{className:"Menu-module--list--4a49Z"},t.map((function(e){return r.createElement("li",{className:"Menu-module--item--i2edw",key:e.path},r.createElement(i.Link,{to:e.path,className:"Menu-module--link--pvAqj",activeClassName:"Menu-module--active--bLdMz"},e.label))}))))},v=function(e){var t=e.isIndex,a=(0,n.$W)(),i=a.author,o=a.copyright,s=a.menu;return r.createElement("div",{className:"Sidebar-module--sidebar--G-oUa"},r.createElement("div",{className:"Sidebar-module--inner--NE0Oo"},r.createElement(d,{author:i,isIndex:t}),r.createElement(f,{menu:s}),r.createElement(g,{contacts:i.contacts}),r.createElement(h,{copyright:o})))}}}]);
//# sourceMappingURL=8c0bf5563d7c85ffec1e86bdb55530b32ab45e29-55b8515a95f61b6873ed.js.map