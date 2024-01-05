"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[69901],{169901:function(de,U,e){e.r(U),e.d(U,{scopes:function(){return F}});var g=e(667294),i=e(432210),R=e(212173),r=e(945016),A=e(988872),p=e(965516),s=e(811834),X=e(344682),I=e(639389),w=e.n(I),F={"qr-code-demo-base":{React:g,Input:i.Z,QRCode:R.Z,Space:r.Z},"qr-code-demo-icon":{React:g,QRCode:R.Z},"qr-code-demo-status":{React:g,QRCode:R.Z,Space:r.Z},"qr-code-demo-type":{React:g,QRCode:R.Z,Space:r.Z},"qr-code-demo-customsize":{React:g,useState:g.useState,MinusOutlined:I.MinusOutlined,PlusOutlined:I.PlusOutlined,QRCode:R.Z,Button:A.ZP},"qr-code-demo-customcolor":{React:g,QRCode:R.Z,Space:r.Z,theme:p.Z},"qr-code-demo-download":{React:g,Button:A.ZP,QRCode:R.Z},"qr-code-demo-errorlevel":{React:g,useState:g.useState,Segmented:s.Z,QRCode:R.Z},"qr-code-demo-popover":{React:g,QRCode:R.Z,Popover:X.Z}}},212173:function(de,U,e){e.d(U,{Z:function(){return v}});var g=e(97857),i=e.n(g),R=e(9783),r=e.n(R),A=e(805574),p=e.n(A),s=e(667294),X=e(490137),I=e.n(X),w=e(693967),F=e.n(w),q=e(484059),ne=e(988872),Y=e(73287),k=e(824504),z=e(313579),_=e(301192),oe=e(900210),le=e(548073),j=e(286665),ee=e(986943),G=function(n){var P=n.componentCls,T=n.lineWidth,S=n.lineType,l=n.colorSplit;return r()(r()({},P,i()(i()({},(0,le.Wf)(n)),{},r()(r()(r()({display:"flex",justifyContent:"center",alignItems:"center",padding:n.paddingSM,backgroundColor:n.colorWhite,borderRadius:n.borderRadiusLG,border:"".concat((0,oe.unit)(T)," ").concat(S," ").concat(l),position:"relative",overflow:"hidden"},"& > ".concat(P,"-mask"),r()({position:"absolute",insetBlockStart:0,insetInlineStart:0,zIndex:10,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",color:n.colorText,lineHeight:n.lineHeight,background:n.QRCodeMaskBackgroundColor,textAlign:"center"},"& > ".concat(P,"-expired"),{color:n.QRCodeExpiredTextColor})),"> canvas",{alignSelf:"stretch",flex:"auto",minWidth:0}),"&-icon",{marginBlockEnd:n.marginXS,fontSize:n.controlHeight}))),"".concat(P,"-borderless"),{borderColor:"transparent"})},ie=function(){return{}},d=(0,j.I$)("QRCode",function(b){var n=(0,ee.TS)(b,{QRCodeExpiredTextColor:"rgba(0, 0, 0, 0.88)",QRCodeMaskBackgroundColor:"rgba(255, 255, 255, 0.96)"});return G(n)},ie),a=e(785893),y=function(n){var P=(0,_.ZP)(),T=p()(P,2),S=T[1],l=n.value,t=n.type,o=t===void 0?"canvas":t,m=n.icon,C=m===void 0?"":m,h=n.size,B=h===void 0?160:h,D=n.iconSize,u=D===void 0?40:D,$=n.color,Q=$===void 0?S.colorText:$,V=n.errorLevel,f=V===void 0?"M":V,H=n.status,K=H===void 0?"active":H,N=n.bordered,M=N===void 0?!0:N,J=n.onRefresh,W=n.style,E=n.className,O=n.rootClassName,c=n.prefixCls,Z=n.bgColor,x=Z===void 0?"transparent":Z,re=(0,s.useContext)(Y.E_),se=re.getPrefixCls,L=se("qrcode",c),ce=d(L),te=p()(ce,3),ue=te[0],me=te[1],fe=te[2],ge={src:C,x:void 0,y:void 0,height:u,width:u,excavate:!0},ve={value:l,size:B,level:f,bgColor:x,fgColor:Q,style:{width:void 0,height:void 0},imageSettings:C?ge:void 0},he=(0,k.Z)("QRCode"),Se=p()(he,1),ae=Se[0];if(!1)var xe;if(!l)return null;var Ce=F()(L,E,O,me,fe,r()({},"".concat(L,"-borderless"),!M));return ue((0,a.jsxs)("div",{className:Ce,style:i()(i()({},W),{},{width:B,height:B,backgroundColor:x}),children:[K!=="active"&&(0,a.jsxs)("div",{className:"".concat(L,"-mask"),children:[K==="loading"&&(0,a.jsx)(z.Z,{}),K==="expired"&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{className:"".concat(L,"-expired"),children:ae==null?void 0:ae.expired}),J&&(0,a.jsx)(ne.ZP,{type:"link",icon:(0,a.jsx)(I(),{}),onClick:J,children:ae==null?void 0:ae.refresh})]})]}),o==="canvas"?(0,a.jsx)(q.Qd,i()({},ve)):(0,a.jsx)(q.tv,i()({},ve))]}))},v=y},811834:function(de,U,e){e.d(U,{Z:function(){return S}});var g=e(9783),i=e.n(g),R=e(97857),r=e.n(R),A=e(805574),p=e.n(A),s=e(513769),X=e.n(s),I=e(952677),w=e.n(I),F=e(693967),q=e.n(F),ne=e(466940),Y=e(667294),k=e(73287),z=e(947170),_=e(548073),oe=e(286665),le=e(986943),j=e(900210);function ee(l,t){return i()({},"".concat(l,", ").concat(l,":hover, ").concat(l,":focus"),{color:t.colorTextDisabled,cursor:"not-allowed"})}function G(l){return{backgroundColor:l.itemSelectedBg,boxShadow:l.boxShadowTertiary}}var ie=r()({overflow:"hidden"},_.vS),d=function(t){var o=t.componentCls,m=t.calc(t.controlHeight).sub(t.calc(t.segmentedPadding).mul(2)).equal(),C=t.calc(t.controlHeightLG).sub(t.calc(t.segmentedPadding).mul(2)).equal(),h=t.calc(t.controlHeightSM).sub(t.calc(t.segmentedPadding).mul(2)).equal();return i()({},o,r()(r()(r()(r()({},(0,_.Wf)(t)),{},i()(i()(i()(i()(i()(i()(i()(i()({display:"inline-block",padding:t.segmentedPadding,color:t.itemColor,backgroundColor:t.segmentedBgColor,borderRadius:t.borderRadius,transition:"all ".concat(t.motionDurationMid," ").concat(t.motionEaseInOut)},"".concat(o,"-group"),{position:"relative",display:"flex",alignItems:"stretch",justifyItems:"flex-start",width:"100%"}),"&".concat(o,"-rtl"),{direction:"rtl"}),"&".concat(o,"-block"),{display:"flex"}),"&".concat(o,"-block ").concat(o,"-item"),{flex:1,minWidth:0}),"".concat(o,"-item"),i()(i()(i()(i()(i()({position:"relative",textAlign:"center",cursor:"pointer",transition:"color ".concat(t.motionDurationMid," ").concat(t.motionEaseInOut),borderRadius:t.borderRadiusSM,transform:"translateZ(0)","&-selected":r()(r()({},G(t)),{},{color:t.itemSelectedColor}),"&::after":{content:'""',position:"absolute",width:"100%",height:"100%",top:0,insetInlineStart:0,borderRadius:"inherit",transition:"background-color ".concat(t.motionDurationMid),pointerEvents:"none"}},"&:hover:not(".concat(o,"-item-selected):not(").concat(o,"-item-disabled)"),{color:t.itemHoverColor,"&::after":{backgroundColor:t.itemHoverBg}}),"&:active:not(".concat(o,"-item-selected):not(").concat(o,"-item-disabled)"),{color:t.itemHoverColor,"&::after":{backgroundColor:t.itemActiveBg}}),"&-label",r()({minHeight:m,lineHeight:(0,j.unit)(m),padding:"0 ".concat((0,j.unit)(t.segmentedPaddingHorizontal))},ie)),"&-icon + *",{marginInlineStart:t.calc(t.marginSM).div(2).equal()}),"&-input",{position:"absolute",insetBlockStart:0,insetInlineStart:0,width:0,height:0,opacity:0,pointerEvents:"none"})),"".concat(o,"-thumb"),r()(r()({},G(t)),{},i()({position:"absolute",insetBlockStart:0,insetInlineStart:0,width:0,height:"100%",padding:"".concat((0,j.unit)(t.paddingXXS)," 0"),borderRadius:t.borderRadiusSM},"& ~ ".concat(o,"-item:not(").concat(o,"-item-selected):not(").concat(o,"-item-disabled)::after"),{backgroundColor:"transparent"}))),"&".concat(o,"-lg"),i()(i()({borderRadius:t.borderRadiusLG},"".concat(o,"-item-label"),{minHeight:C,lineHeight:(0,j.unit)(C),padding:"0 ".concat((0,j.unit)(t.segmentedPaddingHorizontal)),fontSize:t.fontSizeLG}),"".concat(o,"-item, ").concat(o,"-thumb"),{borderRadius:t.borderRadius})),"&".concat(o,"-sm"),i()(i()({borderRadius:t.borderRadiusSM},"".concat(o,"-item-label"),{minHeight:h,lineHeight:(0,j.unit)(h),padding:"0 ".concat((0,j.unit)(t.segmentedPaddingHorizontalSM))}),"".concat(o,"-item, ").concat(o,"-thumb"),{borderRadius:t.borderRadiusXS})),ee("&-disabled ".concat(o,"-item"),t)),ee("".concat(o,"-item-disabled"),t)),{},i()({},"".concat(o,"-thumb-motion-appear-active"),{transition:"transform ".concat(t.motionDurationSlow," ").concat(t.motionEaseInOut,", width ").concat(t.motionDurationSlow," ").concat(t.motionEaseInOut),willChange:"transform, width"})))},a=function(t){var o=t.colorTextLabel,m=t.colorText,C=t.colorFillSecondary,h=t.colorBgElevated,B=t.colorFill;return{itemColor:o,itemHoverColor:m,itemHoverBg:C,itemSelectedBg:h,itemActiveBg:B,itemSelectedColor:m}},y=(0,oe.I$)("Segmented",function(l){var t=l.lineWidth,o=l.lineWidthBold,m=l.colorBgLayout,C=l.calc,h=(0,le.TS)(l,{segmentedPadding:o,segmentedBgColor:m,segmentedPaddingHorizontal:C(l.controlPaddingHorizontal).sub(t).equal(),segmentedPaddingHorizontalSM:C(l.controlPaddingHorizontalSM).sub(t).equal()});return[d(h)]},a),v=e(785893),b=["prefixCls","className","rootClassName","block","options","size","style"],n=["icon","label"];function P(l){return w()(l)==="object"&&!!(l!=null&&l.icon)}var T=Y.forwardRef(function(l,t){var o=l.prefixCls,m=l.className,C=l.rootClassName,h=l.block,B=l.options,D=B===void 0?[]:B,u=l.size,$=u===void 0?"middle":u,Q=l.style,V=X()(l,b),f=Y.useContext(k.E_),H=f.getPrefixCls,K=f.direction,N=f.segmented,M=H("segmented",o),J=y(M),W=p()(J,3),E=W[0],O=W[1],c=W[2],Z=(0,z.Z)($),x=Y.useMemo(function(){return D.map(function(L){if(P(L)){var ce=L.icon,te=L.label,ue=X()(L,n);return r()(r()({},ue),{},{label:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("span",{className:"".concat(M,"-item-icon"),children:ce}),te&&(0,v.jsx)("span",{children:te})]})})}return L})},[D,M]),re=q()(m,C,N==null?void 0:N.className,i()(i()(i()({},"".concat(M,"-block"),h),"".concat(M,"-sm"),Z==="small"),"".concat(M,"-lg"),Z==="large"),O,c),se=r()(r()({},N==null?void 0:N.style),Q);return E((0,v.jsx)(ne.Z,r()(r()({},V),{},{className:re,style:se,options:x,ref:t,prefixCls:M,direction:K})))}),S=T},466940:function(de,U,e){e.d(U,{Z:function(){return ie}});var g=e(487462),i=e(297685),R=e(700091),r=e(204942),A=e(601413),p=e(671002),s=e(667294),X=e(693967),I=e.n(X),w=e(821770),F=e(242550),q=e(898423),ne=e(82225),Y=e(908410),k=function(a){return a?{left:a.offsetLeft,right:a.parentElement.clientWidth-a.clientWidth-a.offsetLeft,width:a.clientWidth}:null},z=function(a){return a!==void 0?"".concat(a,"px"):void 0};function _(d){var a=d.prefixCls,y=d.containerRef,v=d.value,b=d.getValueIndex,n=d.motionName,P=d.onMotionStart,T=d.onMotionEnd,S=d.direction,l=s.useRef(null),t=s.useState(v),o=(0,i.Z)(t,2),m=o[0],C=o[1],h=function(O){var c,Z=b(O),x=(c=y.current)===null||c===void 0?void 0:c.querySelectorAll(".".concat(a,"-item"))[Z];return(x==null?void 0:x.offsetParent)&&x},B=s.useState(null),D=(0,i.Z)(B,2),u=D[0],$=D[1],Q=s.useState(null),V=(0,i.Z)(Q,2),f=V[0],H=V[1];(0,Y.Z)(function(){if(m!==v){var E=h(m),O=h(v),c=k(E),Z=k(O);C(v),$(c),H(Z),E&&O?P():T()}},[v]);var K=s.useMemo(function(){return z(S==="rtl"?-(u==null?void 0:u.right):u==null?void 0:u.left)},[S,u]),N=s.useMemo(function(){return z(S==="rtl"?-(f==null?void 0:f.right):f==null?void 0:f.left)},[S,f]),M=function(){return{transform:"translateX(var(--thumb-start-left))",width:"var(--thumb-start-width)"}},J=function(){return{transform:"translateX(var(--thumb-active-left))",width:"var(--thumb-active-width)"}},W=function(){$(null),H(null),T()};return!u||!f?null:s.createElement(ne.ZP,{visible:!0,motionName:n,motionAppear:!0,onAppearStart:M,onAppearActive:J,onVisibleChanged:W},function(E,O){var c=E.className,Z=E.style,x=(0,A.Z)((0,A.Z)({},Z),{},{"--thumb-start-left":K,"--thumb-start-width":z(u==null?void 0:u.width),"--thumb-active-left":N,"--thumb-active-width":z(f==null?void 0:f.width)}),re={ref:(0,F.sQ)(l,O),style:x,className:I()("".concat(a,"-thumb"),c)};return s.createElement("div",re)})}var oe=["prefixCls","direction","options","disabled","defaultValue","value","onChange","className","motionName"];function le(d){if(typeof d.title!="undefined")return d.title;if((0,p.Z)(d.label)!=="object"){var a;return(a=d.label)===null||a===void 0?void 0:a.toString()}}function j(d){return d.map(function(a){if((0,p.Z)(a)==="object"&&a!==null){var y=le(a);return(0,A.Z)((0,A.Z)({},a),{},{title:y})}return{label:a==null?void 0:a.toString(),title:a==null?void 0:a.toString(),value:a}})}var ee=function(a){var y=a.prefixCls,v=a.className,b=a.disabled,n=a.checked,P=a.label,T=a.title,S=a.value,l=a.onChange,t=function(m){b||l(m,S)};return s.createElement("label",{className:I()(v,(0,r.Z)({},"".concat(y,"-item-disabled"),b))},s.createElement("input",{className:"".concat(y,"-item-input"),type:"radio",disabled:b,checked:n,onChange:t}),s.createElement("div",{className:"".concat(y,"-item-label"),title:T},P))},G=s.forwardRef(function(d,a){var y,v,b=d.prefixCls,n=b===void 0?"rc-segmented":b,P=d.direction,T=d.options,S=d.disabled,l=d.defaultValue,t=d.value,o=d.onChange,m=d.className,C=m===void 0?"":m,h=d.motionName,B=h===void 0?"thumb-motion":h,D=(0,R.Z)(d,oe),u=s.useRef(null),$=s.useMemo(function(){return(0,F.sQ)(u,a)},[u,a]),Q=s.useMemo(function(){return j(T)},[T]),V=(0,w.default)((y=Q[0])===null||y===void 0?void 0:y.value,{value:t,defaultValue:l}),f=(0,i.Z)(V,2),H=f[0],K=f[1],N=s.useState(!1),M=(0,i.Z)(N,2),J=M[0],W=M[1],E=function(Z,x){S||(K(x),o==null||o(x))},O=(0,q.Z)(D,["children"]);return s.createElement("div",(0,g.Z)({},O,{className:I()(n,(v={},(0,r.Z)(v,"".concat(n,"-rtl"),P==="rtl"),(0,r.Z)(v,"".concat(n,"-disabled"),S),v),C),ref:$}),s.createElement("div",{className:"".concat(n,"-group")},s.createElement(_,{prefixCls:n,value:H,containerRef:u,motionName:"".concat(n,"-").concat(B),direction:P,getValueIndex:function(Z){return Q.findIndex(function(x){return x.value===Z})},onMotionStart:function(){W(!0)},onMotionEnd:function(){W(!1)}}),Q.map(function(c){return s.createElement(ee,(0,g.Z)({},c,{key:c.value,prefixCls:n,className:I()(c.className,"".concat(n,"-item"),(0,r.Z)({},"".concat(n,"-item-selected"),c.value===H&&!J)),checked:c.value===H,onChange:E,disabled:!!S||!!c.disabled}))})))});G.displayName="Segmented",G.defaultProps={options:[]};var ie=G}}]);
