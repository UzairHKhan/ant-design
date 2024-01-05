"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[75894],{303840:function(y,f,t){Object.defineProperty(f,"__esModule",{value:!0}),f.default=void 0;const r=o(t(554434));function o(d){return d&&d.__esModule?d:{default:d}}const s=r;f.default=s,y.exports=s},798367:function(y,f,t){t.r(f),t.d(f,{scopes:function(){return p}});var r=t(667294),o=t(988872),s=t(106750),d=t(879587),m=t(75529),P=t(315816),C=t(371707),E=t(506380),x=t(963918),Z=t(945016),i=t(639389),h=t.n(i),p={"components-button-demo-basic":{React:r,Button:o.ZP,Flex:s.Z},"components-button-demo-icon":{React:r,SearchOutlined:i.SearchOutlined,Button:o.ZP,Flex:s.Z,Tooltip:d.Z},"components-button-demo-debug-icon":{React:r,SearchOutlined:i.SearchOutlined,Button:o.ZP,ConfigProvider:m.ZP,Divider:P.Z,Flex:s.Z,Radio:C.ZP,Tooltip:d.Z},"components-button-demo-debug-block":{React:r,DownloadOutlined:i.DownloadOutlined,Form:E.Z,Button:o.ZP},"components-button-demo-size":{React:r,useState:r.useState,DownloadOutlined:i.DownloadOutlined,Button:o.ZP,Divider:P.Z,Flex:s.Z,Radio:C.ZP},"components-button-demo-disabled":{React:r,Button:o.ZP,Flex:s.Z},"components-button-demo-loading":{React:r,useState:r.useState,PoweroffOutlined:i.PoweroffOutlined,Button:o.ZP,Flex:s.Z},"components-button-demo-multiple":{React:r,Button:o.ZP,Dropdown:x.Z,Flex:s.Z},"components-button-demo-ghost":{React:r,Button:o.ZP,Flex:s.Z},"components-button-demo-danger":{React:r,Button:o.ZP,Flex:s.Z},"components-button-demo-block":{React:r,Button:o.ZP,Flex:s.Z},"components-button-demo-legacy-group":{DownloadOutlined:i.DownloadOutlined,React:r,Button:o.ZP,Tooltip:d.Z},"components-button-demo-chinese-chars-loading":{React:r,PoweroffOutlined:i.PoweroffOutlined,Button:o.ZP,Flex:s.Z},"components-button-demo-component-token":{React:r,Button:o.ZP,ConfigProvider:m.ZP,Flex:s.Z},"components-button-demo-linear-gradient":{React:r,Button:o.ZP,ConfigProvider:m.ZP,Space:Z.Z}}},106750:function(y,f,t){t.d(f,{Z:function(){return q}});var r=t(97857),o=t.n(r),s=t(9783),d=t.n(s),m=t(805574),P=t.n(m),C=t(513769),E=t.n(C),x=t(667294),Z=t(693967),i=t.n(Z),h=t(518475),p=t(376148),I=t(73287),L=t(286665),j=t(986943),M=["wrap","nowrap","wrap-reverse"],B=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],F=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"],G=function(e,c){var l={};return M.forEach(function(a){l["".concat(e,"-wrap-").concat(a)]=c.wrap===a}),l},U=function(e,c){var l={};return F.forEach(function(a){l["".concat(e,"-align-").concat(a)]=c.align===a}),l["".concat(e,"-align-stretch")]=!c.align&&!!c.vertical,l},K=function(e,c){var l={};return B.forEach(function(a){l["".concat(e,"-justify-").concat(a)]=c.justify===a}),l};function N(n,e){return i()(o()(o()(o()({},G(n,e)),U(n,e)),K(n,e)))}var V=N,J=function(e){var c=e.componentCls;return d()({},c,{display:"flex","&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}})},$=function(e){var c=e.componentCls;return d()({},c,{"&-gap-small":{gap:e.flexGapSM},"&-gap-middle":{gap:e.flexGap},"&-gap-large":{gap:e.flexGapLG}})},z=function(e){var c=e.componentCls,l={};return M.forEach(function(a){l["".concat(c,"-wrap-").concat(a)]={flexWrap:a}}),l},X=function(e){var c=e.componentCls,l={};return F.forEach(function(a){l["".concat(c,"-align-").concat(a)]={alignItems:a}}),l},H=function(e){var c=e.componentCls,l={};return B.forEach(function(a){l["".concat(c,"-justify-").concat(a)]={justifyContent:a}}),l},Q=function(){return{}},Y=(0,L.I$)("Flex",function(n){var e=n.paddingXS,c=n.padding,l=n.paddingLG,a=(0,j.TS)(n,{flexGapSM:e,flexGap:c,flexGapLG:l});return[J(a),$(a),z(a),X(a),H(a)]},Q,{resetStyle:!1}),b=t(785893),w=["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"],k=x.forwardRef(function(n,e){var c=n.prefixCls,l=n.rootClassName,a=n.className,_=n.style,T=n.flex,g=n.gap,tt=n.children,W=n.vertical,O=W===void 0?!1:W,A=n.component,nt=A===void 0?"div":A,et=E()(n,w),S=x.useContext(I.E_),u=S.flex,ot=S.direction,at=S.getPrefixCls,v=at("flex",c),lt=Y(v),D=P()(lt,3),rt=D[0],ct=D[1],st=D[2],dt=O!=null?O:u==null?void 0:u.vertical,it=i()(a,l,u==null?void 0:u.className,v,ct,st,V(v,n),d()(d()(d()({},"".concat(v,"-rtl"),ot==="rtl"),"".concat(v,"-gap-").concat(g),(0,p.n)(g)),"".concat(v,"-vertical"),dt)),R=o()(o()({},u==null?void 0:u.style),_);return T&&(R.flex=T),g&&!(0,p.n)(g)&&(R.gap=g),rt((0,b.jsx)(nt,o()(o()({ref:e,className:it,style:R},(0,h.default)(et,["justify","wrap","align"])),{},{children:tt})))}),q=k}}]);
