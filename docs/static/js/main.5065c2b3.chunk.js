(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(82)},82:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(15),s=n.n(o),i=n(16),d=n(17),l=n(19),c=n(18),u=n(20),m=function(e){return a.a.createElement("div",{className:"Editor-Container"},a.a.createElement("h2",{className:"editor-title"},"MarkDown Previewer"),a.a.createElement("textarea",{id:"editor",className:"Editor",value:e.markdown,onChange:e.captureMarkdown}))},w=function(e){return a.a.createElement("div",{className:"Preview-Container"},a.a.createElement("div",{id:"preview",className:"Preview",dangerouslySetInnerHTML:{__html:e.renderedHtml}}))},h="\n# Hi!\n\n## Welcome to my React previewer\n\t\t\nHeres some code, `<div></div>`, between 2 backticks.\n\t\t\n```\n// this is multi-line code:\n\t\t\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n\treturn multiLineCode;\n  }\n}\n```\n\t\t\nYou can also make text **bold**\nOr _italic_.\nOr **_both!_**\nAnd  ~~cross stuff out~~ if you want to.\n\t\t\nThere's also [links](https://codepen.io/bmansk14/), and\n> Block Quotes\n\t\t\n- And of course there are lists.\n  - Some are bulleted.\n\t - With different indentation levels.\n\t\t- That look like this.\n\t\t\n\t\t\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\t\t\n![React Logo w/ Text](https://goo.gl/Umyytc)\n\t\t\n",k=n(26)({breaks:!0}),f=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(a)))).state={markdown:h,renderedHtml:k.render(h)},n.grabMarkdown=function(e){n.setState({markdown:e.target.value},n.renderMarkdown(e.target.value))},n.renderMarkdown=function(e){var t=k.render(e);n.setState({renderedHtml:t})},n}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(m,{markdown:this.state.markdown,captureMarkdown:this.grabMarkdown,clearText:this.clearText}),a.a.createElement(w,{renderedHtml:this.state.renderedHtml}))}}]),t}(a.a.Component),v=document.getElementById("root");s.a.render(a.a.createElement(f,null),v)}},[[21,1,2]]]);
//# sourceMappingURL=main.5065c2b3.chunk.js.map