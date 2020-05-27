(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{202:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(0),n(214)),c={id:"python-find-data",title:"Find Data with python SDK",sidebar_label:"Find Data"},i={id:"python-find-data",title:"Find Data with python SDK",description:"You need to search the Amphora Data Catalogue to find the data you want. You need to purchase the Amphora after you find the one you want.",source:"@site/docs/python-find-data.md",permalink:"/docs/python-find-data",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/python-find-data.md",sidebar_label:"Find Data",sidebar:"someSidebar",previous:{title:"Change your organisation plan",permalink:"/docs/change_plan"},next:{title:"Creating an Amphora with Python",permalink:"/docs/python-create-amphora"}},l=[],p={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You need to search the Amphora Data Catalogue to find the data you want. You need to purchase the Amphora after you find the one you want."),Object(o.b)("p",null,"You can search for Amphora with the python SDK (v0.10+). The command is"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"search_for_amphorae\n")),Object(o.b)("p",null,"You can search for Amphora by labels, location, or a term. "),Object(o.b)("p",null,"Full code for searching is below"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"credentials = Credentials(username=your_username, password=your_password)\nclient = AmphoraDataRepositoryClient(credentials)\n\n# Search by location\namphora_list = client.search_for_amphorae(lat = -28.641, lon = 153.445, dist = 50)\n\n# Search by labels\namphora_list = client.search_for_amphorae(labels = 'forecast')\n\n# Search by term\namphora_list = client.search_for_amphorae(term = 'rainfall')\n\n")),Object(o.b)("p",null,"The search return is Boolean OR so it returns Amphora that match to your label search OR location search OR term search. We will expand this functionality in the future."))}u.isMDXComponent=!0},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,f=s["".concat(c,".").concat(d)]||s[d]||h[d]||o;return n?a.a.createElement(f,i({ref:t},p,{components:n})):a.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);