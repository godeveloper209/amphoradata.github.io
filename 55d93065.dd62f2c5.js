(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{168:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(9),o=(a(0),a(213)),i={id:"python-pandasdf",title:"Converting Amphora Signals to a Pandas DataFrame",sidebar_label:"Get Pandas DataFrame"},c={id:"python-pandasdf",title:"Converting Amphora Signals to a Pandas DataFrame",description:"## Pandas Data Frame",source:"@site/docs/python-pandasdf.md",permalink:"/docs/python-pandasdf",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/python-pandasdf.md",sidebar_label:"Get Pandas DataFrame",sidebar:"someSidebar",previous:{title:"Download a file with Python",permalink:"/docs/python-download-file"},next:{title:"Request new data or Amphora",permalink:"/docs/request-data"}},s=[{value:"Pandas Data Frame",id:"pandas-data-frame",children:[]},{value:"Import the required modules",id:"import-the-required-modules",children:[]},{value:"Convert Signals to a Pandas DataFrame",id:"convert-signals-to-a-pandas-dataframe",children:[]},{value:"Query specific times",id:"query-specific-times",children:[]},{value:"Other tips and tricks",id:"other-tips-and-tricks",children:[]},{value:"Other code to get you started",id:"other-code-to-get-you-started",children:[]}],l={rightToc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"pandas-data-frame"},"Pandas Data Frame"),Object(o.b)("p",null,"Pandas is a very popular Python package for working with data. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.html"}),"Pandas Data Frames")," form the core of Pandas. Many data scientists love working with Data Frames, and many tools can import from this standard."),Object(o.b)("h2",{id:"import-the-required-modules"},"Import the required modules"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"amphoradata")," package does not come with pandas or numpy. You ",Object(o.b)("em",{parentName:"p"},"must")," install them yourself to use this module."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"pip install numpy\npip install pandas\n")),Object(o.b)("h2",{id:"convert-signals-to-a-pandas-dataframe"},"Convert Signals to a Pandas DataFrame"),Object(o.b)("p",null,"You can convert signals to Dataframes very easily. First get the signal from the Amphora you want."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'client = AmphoraDataRepositoryClient(credentials)\n\n# get a reference to an Amphora\namphora = client.get_amphora("e6097df0-952c-46a6-84b0-ccc29bf1b0f7")\n\n# get a reference to the Amphora\'s signals\nsignals = amphora.get_signals()\n')),Object(o.b)("p",null,"We can now convert this entire signal to a dataframe"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"# download some signals and convert to a pandas dataframe\ndf = signals.pull().to_pandas()\nprint(df)\n\n#                            temperature  rainProb  windSpeed  windDirection  cloudCover  pressure  rainfallRate\n# t                                                                                                             \n# 2020-03-26 02:00:00+00:00         24.0       5.0       11.0          135.0        13.0    1024.6           0.0\n# 2020-03-26 03:00:00+00:00         25.0       5.0       10.0          135.0        10.0    1023.9           0.0\n# 2020-03-26 04:00:00+00:00         26.0       5.0        9.0          135.0        11.0    1023.2           0.0\n# 2020-03-26 05:00:00+00:00         27.0       5.0        9.0          158.0        11.0    1022.6           0.0\n# 2020-03-26 06:00:00+00:00         27.0       7.0        8.0          203.0        10.0    1022.0           0.0\n# ...                                ...       ...        ...            ...         ...       ...           ...\n# 2020-03-26 11:00:00+00:00         18.0       6.0        5.0           90.0        41.0    1023.7           0.0\n# 2020-03-26 12:00:00+00:00         17.0       7.0        4.0           90.0        19.0    1023.9           0.0\n# 2020-03-26 13:00:00+00:00         16.0       6.0        5.0           68.0        20.0    1024.0           0.0\n# 2020-03-26 14:00:00+00:00         15.0       7.0        4.0           68.0        16.0    1024.2           0.0\n# 2020-03-26 15:00:00+00:00         14.0       7.0        4.0           68.0        16.0    1024.1           0.0\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The Event Count will always contain NaN values.")),Object(o.b)("h2",{id:"query-specific-times"},"Query specific times"),Object(o.b)("p",null,"Sometimes you will only want data from a specific interval. This is very easy to do. First set your desired time range"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"time_range = DateTimeRange(_from=start_time, to=end_time)\n")),Object(o.b)("p",null,"Note that you will need to import another model"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"from amphora_api_client import DateTimeRange\n")),Object(o.b)("p",null,"Now simply add that time range into the pull signal command"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"df = signals.pull(date_time_range=time_range).to_pandas()\n")),Object(o.b)("h2",{id:"other-tips-and-tricks"},"Other tips and tricks"),Object(o.b)("p",null,"Sometimes the time column will counterintuitively not be titled ",Object(o.b)("inlineCode",{parentName:"p"},"t"),". This is because ",Object(o.b)("inlineCode",{parentName:"p"},"t")," is treated as an index. You can solve this by passing an option into the `",Object(o.b)("inlineCode",{parentName:"p"},"to_pandas")," as"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"df = signals.pull().to_pandas(t_as_index=False)\n")),Object(o.b)("p",null,"This also works if you want to query specific times."),Object(o.b)("h2",{id:"other-code-to-get-you-started"},"Other code to get you started"),Object(o.b)("p",null,"You can get code to get you started ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/amphoradata/samples/blob/master/generic_templates/Pull_a_file.py"}),"here")," "))}p.isMDXComponent=!0},213:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return a?r.a.createElement(b,c({ref:t},l,{components:a})):r.a.createElement(b,c({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);