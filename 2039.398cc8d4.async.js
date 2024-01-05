"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[2039],{102039:function(tn,D,e){e.r(D),e.d(D,{scopes:function(){return x}});var r=e(667294),d=e(24500),y=e(979331),a=e(883458),I=e(469922),O=e(709894),L=e(945016),Z=e(75529),C=e(639389),H=e.n(C),x={"slider-demo-basic":{React:r,useState:r.useState,Slider:d.Z,Switch:y.Z},"slider-demo-input-number":{React:r,useState:r.useState,Col:a.Z,InputNumber:I.Z,Row:O.Z,Slider:d.Z,Space:L.Z},"slider-demo-icon-slider":{React:r,useState:r.useState,FrownOutlined:C.FrownOutlined,SmileOutlined:C.SmileOutlined,Slider:d.Z},"slider-demo-tip-formatter":{React:r,Slider:d.Z},"slider-demo-event":{React:r,Slider:d.Z},"slider-demo-mark":{React:r,Slider:d.Z},"slider-demo-vertical":{React:r,Slider:d.Z},"slider-demo-show-tooltip":{React:r,Slider:d.Z},"slider-demo-reverse":{React:r,useState:r.useState,Slider:d.Z,Switch:y.Z},"slider-demo-draggabletrack":{React:r,Slider:d.Z},"slider-demo-multiple":{React:r,Slider:d.Z},"slider-demo-component-token":{React:r,ConfigProvider:Z.ZP,Slider:d.Z}}},979331:function(tn,D,e){e.d(D,{Z:function(){return q}});var r=e(97857),d=e.n(r),y=e(9783),a=e.n(y),I=e(805574),O=e.n(I),L=e(513769),Z=e.n(L),C=e(667294),H=e(100628),x=e.n(H),g=e(693967),X=e.n(g),R=e(33413),K=e(189265),E=e(73287),V=e(147315),F=e(947170),M=e(900210),p=e(510274),B=e(548073),$=e(286665),Q=e(986943),z=function(n){var t=n.componentCls,h=n.trackHeightSM,o=n.trackPadding,v=n.trackMinWidthSM,u=n.innerMinMarginSM,S=n.innerMaxMarginSM,l=n.handleSizeSM,i=n.calc,s="".concat(t,"-inner"),m=(0,M.unit)(i(l).add(i(o).mul(2)).equal()),w=(0,M.unit)(i(S).mul(2).equal());return a()({},t,a()({},"&".concat(t,"-small"),a()(a()(a()(a()(a()({minWidth:v,height:h,lineHeight:(0,M.unit)(h)},"".concat(t,"-inner"),a()(a()({paddingInlineStart:S,paddingInlineEnd:u},"".concat(s,"-checked"),{marginInlineStart:"calc(-100% + ".concat(m," - ").concat(w,")"),marginInlineEnd:"calc(100% - ".concat(m," + ").concat(w,")")}),"".concat(s,"-unchecked"),{marginTop:i(h).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0})),"".concat(t,"-handle"),{width:l,height:l}),"".concat(t,"-loading-icon"),{top:i(i(l).sub(n.switchLoadingIconSize)).div(2).equal(),fontSize:n.switchLoadingIconSize}),"&".concat(t,"-checked"),a()(a()({},"".concat(t,"-inner"),a()(a()({paddingInlineStart:u,paddingInlineEnd:S},"".concat(s,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),"".concat(s,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(m," + ").concat(w,")"),marginInlineEnd:"calc(-100% + ".concat(m," - ").concat(w,")")})),"".concat(t,"-handle"),{insetInlineStart:"calc(100% - ".concat((0,M.unit)(i(l).add(o).equal()),")")})),"&:not(".concat(t,"-disabled):active"),a()(a()({},"&:not(".concat(t,"-checked) ").concat(s),a()({},"".concat(s,"-unchecked"),{marginInlineStart:i(n.marginXXS).div(2).equal(),marginInlineEnd:i(n.marginXXS).mul(-1).div(2).equal()})),"&".concat(t,"-checked ").concat(s),a()({},"".concat(s,"-checked"),{marginInlineStart:i(n.marginXXS).mul(-1).div(2).equal(),marginInlineEnd:i(n.marginXXS).div(2).equal()})))))},A=function(n){var t=n.componentCls,h=n.handleSize,o=n.calc;return a()({},t,a()(a()({},"".concat(t,"-loading-icon").concat(n.iconCls),{position:"relative",top:o(o(h).sub(n.fontSize)).div(2).equal(),color:n.switchLoadingIconColor,verticalAlign:"top"}),"&".concat(t,"-checked ").concat(t,"-loading-icon"),{color:n.switchColor}))},b=function(n){var t=n.componentCls,h=n.trackPadding,o=n.handleBg,v=n.handleShadow,u=n.handleSize,S=n.calc,l="".concat(t,"-handle");return a()({},t,a()(a()(a()({},l,{position:"absolute",top:h,insetInlineStart:h,width:u,height:u,transition:"all ".concat(n.switchDuration," ease-in-out"),"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:o,borderRadius:S(u).div(2).equal(),boxShadow:v,transition:"all ".concat(n.switchDuration," ease-in-out"),content:'""'}}),"&".concat(t,"-checked ").concat(l),{insetInlineStart:"calc(100% - ".concat((0,M.unit)(S(u).add(h).equal()),")")}),"&:not(".concat(t,"-disabled):active"),a()(a()({},"".concat(l,"::before"),{insetInlineEnd:n.switchHandleActiveInset,insetInlineStart:0}),"&".concat(t,"-checked ").concat(l,"::before"),{insetInlineEnd:0,insetInlineStart:n.switchHandleActiveInset})))},G=function(n){var t=n.componentCls,h=n.trackHeight,o=n.trackPadding,v=n.innerMinMargin,u=n.innerMaxMargin,S=n.handleSize,l=n.calc,i="".concat(t,"-inner"),s=(0,M.unit)(l(S).add(l(o).mul(2)).equal()),m=(0,M.unit)(l(u).mul(2).equal());return a()({},t,a()(a()(a()({},i,a()(a()(a()({display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:u,paddingInlineEnd:v,transition:"padding-inline-start ".concat(n.switchDuration," ease-in-out, padding-inline-end ").concat(n.switchDuration," ease-in-out")},"".concat(i,"-checked, ").concat(i,"-unchecked"),{display:"block",color:n.colorTextLightSolid,fontSize:n.fontSizeSM,transition:"margin-inline-start ".concat(n.switchDuration," ease-in-out, margin-inline-end ").concat(n.switchDuration," ease-in-out"),pointerEvents:"none"}),"".concat(i,"-checked"),{marginInlineStart:"calc(-100% + ".concat(s," - ").concat(m,")"),marginInlineEnd:"calc(100% - ".concat(s," + ").concat(m,")")}),"".concat(i,"-unchecked"),{marginTop:l(h).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0})),"&".concat(t,"-checked ").concat(i),a()(a()({paddingInlineStart:v,paddingInlineEnd:u},"".concat(i,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),"".concat(i,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(s," + ").concat(m,")"),marginInlineEnd:"calc(-100% + ".concat(s," - ").concat(m,")")})),"&:not(".concat(t,"-disabled):active"),a()(a()({},"&:not(".concat(t,"-checked) ").concat(i),a()({},"".concat(i,"-unchecked"),{marginInlineStart:l(o).mul(2).equal(),marginInlineEnd:l(o).mul(-1).mul(2).equal()})),"&".concat(t,"-checked ").concat(i),a()({},"".concat(i,"-checked"),{marginInlineStart:l(o).mul(-1).mul(2).equal(),marginInlineEnd:l(o).mul(2).equal()}))))},J=function(n){var t=n.componentCls,h=n.trackHeight,o=n.trackMinWidth;return a()({},t,d()(d()(d()({},(0,B.Wf)(n)),{},a()({position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:o,height:h,lineHeight:"".concat((0,M.unit)(h)),verticalAlign:"middle",background:n.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:"all ".concat(n.motionDurationMid),userSelect:"none"},"&:hover:not(".concat(t,"-disabled)"),{background:n.colorTextTertiary}),(0,B.Qy)(n)),{},a()(a()(a()({},"&".concat(t,"-checked"),a()({background:n.switchColor},"&:hover:not(".concat(t,"-disabled)"),{background:n.colorPrimaryHover})),"&".concat(t,"-loading, &").concat(t,"-disabled"),{cursor:"not-allowed",opacity:n.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}}),"&".concat(t,"-rtl"),{direction:"rtl"})))},N=function(n){var t=n.fontSize,h=n.lineHeight,o=n.controlHeight,v=n.colorWhite,u=t*h,S=o/2,l=2,i=u-l*2,s=S-l*2;return{trackHeight:u,trackHeightSM:S,trackMinWidth:i*2+l*4,trackMinWidthSM:s*2+l*2,trackPadding:l,handleBg:v,handleSize:i,handleSizeSM:s,handleShadow:"0 2px 4px 0 ".concat(new p.C("#00230b").setAlpha(.2).toRgbString()),innerMinMargin:i/2,innerMaxMargin:i+l+l*2,innerMinMarginSM:s/2,innerMaxMarginSM:s+l+l*2}},T=(0,$.I$)("Switch",function(c){var n=(0,Q.TS)(c,{switchDuration:c.motionDurationMid,switchColor:c.colorPrimary,switchDisabledOpacity:c.opacityLoading,switchLoadingIconSize:c.calc(c.fontSizeIcon).mul(.75).equal(),switchLoadingIconColor:"rgba(0, 0, 0, ".concat(c.opacityLoading,")"),switchHandleActiveInset:"-30%"});return[J(n),G(n),b(n),A(n),z(n)]},N),Y=e(260869),f=e(785893),k=["prefixCls","size","disabled","loading","className","rootClassName","style","checked","value","defaultChecked","defaultValue","onChange"],U=C.forwardRef(function(c,n){var t=c.prefixCls,h=c.size,o=c.disabled,v=c.loading,u=c.className,S=c.rootClassName,l=c.style,i=c.checked,s=c.value,m=c.defaultChecked,w=c.defaultValue,_=c.onChange,dn=Z()(c,k),on=(0,Y.default)(!1,{value:i!=null?i:s,defaultValue:m!=null?m:w}),cn=O()(on,2),rn=cn[0],sn=cn[1],nn=C.useContext(E.E_),hn=nn.getPrefixCls,un=nn.direction,W=nn.switch,gn=C.useContext(V.Z),Sn=(o!=null?o:gn)||v,P=hn("switch",t),mn=(0,f.jsx)("div",{className:"".concat(P,"-handle"),children:v&&(0,f.jsx)(x(),{className:"".concat(P,"-loading-icon")})}),vn=T(P),an=O()(vn,3),Cn=an[0],Mn=an[1],In=an[2],En=(0,F.Z)(h),fn=X()(W==null?void 0:W.className,a()(a()(a()({},"".concat(P,"-small"),En==="small"),"".concat(P,"-loading"),v),"".concat(P,"-rtl"),un==="rtl"),u,S,Mn,In),Pn=d()(d()({},W==null?void 0:W.style),l),Dn=function(){for(var ln=arguments.length,en=new Array(ln),j=0;j<ln;j++)en[j]=arguments[j];sn(en[0]),_==null||_.apply(void 0,en)};return Cn((0,f.jsx)(K.Z,{component:"Switch",children:(0,f.jsx)(R.Z,d()(d()({},dn),{},{checked:rn,onChange:Dn,prefixCls:P,className:fn,style:Pn,disabled:Sn,ref:n,loadingIcon:mn}))}))});U.__ANT_SWITCH=!0;var q=U},33413:function(tn,D,e){var r=e(487462),d=e(204942),y=e(297685),a=e(700091),I=e(667294),O=e(693967),L=e.n(O),Z=e(821770),C=e(915105),H=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],x=I.forwardRef(function(g,X){var R,K=g.prefixCls,E=K===void 0?"rc-switch":K,V=g.className,F=g.checked,M=g.defaultChecked,p=g.disabled,B=g.loadingIcon,$=g.checkedChildren,Q=g.unCheckedChildren,z=g.onClick,A=g.onChange,b=g.onKeyDown,G=(0,a.Z)(g,H),J=(0,Z.default)(!1,{value:F,defaultValue:M}),N=(0,y.Z)(J,2),T=N[0],Y=N[1];function f(c,n){var t=T;return p||(t=c,Y(t),A==null||A(t,n)),t}function k(c){c.which===C.Z.LEFT?f(!1,c):c.which===C.Z.RIGHT&&f(!0,c),b==null||b(c)}function U(c){var n=f(!T,c);z==null||z(n,c)}var q=L()(E,V,(R={},(0,d.Z)(R,"".concat(E,"-checked"),T),(0,d.Z)(R,"".concat(E,"-disabled"),p),R));return I.createElement("button",(0,r.Z)({},G,{type:"button",role:"switch","aria-checked":T,disabled:p,className:q,ref:X,onKeyDown:k,onClick:U}),B,I.createElement("span",{className:"".concat(E,"-inner")},I.createElement("span",{className:"".concat(E,"-inner-checked")},$),I.createElement("span",{className:"".concat(E,"-inner-unchecked")},Q)))});x.displayName="Switch",D.Z=x}}]);
