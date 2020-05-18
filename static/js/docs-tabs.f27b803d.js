(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"./src/docs/tabs.mdx":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return r}));var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),b=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),c=a("./node_modules/react/index.js"),o=a("./node_modules/@mdx-js/react/dist/esm.js"),s=a("./node_modules/docz/dist/index.esm.js"),d=a("./src/index.js"),T={};function r(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(o.b)("wrapper",Object.assign({},T,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"tabs"},"Tabs"),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)(s.d,{of:d.E,mdxType:"Props"}),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("h3",{id:"simple-tabs"},"Simple Tabs"),Object(o.b)(s.c,{__position:1,__code:'() => {\n  const [activeTabIndex, setActiveTabIndex] = useState(0)\n  return (\n    <Fragment>\n      <Tabs onSelectTab={setActiveTabIndex} activeTabIndex={activeTabIndex}>\n        <Tab label="tab 1" />\n        <Tab label="tab 2" />\n        <Tab label="tab 3" />\n      </Tabs>\n    </Fragment>\n  )\n}',__scope:{props:this?this.props:a,useState:c.useState,Fragment:c.Fragment,Playground:s.c,Props:s.d,Tabs:d.E,Tab:d.C},__codesandbox:"undefined",mdxType:"Playground"},(function(){var e=Object(c.useState)(0),t=Object(n.a)(e,2),a=t[0],b=t[1];return Object(o.b)(c.Fragment,{mdxType:"Fragment"},Object(o.b)(d.E,{onSelectTab:b,activeTabIndex:a,mdxType:"Tabs"},Object(o.b)(d.C,{label:"tab 1",mdxType:"Tab"}),Object(o.b)(d.C,{label:"tab 2",mdxType:"Tab"}),Object(o.b)(d.C,{label:"tab 3",mdxType:"Tab"})))})),Object(o.b)("h3",{id:"vertical-tabs"},"Vertical Tabs"),Object(o.b)(s.c,{__position:2,__code:'() => {\n  const [activeTabIndex, setActiveTabIndex] = useState(0)\n  return (\n    <Fragment>\n      <Tabs\n        mode="vertical"\n        onSelectTab={setActiveTabIndex}\n        activeTabIndex={activeTabIndex}\n      >\n        <Tab label="What is Politeia?" />\n        <Tab label="Proposals?" />\n        <Tab label="Censorship" />\n      </Tabs>\n    </Fragment>\n  )\n}',__scope:{props:this?this.props:a,useState:c.useState,Fragment:c.Fragment,Playground:s.c,Props:s.d,Tabs:d.E,Tab:d.C},__codesandbox:"undefined",mdxType:"Playground"},(function(){var e=Object(c.useState)(0),t=Object(n.a)(e,2),a=t[0],b=t[1];return Object(o.b)(c.Fragment,{mdxType:"Fragment"},Object(o.b)(d.E,{mode:"vertical",onSelectTab:b,activeTabIndex:a,mdxType:"Tabs"},Object(o.b)(d.C,{label:"What is Politeia?",mdxType:"Tab"}),Object(o.b)(d.C,{label:"Proposals?",mdxType:"Tab"}),Object(o.b)(d.C,{label:"Censorship",mdxType:"Tab"})))})),Object(o.b)("h3",{id:"tabs-with-counting"},"Tabs with counting"),Object(o.b)(s.c,{__position:3,__code:'() => {\n  const [activeTabIndex, setActiveTabIndex] = useState(0)\n  return (\n    <Fragment>\n      <Tabs onSelectTab={setActiveTabIndex} activeTabIndex={activeTabIndex}>\n        <Tab label="tab 1" count={1} />\n        <Tab label="tab 2" count={4} />\n      </Tabs>\n    </Fragment>\n  )\n}',__scope:{props:this?this.props:a,useState:c.useState,Fragment:c.Fragment,Playground:s.c,Props:s.d,Tabs:d.E,Tab:d.C},__codesandbox:"undefined",mdxType:"Playground"},(function(){var e=Object(c.useState)(0),t=Object(n.a)(e,2),a=t[0],b=t[1];return Object(o.b)(c.Fragment,{mdxType:"Fragment"},Object(o.b)(d.E,{onSelectTab:b,activeTabIndex:a,mdxType:"Tabs"},Object(o.b)(d.C,{label:"tab 1",count:1,mdxType:"Tab"}),Object(o.b)(d.C,{label:"tab 2",count:4,mdxType:"Tab"})))})),Object(o.b)("h3",{id:"tabs-with-content"},"Tabs with content"),Object(o.b)(s.c,{__position:4,__code:'() => {\n  const [activeTabIndex, setActiveTabIndex] = useState(0)\n  return (\n    <Fragment>\n      <Tabs onSelectTab={setActiveTabIndex} activeTabIndex={activeTabIndex}>\n        <Tab label="tab 1" count={1}>\n          <div>tab content 1</div>\n        </Tab>\n        <Tab label="tab 2" count={4}>\n          <div>tab content 2</div>\n        </Tab>\n      </Tabs>\n    </Fragment>\n  )\n}',__scope:{props:this?this.props:a,useState:c.useState,Fragment:c.Fragment,Playground:s.c,Props:s.d,Tabs:d.E,Tab:d.C},__codesandbox:"undefined",mdxType:"Playground"},(function(){var e=Object(c.useState)(0),t=Object(n.a)(e,2),a=t[0],b=t[1];return Object(o.b)(c.Fragment,{mdxType:"Fragment"},Object(o.b)(d.E,{onSelectTab:b,activeTabIndex:a,mdxType:"Tabs"},Object(o.b)(d.C,{label:"tab 1",count:1,mdxType:"Tab"},Object(o.b)("div",null,"tab content 1")),Object(o.b)(d.C,{label:"tab 2",count:4,mdxType:"Tab"},Object(o.b)("div",null,"tab content 2"))))})),Object(o.b)("h3",{id:"tabs-in-dropwdown-mode"},"Tabs in dropwdown mode"),Object(o.b)(s.c,{__position:5,__code:'() => {\n  const [activeTabIndex, setActiveTabIndex] = useState(0)\n  return (\n    <Fragment>\n      <Tabs\n        onSelectTab={setActiveTabIndex}\n        activeTabIndex={activeTabIndex}\n        mode="dropdown"\n      >\n        <Tab label="All Proposals" count={4} />\n        <Tab label="In discussion" count={2} />\n        <Tab label="Voting" count={5} />\n        <Tab label="Approved" count={25} />\n        <Tab label="Rejected" count={30} />\n        <Tab label="Abandoned" count={5} />\n      </Tabs>\n    </Fragment>\n  )\n}',__scope:{props:this?this.props:a,useState:c.useState,Fragment:c.Fragment,Playground:s.c,Props:s.d,Tabs:d.E,Tab:d.C},__codesandbox:"undefined",mdxType:"Playground"},(function(){var e=Object(c.useState)(0),t=Object(n.a)(e,2),a=t[0],b=t[1];return Object(o.b)(c.Fragment,{mdxType:"Fragment"},Object(o.b)(d.E,{onSelectTab:b,activeTabIndex:a,mode:"dropdown",mdxType:"Tabs"},Object(o.b)(d.C,{label:"All Proposals",count:4,mdxType:"Tab"}),Object(o.b)(d.C,{label:"In discussion",count:2,mdxType:"Tab"}),Object(o.b)(d.C,{label:"Voting",count:5,mdxType:"Tab"}),Object(o.b)(d.C,{label:"Approved",count:25,mdxType:"Tab"}),Object(o.b)(d.C,{label:"Rejected",count:30,mdxType:"Tab"}),Object(o.b)(d.C,{label:"Abandoned",count:5,mdxType:"Tab"})))})))}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/tabs.mdx"}}),r.isMDXComponent=!0}}]);
//# sourceMappingURL=docs-tabs.c9ef2991bc7b80a33d04.js.map