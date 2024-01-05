"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[89805],{476167:function(D,m,t){Object.defineProperty(m,"__esModule",{value:!0}),m.default=void 0;const d=o(t(340920));function o(e){return e&&e.__esModule?e:{default:e}}const M=d;m.default=M,D.exports=M},298906:function(D,m,t){Object.defineProperty(m,"__esModule",{value:!0}),m.default=void 0;const d=o(t(239906));function o(e){return e&&e.__esModule?e:{default:e}}const M=d;m.default=M,D.exports=M},286210:function(D,m,t){t.r(m),t.d(m,{scopes:function(){return w}});var d=t(667294),o=t(614137),M=t(979331),e=t(75529),E=t(24500),u=t(639389),A=t.n(u),w={"components-float-button-demo-basic":{React:d,FloatButton:o.Z},"components-float-button-demo-type":{React:d,QuestionCircleOutlined:u.QuestionCircleOutlined,FloatButton:o.Z},"components-float-button-demo-shape":{React:d,CustomerServiceOutlined:u.CustomerServiceOutlined,FloatButton:o.Z},"components-float-button-demo-description":{React:d,FileTextOutlined:u.FileTextOutlined,FloatButton:o.Z},"components-float-button-demo-tooltip":{React:d,FloatButton:o.Z},"components-float-button-demo-group":{React:d,QuestionCircleOutlined:u.QuestionCircleOutlined,SyncOutlined:u.SyncOutlined,FloatButton:o.Z},"components-float-button-demo-group-menu":{CommentOutlined:u.CommentOutlined,CustomerServiceOutlined:u.CustomerServiceOutlined,React:d,FloatButton:o.Z},"components-float-button-demo-controlled":{CommentOutlined:u.CommentOutlined,CustomerServiceOutlined:u.CustomerServiceOutlined,React:d,useState:d.useState,FloatButton:o.Z,Switch:M.Z},"components-float-button-demo-back-top":{React:d,FloatButton:o.Z},"components-float-button-demo-badge":{QuestionCircleOutlined:u.QuestionCircleOutlined,React:d,FloatButton:o.Z},"components-float-button-demo-badge-debug":{React:d,useState:d.useState,ConfigProvider:e.ZP,FloatButton:o.Z,Slider:E.Z},"components-float-button-demo-render-panel":{CustomerServiceOutlined:u.CustomerServiceOutlined,QuestionCircleOutlined:u.QuestionCircleOutlined,SyncOutlined:u.SyncOutlined,React:d,FloatButton:o.Z}}},979331:function(D,m,t){t.d(m,{Z:function(){return _}});var d=t(97857),o=t.n(d),M=t(9783),e=t.n(M),E=t(805574),u=t.n(E),A=t(513769),w=t.n(A),p=t(667294),Q=t(100628),Z=t.n(Q),v=t(693967),V=t.n(v),x=t(33413),H=t(189265),O=t(73287),X=t(147315),j=t(947170),I=t(900210),W=t(510274),K=t(548073),$=t(286665),G=t(986943),B=function(n){var a=n.componentCls,h=n.trackHeightSM,r=n.trackPadding,f=n.trackMinWidthSM,g=n.innerMinMarginSM,S=n.innerMaxMarginSM,l=n.handleSizeSM,i=n.calc,s="".concat(a,"-inner"),C=(0,I.unit)(i(l).add(i(r).mul(2)).equal()),R=(0,I.unit)(i(S).mul(2).equal());return e()({},a,e()({},"&".concat(a,"-small"),e()(e()(e()(e()(e()({minWidth:f,height:h,lineHeight:(0,I.unit)(h)},"".concat(a,"-inner"),e()(e()({paddingInlineStart:S,paddingInlineEnd:g},"".concat(s,"-checked"),{marginInlineStart:"calc(-100% + ".concat(C," - ").concat(R,")"),marginInlineEnd:"calc(100% - ".concat(C," + ").concat(R,")")}),"".concat(s,"-unchecked"),{marginTop:i(h).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0})),"".concat(a,"-handle"),{width:l,height:l}),"".concat(a,"-loading-icon"),{top:i(i(l).sub(n.switchLoadingIconSize)).div(2).equal(),fontSize:n.switchLoadingIconSize}),"&".concat(a,"-checked"),e()(e()({},"".concat(a,"-inner"),e()(e()({paddingInlineStart:g,paddingInlineEnd:S},"".concat(s,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),"".concat(s,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(C," + ").concat(R,")"),marginInlineEnd:"calc(-100% + ".concat(C," - ").concat(R,")")})),"".concat(a,"-handle"),{insetInlineStart:"calc(100% - ".concat((0,I.unit)(i(l).add(r).equal()),")")})),"&:not(".concat(a,"-disabled):active"),e()(e()({},"&:not(".concat(a,"-checked) ").concat(s),e()({},"".concat(s,"-unchecked"),{marginInlineStart:i(n.marginXXS).div(2).equal(),marginInlineEnd:i(n.marginXXS).mul(-1).div(2).equal()})),"&".concat(a,"-checked ").concat(s),e()({},"".concat(s,"-checked"),{marginInlineStart:i(n.marginXXS).mul(-1).div(2).equal(),marginInlineEnd:i(n.marginXXS).div(2).equal()})))))},z=function(n){var a=n.componentCls,h=n.handleSize,r=n.calc;return e()({},a,e()(e()({},"".concat(a,"-loading-icon").concat(n.iconCls),{position:"relative",top:r(r(h).sub(n.fontSize)).div(2).equal(),color:n.switchLoadingIconColor,verticalAlign:"top"}),"&".concat(a,"-checked ").concat(a,"-loading-icon"),{color:n.switchColor}))},L=function(n){var a=n.componentCls,h=n.trackPadding,r=n.handleBg,f=n.handleShadow,g=n.handleSize,S=n.calc,l="".concat(a,"-handle");return e()({},a,e()(e()(e()({},l,{position:"absolute",top:h,insetInlineStart:h,width:g,height:g,transition:"all ".concat(n.switchDuration," ease-in-out"),"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:r,borderRadius:S(g).div(2).equal(),boxShadow:f,transition:"all ".concat(n.switchDuration," ease-in-out"),content:'""'}}),"&".concat(a,"-checked ").concat(l),{insetInlineStart:"calc(100% - ".concat((0,I.unit)(S(g).add(h).equal()),")")}),"&:not(".concat(a,"-disabled):active"),e()(e()({},"".concat(l,"::before"),{insetInlineEnd:n.switchHandleActiveInset,insetInlineStart:0}),"&".concat(a,"-checked ").concat(l,"::before"),{insetInlineEnd:0,insetInlineStart:n.switchHandleActiveInset})))},J=function(n){var a=n.componentCls,h=n.trackHeight,r=n.trackPadding,f=n.innerMinMargin,g=n.innerMaxMargin,S=n.handleSize,l=n.calc,i="".concat(a,"-inner"),s=(0,I.unit)(l(S).add(l(r).mul(2)).equal()),C=(0,I.unit)(l(g).mul(2).equal());return e()({},a,e()(e()(e()({},i,e()(e()(e()({display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:g,paddingInlineEnd:f,transition:"padding-inline-start ".concat(n.switchDuration," ease-in-out, padding-inline-end ").concat(n.switchDuration," ease-in-out")},"".concat(i,"-checked, ").concat(i,"-unchecked"),{display:"block",color:n.colorTextLightSolid,fontSize:n.fontSizeSM,transition:"margin-inline-start ".concat(n.switchDuration," ease-in-out, margin-inline-end ").concat(n.switchDuration," ease-in-out"),pointerEvents:"none"}),"".concat(i,"-checked"),{marginInlineStart:"calc(-100% + ".concat(s," - ").concat(C,")"),marginInlineEnd:"calc(100% - ".concat(s," + ").concat(C,")")}),"".concat(i,"-unchecked"),{marginTop:l(h).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0})),"&".concat(a,"-checked ").concat(i),e()(e()({paddingInlineStart:f,paddingInlineEnd:g},"".concat(i,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),"".concat(i,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(s," + ").concat(C,")"),marginInlineEnd:"calc(-100% + ".concat(s," - ").concat(C,")")})),"&:not(".concat(a,"-disabled):active"),e()(e()({},"&:not(".concat(a,"-checked) ").concat(i),e()({},"".concat(i,"-unchecked"),{marginInlineStart:l(r).mul(2).equal(),marginInlineEnd:l(r).mul(-1).mul(2).equal()})),"&".concat(a,"-checked ").concat(i),e()({},"".concat(i,"-checked"),{marginInlineStart:l(r).mul(-1).mul(2).equal(),marginInlineEnd:l(r).mul(2).equal()}))))},Y=function(n){var a=n.componentCls,h=n.trackHeight,r=n.trackMinWidth;return e()({},a,o()(o()(o()({},(0,K.Wf)(n)),{},e()({position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:r,height:h,lineHeight:"".concat((0,I.unit)(h)),verticalAlign:"middle",background:n.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:"all ".concat(n.motionDurationMid),userSelect:"none"},"&:hover:not(".concat(a,"-disabled)"),{background:n.colorTextTertiary}),(0,K.Qy)(n)),{},e()(e()(e()({},"&".concat(a,"-checked"),e()({background:n.switchColor},"&:hover:not(".concat(a,"-disabled)"),{background:n.colorPrimaryHover})),"&".concat(a,"-loading, &").concat(a,"-disabled"),{cursor:"not-allowed",opacity:n.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}}),"&".concat(a,"-rtl"),{direction:"rtl"})))},N=function(n){var a=n.fontSize,h=n.lineHeight,r=n.controlHeight,f=n.colorWhite,g=a*h,S=r/2,l=2,i=g-l*2,s=S-l*2;return{trackHeight:g,trackHeightSM:S,trackMinWidth:i*2+l*4,trackMinWidthSM:s*2+l*2,trackPadding:l,handleBg:f,handleSize:i,handleSizeSM:s,handleShadow:"0 2px 4px 0 ".concat(new W.C("#00230b").setAlpha(.2).toRgbString()),innerMinMargin:i/2,innerMaxMargin:i+l+l*2,innerMinMarginSM:s/2,innerMaxMarginSM:s+l+l*2}},b=(0,$.I$)("Switch",function(c){var n=(0,G.TS)(c,{switchDuration:c.motionDurationMid,switchColor:c.colorPrimary,switchDisabledOpacity:c.opacityLoading,switchLoadingIconSize:c.calc(c.fontSizeIcon).mul(.75).equal(),switchLoadingIconColor:"rgba(0, 0, 0, ".concat(c.opacityLoading,")"),switchHandleActiveInset:"-30%"});return[Y(n),J(n),L(n),z(n),B(n)]},N),k=t(260869),P=t(785893),q=["prefixCls","size","disabled","loading","className","rootClassName","style","checked","value","defaultChecked","defaultValue","onChange"],F=p.forwardRef(function(c,n){var a=c.prefixCls,h=c.size,r=c.disabled,f=c.loading,g=c.className,S=c.rootClassName,l=c.style,i=c.checked,s=c.value,C=c.defaultChecked,R=c.defaultValue,nn=c.onChange,on=w()(c,q),dn=(0,k.default)(!1,{value:i!=null?i:s,defaultValue:C!=null?C:R}),cn=u()(dn,2),rn=cn[0],sn=cn[1],en=p.useContext(O.E_),un=en.getPrefixCls,hn=en.direction,T=en.switch,gn=p.useContext(X.Z),mn=(r!=null?r:gn)||f,y=un("switch",a),vn=(0,P.jsx)("div",{className:"".concat(y,"-handle"),children:f&&(0,P.jsx)(Z(),{className:"".concat(y,"-loading-icon")})}),Sn=b(y),tn=u()(Sn,3),Cn=tn[0],fn=tn[1],Mn=tn[2],In=(0,j.Z)(h),En=V()(T==null?void 0:T.className,e()(e()(e()({},"".concat(y,"-small"),In==="small"),"".concat(y,"-loading"),f),"".concat(y,"-rtl"),hn==="rtl"),g,S,fn,Mn),On=o()(o()({},T==null?void 0:T.style),l),Pn=function(){for(var ln=arguments.length,an=new Array(ln),U=0;U<ln;U++)an[U]=arguments[U];sn(an[0]),nn==null||nn.apply(void 0,an)};return Cn((0,P.jsx)(H.Z,{component:"Switch",children:(0,P.jsx)(x.Z,o()(o()({},on),{},{checked:rn,onChange:Pn,prefixCls:y,className:En,style:On,disabled:mn,ref:n,loadingIcon:vn}))}))});F.__ANT_SWITCH=!0;var _=F},33413:function(D,m,t){var d=t(487462),o=t(204942),M=t(297685),e=t(700091),E=t(667294),u=t(693967),A=t.n(u),w=t(821770),p=t(915105),Q=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],Z=E.forwardRef(function(v,V){var x,H=v.prefixCls,O=H===void 0?"rc-switch":H,X=v.className,j=v.checked,I=v.defaultChecked,W=v.disabled,K=v.loadingIcon,$=v.checkedChildren,G=v.unCheckedChildren,B=v.onClick,z=v.onChange,L=v.onKeyDown,J=(0,e.Z)(v,Q),Y=(0,w.default)(!1,{value:j,defaultValue:I}),N=(0,M.Z)(Y,2),b=N[0],k=N[1];function P(c,n){var a=b;return W||(a=c,k(a),z==null||z(a,n)),a}function q(c){c.which===p.Z.LEFT?P(!1,c):c.which===p.Z.RIGHT&&P(!0,c),L==null||L(c)}function F(c){var n=P(!b,c);B==null||B(n,c)}var _=A()(O,X,(x={},(0,o.Z)(x,"".concat(O,"-checked"),b),(0,o.Z)(x,"".concat(O,"-disabled"),W),x));return E.createElement("button",(0,d.Z)({},J,{type:"button",role:"switch","aria-checked":b,disabled:W,className:_,ref:V,onKeyDown:q,onClick:F}),K,E.createElement("span",{className:"".concat(O,"-inner")},E.createElement("span",{className:"".concat(O,"-inner-checked")},$),E.createElement("span",{className:"".concat(O,"-inner-unchecked")},G)))});Z.displayName="Switch",m.Z=Z}}]);
