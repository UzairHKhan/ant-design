"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[9311,15431],{415431:function(Rt,U,d){d.d(U,{Z:function(){return jt}});var J=d(9783),o=d.n(J),K=d(805574),T=d.n(K),Q=d(97857),a=d.n(Q),Y=d(513769),G=d.n(Y),C=d(667294),q=d(693967),w=d.n(q),X=d(325669),k=d(73287),_=d(947170),tt=d(156951),et={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1},nt=et,ot=C.createContext({}),$=ot,at=d(45598),lt=["span"],ct=function(t){return(0,at.default)(t).map(function(e){return a()(a()({},e==null?void 0:e.props),{},{key:e.key})})};function rt(s,t,e){var n=C.useMemo(function(){return t||ct(e)},[t,e]),r=C.useMemo(function(){return n.map(function(c){var l=c.span,m=G()(c,lt);return a()(a()({},m),{},{span:typeof l=="number"?l:(0,X.m9)(s,l)})})},[n,s]);return r}function V(s,t,e){var n=s,r=!1;return(e===void 0||e>t)&&(n=a()(a()({},s),{},{span:t}),r=e!==void 0),[n,r]}function it(s,t){var e=[],n=[],r=t,c=!1;return s.filter(function(l){return l}).forEach(function(l,m){var x=l==null?void 0:l.span,S=x||1;if(m===s.length-1){var f=V(l,r,x),v=T()(f,2),u=v[0],g=v[1];c=c||g,n.push(u),e.push(n);return}if(S<r)r-=S,n.push(l);else{var P=V(l,r,S),p=T()(P,2),j=p[0],N=p[1];c=c||N,n.push(j),e.push(n),r=t,n=[]}}),[e,c]}var st=function(t,e){var n=(0,C.useMemo)(function(){return it(e,t)},[e,t]),r=T()(n,2),c=r[0],l=r[1];if(!1)var m;return c},dt=st,mt=function(t){var e=t.children;return e},ut=mt,i=d(785893);function R(s){return s!=null}var vt=function(t){var e=t.itemPrefixCls,n=t.component,r=t.span,c=t.className,l=t.style,m=t.labelStyle,x=t.contentStyle,S=t.bordered,f=t.label,v=t.content,u=t.colon,g=n;return S?(0,i.jsxs)(g,{className:w()(o()(o()({},"".concat(e,"-item-label"),R(f)),"".concat(e,"-item-content"),R(v)),c),style:l,colSpan:r,children:[R(f)&&(0,i.jsx)("span",{style:m,children:f}),R(v)&&(0,i.jsx)("span",{style:x,children:v})]}):(0,i.jsx)(g,{className:w()("".concat(e,"-item"),c),style:l,colSpan:r,children:(0,i.jsxs)("div",{className:"".concat(e,"-item-container"),children:[(f||f===0)&&(0,i.jsx)("span",{className:w()("".concat(e,"-item-label"),o()({},"".concat(e,"-item-no-colon"),!u)),style:m,children:f}),(v||v===0)&&(0,i.jsx)("span",{className:w()("".concat(e,"-item-content")),style:x,children:v})]})})},W=vt;function A(s,t,e){var n=t.colon,r=t.prefixCls,c=t.bordered,l=e.component,m=e.type,x=e.showLabel,S=e.showContent,f=e.labelStyle,v=e.contentStyle;return s.map(function(u,g){var P=u.label,p=u.children,j=u.prefixCls,N=j===void 0?r:j,L=u.className,M=u.style,I=u.labelStyle,D=u.contentStyle,b=u.span,y=b===void 0?1:b,B=u.key;return typeof l=="string"?(0,i.jsx)(W,{className:L,style:M,labelStyle:a()(a()({},f),I),contentStyle:a()(a()({},v),D),span:y,colon:n,component:l,itemPrefixCls:N,bordered:c,label:x?P:null,content:S?p:null},"".concat(m,"-").concat(B||g)):[(0,i.jsx)(W,{className:L,style:a()(a()(a()({},f),M),I),span:1,colon:n,component:l[0],itemPrefixCls:N,bordered:c,label:P},"label-".concat(B||g)),(0,i.jsx)(W,{className:L,style:a()(a()(a()({},v),M),D),span:y*2-1,component:l[1],itemPrefixCls:N,bordered:c,content:p},"content-".concat(B||g))]})}var ft=function(t){var e=C.useContext($),n=t.prefixCls,r=t.vertical,c=t.row,l=t.index,m=t.bordered;return r?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("tr",{className:"".concat(n,"-row"),children:A(c,t,a()({component:"th",type:"label",showLabel:!0},e))},"label-".concat(l)),(0,i.jsx)("tr",{className:"".concat(n,"-row"),children:A(c,t,a()({component:"td",type:"content",showContent:!0},e))},"content-".concat(l))]}):(0,i.jsx)("tr",{className:"".concat(n,"-row"),children:A(c,t,a()({component:m?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},e))},l)},yt=ft,h=d(900210),Z=d(548073),xt=d(286665),ht=d(986943),gt=function(t){var e=t.componentCls,n=t.labelBg;return o()({},"&".concat(e,"-bordered"),o()(o()(o()({},"> ".concat(e,"-view"),o()({border:"".concat((0,h.unit)(t.lineWidth)," ").concat(t.lineType," ").concat(t.colorSplit),"> table":{tableLayout:"auto",borderCollapse:"collapse"}},"".concat(e,"-row"),o()(o()({borderBottom:"".concat((0,h.unit)(t.lineWidth)," ").concat(t.lineType," ").concat(t.colorSplit),"&:last-child":{borderBottom:"none"}},"> ".concat(e,"-item-label, > ").concat(e,"-item-content"),{padding:"".concat((0,h.unit)(t.padding)," ").concat((0,h.unit)(t.paddingLG)),borderInlineEnd:"".concat((0,h.unit)(t.lineWidth)," ").concat(t.lineType," ").concat(t.colorSplit),"&:last-child":{borderInlineEnd:"none"}}),"> ".concat(e,"-item-label"),{color:t.colorTextSecondary,backgroundColor:n,"&::after":{display:"none"}}))),"&".concat(e,"-middle"),o()({},"".concat(e,"-row"),o()({},"> ".concat(e,"-item-label, > ").concat(e,"-item-content"),{padding:"".concat((0,h.unit)(t.paddingSM)," ").concat((0,h.unit)(t.paddingLG))}))),"&".concat(e,"-small"),o()({},"".concat(e,"-row"),o()({},"> ".concat(e,"-item-label, > ").concat(e,"-item-content"),{padding:"".concat((0,h.unit)(t.paddingXS)," ").concat((0,h.unit)(t.padding))}))))},St=function(t){var e,n=t.componentCls,r=t.extraColor,c=t.itemPaddingBottom,l=t.colonMarginRight,m=t.colonMarginLeft,x=t.titleMarginBottom;return o()({},n,a()(a()(a()({},(0,Z.Wf)(t)),gt(t)),{},(e={},o()(o()(o()(o()(o()(o()(o()(o()(o()(o()(e,"&-rtl",{direction:"rtl"}),"".concat(n,"-header"),{display:"flex",alignItems:"center",marginBottom:x}),"".concat(n,"-title"),a()(a()({},Z.vS),{},{flex:"auto",color:t.titleColor,fontWeight:t.fontWeightStrong,fontSize:t.fontSizeLG,lineHeight:t.lineHeightLG})),"".concat(n,"-extra"),{marginInlineStart:"auto",color:r,fontSize:t.fontSize}),"".concat(n,"-view"),{width:"100%",borderRadius:t.borderRadiusLG,table:{width:"100%",tableLayout:"fixed"}}),"".concat(n,"-row"),{"> th, > td":{paddingBottom:c},"&:last-child":{borderBottom:"none"}}),"".concat(n,"-item-label"),o()({color:t.colorTextTertiary,fontWeight:"normal",fontSize:t.fontSize,lineHeight:t.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:"".concat((0,h.unit)(m)," ").concat((0,h.unit)(l))}},"&".concat(n,"-item-no-colon::after"),{content:'""'})),"".concat(n,"-item-no-label"),{"&::after":{margin:0,content:'""'}}),"".concat(n,"-item-content"),{display:"table-cell",flex:1,color:t.contentColor,fontSize:t.fontSize,lineHeight:t.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"}),"".concat(n,"-item"),{paddingBottom:0,verticalAlign:"top","&-container":o()(o()({display:"flex"},"".concat(n,"-item-label"),{display:"inline-flex",alignItems:"baseline"}),"".concat(n,"-item-content"),{display:"inline-flex",alignItems:"baseline"})}),o()(o()(e,"&-middle",o()({},"".concat(n,"-row"),{"> th, > td":{paddingBottom:t.paddingSM}})),"&-small",o()({},"".concat(n,"-row"),{"> th, > td":{paddingBottom:t.paddingXS}})))))},bt=function(t){return{labelBg:t.colorFillAlter,titleColor:t.colorText,titleMarginBottom:t.fontSizeSM*t.lineHeightSM,itemPaddingBottom:t.padding,colonMarginRight:t.marginXS,colonMarginLeft:t.marginXXS/2,contentColor:t.colorText,extraColor:t.colorText}},Ct=(0,xt.I$)("Descriptions",function(s){var t=(0,ht.TS)(s,{});return St(t)},bt),pt=["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle","items"],F=function(t){var e=t.prefixCls,n=t.title,r=t.extra,c=t.column,l=t.colon,m=l===void 0?!0:l,x=t.bordered,S=t.layout,f=t.children,v=t.className,u=t.rootClassName,g=t.style,P=t.size,p=t.labelStyle,j=t.contentStyle,N=t.items,L=G()(t,pt),M=C.useContext(k.E_),I=M.getPrefixCls,D=M.direction,b=M.descriptions,y=I("descriptions",e),B=(0,tt.Z)(),Nt=C.useMemo(function(){var z;return typeof c=="number"?c:(z=(0,X.m9)(B,a()(a()({},nt),c)))!==null&&z!==void 0?z:3},[B,c]),Mt=rt(B,N,f),H=(0,_.Z)(P),Bt=dt(Nt,Mt),Pt=Ct(y),E=T()(Pt,3),wt=E[0],Lt=E[1],zt=E[2],Tt=C.useMemo(function(){return{labelStyle:p,contentStyle:j}},[p,j]);return wt((0,i.jsx)($.Provider,{value:Tt,children:(0,i.jsxs)("div",a()(a()({className:w()(y,b==null?void 0:b.className,o()(o()(o()({},"".concat(y,"-").concat(H),H&&H!=="default"),"".concat(y,"-bordered"),!!x),"".concat(y,"-rtl"),D==="rtl"),v,u,Lt,zt),style:a()(a()({},b==null?void 0:b.style),g)},L),{},{children:[(n||r)&&(0,i.jsxs)("div",{className:"".concat(y,"-header"),children:[n&&(0,i.jsx)("div",{className:"".concat(y,"-title"),children:n}),r&&(0,i.jsx)("div",{className:"".concat(y,"-extra"),children:r})]}),(0,i.jsx)("div",{className:"".concat(y,"-view"),children:(0,i.jsx)("table",{children:(0,i.jsx)("tbody",{children:Bt.map(function(z,O){return(0,i.jsx)(yt,{index:O,colon:m,prefixCls:y,vertical:S==="vertical",bordered:x,row:z},O)})})})})]}))}))};F.Item=ut;var jt=F}}]);
